// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useState } from 'react'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

// 密碼輸入欄
function Password() {
  // 顯示密碼
  const [showPwd, setShowPwd] = useState(false)

  // 切換密碼顯示
  const togglePassword = () => setShowPwd(!showPwd)

  return (
    <div className={S.pwdContainer}>
      <input name="password" type={showPwd ? 'text' : 'password'} placeholder="Password" />
      <div className={S.pwdState} onClick={togglePassword}>
        <FontAwesomeIcon icon={showPwd ? faEye : faEyeSlash} />
      </div>
    </div>
  )
}

export default Password
