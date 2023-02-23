import { UserStat } from 'components/UserStat';
import styles from './UserCard.module.scss';
import { LocalUser } from 'types';

interface UserCardProps extends LocalUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
  </div>
);
