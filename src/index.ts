import { GithubMan, GithubWoman } from './main';

// nimani();

const githubMan: GithubMan = new GithubMan();

const githubWoman: GithubWoman = new GithubWoman();

(async (): Promise<void> => {
  await githubMan.getUsers();
  await githubWoman.getUsers();
})();
