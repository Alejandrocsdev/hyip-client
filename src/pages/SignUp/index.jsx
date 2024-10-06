// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useTranslation } from 'react-i18next'
// 組件 (component)
import Logo from '../../components/Logo'
import Anchor from '../../components/Anchor'
import Button from '../../components/Button'
import Password from '../../components/Input/Password'
import LangSwitch from '../../components/LangSwitch'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// 註冊
function SignUp() {
  // 語言
  const { t } = useTranslation()

  const onSubmit = (data) => console.log(data)
  return (
    <main className={S.main}>
      <div className={S.top}>
        <Logo color="white" style={S.logo} unlink></Logo>
        <Anchor int="/sign-in" style={S.back}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </Anchor>
        <LangSwitch style={S.langSwitch} />
      </div>
      <div className={S.bottom}>
        <form className={S.form}>
          <h1 className={S.title}>Sign Up</h1>
          <div className={S.inputs}>
            <div className={S.labeledInput}>
              <label htmlFor="username">Username</label>
              <input id="username" className={S.input} name="username" type="text" />
            </div>
            <div className={S.labeledInput}>
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" className={S.input} name="fullName" type="text" />
            </div>
            <div className={S.labeledInput}>
              <label htmlFor="nationality">Nationality</label>
              <input id="nationality" className={S.input} name="nationality" type="text" />
            </div>
            <div className={S.labeledInput}>
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" className={S.input} name="phone" type="tel" />
            </div>
            <div className={S.labeledInput}>
              <label htmlFor="email">Email Address</label>
              <input id="email" className={S.input} name="email" type="email" />
            </div>
            <div className={S.labeledInput}>
              <label htmlFor="affiliate">Affiliate Username</label>
              <input id="affiliate" className={S.input} name="affiliate" type="text" />
            </div>
            <div className={S.labeledInput}>
              <label htmlFor="pwd">Password (min 8 alphanumeric)</label>
              {/* <input id="pwd" className={S.input} name="pwd" type="password" /> */}
              <Password id="pwd" name="pwd" />
            </div>
            <div className={S.labeledInput}>
              <label htmlFor="rePwd">Retype Password</label>
              {/* <input id="rePwd" className={S.input} name="rePwd" type="password" /> */}
              <Password id="rePwd" name="rePwd" />
            </div>
            <div className={S.labeledInput}>
              <label htmlFor="trxPwd">Transaction Password (min 8 alphanumeric)</label>
              {/* <input id="trxPwd" className={S.input} name="trxPwd" type="password" /> */}
              <Password id="trxPwd" name="trxPwd" />
            </div>
            <div className={S.labeledInput}>
              <label htmlFor="reTrxPwd">Retype Transaction Password</label>
              {/* <input id="reTrxPwd" className={S.input} name="reTrxPwd" type="password" /> */}
              <Password id="reTrxPwd" name="reTrxPwd" />
            </div>
          </div>
          <div className={S.buttons}>
            <Button style={S.button} contrast>
              Reset
            </Button>
            <Button style={S.button}>Next</Button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default SignUp
