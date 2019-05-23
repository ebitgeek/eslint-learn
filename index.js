const rep = require('request-promise')

async function main () {
  try {
    const res = await rep.get('https://api.github.com/users', {
      rejectUnauthorized: false,
      resolveWithFullResponse: true,
      followAllRedirects: true
    })
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

main()
