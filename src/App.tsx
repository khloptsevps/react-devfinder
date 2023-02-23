import React from 'react';

import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { UserCard } from 'components/UserCard';

import { defaultUser } from 'mock';
import { GithubUser, GithubUserError, LocalUser } from 'types';
import { isGithubUser } from 'utils/typeGuards';
import { extractLocalUser } from 'utils/extract-user';

const BASE_URL = 'https://api.github.com/users/';

const App = () => {
  const [user, setUser] = React.useState<LocalUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const response = await fetch(url);
    const user = (await response.json()) as GithubUser | GithubUserError;

    if (isGithubUser(user)) {
      const localUser = extractLocalUser(user);
      setUser(localUser);
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
};

export default App;
