import req = require('request-promise');

async function main(): Promise<void> {
  const res: string = await req.get('https://api.github.com/users', {
    headers: { 'User-Agent': 'Chrome' }
  });
  // eslint-disable-next-line no-console
  console.log(JSON.parse(res));

  // eslint-disable-next-line no-console
  console.log('hehe');
}

main();
