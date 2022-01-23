import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Navbar() {
  return (
            <nav style={{display: 'flex', justifyContent: 'space-between'}}>
                <Image src="/myLogo.png" width="360" height="120"/>
                <div>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/">
                        <a>Projects</a>
                    </Link>
                    <Link href="/">
                        <a>Blog</a>
                    </Link>
                    <Link href="/">
                        <a>Contact</a>
                    </Link>    
                </div>
            </nav>
  )
}

export default Navbar;
