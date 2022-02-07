import React from 'react';
import {motion} from 'framer-motion';

function Button({href, text, onClick}) {
  return <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
   className="standard-btn"
   onClick={onClick}
   href={href}>
     {text}
   </motion.button>;
}

export default Button;
