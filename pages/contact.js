import React, { useState } from 'react';
import Layout from '/containers/Layout';

export default function contact() {

  const [message, setMessage] = useState('Contact Me')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('Pricing')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')

    let data = {
        name,
        email,
        subject,
        title,
        body

      }

    fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200 || res.status === 250) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
          setSubject('')
          setTitle('Pricing')
          setBody('')
          setMessage('Email Sent Successfully')
        }
      })
    }

  return (
  <div>
      <Layout>
        <h3 className="title">{message}</h3>
        <form method="post" action="/api/contact/">
            <input required placeholder="Name" type="input" onChange={(e)=>{setName(e.target.value)}} name="name" id="name"></input>
            <input required placeholder="Your Email" type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email"></input>
            <select required type="dropdown" onChange={(e)=>{ setSubject(e.target.value)}} name="subject" id="subject">
                <option value="Pricing" name="pricing" id="pricing">Pricing</option>
                <option value="Collab" name="collab" id="collab">Collaboration</option>
                <option value="Discussion" name="discussion" id="discussion">Discussion</option>
            </select>
            <input required placeholder="Title" type="input" onChange={(e)=>{setTitle(e.target.value)}} name="title" id="title"></input>
            <textarea required placeholder="Body" name="body" onChange={(e)=>{setBody(e.target.value)}} id="body"></textarea>
            <input type="submit" onClick={(e) => handleSubmit(e)}></input>
        </form>
      </Layout>
  </div>
  );
}