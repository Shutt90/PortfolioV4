import { motion } from 'framer-motion';
import React from 'react';
import Form from '../../components/Form';
import BlogPost from '/components/BlogPost';
import Layout from '/containers/Layout';
import { PrismaClient } from "@prisma/client";
import Link from 'next/link';

const prisma = new PrismaClient();

function index({posts}) {  
  
  return (
    <Layout>
      <Form className='' initial={{opacity: 0}} action='POST'/>
      <motion.div >
      {posts.map((post) => {
            return (
                    <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
                      <a>
                        <BlogPost key={post.id} link={post.slug} titleText={post.title} bodyText={post.body} />
                      </a>
                    </Link>
                    )
                  })}
      </motion.div>
    </Layout>
    
  );
}

export async function getServerSideProps(context) { 
  const posts = await prisma.Blog.findMany();

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


export default index;
