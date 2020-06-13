/*
 This component will be in charge of the following:
 - rendering the image itself
 - instantiating a CropArea component, and passing it minimum width and height

 It will receive the following info (props):
 - image url
 */

import CropArea from '../components/CropArea';

const MIN_SIZE = 64;

/*
 Absolute coordinates for the top-left and bottom-right corners.
 Right now, these are expressed in viewport pixels. Since the image is elastic, its dimensions change with the viewport.
 TODO: express these relatively to the image itself and then translate them into viewport coordinates.
 */
const INITIAL_TOP_LEFT = [0, 0];
const INITIAL_BOTTOM_RIGHT = [800, 500];

const Croppable = ({ url }) => (
  <div className="wrapper">
    <img src={url} alt="Image being cropped" className="image" />

    <div className="crop">
      <CropArea
        minWidth={MIN_SIZE}
        minHeight={MIN_SIZE}
        initialTopLeft={INITIAL_TOP_LEFT}
        initialBottomRight={INITIAL_BOTTOM_RIGHT}
      />
    </div>

    <style jsx>{`
      .wrapper {
        position: relative;
      }
      .image {
        display: block;
        width: 100%;
      }

      .crop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
);
export default Croppable;
