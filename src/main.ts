import * as req from 'request-promise';

async function nimani(): Promise<void> {
  const res: string = await req.get('https://api.github.com/users', { headers: { 'User-Agent': 'Chrome' } });
  const hehe: string[] = ['a', 'b', 'c'];
  // eslint-disable-next-line no-console
  console.log(JSON.parse(res));
  // eslint-disable-next-line no-console
  console.log(hehe);
}

export class GithubMan {
  private githubUsersUri: string = 'https://api.github.com/users';

  public constructor(githubUsersUri?: string) {
    this.githubUsersUri = githubUsersUri || this.githubUsersUri;
  }

  /**
   * 打印输出 Github Users 的信息
   *
   * @returns {Promise<void>}
   * @memberof GithubMan
   * @deprecated
   */
  public async getUsers(): Promise<void> {
    const res: string = await req.get(this.githubUsersUri, { headers: { 'User-Agent': 'Chrome' } });
    const hehe: string[] = ['a', 'b', 'c'];
    // eslint-disable-next-line no-console
    console.log(JSON.parse(res));
    // eslint-disable-next-line no-console
    console.log(hehe);
  }
}

export default nimani;
