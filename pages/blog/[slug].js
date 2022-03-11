import React from 'react';
import styles from '/styles/post.module.css';
import loadPosts from '/lib/load-posts';
import loadPost from '/lib/load-post';

export default function Slug({post}) {
  return (
      <div className={styles.container}>
          <h1 className="title">{post.title}</h1>
          <p className="body">{post.body}</p>
      </div>
  )
} 

export async function getStaticPaths() {
  const posts = await loadPosts()

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => { 

  const id = context.params.slug;
  const post = await loadPost(id)

  post.timestamp = post.timestamp / 1000;

  return {
    props: {
      post: post,

    },
  };
 }