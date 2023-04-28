import { Directus } from '@directus/sdk'
const directus = new Directus('http://170.187.254.205:8055/')

const start = async (e, p) => {
  // AUTHENTICATION

  let authenticated = false

  // Try to authenticate with token if exists
  //   await directus.auth
  //     .refresh()
  //     .then(() => {
  //       authenticated = true
  //     })
  //     .catch(() => {})

  // Let's login in case we don't have token or it is invalid / expired
  const email = e
  const password = p
  console.log('email' + e + 'pass' + p)

  if (!authenticated) {
    await directus.auth
      .login({ email, password })
      .then(() => {
        authenticated = true
        console.log('logged in !!!')
      })
      .catch((i) => {
        console.log(i, 'error')
      })
  }

  // GET DATA

  // After authentication, we can fetch data from any collections that the user has permissions to.
  //   const privateData = await directus.items('some_private_collection').readByQuery({ sort: ['id'] })

  //   console.log(privateData.data)
}

export default start
