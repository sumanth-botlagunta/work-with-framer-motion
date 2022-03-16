import React from "react";
import { motion } from "framer-motion";

export default function () {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#6b6dc2"
        }}
      >
        {/* <motion.div className="framer-div" style={{justifyContent: 'center'}}
                animate={{ scale: [1,2,1,4,1,2,1], opacity: 1,
                rotate: [90,270,90,180,90,180,0],
                borderRadius:["0%","20%", "40%","50%","30%","25%","12%"] }}
                transition={{ duration: 5 }}
            > */}
        <motion.div
          className="framer-div"
          style={{ justifyContent: "center" }}
          intial={{ x: 0, y: 0 }}
          animate={{
            scale: [1, 1, 1, 1, 1, 1, 1],
            opacity: 1,
            rotate: [90, 270, 90, 180, 360, 180, 360],
            borderRadius: [
              "0%",
              "50%",
              "12%",
              "50%",
              "12%",
              "50%",
              "12%",
              "50%",
            ],
            x:100,
            y:-100,
          }}
          transition={{ duration: 5 , ease: "linear" }}
          
        >
          <h4>FRAMER</h4>
        </motion.div>
      </div>
    </>
  );
}
