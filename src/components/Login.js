import React from 'react';
import styled from 'styled-components'
import bg from '../assets/loginbg.jpg'
const Container = styled.div`
display: flex;
justify-content:flex-end;
height: 100%;
`
const Left = styled.div`
flex: 50%;
height: 100vh;
background-image: url(${bg});
background-size: cover;
`
const Right = styled.div`
flex: 50%;
background-color: rgba(0,0,0,0.1)
`

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
const Register = styled.a`
margin-bottom: 15px;
`
const Button = styled.button`
width: 100px;
margin: auto;
line-height: 1.5rem;
border-radius: 15px;
color: white;
outline: none;
border: none;
background: green;
`

const Login = () => {
  return (
    <Container>
      <Left >
      </Left>
      <Right>
        <Form>
          <Title>
            Bienvenido a Inmobapp!
          </Title>
          <label>Nombre de Usuario</label>
          <Input />
          <label>Contraseña</label>
          <Input />
          <Register>¿No tienes cuenta? Registrate!</Register>
          <Button type="submit">Ingresar</Button>
        </Form>
      </Right>
    </Container>
  )
}


export default Login;