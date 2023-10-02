import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import assistant from "../assets/assistant.svg";


export default function AssistantBox() {
  return createPortal(
    <motion.div
      whileHover={{ scale: 1.2, translateX: 20, translateY: -20}}
      whileTap={{ scale: 1.1 }}
      drag={true}
      dragConstraints={{ left: -100, right: 100 }}
      className="
    h-56 w-56 bg-white opacity-40 group shadow-xl rounded-full fixed bottom-2 left-2 flex items-center flex-col justify-center"
    >
      <img src={assistant} alt="assistant" width={100} height={100}/>
      <p>Hi, I am your assitant</p>
      {/* <p className="hidden group-hover:block text-center">The assistant is being hovered over</p> */}

    </motion.div>,
    document.body
  );
}
