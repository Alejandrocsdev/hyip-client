// 樣式模組 (css module)
import S from './style.module.css'

// 按鈕
function Button({ style, type = 'submit', disabled, children }) {
  return (
    <button className={`${S.button} ${style}`} type={type} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
