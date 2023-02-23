import { LocalUser } from 'types';

import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import { ReactComponent as CompanyIcon } from 'assets/icon-company.svg';
import { ReactComponent as TwitterIcon } from 'assets/icon-twitter.svg';
import { ReactComponent as WebsiteIcon } from 'assets/icon-website.svg';

import styles from './UserInfo.module.scss';
import { InfoItem, InfoItemProps } from 'components/InfoItem';

interface UserInfoProps
  extends Pick<LocalUser, 'location' | 'twitter' | 'company' | 'blog'> {}

export const UserInfo = ({
  blog,
  twitter,
  location,
  company,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    { icon: <LocationIcon />, text: location, isLink: false },
    { icon: <CompanyIcon />, text: company, isLink: false },
    { icon: <TwitterIcon />, text: twitter, isLink: false },
    { icon: <WebsiteIcon />, text: blog, isLink: true },
  ];
  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};
