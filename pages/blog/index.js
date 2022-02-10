import { motion } from 'framer-motion';
import React from 'react';
import BlogPost from '/components/BlogPost';
import Layout from '/containers/Layout';

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

function index() {

  return (
    <Layout>
      <motion.div variants={list} animate={{staggerChildren: 0.3}}>
        <BlogPost variants={item} />
        <BlogPost variants={item} />
        <BlogPost variants={item} />
        <BlogPost variants={item} />
        <BlogPost variants={item} />
        <BlogPost variants={item} />
      </motion.div>
    </Layout>
    
  );
}

export default index;
