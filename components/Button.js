import React from 'react';

function Button({href, text}) {
  return <button className="standard-btn" href={href}>{text}</button>;
}

export default Button;
