import React, { useState } from 'react';
import Form from '/components/Form';
import Layout from '/containers/Layout';
import Textblock from '/containers/Textblock'
import SearchBar from '../../components/SearchBar';
import { motion } from 'framer-motion';
import loadProjects from '../../lib/load-projects'


function Index({projects, user}) {

  const [query, setQuery] = useState("");
  const [formOpen, setFormOpen] = useState(0);
  const [displayPlusX, setDisplayPlusX] = useState(0);
  const [displayPlusOpacity, setDisplayPlusOpacity] = useState(1);
  const [displayMinusX, setDisplayMinusX] = useState(0);
  const [displayMinusOpacity, setDisplayMinusOpacity] = useState(0);

  function plusOnClick () {
    setDisplayPlusX(50)
    setDisplayPlusOpacity(0)
    setDisplayMinusX(0)
    setDisplayMinusOpacity(1)
    setFormOpen(600)
  }

  function minusOnClick () {
    setDisplayPlusX(0)
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
    <>
      <SearchBar onChange={(e) => setQuery(e.target.value)} />
      <div className="flex-column align-center">
        <motion.img onClick={(e) => formOpen === 0 ? plusOnClick() : minusOnClick()} intial={{x: 0, opacity: displayPlusOpacity}} animate={{x: displayPlusX + 'px', opacity: displayPlusOpacity}}
        src="/static/icons8-plus-math-64.png"
        style={{width: "40px", height: "40px", margin: "auto"}}>
        </motion.img>
        <motion.img onClick={(e) => formOpen === 0 ? plusOnClick() : minusOnClick()} initial ={{opacity: 0}}animate={{
          x: displayMinusX + 'px',
          opacity: displayMinusOpacity,}}
        src="/static/icons8-minus-64.png"
        style={{width: "40px", height: "40px", margin: "auto"}}>
        </motion.img>
        <motion.div style={{overflow: 'hidden'}} initial={{x: 0, height: 0}} animate={{height: formOpen + 'px'}}>
          <Form route={'projects'} />
        </motion.div>
      </div>

      <div className="flex project-container">
        {projects.map((project) => {
          return <Textblock key={project.id} title={project.title} content={project.body.length > stringLimit ? project.body.substring(0, stringLimit) + '...' : project.body } />
        })}
      </div>     
      </>     
      
  )
}


export async function getStaticProps() { 

  const projects = await loadProjects()

  return {
    props: {
      projects: projects,

    },
  };
}


export default Index;
