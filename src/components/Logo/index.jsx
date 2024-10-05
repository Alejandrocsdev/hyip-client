// 樣式模組 (css module)
import S from './style.module.css'
// 組件 (component)
import Anchor from '../Anchor'
// 圖檔 (image)
import logoSvg from '../../assets/img/logo/logo.svg'
import logoBlackSvg from '../../assets/img/logo/logo-black.svg'

// Logo
function Logo({ color, style, unlink, onClick }) {
  const content = (
    <>
      <img
        className={S.img}
        src={color === 'white' ? logoSvg : logoBlackSvg}
      />
      <span className={S.text}>
        Crypto
      </span>
    </>
  )

  const linked = (
    <Anchor style={`${S.container} ${style}`} int="/" onClick={onClick}>
      {content}
    </Anchor>
  )

  const unlinked = (
    <div className={`${S.container} ${style}`} onClick={onClick}>
      {content}
    </div>
  )

  return <div className={S.logo}>{unlink ? unlinked : linked}</div>
}

export default Logo
