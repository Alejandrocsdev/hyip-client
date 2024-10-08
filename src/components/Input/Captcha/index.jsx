// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useTranslation } from 'react-i18next'
// 自訂函式 (custom function)
import { useCaptchaImg, useCaptchaVerify } from '../../../hooks/useCaptcha'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'

// 表單
function Captcha({ style, onSubmit, children }) {
  // 語言
  const { t } = useTranslation()

  const { captchaSrc, fetchCaptcha } = useCaptchaImg()
  return (
    <div className={S.captchaContainer}>
      <input name="captcha" type="text" placeholder={t('code')} />
      <div className={S.captcha}>
        <img src={captchaSrc} />
      </div>
      <div className={S.refresh} onClick={fetchCaptcha}>
        <FontAwesomeIcon icon={faRotate} />
      </div>
    </div>
  )
}

export default Captcha
