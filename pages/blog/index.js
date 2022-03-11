import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Form from '../../components/Form';
import BlogPost from '/components/BlogPost';
import Link from 'next/link';
import loadPosts from '/lib/load-posts'

export default function Index({posts}) {  

  const [query, setQuery] = useState("");
  const [formOpen, setFormOpen] = useState(0);
  const [displayPlusX, setDisplayPlusX] = useState(0);
  const [displayPlusOpacity, setDisplayPlusOpacity] = useState(1);
  const [displayMinusX, setDisplayMinusX] = useState(0);
  const [displayMinusOpacity, setDisplayMinusOpacity] = useState(0);

  function plusOnClick () {
    setDisplayPlusX(50)
    setDisplayPlusOpacity(0)
    setDisplayMinusX(0)
    setDisplayMinusOpacity(1)
    setFormOpen(600)
  }

  function minusOnClick () {
    setDisplayPlusX(0)
    setDisplayPlusOpacity(1)
    setDisplayMinusX(50)
    setDisplayMinusOpacity(0)
    setFormOpen(0)

  }
  
  return (
    <>
      <div className="flex-column align-center">
        <motion.img onClick={(e) => formOpen === 0 ? plusOnClick() : minusOnClick()} intial={{x: 0, opacity: displayPlusOpacity}} animate={{x: displayPlusX + 'px', opacity: displayPlusOpacity}}
          src="/static/icons8-plus-math-64.png"
          style={{width: "40px", height: "40px", margin: "auto"}}>
        </motion.img>
        <motion.img onClick={(e) => formOpen === 0 ? plusOnClick() : minusOnClick()} initial ={{opacity: 0}}animate={{
          x: displayMinusX + 'px',
          opacity: displayMinusOpacity,}}
          src="/static/icons8-minus-64.png"
          style={{width: "40px", height: "40px", margin: "auto"}}>
        </motion.img>
        <motion.div style={{overflow: 'hidden'}} initial={{x: 0, height: 0}} animate={{height: formOpen + 'px'}}>
          <Form className='' initial={{opacity: 0}} action='POST'/>
        </motion.div>
      </div>
        <motion.div>
        {posts.map((post) => {
          return (
            <Link key={post.slug} href={`/blog/${encodeURIComponent(post.slug)}`}>
              <a>
                <BlogPost key={post.slug} link={post.slug} titleText={post.title} bodyText={post.body} />
                </a>
            </Link>
            )
          })}
        </motion.div>
      </>
    
  );
}

 export async function getStaticProps(context) { 

  const posts = await loadPosts()

  const timestamps = posts.map(post => {
    return Math.floor(post.timestamp / 1000);
  })

    posts.forEach((post, index) => {
      post.timestamp = timestamps[index]
    })

  return {
    props: {
      posts: posts,

    },
  };
 }