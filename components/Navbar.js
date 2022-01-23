import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Path from './Path';

function Navbar() {
  return (
            <nav className="nav">
                <Link href={'/'}><a><Image src="/myLogo-transparent.png" width="360" height="120"/></a></Link>
                <div>
                    <Path className={'link'} href={'/'} text={'Home'} />
                    <Path className={'link'} href={'/projects'} text={'Projects'} />
                    <Path className={'link'} href={'/blog'} text={'Blog'} />
                    <Path className={'link'} href={'/contact'} text={'Contact'} />
                </div>
            </nav>
  )
}

export default Navbar;
