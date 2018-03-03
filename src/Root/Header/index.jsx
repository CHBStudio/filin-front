import Links from './Links';
import Main from './Main';
import Contacts from './Contacts';

import styles from './styles.scss';


export default () => {
  return <div className={styles.root}>
    <Main/>
    <Links/>
    { !window.__IS_MOBILE__ && <Contacts/> }
  </div>
}