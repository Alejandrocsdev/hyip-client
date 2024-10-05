// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useTranslation } from 'react-i18next'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
// 組件 (component)
import LangFlag from '../../LangFlag'
import TriangleSvg from '../../Svg/dropdown/TriangleSvg'

function LangDrop({ states, currentLang }) {
  // 語言翻譯 / 語言設定
  const { i18n } = useTranslation()
  // 路徑語言
  const { lang } = useParams()
  // 導航功能 / 路徑功能
  const navigate = useNavigate()
  const location = useLocation()

  const switchLang = (newLang) => {
    i18n.changeLanguage(newLang)
    const currentPath = location.pathname
    const newPath = currentPath.replace(`/${lang}`, `/${newLang}`)
    navigate(newPath)
    // 切換語言即關閉選單
    setIsOpened(false)
  }

  // 選單狀態控制
  const { isOpened, setIsOpened } = states

  return (
    <ul className={`${S.dropdown} ${isOpened ? S.showDrop : ''}`} onClick={(e) => e.stopPropagation()}>
      <li>
        <button onClick={() => switchLang('en')}>
          <LangFlag style={S.langFlag} type="us" />
          <span className={currentLang === 'en' ? S.active : ''}>English</span>
        </button>
      </li>
      <li>
        <button onClick={() => switchLang('ru')}>
          <LangFlag style={S.langFlag} type="ru" />
          <span className={currentLang === 'ru' ? S.active : ''}>Русский</span>
        </button>
      </li>
      <li>
        <button onClick={() => switchLang('et')}>
          <LangFlag style={S.langFlag} type="ee" />
          <span className={currentLang === 'et' ? S.active : ''}>Eesti</span>
        </button>
      </li>
      {/* 延伸動畫選單三角形圖案 */}
      <TriangleSvg style={S.triangle} />
    </ul>
  )
}

export default LangDrop
