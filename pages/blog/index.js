import { motion } from 'framer-motion';
import React from 'react';
import Form from '../../components/Form';
import BlogPost from '/components/BlogPost';
import Layout from '/containers/Layout';
import { PrismaClient } from "@prisma/client";
import Textblock from '../../containers/Textblock';


const prisma = new PrismaClient();


function index({posts}) {  

  const title = posts[0].body
  console.log(title)
  
  const stringLimit = 10

  return (
    <Layout>
      <Form className='' initial={{opacity: 0}} action='POST'/>
      <motion.div >
      {posts.map((post) => {
            return <BlogPost key={post.id} link={post.slug} titleText={post.title} bodyText={post.body} />
          })}
      </motion.div>
    </Layout>
    
  );
}

export async function getServerSideProps(req, res) { 

  const posts = await prisma.Blog.findMany();

  const timestamps = posts.map(post => {
    return Math.floor(post.timestamp / 1000);
  })

  posts.forEach((post, index) => {
    post.timestamp = timestamps[index]
  })

  return {
    props: {
      posts: posts

    },
  };
}


export default index;
