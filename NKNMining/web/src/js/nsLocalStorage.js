const REQUEST_KEY = 'ns_request_key'
const WALLET_KEY = 'ns_wallet_key'

const WALLET = 'ns_wallet'
const WALLET_ADDRESS = 'ns_wallet_address'

const LANG = 'ns_lang'


let setReqKey = function (key) {
  window.localStorage.setItem(REQUEST_KEY, key)
}

let clearReqKey = function () {
  window.localStorage.removeItem(REQUEST_KEY)
}

let getReqKey = function () {
  return window.localStorage.getItem(REQUEST_KEY)
}

let setWallet = function (wallet, address) {
  window.localStorage.setItem(WALLET, wallet)
  window.localStorage.setItem(WALLET_ADDRESS, address)
}

let getWallet = function () {
  return window.localStorage.getItem(WALLET)
}

let getWalletAddress = function () {
  return window.localStorage.getItem(WALLET_ADDRESS)
}

let clear = function () {
  window.localStorage.removeItem(REQUEST_KEY)
  window.localStorage.removeItem(WALLET_KEY)
  window.localStorage.removeItem(WALLET)
  window.localStorage.removeItem(WALLET_ADDRESS)
  window.localStorage.removeItem(LANG)
}

let logout = function () {
  window.localStorage.removeItem(WALLET)
}

let checkInit = function () {
  return null !== window.localStorage.getItem(REQUEST_KEY)
}

let checkLogin = function () {
  return null !== window.localStorage.getItem(WALLET)
}

let setLogin = function (wallet, address) {
  setWallet(wallet, address)
}

let setLanguage = function (lang) {
  window.localStorage.setItem(LANG, lang)
}

let getLanguage = function () {
  return window.localStorage.getItem(LANG)
}


export default {
  setReqKey,
  getReqKey,
  clearReqKey,
  setWallet,
  getWallet,
  getWalletAddress,

  setLanguage,
  getLanguage,

  clear,
  logout,
  checkInit,
  checkLogin,
  setLogin,
}