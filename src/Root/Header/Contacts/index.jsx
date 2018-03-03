import settings from 'config/settings';
import PhoneLink from 'components/PhoneLink';
import AddressLink from 'components/AddressLink';
import EmailLink from 'components/EmailLink';

import styles from './styles.scss';


export default () => {
  return <div className={styles.root}>
    <PhoneLink className={styles.infoLine}>{ settings.phone }</PhoneLink>
    <EmailLink className={styles.infoLine}>{ settings.email }</EmailLink>
    <br/>
    <AddressLink className={styles.infoLine}>{ settings.address }</AddressLink>
  </div>
}