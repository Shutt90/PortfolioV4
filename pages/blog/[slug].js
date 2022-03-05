import React from 'react';
import styles from '/styles/post.module.css';
import Layout from '/containers/Layout';
import loadPosts from '/lib/load-posts';

export default function Slug({posts}) {
  return (
      <Layout>
        <div className={styles.container}>
            <h1 className="title">{posts.title}</h1>
            <p className="body">{posts.body}</p>
        </div>
    </Layout>
  )
} 

export async function getStaticPaths() {
  const posts = await loadPosts()

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false
  }
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

// export async function getStaticProps(context) {
    
//     const query = context.query
//     const slug = Object.values(query)
//     const post = await prisma.Blog.findUnique({
//         where: {
//             slug: slug[0]
//         }
//     });

//     //remove this at some point
//     delete post.timestamp

//     return {
//       props: {
//         post: post,
  
//       },
//     };
//   }

