import React from 'react';
import Form from '../../components/Form';
import Layout from '../../components/Layout';
import Textblock from '../../components/Textblock'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function index({projects}) {
  
  const stringLimit = 10
  return (
      <Layout>
        <div className="flex">
          {projects.map((project) => {
            return <Textblock key={project.id} subtitle={project.title} paragraph={project.body.length > stringLimit ? project.body.substring(0, stringLimit) + '...' : project.body } />
          })}
        </div>
          
          <Form />

      </Layout>
      
  )
}

export async function getServerSideProps() {
  const projects = await prisma.projects.findMany();
  return {
    props: {
      projects: projects,
    },
  };
}


export default index;
