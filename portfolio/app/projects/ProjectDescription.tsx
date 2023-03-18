import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { projects } from "../../information/projects";
import SlideShow from "./Slideshow";
import { ImageProps } from "next/image";
function ProjectDescription({
  selectedID,
  setSelectedID,
}: {
  selectedID: string;
  setSelectedID: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const project = projects.find((item) => item.title === selectedID);
  return (
    <motion.div
      onClick={(event) => {
        event.stopPropagation();
      }}
      layout={true}
      layoutId={selectedID}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        stiffness: 100,
      }}
      className="w-10/12 h-[30rem] md:h-[40rem] bg-zinc-800 rounded-lg  shadow-2xl shadow-zinc-800 overflow-y-scroll overflow-x-hidden"
    >
      <div className="h-[5rem]  flex items-center justify-end ">
        <div className="px-8" onClick={() => setSelectedID(null)}>
          <XCircleIcon className="w-10 h-10 text-zinc-400 hover:text-red-400 hover:scale-[1.1   ] transition-all duration-100" />
        </div>
      </div>
      <div className="h-fit ">
        <SlideShow images={project?.images as ImageProps[]} />
      </div>
      <div className="text-zinc-200 p-8 text-xs md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ad sequi
        esse consequuntur fugiat corporis facilis soluta cupiditate similique.
        Nulla alias labore, autem quaerat repellendus quasi dolorum voluptates
        unde facere deserunt, temporibus nihil omnis vitae fugit, cum porro
        cupiditate esse. Officia quisquam tempore, ex perferendis illum aliquam
        iure rerum ratione inventore deserunt? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Neque itaque eum deleniti doloremque ex
        ullam pariatur? Eum eos officiis atque eligendi placeat id odit velit
        beatae officia amet at, inventore, nemo alias a similique maiores? Nobis
        consequatur perspiciatis natus repellendus quam eos doloremque
        voluptatibus eius aperiam quas. Nostrum optio, aliquam voluptates at
        repudiandae quas nihil nesciunt repellat quae? Animi non quaerat
        expedita doloremque quia reiciendis laboriosam beatae ratione, laborum
        maiores in provident minima, voluptatibus dolorum aut. Consectetur
        nostrum officiis neque, delectus est sunt mollitia sint id provident,
        quis enim itaque quam ea dolore aut vero nesciunt necessitatibus
        repellendus sequi atque ipsum tenetur? Porro accusantium deleniti
        dolorem tempore voluptates deserunt sint error, iste ex iusto
        perspiciatis earum laborum impedit dolorum voluptatum nam temporibus
        obcaecati praesentium dolor provident quod doloremque?
      </div>
    </motion.div>
  );
}

export default ProjectDescription;
