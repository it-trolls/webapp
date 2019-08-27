import React, { useState } from 'react';
import styled from 'styled-components'

const Form = styled.form`
width: 300px;
border-radius: 2px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;
background-color: rgba(255,255,255,0.8);
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

const Title = styled.h2`
text-align: center;
margin: 15px;
margin-bottom: 2rem;
`

const Input = styled.input` 
margin-bottom: 2rem;
background: rgba(255,255,255,0.1);
border-top: none;
border-right: none;
border-left: none;
border-bottom: 1px solid lightblue;
  :focus {
    
  }
`

const Button = styled.button`
width: 100%;
margin: 5px auto;
line-height: 2rem;
color: white;
outline: none;
border: none;
background: rgb(0,128,128);
`

const Register = (props) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    }
    props.onSubmit(payload)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Unirse a Inmobapp!</Title>
      <Input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Correo Electronico"
      />
      <Input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <Button type="submit">Registrarse</Button>
      <Button onClick={props.onToggle}>Ingresar</Button>
    </Form>
  )
}


export default Register;