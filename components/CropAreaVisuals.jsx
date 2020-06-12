

const CropAreaVisuals = ({ topLeft: [left, top], bottomRight: [ right, bottom ] }) => {
  const position = {
    left: `${left}px`,
    top: `${top}px`,
    right: `${right}px`,
    bottom: `${bottom}px`,
  };
  return(
    <>
    <div className="outside" style={position}>
      {/*<div className="vertical-1" />*/}
      {/*<div className="vertical-2" />*/}
      {/*<div className="horizontal-1" />*/}
      {/*<div className="horizontal-2" />*/}
    </div>

      <style jsx>{`
        .outside {
          position: absolute;
          border: 2px solid #fff;
          box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
        }
        `}</style>
    </>
  )};
export default CropAreaVisuals;