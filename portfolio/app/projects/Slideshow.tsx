import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { ImageProps } from "next/image";
import Image from "next/image";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/outline";
/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const SlideShow = ({ images }: { images: ImageProps[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="w-full relative grid grid-cols-10 justify-center items-center">
      <div className="flex items-center justify-center">
        <ArrowLeftCircleIcon
          className="w-10 h-10 md:w-14 md:h-14 text-zinc-200 hover:text-zinc-400 transition-all duration-100"
          onClick={() => {
            paginate(-1);
          }}
        />
      </div>
      <div className=" col-start-3 col-span-6 flex justify-center items-center">
        <Image
          {...images[imageIndex]}
          className="pointer-events-none max-h-[25rem] max-w-[50rem] object-cover rounded-lg"
        />
      </div>
      <div className="col-start-10 flex items-center justify-center">
        <ArrowRightCircleIcon
          className="w-10 h-10 md:w-14 md:h-14 text-zinc-200 hover:text-zinc-400 transition-all duration-100"
          onClick={() => {
            paginate(1);
          }}
        />
      </div>
    </div>
  );
};

export default SlideShow;
