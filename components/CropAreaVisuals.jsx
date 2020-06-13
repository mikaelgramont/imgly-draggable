import Draggable, { DraggableCore } from 'react-draggable';

const CropAreaVisuals = ({ top, bottom, right, left, areaEventHandlers, handleCallbacks }) => {
  const style = {
    top,
    left,
    width: `${right}px`,
    height: `${bottom}px`,
  };
  const position = { x: left, y: top };

  const { setTop, setLeft, setBottom, setRight } = handleCallbacks;

  const updateTopLeft = (e, data) => {
    const { x, y, deltaX, deltaY } = data;
    setTop(y);
    setLeft(x);

    setBottom(bottom - deltaY);
    setRight(right - deltaX);
  };
  const updateTopRight = (e, { x, y }) => {
    setTop(y);
    setRight(x);
  };
  const updateBottomRight = (e, { x, y }) => {
    setBottom(y);
    setRight(x);
  };

  const updateBottomLeft = (e, { x, y }) => {
    setBottom(y);
    setLeft(x);
  };

  return (
    <>
      <Draggable bounds="parent" position={position} {...areaEventHandlers}>
        <div className="outside" style={style}>
          <div className="ratio-line vertical vertical-1" />
          <div className="ratio-line vertical vertical-2" />
          <div className="ratio-line horizontal horizontal-1" />
          <div className="ratio-line horizontal horizontal-2" />

          {/*<div className="handle handle-top-right" />*/}
          {/*<div className="handle handle-bottom-left" />*/}
          <DraggableCore bounds="parent" onDrag={updateTopLeft}>
            <div className="handle handle-top-left" style={{ left, top }} />
          </DraggableCore>

          <DraggableCore bounds="parent" onDrag={updateBottomRight}>
            <div className="handle handle-bottom-right" style={{ left: right, top: bottom }} />
          </DraggableCore>
        </div>
      </Draggable>

      <style jsx>{`
        .outside {
          position: absolute;
          border: 2px solid #fff;
          box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
        }
        .outside:hover {
          cursor: pointer;
        }
        .ratio-line {
          position: absolute;
          background: #fff;
        }
        .vertical {
          top: 0;
          bottom: 0;
          width: 1px;
        }
        .vertical-1 {
          left: calc(33.33% - 1px);
        }
        .vertical-2 {
          left: calc(66.67% - 1px);
        }
        .horizontal {
          left: 0;
          right: 0;
          height: 1px;
        }
        .horizontal-1 {
          top: calc(33.33% - 1px);
        }
        .horizontal-2 {
          top: calc(66.67% - 1px);
        }
        .handle {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 4px solid #fff;
        }
        .handle-top-left {
          border-right: none;
          border-bottom: none;
        }
        .handle-top-right {
          margin-left: -20px;
          border-left: none;
          border-bottom: none;
        }
        .handle-bottom-left {
          margin-top: -20px;
          border-right: none;
          border-top: none;
        }
        .handle-bottom-right {
          margin-left: -20px;
          margin-top: -20px;
          border-left: none;
          border-top: none;
        }
      `}</style>
    </>
  );
};
export default CropAreaVisuals;
