import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

function FAQ() {
  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="font-Poppins">
      <div className="h-screen w-full bg-green-600">
        <div className="p-32 text-white font-Poppins">
          <div>
            <h1 className="text-4xl text-white font-Poppins ">
              Frequently Asked Questions (FAQ)
            </h1>
          </div>
          <div className="pt-4">
            <Accordion
              open={open === 1}
              animate={CUSTOM_ANIMATION}
              className="text-white font-Poppins "
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-white font-Poppins hover:text-none flex flex-row justify-start"
              >
                <motion.span
                  animate={{ rotate: open === 1 ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowForward />
                </motion.span>
                <span className="pl-4">What is Material Tailwind?</span>
              </AccordionHeader>
              <AccordionBody className="text-white font-Poppins hover:text-none">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              animate={CUSTOM_ANIMATION}
              className="text-white font-Poppins hover:text-none"
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-white font-Poppins hover:text-none"
              >
                How to use Material Tailwind?
              </AccordionHeader>
              <AccordionBody className="text-white font-Poppins hover:text-none">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              animate={CUSTOM_ANIMATION}
              className="text-white font-Poppins hover:text-none"
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-white font-Poppins hover:text-none"
              >
                What can I do with Material Tailwind?
              </AccordionHeader>
              <AccordionBody className="text-white font-Poppins hover:text-none">
                We&apos;re not always in the position that we want to be at.
                We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
