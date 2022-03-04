import { motion } from 'framer-motion';
import React from 'react';
import Form from '../../components/Form';
import BlogPost from '/components/BlogPost';
import Layout from '/containers/Layout';
import Link from 'next/link';
import loadPosts from '/lib/load-posts'

export default function Index({posts}) {  
  
  return (
    <Layout>
      <Form className='' initial={{opacity: 0}} action='POST'/>
      <motion.div >
      {posts.map((post) => {
            return (
                    <Link key={post.id} passHref={true} href={`/blog/${encodeURIComponent(post.slug)}`}>
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

// export async function getStaticProps(context) { 
//   const posts = await prisma.Blog.findMany();

//   const timestamps = posts.map(post => {
//     return Math.floor(post.timestamp / 1000);
//   })

//   posts.forEach((post, index) => {
//     post.timestamp = timestamps[index]
//   })

//   return {
//     props: {
//       posts: posts,

//     },
//   };
// }



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
//   const query = context.query
//   const slug = Object.values(query)
//   const post = await prisma.Blog.findUnique({
//       where: {
//           slug: slug[0]
//       }
//   });

//   //remove this at some point
//   delete post.timestamp

//   return {
//     props: {
//       post: post,

//     },
//   };
// }


