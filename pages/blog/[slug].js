import React from 'react'
import styles from '/styles/post.module.css'
import { PrismaClient } from "@prisma/client";
import Layout from '/containers/Layout';

const prisma = new PrismaClient

function Slug({post}) {
  return (
      <Layout>
        <div className={styles.container}>
            <h1 className="title">{post.title}</h1>
            <p className="body">{post.body}</p>
        </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
    
    const query = context.query
    const slug = Object.values(query)
    const post = await prisma.Blog.findUnique({
        where: {
            slug: slug[0]
        }
    });

    //remove this at some point
    delete post.timestamp

    return {
      props: {
        post: post,
  
      },
    };
  }

export default Slug