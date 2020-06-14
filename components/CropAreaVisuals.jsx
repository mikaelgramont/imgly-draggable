import Draggable, { DraggableCore } from 'react-draggable';
import PropTypes from 'proptypes';

const CropAreaVisuals = ({ top, bottom, right, left, areaEventHandlers, handleCallbacks }) => {
  const style = {
    width: `${right}px`,
    height: `${bottom}px`,
  };
  const position = { x: left, y: top };
  const { setTop, setLeft, setBottom, setRight } = handleCallbacks;

  const topLeftStop = (e, { x, y }) => {
    setTop(y);
    setLeft(x);
  };
  const topLeftDrag = (e, { x, y, deltaX, deltaY }) => {
    setTop(top + deltaY);
    setLeft(left + deltaX);
  };

  return (
    <>
      <Draggable position={position} bounds="parent" {...areaEventHandlers}>
        <div className="outside" style={style}>
          <div className="ratio-line vertical vertical-1" />
          <div className="ratio-line vertical vertical-2" />
          <div className="ratio-line horizontal horizontal-1" />
          <div className="ratio-line horizontal horizontal-2" />

          {/*<div className="handle handle-top-right" />*/}
          {/*<div className="handle handle-bottom-left" />*/}
          <div className="handle handle-bottom-right" style={{ right: 0, bottom: 0 }} />
        </div>
      </Draggable>
      <DraggableCore onDrag={topLeftDrag} onStop={topLeftStop}>
        <div className="handle handle-top-left" style={{ top, left }} />
      </DraggableCore>

      <style jsx>{`
        .outside {
          position: absolute;
          border: 2px solid #fff;
          box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
          box-sizing: content-box;
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

CropAreaVisuals.propTypes = {
  areaEventHandlers: PropTypes.shape({
    onDrag: PropTypes.func.isRequired,
    onStart: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
  }).isRequired,
  bottom: PropTypes.number.isRequired,
  handleCallbacks: PropTypes.shape({
    setBottom: PropTypes.func.isRequired,
    setLeft: PropTypes.func.isRequired,
    setRight: PropTypes.func.isRequired,
    setTop: PropTypes.func.isRequired,
  }).isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
};

export default CropAreaVisuals;
