import { motion } from 'framer-motion';
import React from 'react';
import Form from '../../components/Form';
import BlogPost from '/components/BlogPost';
import Layout from '/containers/Layout';

function index() {

  return (
    <Layout>
      <Form className='' initial={{opacity: 0}} action='POST'/>
      <motion.div >
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </motion.div>
    </Layout>
    
  );
}

export default index;
