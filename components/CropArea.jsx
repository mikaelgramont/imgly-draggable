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
/*
type DraggableEventHandler = (e: Event, data: DraggableData) => void | false;
type DraggableData = {
  node: HTMLElement,
  // lastX + deltaX === x
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number
};
 */
import { useState } from 'react';
import CropAreaVisuals from "./CropAreaVisuals";

const CropArea = ({ initialTopLeft, initialBottomRight, minHeight, minWidth }) => {
  const [top, setTop] = useState(initialTopLeft[1]);
  const [left, setLeft] = useState(initialTopLeft[0]);
  const [bottom, setBottom] = useState(initialBottomRight[1]);
  const [right, setRight] = useState(initialBottomRight[0]);

  const areaEventHandlers = {
    onStop: (e, {x, y, deltaX, deltaY }) => {
      setLeft(x);
      setRight(right + deltaX);
      setTop(y);
      setBottom(bottom + deltaY);
    },
  };

  const handleCallbacks = {
    setTop,
    setLeft,
    setBottom,
    setRight,
  }

  const attrs = {
    left, top, bottom, right,
    areaEventHandlers,
    handleCallbacks,
  }
  return(
    <CropAreaVisuals {...attrs} />
  );
};
export default CropArea;