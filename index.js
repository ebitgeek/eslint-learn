const rep = require('request-promise')

async function main () {
  try {
    const res = await rep.get('https://api.github.com/users', {
      headers: { 'User-Agent': 'Chrome' },
      rejectUnauthorized: false,
      followAllRedirects: true
    })
    const users = JSON.parse(res)
    console.log(users)
  } catch (err) {
    console.log(Error(err))
  }
}

main()
