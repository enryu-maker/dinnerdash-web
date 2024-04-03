import React, { useEffect, useState, useRef } from "react";
import {
  Carousel,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion, useSpring } from "framer-motion";
import burger from "../Images/burger.png";
import maibaap from "../Images/maibaap.jpeg";
import phone from "../Images/phone.png";
import qr from "../Images/qr.png";
import swiggy from "../Images/swiggy-logo.png";
import zomato from "../Images/Zomato_logoo.jpeg";
import razorpay from "../Images/Razorpay_logo.png";
import phonepe from "../Images/PhonePe_Logo.png";
import stripe from "../Images/stripe.png";
import scanner from "../Images/scanner.gif";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import page1 from "../Images/1.png";
import page2 from "../Images/2.png";
import page3 from "../Images/3.png";

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
          <div className="h-full m-auto flex justify-center items-center align-middle">
            <div className="h-4/6">
              <Carousel
                // autoplay={true}
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
                  src={page1}
                  alt="image 1"
                  className="h-full w-full object-fill"
                />
                <img
                  src={page2}
                  alt="image 2"
                  className="h-full w-fit object-fill"
                />
                <img
                  src={page3}
                  alt="image 3"
                  className="h-full w-fit object-fill"
                />
              </Carousel>
              <div className="m-auto flex-row flex justify-center items-center align-middle">
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
                      Increment brand review with redid menu QR codes
                    </h1>
                    Customers will easily remember and recognize your restaurant
                    with DinerDash's very own digital menu customization
                    features. Stand out and get more customer interactions with
                    your branded menu QR codes. Quick and easy to setup.
                  </div>
                  <div className="w-2/6 flex flex-row justify-center align-middle h-full ">
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
                      src={img3}
                      className="w-64 -mt-4 rotate-0"
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
                      Expand efficiency with less staffing
                    </h1>
                    Your visitors can promptly put orders through DinerDash's QR
                    code menu requesting framework without reaching staff. You
                    can lead your clients to examine the menu QR code and easily
                    put in their requests and pay with only a couple of taps.
                    This enhances the requesting system, and eatery staff stays
                    allowed to commit their significant investment to different
                    areas of administration.
                  </div>
                  <div className=" w-2/6 flex flex-row justify-center align-middle ">
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
                      src={img2}
                      className="w-64 -mt-4 rotate-0"
                    />
                  </div>
                </motion.div>
              </div>
              <div className="bg-white w-9/12 h-72 overflow-y-hidden rounded-3xl m-auto p-8">
                <motion.div className="w-full flex flex-row">
                  <div className="w-4/6">
                    <h1 className="text-4xl text-green-600 pb-4">
                      Your accomplice in increasing your business
                    </h1>
                    DinerDash is something beyond a computerized menu framework;
                    we are your accomplice in hoisting and increasing your
                    business the 'advanced' way. Make and run your missions and
                    advancements by means of your web-based menu to help your
                    deals. Bring your smash hit dishes and drinks up front, and
                    prescribe food things to your clients.
                  </div>
                  <div className=" w-2/6 flex flex-row justify-center align-middle ">
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
                      src={img1}
                      className="w-64 -mt-4 rotate-0"
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
          {/* <div className="text-center">
            <h1 className="text-5xl text-green-600">
              How your QR Menu will look like
            </h1>
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
            <div className="p-8 text-start text-white text-4xl w-1/2">
              <div className=" p-4 rounded-lg">
                {/* <h1>Scan QR Code to see</h1>
                <h1 className="text-2xl">How your POS will be like</h1> */}
                <div className="text-center">
                  <h1 className="text-4xl text-green-600">
                    How your QR Menu will look like
                  </h1>
                </div>
              </div>
              <img src={scanner} className="w-fit h-2/3" />
              {/* <div className="bg-white text-green-600 border-green-600 border-2 p-4 text-center mt-4 rounded-lg">
                <h1 className="text-6xl scale-150 text-center">&lt;&lt;</h1>
              </div> */}
              {/* <div className="bg-white text-green-600 border-green-600 border-2 p-4 text-center mt-4 rounded-lg">
                <h1 className="text-base  text-justify">
                  Discover a seamless fusion of innovation and reliability,
                  enhancing every aspect of your dining establishment
                </h1>
              </div> */}
              {/* <div className="w-full text-center">
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
        <div className="h-[100vh] w-full bg-green-600">
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
                  <div className="text-white text-left w-3/4">
                    <h1 className="text-4xl font-bold mb-4">
                      Welcome to Our Website
                    </h1>
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium, deleniti libero dignissimos laboriosam dolor
                      quas blanditiis, perspiciatis corporis expedita saepe nam,
                      doloremque quisquam dolorum aliquid? Nostrum vero nam
                      repellat inventore.
                    </p>
                    <p className="text-lg italic text-black pt-4 font-semibold">
                      Akif Khan
                    </p>
                    <p className="text-lg italic text-black">Owner, NerdTech</p>
                  </div>
                  <div className="w-2/4 justify-center items-center border-0 flex">
                    <img src={maibaap} className="w-2/3 h-[80vh]" />
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="h-full w-full flex p-20">
                  <div className="text-white text-left w-3/4">
                    <h1 className="text-4xl font-bold mb-4">
                      Welcome to Our Website
                    </h1>
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium, deleniti libero dignissimos laboriosam dolor
                      quas blanditiis, perspiciatis corporis expedita saepe nam,
                      doloremque quisquam dolorum aliquid? Nostrum vero nam
                      repellat inventore.
                    </p>
                    <p className="text-lg italic text-black pt-4 font-semibold">
                      Akif Khan
                    </p>
                    <p className="text-lg italic text-black">Owner, NerdTech</p>
                  </div>
                  <div className="w-2/4 justify-center items-center border-0 flex">
                    <img src={maibaap} className="w-2/3 h-[80vh]" />
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="h-full w-full flex p-20">
                  <div className="text-white text-left w-3/4">
                    <h1 className="text-4xl font-bold mb-4">
                      Welcome to Our Website
                    </h1>
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium, deleniti libero dignissimos laboriosam dolor
                      quas blanditiis, perspiciatis corporis expedita saepe nam,
                      doloremque quisquam dolorum aliquid? Nostrum vero nam
                      repellat inventore.
                    </p>
                    <p className="text-lg italic text-black pt-4 font-semibold">
                      Akif Khan
                    </p>
                    <p className="text-lg italic text-black">Owner, NerdTech</p>
                  </div>
                  <div className="w-2/4 justify-center items-center border-0 flex">
                    <img src={maibaap} className="w-2/3 h-[80vh]" />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="bg-white h-[100vh] w-full m-auto justify-center align-middle flex flex-col">
          <div className="text-center p-20">
            <h1 className="text-5xl p-2 text-green-600">Our Integrations</h1>
            <p>
              Empower your journey with these dynamic tools for accelerated goal
              achievement
            </p>
            <motion.div className="flex flex-row bg-white pt-10">
              <motion.Card
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
                    duration: 0.75,
                    ease: "easeInOut",
                    // type: "spring",
                    // damping: 10,
                    // stiffness: 10,
                  },
                }}
                className="rounded-xl mt-6 w-96 h-40 border-2 border-green-600 bg-white text-white m-auto flex justify-center align-middle"
              >
                <CardBody className="m-auto flex justify-center align-middle">
                  <img src={swiggy} className="w-96 h-30" />
                </CardBody>
              </motion.Card>
              <motion.Card
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
                    duration: 0.75,
                    ease: "easeInOut",
                    // type: "spring",
                    // damping: 10,
                    // stiffness: 10,
                  },
                }}
                className="rounded-xl mt-6 w-96 h-40 border-2 border-green-600 bg-white text-white m-auto flex justify-center align-middle"
              >
                <CardBody className="m-auto flex justify-center align-middle">
                  <img src={zomato} className="w-96 h-30" />
                </CardBody>
              </motion.Card>
              <motion.Card
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
                    duration: 0.75,
                    ease: "easeInOut",
                    // type: "spring",
                    // damping: 10,
                    // stiffness: 10,
                  },
                }}
                className="rounded-xl mt-6 w-96 h-40 border-2 border-green-600 bg-white text-white m-auto flex justify-center align-middle"
              >
                <CardBody className="m-auto flex justify-center align-middle">
                  <img src={razorpay} className="w-96 h-30" />
                </CardBody>
              </motion.Card>
            </motion.div>
            <motion.div className="flex flex-row justify-center bg-white pt-10">
              <motion.Card
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
                    duration: 0.75,
                    ease: "easeInOut",
                    // type: "spring",
                    // damping: 10,
                    // stiffness: 10,
                  },
                }}
                className="rounded-xl w-96 h-40 border-2 border-green-600 bg-white text-white m-auto flex justify-center align-middle"
              >
                <CardBody className="m-auto flex justify-center align-middle">
                  <img src={phonepe} className="w-96 h-30" />
                </CardBody>
              </motion.Card>
              <motion.Card
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
                    duration: 0.75,
                    ease: "easeInOut",
                    // type: "spring",
                    // damping: 10,
                    // stiffness: 10,
                  },
                }}
                className="rounded-xl w-96 h-40 border-2 border-green-600 bg-white text-white m-auto flex flex-col justify-center align-middle"
              >
                <CardBody className="m-auto flex justify-center align-middle flex-col">
                  <img src={stripe} className="w-96 h-30" />
                </CardBody>
              </motion.Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
