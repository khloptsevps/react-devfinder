import React from 'react';

import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { UserCard } from 'components/UserCard';

import { user } from 'mock';

const App = () => {
  return (
    <Container>
      <Header />
      <Search
        hasError
        onSubmit={(text) => {
          console.log(text);
        }}
      />
      <UserCard {...user} />
    </Container>
  );
};

export default App;
