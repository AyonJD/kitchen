'use client'

import { Box, Button, Link, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { BiSolidLockOpen } from 'react-icons/bi'

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setLoginData(prev => ({ ...prev, [name]: value }))
  }

  const handleLogin = async () => {
    setLoading(true)
    if (loginData.email === '' || loginData.password === '') {
      toast.error('Please fill in all fields')
      setLoading(false)
      return
    } else if (
      loginData.email !== 'demo@gmail.com' ||
      loginData.password !== '123456'
    ) {
      toast.error('Wrong email or password')
      setLoading(false)
      return
    }

    try {
      // Simulate successful login by setting a flag in localStorage
      setTimeout(() => {
        setLoading(false)
        window.localStorage.setItem('isAuthenticated', true)
        window.location.href = '/'
      }, 3000)
    } catch (error) {
      console.error('Error logging in:', error)
      toast.error('An error occurred. Please try again later.')
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(90deg, rgba(98, 52, 5, 1) 0%, rgba(156, 82, 8, 1) 100%)',
      }}
    >
      {/* LockOpen Icon */}
      <Box
        sx={{
          position: 'relative',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '10px',
          padding: '25px',
          width: '25rem',
          backdropFilter: 'blur(10px)',
        }}
      >
        <BiSolidLockOpen
          size={62}
          color="#623405"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            background: 'white',
            borderRadius: '50%',
            padding: '10px',
            border: '4px solid gray',
            position: 'absolute',
            top: '-30px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />

        <Typography
          varient="h1"
          sx={{
            textAlign: 'center',
            color: 'white',
            marginTop: '30px',
            marginBottom: '20px',
            fontSize: '1.8rem',
            fontWeight: 'bold',
          }}
        >
          Login to Continue
        </Typography>
        <Box sx={{ marginBottom: '1rem' }}>
          <TextField
            fullWidth
            size="small"
            label="Email address"
            name="email"
            onChange={handleChange}
            type="email"
            value={loginData.email}
            variant="outlined"
            sx={{
              borderRadius: '10px',
            }}
          />
        </Box>
        <Box sx={{ marginBottom: '1rem' }}>
          <TextField
            fullWidth
            size="small"
            label="Password"
            name="password"
            onChange={handleChange}
            type="password"
            value={loginData.password}
            variant="outlined"
            sx={{ borderRadius: '10px' }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '1rem',
          }}
        >
          <Link
            href="/#"
            variant="body2"
            sx={{ color: 'white', fontWeight: 'bold' }}
            className="text-white font-bold"
          >
            Forgot Password
          </Link>
        </Box>
        <Button
          onClick={handleLogin}
          sx={{
            width: '100%',
            background: '#623405',
            color: 'white',
            ':hover': {
              background: 'gray',
            },
          }}
          varient="contained"
        >
          {loading ? (
            <div role="status">
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            'Login'
          )}
        </Button>
      </Box>
    </Box>
  )
}
