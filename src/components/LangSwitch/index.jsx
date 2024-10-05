// 樣式模組 (css module)
import S from './style.module.css'
// 函式庫 (library)
import { useTranslation } from 'react-i18next'
import { useState, useRef, useEffect } from 'react'
// 自訂函式 (custom function)
import useBodyScroll from '../../hooks/useBodyScroll'
import useClickOutside from '../../hooks/useClickOutside'
// 組件 (component)
import LangDrop from './LangDrop'
import AngleDownSvg from '../Svg/dropdown/AngleDownSvg'

// 選單組件
function LangSwitch({ style }) {
  // 語言設定
  const { i18n } = useTranslation()
  // 當前語言
  const currentLang = i18n.language

  const [isOpened, setIsOpened] = useState(false)
  const [hasBackdrop, setHasBackdrop] = useState(false)

  const openStates = { isOpened, setIsOpened }
  const containerRef = useRef(null)

  const toggleDropdown = () => setIsOpened((prev) => !prev)

  useBodyScroll(isOpened)

  useClickOutside(containerRef, () => {
    if (isOpened) toggleDropdown()
  })

  useEffect(() => setHasBackdrop(isOpened), [isOpened, setHasBackdrop])

  return (
    <>
      {/* 語言按鈕 */}
      <div className={`${S.container} ${style}`} ref={containerRef} onClick={toggleDropdown}>
        {/* 語言按鈕 */}
        <button className={S.langBtn}>
          <span>{currentLang}</span>
          <AngleDownSvg style={`${S.angleDown} ${isOpened ? S.arrowRotate : ''}`} />
        </button>
        {/* 語言列表 */}
        <LangDrop states={openStates} currentLang={currentLang} />
      </div>

      {/* backdrop */}
      <div className={`${S.backdrop} ${hasBackdrop ? S.showBackdrop : ''}`}></div>
    </>
  )
}

export default LangSwitch
