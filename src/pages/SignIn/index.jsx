// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
// import { useTranslation } from 'react-i18next'
// 組件 (component)
// import Anchor from '../../components/Anchor'
import Logo from '../../components/Logo'
import Form from '../../components/Form'

// 登入
function SignIn() {
  return (
    <main className={S.main}>
      <div className={S.left}>
        <Logo site="crypto" color="white"></Logo>
      </div>
      <div className={S.right}>
        <Form />
      </div>
    </main>
  )
}

export default SignIn
