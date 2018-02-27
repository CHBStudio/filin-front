import Links from './Links';
import Main from './Main';
import Search from './Search';
import Contacts from './Contacts';

import styles from './styles.scss';


export default () => {
  return <div className={styles.root}>
    <Links/>
    <Main/>
    <Search/>
    <Contacts/>
  </div>
}