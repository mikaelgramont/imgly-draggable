import Draggable from "react-draggable";

const CropAreaVisuals = ({ x, y, width, height, areaEventHandlers }) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
  };
  const position = { x, y };

  return(
    <>

    <Draggable bounds="parent" position={position} {...areaEventHandlers}>
      <div className="outside" style={style}>
        <div className="ratio-line vertical vertical-1" />
        <div className="ratio-line vertical vertical-2" />
        <div className="ratio-line horizontal horizontal-1" />
        <div className="ratio-line horizontal horizontal-2" />
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
        `}</style>

  </>
)};
export default CropAreaVisuals;