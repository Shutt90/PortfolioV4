import React from 'react';
import {motion} from 'framer-motion';


function Button({href, type, text, onClick}) {
  return (

    type ===  'submit' ? <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="standard-btn"
          onClick={onClick}
          href={href}
          type="submit">
            {text}
      </motion.button>

      :
      
      <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="standard-btn"
          onClick={onClick}
          href={href}
          >
            {text}
      </motion.button>


    
  ) 
}

export default Button;
