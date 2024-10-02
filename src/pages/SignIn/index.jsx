// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
// import { useEffect, useState } from 'react'
// 自訂函式 (custom function)
// import { useCaptchaImg, useCaptchaVerify } from '../../hooks/useCaptcha'
// 組件 (component)
import Logo from '../../components/Logo'
import Form from '../../components/Form'
// Font Awesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRotate } from '@fortawesome/free-solid-svg-icons'

// 登入
function SignIn() {
  // const { captchaSrc, fetchCaptcha } = useCaptchaImg()
  // const { isVerified, verifyCaptcha, errorMessage } = useCaptchaVerify()
  // const [captchaInput, setCaptchaInput] = useState('')

  // const handleSubmit = () => {
  //   verifyCaptcha(captchaInput)
  // }

  return (
    <main className={S.main}>
      <div className={S.left}>
        <Logo site="crypto" color="white"></Logo>
      </div>
      <div className={S.right}>
        <Form />
        {/* <FontAwesomeIcon icon={faRotate} />
        <img src={captchaSrc} />
        <button onClick={fetchCaptcha}>Refresh Captcha</button>
        <input
          type="text"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          placeholder="Enter CAPTCHA"
        />
        
        <button onClick={handleSubmit}>Submit</button>
        {isVerified ? <p>CAPTCHA Verified</p> : <p>{errorMessage}</p>} */}
      </div>
    </main>
  )
}

export default SignIn
