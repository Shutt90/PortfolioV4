import Image from 'next/image';
import React from 'react';
import styles from '/styles/banner.module.css'
function Banner({title, subtitle, alt, onMouseEnter, onMouseLeave}) {
  return (
    <div className={styles.container}>
        <div className={styles.textarea}>
            <h1 className={styles.title}>{title}</h1>
            <h3 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={styles.subtitle}>{subtitle}</h3>
        </div>
        <Image alt={alt} width='400' height='400' src='/static/js.png' />
    </div>
  );
}

export default Banner;
