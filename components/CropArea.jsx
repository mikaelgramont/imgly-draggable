/*
 This component will be in charge of the following:
 - storing handle positions
 - enforcing minimum width and height for crop area
 - handling react-draggable events
 - enforcing rules on react-draggable elements
 - rendering handles and proportion lines

 It will receive the following info (props):
 - minimum width and height for crop area
 - initial crop corner positions
 */

import { useState } from 'react';
import CropAreaVisuals from "./CropAreaVisuals";

const CropArea = ({ initialTopLeft, initialTopRight, initialBottomRight, initialBottomLeft, minHeight, minWidth }) => {
  const [topLeft, setTopLeft] = useState(initialTopLeft);
  const [topRight, setTopRight] = useState(initialTopRight);
  const [bottomRight, setTopBottomRight] = useState(initialBottomRight);
  const [bottomLeft, setBottomLeft] = useState(initialBottomLeft);

  const attrs = {
    topLeft,
    bottomRight,
  }
  return(
    <CropAreaVisuals {...attrs} />
  );
};
export default CropArea;