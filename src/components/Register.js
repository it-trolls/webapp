import React from 'react';
import styled from 'styled-components'

const Container = styled.form`
width: 300px;
margin: auto;
border: 1px solid grey;
display: flex;
flex-direction: column;
justify-content: center;
`

const Register = () => {
  return (
    <Container>
      Unirse a Inmobapp!
      <input placeholder="Usuario" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Contraseña" />
      <input type="password" placeholder="Repite tu contraseña" />
      <button type="submit">Registrarse</button>
    </Container>
  )
}


export default Register;