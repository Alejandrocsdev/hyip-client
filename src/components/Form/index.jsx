// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters long'),
  password: z.string().min(6, 'Password must be at least 6 characters long')
})

// 表單
function Form({ style, onSubmit, children }) {
  const methods = useForm({
    resolver: zodResolver(schema)
  })

  return (
    <FormProvider {...methods}>
      <form className={`${S.form} ${style}`} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form

// const {
//   // useForm methods
//   register,
//   // const { onChange, onBlur, name, ref } = register('identifier');
//   // <input {...register('identifier')} />
//   unregister,
//   formState: {
//     isDirty,
//     dirtyFields,
//     touchedFields,
//     defaultValues,
//     isSubmitted,
//     isSubmitSuccessful,
//     isSubmitting,
//     isLoading,
//     submitCount,
//     isValid,
//     isValidating,
//     validatingFields,
//     errors
//   },
//   watch,
//   handleSubmit,
//   reset,
//   resetField,
//   setError,
//   clearErrors,
//   setValue,
//   setFocus,
//   getValues,
//   getFieldState,
//   trigger,
//   control,
//   Form
// } = useForm({
//   // useForm props
//   mode,
//   reValidateMode,
//   defaultValues,
//   values,
//   errors,
//   resetOptions,
//   criteriaMode,
//   shouldFocusError,
//   delayError,
//   shouldUseNativeValidation,
//   shouldUnregister
// })
