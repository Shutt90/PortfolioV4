import Link from 'next/link';
import React from 'react';

function Path({href, text, className}) {
  return (
    <Link href={href}><a className={className}>{text}</a></Link>
  )
}

export default Path;
