import React, { useEffect, useState, useRef } from "react";
import { Carousel } from "@material-tailwind/react";
import { motion } from "framer-motion";
import burger from "../Images/burger.png";
import fries from "../Images/fries.png";
import colddrink from "../Images/cold-drink.png";
import smoothie from "../Images/smoothie.png";

import phone from "../Images/phone.png";
import qr from "../Images/qr.png";
import qrscanning from "../Images/qrscanning.jpeg";

function Home() {
  const CountUpAnimation = ({
    iconComponent,
    initialValue,
    targetValue,
    text,
  }) => {
    const [count, setCount] = useState(initialValue);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef(null);

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };

    useEffect(() => {
      const observer = new IntersectionObserver(callback, options);
      if (countRef.current) {
        observer.observe(countRef.current);
      }
      return () => {
        if (countRef.current) {
          observer.unobserve(countRef.current);
        }
      };
    }, [options]);

    useEffect(() => {
      if (isVisible) {
        const duration = 2000; // 2 seconds
        const framesPerSecond = 60;
        const totalFrames = (duration / 1000) * framesPerSecond;
        const incrementValue = (targetValue - initialValue) / totalFrames;

        let currentCount = initialValue;
        const animationInterval = setInterval(() => {
          currentCount += incrementValue;
          setCount(Math.round(currentCount));

          if (incrementValue > 0 && currentCount >= targetValue) {
            setCount(targetValue);
            clearInterval(animationInterval);
          } else if (incrementValue < 0 && currentCount <= targetValue) {
            setCount(targetValue);
            clearInterval(animationInterval);
          }
        }, 1000 / framesPerSecond);

        return () => clearInterval(animationInterval);
      }
    }, [isVisible, initialValue, targetValue]);

    return (
      <div className="container" ref={countRef}>
        <div className="icon">{iconComponent}</div>
        <span className="num">{count}</span>
        <span className="text">{text}</span>
      </div>
    );
  };
  const variants = {
    initial: {
      transform: "translateZ(4px) translateY(-2px)",
    },
    animate: {
      transform: "translateZ(32px) translateY(-20px)",
    },
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "easeInOut",
    },
  };
  return (
    <div className="">
      <div className="relative">
        <div className="h-screen w-full bg-home-bg bg-contain bg-right bg-no-repeat">
          <motion.div
            initial={{
              transform: "translateZ(4px) translateY(-2px)",
            }}
            animate={{
              transform: "translateZ(32px) translateY(-20px)",
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1,
              ease: "easeInOut",
            }}
            className="left-32  justify-start w-1/2 mt-40 align-middle absolute transform -translate-x-1/2 -translate-y-1/2 text-black font-bold"
          >
            <p className="text-7xl pb-10 text-green-600">QR Code Menu</p>
            <p className="text-5xl font-normal pb-2">
              The Future of Restaurants in
            </p>

            <p className="text-4xl font-medium">New Form</p>
            <p className="font-normal pt-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              nulla exercitationem perferendis consequuntur, labore impedit
              possimus hic aliquid minus, culpa aut id dolore, libero quas
              commodi voluptate molestiae magnam! Rem.
            </p>
            <button className="mt-10 bg-green-600 p-4 rounded-lg text-white">
              Book a Demo
            </button>
          </motion.div>
        </div>
        <div className="h-screen w-full">
          <h1 className="text-center font-semibold text-4xl mt-10 -mb-24 text-green-600">
            QR Code Menu Helps You to
          </h1>
          <div className="h-full m-auto flex justify-center items-center">
            <div className="h-4/6">
              <Carousel
                autoplay={true}
                loop={true}
                className="rounded-none"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="image 2"
                  className="h-full w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                  alt="image 3"
                  className="h-full w-full object-cover"
                />
              </Carousel>
              <div className="m-auto align-middle justify-center flex">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-10 bg-green-600 p-4 px-10 rounded-lg text-white"
                >
                  <p className="text-2xl">Explore the Pricing</p>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[175vh] w-full bg-green-600">
          <div className="">
            <h1 className="text-center text-white text-4xl p-10">
              Make Your Customer Experience Better Than Ever
            </h1>

            <div className="space-y-14">
              <div className="bg-white w-9/12 h-72 overflow-y-hidden rounded-3xl m-auto p-8">
                <motion.div className="w-full flex flex-row">
                  <div className="w-4/6">
                    <h1 className="text-4xl text-green-600 pb-4">
                      Make Your Experience Better
                    </h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure adipisci tempora magni ullam ipsa reprehenderit,
                    voluptatem et, aperiam hic sed dolorum voluptatum, provident
                    architecto nostrum minus! Repellendus in laborum
                    repudiandae? Unde, ipsam? Deleniti officiis vel eligendi
                    soluta errorrehenderit sint architecto ab.
                  </div>
                  <div className="justify-end w-2/6 ">
                    <motion.img
                      whileHover={{
                        y: -10,
                        // scale: 1.05,
                        initial: {
                          transform: "translateZ(4px) translateY(-2px)",
                        },
                        animate: {
                          transform: "translateZ(32px) translateY(-40px)",
                        },
                        transition: {
                          repeat: Infinity,
                          repeatType: "mirror",
                          duration: 1,
                          ease: "easeInOut",
                        },
                      }}
                      src={burger}
                      className="w-[500px] -mt-4 rotate-0"
                    />
                  </div>
                </motion.div>
              </div>
              {/* <div className="rotate-[45deg] translate-x-0 flip ">
                <motion.img
                  initial={{
                    transform: "translateZ(4px) translateY(-2px)",
                  }}
                  animate={{
                    transform: "translateZ(32px) translateY(-20px)",
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  src={colddrink}
                  className="z-50 w-40 absolute top-[400px] left-72 rotate-180"
                />
              </div> */}
              <div className="bg-white w-9/12 h-72 overflow-y-hidden rounded-3xl m-auto p-8">
                <motion.div className="w-full flex flex-row">
                  <div className="w-4/6">
                    <h1 className="text-4xl text-green-600 pb-4">
                      Make Your Experience Better
                    </h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure adipisci tempora magni ullam ipsa reprehenderit,
                    voluptatem et, aperiam hic sed dolorum voluptatum, provident
                    architecto nostrum minus! Repellendus in laborum
                    repudiandae? Unde, ipsam? Deleniti officiis vel eligendi
                    soluta errorrehenderit sint architecto ab.
                  </div>
                  <div className="justify-end w-2/6 ">
                    <motion.img
                      whileHover={{
                        y: -10,
                        // scale: 1.05,
                        initial: {
                          transform: "translateZ(4px) translateY(-2px)",
                        },
                        animate: {
                          transform: "translateZ(32px) translateY(-40px)",
                        },
                        transition: {
                          repeat: Infinity,
                          repeatType: "mirror",
                          duration: 1,
                          ease: "easeInOut",
                        },
                      }}
                      src={burger}
                      className="w-[500px] -mt-4 rotate-0"
                    />
                  </div>
                </motion.div>
              </div>
              <div className="bg-white w-9/12 h-72 overflow-y-hidden rounded-3xl m-auto p-8">
                <motion.div className="w-full flex flex-row">
                  <div className="w-4/6">
                    <h1 className="text-4xl text-green-600 pb-4">
                      Make Your Experience Better
                    </h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure adipisci tempora magni ullam ipsa reprehenderit,
                    voluptatem et, aperiam hic sed dolorum voluptatum, provident
                    architecto nostrum minus! Repellendus in laborum
                    repudiandae? Unde, ipsam? Deleniti officiis vel eligendi
                    soluta errorrehenderit sint architecto ab.
                  </div>
                  <div className="justify-end w-2/6 ">
                    <motion.img
                      whileHover={{
                        y: -10,
                        // scale: 1.05,
                        initial: {
                          transform: "translateZ(4px) translateY(-2px)",
                        },
                        animate: {
                          transform: "translateZ(32px) translateY(-40px)",
                        },
                        transition: {
                          repeat: Infinity,
                          repeatType: "mirror",
                          duration: 1,
                          ease: "easeInOut",
                        },
                      }}
                      src={burger}
                      className="w-[500px] -mt-4 rotate-0"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[25vh] w-full bg-white flex flex-row px-48 p-16 justify-between">
          <div className=" text-start text-6xl ">
            <h1 className="text-green-600 text-center">
              <CountUpAnimation initialValue={0} targetValue={100} text="+" />
            </h1>
            <h1 className="text-xl text-center">Users</h1>
          </div>
          <div className=" text-start text-6xl ">
            <h1 className="text-green-600 text-center">
              <CountUpAnimation initialValue={0} targetValue={10} text="+" />
            </h1>
            <h1 className="text-xl text-center">Restaurants</h1>
          </div>
          <div className=" text-start text-6xl ">
            <h1 className="text-green-600 text-center">
              <CountUpAnimation initialValue={0} targetValue={1000} text="+" />
            </h1>
            <h1 className="text-xl text-center">Orders</h1>
          </div>
        </div>
        <div className="max-h-screen h-screen w-full bg-white border-solid border-t-2 p-20 justify-center m-auto">
          <div className="text-center">
            <h1 className="text-6xl text-green-600">
              How your QR Menu will look like
            </h1>
          </div>
          {/* <div className="grid grid-cols-2 px-20 h-full w-full">
            <div className="grid grid-cols-2">
              <div className="border-solid  h-full items-center justify-center flex ">
                <img src={phone} className="w-full m-auto" />
              </div>
              <div className="h-full pt-14">
                <img src={qr} className="w-full h-2/3 " />
              </div>
            </div>

            <div className="border-solid "></div>
          </div> */}
          <div className="flex flex-row h-full w-full px-20">
            <div className="border-0 ">
              <img
                src={phone}
                className="w-3/4 m-auto items-center justify-center align-middle"
              />
            </div>
            <div className="border- w-1/4">
              <img src={qr} className="pt-6" />
            </div>
            <div className="p-8 text-start border-0 text-white text-4xl w-1/2">
              <div className="bg-green-600 p-4 rounded-lg">
                <h1>Scan QR Code to see</h1>
                <h1 className="text-2xl">How your POS will be like</h1>
              </div>
              {/* <div className="bg-white text-green-600 border-green-600 border-2 p-4 text-center mt-4 rounded-lg">
                <h1 className="text-2xl">NOTE</h1>
                <h1 className="text-3xl">This is a Dummy Menu</h1>
              </div>
              <div className="w-full text-center">
                <span className="text-black text-2xl text-justify">
                  Our digital menu for restaurants is powered by technology that
                  has been
                  <b className="text-green-600 text-center font-semibold">
                    tried-and-tested since 2018
                  </b>
                  <p className="text-green-600 text-center font-semibold"></p>
                </span>
              </div> */}
            </div>
          </div>
        </div>
        <div className="h-screen w-full bg-green-600">
          <div className="h-full m-auto flex justify-center items-center">
            <div className="h-5/6">
              <Carousel
                autoplay={false}
                loop={true}
                className="rounded-none"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                {/* Slide 1 */}
                <div className="h-full w-full flex p-20">
                  <div className="text-white text-left">
                    <h1 className="text-4xl font-bold mb-4">
                      Welcome to Our Website
                    </h1>
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="h-full w-full flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Slide 3 */}
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-white text-center">
                    <h1 className="text-4xl font-bold mb-4">
                      Discover Our Services
                    </h1>
                    <p className="text-lg">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
