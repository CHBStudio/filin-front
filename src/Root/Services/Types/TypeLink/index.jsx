import { NavLink } from 'react-router-dom';

import urls from 'config/urls';

import styles from './styles.scss';


export default ({ typeId, children }) => {
  return <NavLink
    className={styles.root}
    activeClassName={styles.rootActive}
    to={'/'}
  >
    { children }
  </NavLink>
}