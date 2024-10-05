// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
// 自訂函式 (custom function)

// 組件 (component)
import Logo from '../../components/Logo'
import Anchor from '../../components/Anchor'
import Button from '../../components/Button'
// import Form from '../../components/Form'
// import Input from '../../components/Input'
import Password from '../../components/Input/Password'
import Captcha from '../../components/Input/Captcha'
import LangSwitch from '../../components/LangSwitch'

// 登入
function SignIn() {
  const onSubmit = (data) => console.log(data)

  return (
    <main className={S.main}>
      {/* 左邊 */}
      <div className={S.left}>
        <Logo color="white" style={S.logo} unlink></Logo>
        <LangSwitch style={S.langSwitch} />
      </div>

      {/* 右邊 */}
      <div className={S.right}>
        <form className={S.form}>
          <h1 className={S.title}>Sign In</h1>
          <input className={S.input} name="username" type="text" placeholder="Username" />
          <Password />
          <Captcha />
          <div className={S.help}>
            <div className={S.message}>
              <span>Forgot Password?</span>
              <Anchor int="/reset">Reset</Anchor>
            </div>
            <div className={S.message}>
              <span>Do not have an account?</span>
              <Anchor int="/sign-up">Sign Up</Anchor>
            </div>
          </div>
          <Button>Sign In</Button>
        </form>
      </div>
      <div className={S.backdrop}></div>
    </main>
  )
}

export default SignIn
