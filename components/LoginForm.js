/* eslint-disable react/no-unescaped-entities */
import { Form, Button, Spinner } from 'react-bootstrap'
import styles from '../styles/Form.module.scss'
import { useForm } from 'react-hook-form'
import authService from '../services/auth'
import { React, useState } from 'react'
import { signIn } from 'next-auth/client'

export default function LoginForm () {
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false)
  const onSubmit = async (data) => {
    try {
      setLoading(true)
      const loginUsuario = await authService.LoginUser(data)
      signIn('signin-credentials', { token: loginUsuario.token, color: 'blue' })
      console.log(loginUsuario)
    } catch (error) {
      console.log(error, 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
        <div className={styles['login-form-container']}>
            <Form onSubmit={handleSubmit(onSubmit)} className={styles['login-form']}>
              <h2 className={styles['login-form-title']}>L<img src={ '/assets/img/pokeball.svg' } />gin</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" {...register('email', { required: true })} type="email" placeholder="Enter email" />
                <Form.Text>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" {...register('password', { required: true })} placeholder="Password" />
              </Form.Group>
              <div className={styles['login-form-submit']}>
                 <Button variant="primary" type="submit">
                   {
                     loading
                       ? <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                     </Spinner>
                       : 'Submit'
                   }
                 </Button>
              </div>
            </Form>
        </div>
  )
}
