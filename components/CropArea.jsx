import PropTypes from 'proptypes';
import React, { useState } from 'react';

import CropAreaVisuals from './CropAreaVisuals';

/*
 This component will be in charge of the following:
 - storing handle positions
 - enforcing minimum width and height and position for crop area
 - handling react-draggable events
 - rendering the visuals
 */
const CropArea = ({ initialTopLeft, initialBottomRight, minHeight, minWidth }) => {
  const [top, setTop] = useState(initialTopLeft[1]);
  const [left, setLeft] = useState(initialTopLeft[0]);
  const [bottom, setBottom] = useState(initialBottomRight[1]);
  const [right, setRight] = useState(initialBottomRight[0]);

  const areaEventHandlers = {
    onStart: () => {},
    onDrag: () => {},
    onStop: (e, data) => {
      const { x, y } = data;
      setLeft(x);
      setTop(y);
    },
  };

  const handleCallbacks = { setTop, setLeft, setBottom, setRight };

  const attrs = {
    left,
    top,
    bottom,
    right,
    areaEventHandlers,
    handleCallbacks,
  };
  return <CropAreaVisuals {...attrs} />;
};

CropArea.propTypes = {
  initialBottomRight: PropTypes.arrayOf(PropTypes.number).isRequired,
  initialTopLeft: PropTypes.arrayOf(PropTypes.number).isRequired,
  minHeight: PropTypes.number.isRequired,
  minWidth: PropTypes.number.isRequired,
};
export default CropArea;
