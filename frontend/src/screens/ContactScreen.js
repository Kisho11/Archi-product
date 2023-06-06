// import React from 'react';
// import { Link } from 'react-router-dom'

// const AboutPage = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>Welcome to our website! We are a team dedicated to providing high-quality products/services.</p>
//       <p>Our mission is to deliver excellence and exceed customer expectations.</p>
//       <p>Feel free to explore our website and contact us if you have any questions.</p>
//     </div>
//   );
// }

// export default AboutPage;


import React from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <Container className="border border-4 border-success"             
    style={{
      backgroundColor: '#f0f0f0',
    }}>

    <div className="container mt-5">
      <h2 className="mb-3">For more details please contact us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    </Container>
  )
}
export default ContactForm