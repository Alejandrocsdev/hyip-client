// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
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

// 登入
function SignUp() {
  const onSubmit = (data) => console.log(data)
  return (
    <main className={S.main}>
      {/* 左邊 */}
      <div className={S.left}>
        <Logo color="white" size="1.5" unlink></Logo>
      </div>

      {/* 右邊 */}
      <div className={S.right}>
        <form className={S.form}>
          <h1 className={S.title}>Sign Up</h1>
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
              <Anchor int="/sign-in">Sign In</Anchor>
            </div>
          </div>
          <Button>Sign Up</Button>
        </form>
      </div>
    </main>
  )
}

export default SignUp
