import React, { useState } from 'react';
import Form from '/components/Form';
import Layout from '/containers/Layout';
import Textblock from '/containers/Textblock'
import { PrismaClient } from "@prisma/client";
import SearchBar from '../../components/SearchBar';
import { motion } from 'framer-motion';

const prisma = new PrismaClient();

function index({projects}) {

  const [query, setQuery] = useState("");
  const [formOpen, setFormOpen] = useState(0);
  const [displayPlusX, setDisplayPlusX] = useState(0);
  const [displayPlusOpacity, setDisplayPlusOpacity] = useState(1);
  const [displayMinusX, setDisplayMinusX] = useState(0);
  const [displayMinusOpacity, setDisplayMinusOpacity] = useState(0);

  function plusOnClick () {
    setDisplayPlusX(50)
    setDisplayPlusOpacity(0)
    setDisplayMinusX(-50)
    setDisplayMinusOpacity(1)
    setFormOpen(400)
  }

  function minusOnClick () {
    setDisplayPlusX(-50)
    setDisplayPlusOpacity(1)
    setDisplayMinusX(50)
    setDisplayMinusOpacity(0)
    setFormOpen(0)

  }

  projects = projects.filter(post => {
    if (query === "") {
      //if query is empty
      return post;
    } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
      //filtered array returned
      return post;
    }
  });

  // Sets the string limit bewfore cut off on the texblock snippet
  const stringLimit = 10
  return (
      <Layout>
        <SearchBar onChange={(e) => setQuery(e.target.value)} />
        <div onClick={(e) => formOpen === 0 ? plusOnClick() : minusOnClick()}
             className="flex-column align-center">
          <motion.img animate={{x: displayPlusX + 'px', opacity: displayPlusOpacity}}
          src="/static/icons8-plus-math-64.png"
          style={{width: "40px", height: "40px", margin: "auto"}}>
          </motion.img>
          <motion.img initial ={{opacity: 0}}animate={{x: displayMinusX + 'px', opacity: displayMinusOpacity}}
          src="/static/icons8-minus-64.png"
          style={{width: "40px", height: "40px", margin: "auto"}}>
          </motion.img>
          <motion.div style={{overflow: 'hidden'}} animate={{height: formOpen + 'px'}}>
              <Form route={'projects'} />
              </motion.div>
        </div>

        <div className="flex">
          {projects.map((project) => {
            return <Textblock key={project.id} title={project.title} content={project.body.length > stringLimit ? project.body.substring(0, stringLimit) + '...' : project.body } />
          })}
        </div>          
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
