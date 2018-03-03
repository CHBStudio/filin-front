import NavLink from 'components/NavLink';
import urls from 'config/urls';

import styles from './styles.scss';


export default () => {
  return <div className={styles.root}>
    <NavLink to={urls.landing} className={styles.link}>Главная</NavLink>
    <NavLink to={urls.offers} className={styles.link}>Арендаторам</NavLink>
    <NavLink to={urls.ps} className={styles.link}>Товары и услуги</NavLink>
  </div>
}