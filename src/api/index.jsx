// 函式庫 (library)
import axios from 'axios'

// 環境參數
const { VITE_NODE_ENV, VITE_DEV_BASE_URL, VITE_PROD_BASE_URL } = import.meta.env
// base url
const baseURL = VITE_NODE_ENV === 'production' ? VITE_PROD_BASE_URL : VITE_DEV_BASE_URL

export default axios.create({ baseURL })
