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

const CropArea = ({ initialTopLeft, initialTopRight, initialBottomRight, initialBottomLeft, minHeight, minWidth }) => {
  const topLeft = useState(initialTopLeft);
  const topRight = useState(initialTopRight);
  const bottomRight = useState(initialBottomRight);
  const bottomLeft = useState(initialBottomLeft);

  return(
    <div>Crop area</div>
  );
};
export default CropArea;