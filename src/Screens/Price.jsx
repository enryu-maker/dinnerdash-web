import { Button } from "flowbite-react";
import { useState } from "react";
import React from "react";
import { Card } from "flowbite-react";
import { Switch } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function Price() {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly((prevValue) => !prevValue);
  };
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="h-screen w-full bg-bg bg-cover relative">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start py-10">
          <h1 className="text-white text-6xl font-bold pb-4">
            Choose Best Plans for your Business
          </h1>
          <h2 className="text-white text-3xl font-bold">
            Choose Best Plans for your Business
          </h2>
          <div className="py-4">
            <Switch
              id="custom-switch-component"
              onChange={togglePricing}
              label={isYearly ? "Switch to Monthly" : "Switch to Yearly"}
              className="h-full w-full checked:bg-green-400 text-white"
              containerProps={{
                className: "w-11 h-6",
              }}
              circleProps={{
                className: "before:hidden left-0.5 border-none",
              }}
              labelProps={{
                className: `text-${
                  isYearly ? "green-400" : "white"
                } text-lg font-bold`, // Increase the font size here
              }}
            />
          </div>
          {/* <Button onClick={togglePricing}>
            + {isYearly ? "Switch to Monthly" : "Switch to Yearly"}+{" "}
          </Button> */}
          <div className="grid"></div>
          <motion.div
            class="grid grid-cols-2 gap-10 pt-2 space-x-0 space-y-0 h-full m-auto"
            animate={{ rotateY: isYearly ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ perspective: 2000 }}
          >
            {/* <div className="border-solid border-2 flex bg-white w-96 text-center">
              <div className="text-center content-center align-top">
                <h1 className="">Free</h1>
                <h1 className="text-4xl">$0</h1>
                <Button className="mt-10">Sign Up</Button>
              </div>
            </div> */}
            <motion.div
              animate={{ rotateY: isYearly ? 180 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="max-w-sm max-h-md ">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                  {isYearly ? "Yearly plan" : "Standard plan"}
                </h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    {isYearly ? "490" : "49"}
                  </span>
                  <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                    {isYearly ? "/year" : "/month"}
                  </span>
                </div>
                <ul className="my-7 space-y-5">
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-green-400 dark:text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      2 team members
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-green-400 dark:text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      20GB Cloud storage
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-green-400 dark:text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Integration help
                    </span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">
                    <svg
                      className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500">
                      Sketch Files
                    </span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">
                    <svg
                      className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500">
                      API Access
                    </span>
                  </li>

                  <li className="flex space-x-3 line-through decoration-gray-500">
                    <svg
                      className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500">
                      24×7 phone & email support
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-lg bg-green-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                >
                  Choose plan
                </button>
              </Card>
            </motion.div>
            <motion.div
              animate={{ rotateY: isYearly ? 180 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="max-w-sm max-h-screen">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                  Standard plan
                </h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    49
                  </span>
                  <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                </div>
                <ul className="my-7 space-y-5">
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-green-400 dark:text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      2 team members
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-green-400 dark:text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      20GB Cloud storage
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-green-400 dark:text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      Integration help
                    </span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">
                    <svg
                      className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500">
                      Sketch Files
                    </span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">
                    <svg
                      className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500">
                      API Access
                    </span>
                  </li>

                  <li className="flex space-x-3 line-through decoration-gray-500">
                    <svg
                      className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500">
                      24×7 phone & email support
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-lg bg-green-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                >
                  Choose plan
                </button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Additional Content */}
      <div></div>
    </div>
  );
}
