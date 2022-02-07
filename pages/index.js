import Layout from '../components/Layout'
import Banner from '../components/Banner';
import { useState } from 'react';

export default function Home() {
  const [index, setIndex] = useState(0)

  const skillsArray = ['JavaScript', 'React', 'NextJS', 'PHP', 'Laravel', 'Node']

  if(index === skillsArray.length) {
   setIndex(0)
  }

  return (
    <div>
      <Layout>
        <Banner title={'Liam Pugh'} subtitle={`${skillsArray[index]} Developer`} onClick={() => {setIndex(index ++ )}} alt="jslogo"/>
      </Layout>
    </div>
  )
}
