import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '/styles/banner.module.css'
function Banner({title, subtitle, alt, onMouseEnter, onMouseLeave}) {
  return (
    <div className={styles.container}>
        <div className={styles.textarea}>
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <Link href="/contact"><a className="standard-btn" style={{width: '70%'}}>Get in touch...</a></Link>
        </div>
        <Image className={styles.bannerImage} alt={alt} width='400' height='400' src='/static/js.png' />
    </div>
  );
}

export default Banner;
