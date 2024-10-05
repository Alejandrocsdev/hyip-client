// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useFormContext, useController } from 'react-hook-form'

// 輸入欄
function Input({ name, type = 'text', style, placeholder, onSubmit }) {
  const { control } = useFormContext()

  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error }
  } = useController({
    name,
    control
  })

  const handleChange = (e) => {
    onChange(e)
    if (onSubmit) {
      onSubmit(e.target.value)
    }
  }

  return (
    <input
      name={name}
      type={type}
      className={`${S.input} ${style}`}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={onBlur}
      ref={ref}
      className={`${S.input} ${error ? S.error : ''}`}
    />
  )
}

export default Input
