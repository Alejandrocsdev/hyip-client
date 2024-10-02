// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useEffect, useState } from 'react'
// 自訂函式 (custom function)
import { useCaptchaImg, useCaptchaVerify } from '../../hooks/useCaptcha'
// 組件 (component)
// import Logo from '../Logo'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'

// 表單
function Form() {
  const { captchaSrc, fetchCaptcha } = useCaptchaImg()
  const { isVerified, verifyCaptcha, errorMessage } = useCaptchaVerify()
  const [captchaInput, setCaptchaInput] = useState('')

  const handleSubmit = () => verifyCaptcha(captchaInput)
  

  return (
    <div className={S.container}>
      {/* <form action=""> */}
      <div className={S.captchaInput}>
        <input
          type="text"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          placeholder="Enter CAPTCHA"
        />
        <div className={S.captchImg}>
          <img src={captchaSrc} />
          {/* <div dangerouslySetInnerHTML={{ __html: captchaSrc }} /> */}
        </div>
        <div className={S.refreshImg} onClick={fetchCaptcha}>
          <FontAwesomeIcon icon={faRotate} />
        </div>
      </div>

      <button className={S.submit} type="button" onClick={handleSubmit}>
        Submit
      </button>
      {isVerified ? <p>CAPTCHA Verified</p> : <p>{errorMessage}</p>}
      {/* </form> */}
    </div>
  )
}

export default Form
