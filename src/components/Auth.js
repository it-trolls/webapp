import React from 'react'
import styled from 'styled-components'
import Login from './Login'
import Register from './Register'
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



class Auth extends React.Component {
  state = {
    login: true
  }

  onSubmit = (payload) => {
    console.log("Form submited")
    console.log(payload)
  }

  render() {
    const display = this.state.login
      ?
      <Login
        onToggle={() => this.setState({ login: !this.state.login })}
        onSubmit={(payload) => this.onSubmit(payload)}
      />
      :
      <Register
        onToggle={() => this.setState({ login: !this.state.login })}
        onSubmit={(payload) => this.onSubmit(payload)}
      />
    return (
      <Container>
        <Left >
        </Left>
        <Right>
          {display}
        </Right>
      </Container>
    )
  }
}

export default Auth