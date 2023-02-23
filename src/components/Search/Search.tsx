import React from 'react';
import { Button } from 'components/Button';
import styles from './Search.module.scss';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

// описание полей формы, то есть какие элементы она содержит
type FormFields = {
  username: HTMLInputElement;
};

/*
  React.FormEvent<HTMLFormElement & FormFields> - типизация форм ивента,
  говорит о том что он содержит элемент формы + поля. 
  например доступ до инпута username будет доступен по пути e.currentTarget.username.value
  доступ до формы будет e.currentTarget
*/

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const text = e.currentTarget.username.value;
    if (text) {
      onSubmit(text);
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          id="search"
          name="username"
          type="text"
          placeholder="Search GitHub username ..."
          className={styles.textField}
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
