import { UserStat } from 'components/UserStat';
import styles from './UserCard.module.scss';
import { LocalUser } from 'types';
import { UserTitle } from 'components/UserTitle';
import { UserInfo } from 'components/UserInfo';

interface UserCardProps extends LocalUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img className={styles.avatar} src={props.avatar} alt={props.name} />
    <UserTitle name={props.name} created={props.created} login={props.login} />
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio ? props.bio : 'This profile has no bio'}
    </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo
      blog={props.blog}
      location={props.location}
      twitter={props.twitter}
      company={props.company}
    />
  </div>
);
