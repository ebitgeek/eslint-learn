import rp = require('request-promise-native');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ProxyAgent = require('proxy-agent');

async function getTester(): Promise<void> {
  const options: rp.RequestPromiseOptions = {
    agent: new ProxyAgent('socks5://127.0.0.1:1080'),
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' +
      ' AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
      'Accept': 'text/html',
      'Accept-Encoding': 'utf-8',
      'Accept-Language': 'zh-CN,zh;q=0.9'
    },
    // proxy: 'http://127.0.0.1:8080',
    rejectUnauthorized: false
  };
  const res = await rp.get('https://www.xvideos.com', options);
  // eslint-disable-next-line no-console
  console.log(res);
}

(async (): Promise<void> => {
  await getTester();
})();
