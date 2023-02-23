import { LocalUser } from 'types';
import styles from './UserTitle.module.scss';

// name
// login
// created - преобразовать в дату и отображать
// intl есть date time format для отображение даты в указанной локали

interface UserTitleProps
  extends Pick<LocalUser, 'name' | 'login' | 'created'> {}

export const UserTitle = ({ name, login, created }: UserTitleProps) => {
  const date = new Date(created);
  const createdDateFormat = new Intl.DateTimeFormat('en-Gb', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);

  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{createdDateFormat}</span>
    </div>
  );
};
