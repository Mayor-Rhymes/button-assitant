import AssistantBox from "../components/AssistantBox";
import { useState } from "react";
import assistant from "../assets/assistant.svg";
import { motion } from "framer-motion";

export default function Home() {
  const hoverAssistant = (text: string) => {
    switch (text) {
      case "GET_STARTED":
        setGetStartedFocus(true);
        break;

      case "LEARN":
        setLearnFocus(true);
        break;

      case "ACTIVATE":
        setActivateFocus(true);
        break;

      default:
        break;
    }
  };

  const disableAssistant = (text: string) => {
    switch (text) {
      case "GET_STARTED":
        setGetStartedFocus(false);
        break;

      case "LEARN":
        setLearnFocus(false);
        break;

      case "ACTIVATE":
        setActivateFocus(false);
        break;

      default:
        break;
    }
  };

  const [getStartedFocus, setGetStartedFocus] = useState(false);
  const [learnFocus, setLearnFocus] = useState(false);
  const [activateFocus, setActivateFocus] = useState(false);

  return (
    <main className="min-h-screen w-full justify-center flex py-20 gap-10 bg-black">
      {/* <h3 className="text-3xl font-bold text-white">This is the main page</h3> */}

      <div className="relative">
        <button
          className="rounded-md px-4 py-4 bg-white hover:scale-125 delay-200 duration-200"
          onMouseOver={() => hoverAssistant("GET_STARTED")}
          onMouseLeave={() => disableAssistant("GET_STARTED")}
        >
          Get Started
        </button>
        {getStartedFocus && (
          <motion.div
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.2, translateX: 20, translateY: -20 }}
            whileTap={{ scale: 1.1 }}
            drag={true}
            dragConstraints={{ left: -100, right: 100 }}
            className="
    h-96 w-96 p-5 bg-white group shadow-xl rounded-full absolute flex items-center flex-col justify-center"
          >
            <img src={assistant} alt="assistant" width={100} height={100} />
            <p>
              This is the get started button and it is responsible for helping
              you get started with all the features we offer.
            </p>
          </motion.div>
        )}
      </div>

      <div className="relative">
        <button
          className="rounded-md px-4 py-4 bg-white hover:scale-125 delay-200 duration-200"
          onMouseOver={() => hoverAssistant("LEARN")}
          onMouseLeave={() => disableAssistant("LEARN")}
        >
          Learn
        </button>
        {learnFocus && (
          <motion.div
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.2, translateX: 20, translateY: -20 }}
            whileTap={{ scale: 1.1 }}
            drag={true}
            dragConstraints={{ left: -100, right: 100 }}
            className="
    h-96 w-96 p-5 bg-white group shadow-xl rounded-full absolute flex items-center flex-col justify-center"
          >
            <img src={assistant} alt="assistant" width={100} height={100} />
            <p>
              This is the learn button and it is responsible for helping you
              learn about all the features we offer.
            </p>
          </motion.div>
        )}
      </div>
      <div>
        <button
          className="rounded-md px-4 py-4 bg-white hover:scale-125 delay-200 duration-200"
          onMouseOver={() => hoverAssistant("ACTIVATE")}
          onMouseLeave={() => disableAssistant("ACTIVATE")}
        >
          Activate Membership
        </button>
        {activateFocus && (
          <motion.div
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.2, translateX: 20, translateY: -20 }}
            whileTap={{ scale: 1.1 }}
            drag={true}
            dragConstraints={{ left: -100, right: 100 }}
            className="
    h-96 w-96 p-5 bg-white group shadow-xl rounded-full absolute flex items-center flex-col justify-center"
          >
            <img src={assistant} alt="assistant" width={100} height={100} />
            <p>
              This is the activate membership button and it is responsible for
              activating your payment plan.
            </p>
          </motion.div>
        )}
      </div>
      {/* <button className="rounded-md px-4 py-4 bg-white hover:scale-125 delay-200 duration-200">Get Started</button> */}
      {!(getStartedFocus || learnFocus || activateFocus) && <AssistantBox />}
    </main>
  );
}
