import { createPortal } from "react-dom";
import { motion } from "framer-motion";



export default function AssistantBox() {
  return createPortal(
    <motion.div
      whileHover={{ scale: 1.2, translateX: 20, translateY: -20}}
      whileTap={{ scale: 1.1 }}
      drag={true}
      dragConstraints={{ left: -100, right: 100 }}
      className="
    group gap-4 text-white fixed bottom-2 left-2 flex items-center justify-center"
    >
      <iframe title="assistant" src="https://giphy.com/embed/uA7FDa2VLgntHGhvrQ" className="w-16 h-16"></iframe>
      
      <p>Hi, I am your assitant</p>
      {/* <p className="hidden group-hover:block text-center">The assistant is being hovered over</p> */}
      
    </motion.div>,
    document.body
  );
}
