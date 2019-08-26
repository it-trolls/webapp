import React, { useState } from 'react';
import styled from 'styled-components'

const Form = styled.form`
width: 300px;
margin: auto 2rem;
border-radius: 2px;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
top: 30%;
left: 25%;
padding: 8px;
background-color: rgba(255,255,255,0.8);
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

const Title = styled.h2`
text-align: center;
margin: 15px;
`

const Input = styled.input` 
margin-bottom: 15px;
background: rgba(255,255,255,0.1);
border-radius: 2px;
border: 1px solid lightblue;
`

const Button = styled.button`
width: 100px;
margin: 15px auto;
line-height: 1.5rem;
border-radius: 15px;
color: white;
outline: none;
border: none;
background: rgb(0,128,128);
`

const Login = (props) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      username: user,
      password: password,
    }
    console.log(payload)
    props.onSubmit(payload)
  }



  return (
    <Form onSubmit={handleSubmit}>
      <Title>
        Bienvenido a Inmobapp!
          </Title>
      <label>Nombre de Usuario</label>
      <Input
        type="text"
        value={user}
        onChange={e => setUser(e.target.value)}
      />
      <label>Contraseña</label>
      <Input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <a onClick={props.onToggle}>¿No tienes cuenta? Registrate!</a>
      <Button type="submit" value="Submit">Ingresar</Button>
    </Form>
  )
}


export default Login;