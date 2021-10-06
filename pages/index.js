/* eslint-disable react/react-in-jsx-scope */
import { useSession } from 'next-auth/client'
import LoginForm from '../components/LoginForm'
import styles from '../styles/Form.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Login () {
  const [session] = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session) {
      router.push('/home')
    }
  }, [router, session])
  return (
        <div className={styles['login-container']}>
            <LoginForm />
        </div>

  )
}
