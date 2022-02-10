import React from 'react';
import Form from '/components/Form';
import Layout from '/containers/Layout';
import Textblock from '/containers/Textblock'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function index({projects}) {
  
  const stringLimit = 10
  return (
      <Layout>
        <div className="flex">
          {projects.map((project) => {
            return <Textblock key={project.id} title={project.title} content={project.body.length > stringLimit ? project.body.substring(0, stringLimit) + '...' : project.body } />
          })}
        </div>          
        <Form route={'projects'} />

      </Layout>
      
  )
}

export async function getServerSideProps(req, res) { 

  const projects = await prisma.projects.findMany();
  return {
    props: {
      projects: projects,

    },
  };
}


export default index;
