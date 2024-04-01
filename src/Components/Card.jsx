import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const Card = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    controls.start({ rotateY: isFlipped ? 0 : 180 });
  };

  return (
    <div
      className="relative w-64 h-40 bg-blue-500 rounded-lg shadow-md cursor-pointer"
      onClick={handleFlip}
    >
      <AnimatePresence initial={false}>
        {isFlipped ? (
          <motion.div
            key="back"
            className="absolute inset-0 bg-green-500 rounded-lg shadow-md"
            style={{ backfaceVisibility: "hidden" }}
            animate={controls}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            exit={{ rotateY: 0 }}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <h1 className="text-white text-xl">{backContent}</h1>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="front"
            className="absolute inset-0 bg-blue-500 rounded-lg shadow-md"
            style={{ backfaceVisibility: "hidden" }}
            animate={controls}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            exit={{ rotateY: 180 }}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <h1 className="text-white text-xl">{frontContent}</h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
