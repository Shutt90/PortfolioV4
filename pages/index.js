import Layout from '../components/Layout'
import Banner from '../components/Banner';
import { useEffect, useState } from 'react';

export default function Home() {
  const [index, setIndex] = useState(0)
  let timer

  const skillsArray = ['JavaScript', 'React', 'NextJS', 'PHP', 'Laravel', 'Node']
  const interval = 200

  const updateIndex = () => {
    timer = !timer && setInterval(()=> {
      if(index === skillsArray.length -1) {
        setIndex(0)
      }
      setIndex(prevCount => prevCount +1)
    }, interval)
  }

  useEffect(() => {
    updateIndex()

    return () => clearInterval(timer)
  });

  return (
    <div>
      <Layout>
        <Banner onMouseEnter={() => {clearInterval(timer)}} onMouseLeave={() => updateIndex()} className={'dev-tools'}title={'Liam Pugh'} subtitle={`${skillsArray[index]}`} alt="jslogo"/>
      </Layout>
    </div>
  )
}
