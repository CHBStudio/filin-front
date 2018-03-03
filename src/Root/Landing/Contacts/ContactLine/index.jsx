import Button from 'components/Button';
import settings from 'config/settings';

import phoneIconUrl from './img/phone.svg';
import emailIconUrl from './img/email.svg';
import addressIconUrl from './img/address.svg';

import styles from './styles.scss';


export default ({ type }) => {

  let iconUrl = null;
  let contact = null;
  let href = null;

  if(type === 'phone') {
    iconUrl = phoneIconUrl;
    contact = settings.phone;
    href = `tel:${settings.phone}`
  }

  if(type === 'email'){
    iconUrl = emailIconUrl;
    contact = settings.email;
    href = `mailto:${settings.email}`
  }

  if(type === 'address'){
    iconUrl = addressIconUrl;
    contact = settings.address;
    href = `http://maps.yandex.ru/?text=${settings.address}`
  }

  return <div className={styles.root}>
    <a href={href} target="_blank">
      <Button className={styles.btn} css={{ backgroundImage: `url(${iconUrl})` }}/>
    </a>
    <span className={styles.text}>{ contact }</span>
  </div>
}