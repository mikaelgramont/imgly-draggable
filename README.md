## Draggable demo

This is a quick Next.js app that will demonstrate dragging a crop area over an image.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


## Notes

### Analysis
- Draggable handles the dragging outside the React lifecyle by driving an element's CSS translate. That's fine for
dragging the area itself.
- For dragging a corner, it's tricky because you want to update the dimensions of the area which is drawn within React.
- So you end up with these two processes running in parallel and it's hard to synchronize them
- One way out is to use DraggableCore.
- DraggableCore doesn't use translate, which means you need to use the onDrag and onStop events to keep track of
where things are. It makes it possible to use only the React lifecycle, but that also means a less performant UI.
- DraggableCore also does not take into consideration the distance between a click and the origin of a dragged element,
that's up to us. This means that there's an offset calculation that needs to happen if you use DraggableCore. This must
be handled with an onStart callback.

### Going forward
During the interview, we got the area drag and drop to work, and the handles almost worked: dragging them affected the
dimensions, but not correctly.

After thinking about this some more, I think that approach was doomed because it mixed absolute positioning and
the DOM hierarchy, and Draggable being a bit of a black box (opaque box is a better term, maybe?), it made things
hard to reason with.

I played around some more, and as I got more comfortable with Draggable, I think this is the way I would go.
I would start the whole drag & drop thing over and try this approach:
- start with the corners first, do not worry about the area yet.
- use [x1,y1] and [x2,y2] as our stored state. [x1,y1] for top-left and [x2,y2] for bottom-right.
- use DraggableCore only, so as to do away with translate().
- for a given corner, use onDrag events but not onStop. Inside the onDrag callback, update x and y coordinates via
  deltaX and deltaY.
- we would need to use onStart as well, to store the offset between object origin and click origin, otherwise there
  will be some kind of jump when drop happens. Maybe look into positionOffset in the API as well.

Other things I would have done:
- we need to address the problem of the image being elastic, thus causing its dimensions to change depending on the
viewport. In contrast, crop area coordinates are relative to the viewport. This would be necessary if we actually
finished this and performed the cropping.