import { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import {Container, Row, Col, Form, FormGroup} from 'reactstrap'
import{Link, useNavigate} from 'react-router-dom'
import '../styles/login.css'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase.config'
import {toast} from 'react-toastify'


const Login = () => {
  const [user, setUser] = useState('admin')
  const [password, setPassword] = useState('password')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  const signIn = async (e) =>{
    e.preventDefaulf()
    setLoading(true)

    try {

      const userCredential = await signInWithEmailAndPassword(auth, user, password)

      const user = userCredential.user

      console.log(user)
      setLoading(false)
      toast.success('Successfully logged in ')
      navigate ('/Checkout')
    }catch (error) {
    setLoading(false)
    toast.error(error.message)
    }
    }


  return (
    <Helmet title='Login'>
    <section>
      <Container>
        <Row>
         {
          loading ? (<Col lg= '12' className='text-center'><h5 className='fw-bold'>Loading....</h5></Col> ):(  <Col lg='6' className='m-auto text-center' >
          <h3 className='fw-blid mb-4'>Login</h3>

          <Form className='auth__form' onSubmit={signIn}>
          <FormGroup className='form__group'>
            <input type='username' placeholder='Enter you username'
              value={user} onChange={e=> setUser(e.target.value)}/>
            </FormGroup>

            <FormGroup className='form__group'>
            <input type='password' placeholder='Enter your assword'
              value={password} onChange={e=> setPassword(e.target.value)}
            />
            </FormGroup>
            <button type='submit' className='buy__btn login__btn'>Login</button>
            <p>Don´t have an account? <Link to='/signup'>Creat an account</Link></p>
          </Form>
          </Col>)
         }
        </Row>
      </Container>
      </section>
    </Helmet>
  )
}

export default Login
