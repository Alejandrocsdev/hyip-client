// 函式庫 (library)
import { useState, useEffect } from 'react'
// 自訂函式 (custom function)
import { axiosPrivate as axios } from '../api'

// 取得CAPTCHA
const useCaptchaImg = () => {
  const [captchaSrc, setCaptchaSrc] = useState('')

  const fetchCaptcha = async () => {
    try {
      const response = await axios.get('/auth/captcha', { responseType: 'blob' })
      const imageUrl = URL.createObjectURL(response.data)
      setCaptchaSrc(imageUrl)
    } catch (error) {
      console.error('Error fetching captcha:', error)
    }
  }

  useEffect(() => {
    fetchCaptcha()
  }, [])

  return { captchaSrc, fetchCaptcha }
}

// 驗證CAPTCHA
const useCaptchaVerify = () => {
  const [isVerified, setIsVerified] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const verifyCaptcha = async (captcha) => {
    try {
      const response = await axios.post('/auth/captcha/verify', { captcha })
      if (response.data === 'Captcha verified') {
        setIsVerified(true)
      } else {
        setErrorMessage('Captcha verification failed')
        setIsVerified(false)
      }
    } catch (error) {
      setErrorMessage('Error verifying captcha')
      console.error('Error verifying captcha:', error)
    }
  }

  return { isVerified, verifyCaptcha, errorMessage }
}

export { useCaptchaImg, useCaptchaVerify }
