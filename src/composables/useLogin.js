import { Directus } from '@directus/sdk'
const directus = new Directus('http://170.187.254.205:8055/')

const login = async (emailVal, passwordVal) => {
  // AUTHENTICATION

  let authenticated = false

  // Let's login in case we don't have token or it is invalid / expired
  const email = emailVal
  const password = passwordVal
  console.log('email' + emailVal + 'pass' + passwordVal)

  if (!authenticated) {
    const headers = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
    await directus.auth
      .login({ email, password }, { mode: 'cors', headers })
      .then(() => {
        authenticated = true
        console.log('logged in !!!')
      })
      .catch((err) => {
        console.log(err, 'error')
      })
  }

  // GET DATA
}

const useLogin = () => {
  return { login }
}

export default useLogin
