// 樣式
import './global.css'
import './fonts.css'
// 語言工具
import i18n from './utils/i18n'
// 函式庫 (library)
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom'
// 佈局組件
import Layout from './Layout'
// 頁面
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
// 導向置頂組件
import ScrollToTop from './components/ScrollToTop'

const LangRoutes = () => {
  // path="/:lang/*"
  const { lang } = useParams()

  useEffect(() => {
    if (['en', 'ru', 'et'].includes(lang)) {
      i18n.changeLanguage(lang)
    }
  }, [lang])

  // 使用 useEffect:
  // 確保"語言變更"發生在元件渲染完成後，
  // 而不是在渲染過程中直接修改狀態。如果在渲染時直接修改語言狀態，
  // 可能會導致 React 的錯誤（例如在渲染中調用 setState）。
  // 使用 useEffect 可以避免無限重複渲染的問題，
  // 並確保語言切換等副作用在適當的時間點執行，
  // 保持元件的渲染邏輯純淨和穩定。

  if (!['en', 'ru', 'et'].includes(lang)) {
    return <Navigate to={`/${i18n.language}`} replace />
  }

  // 使用 replace:
  // 返回上一頁不會回到錯誤路徑

  return (
    <Routes>
      
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />

      <Route path="/" element={<Layout />}>
      </Route>

    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>

      {/* 導向置頂 */}
      <ScrollToTop />

      <Routes>
        <Route path="/:lang/*" element={<LangRoutes />} />
        <Route path="*" element={<Navigate to={`/${i18n.language}`} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
