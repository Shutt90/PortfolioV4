import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="container">
        <h1 className="title">About me...</h1>
        <p className="content">
            My passion for tech came at a young age.
            It wasn&#39;t until I hit 30 then I decided that it was time to pursue the career I was born to do and have always been passionate about.
        </p>
        <p className="content">
            I by picking up a Udemy course when I was self employed and couldn&#39;t get enough of it.
            Sitting at the computer learning everything I possible could for 14 hours a day, and that hasn&#39;t changed much since then either.
        </p>

        <p className="content">
            I think my true love will always be JavaScript, simply because it&#39;s the language I know best. But I have always worked with PHP as well and am putting some serious consideration into learning either C++, Rust or Go very soon.
        </p>
    </div>
  )
}
