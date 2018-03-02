import { NavLink } from 'react-router-dom';

import urls from 'config/urls';

import styles from './styles.scss';


export default ({ filterId, children, type }) => {
  const url = type === 'products' ? urls.psProducts(filterId) : urls.psServices(filterId);

  return <NavLink
    className={styles.root}
    activeClassName={styles.rootActive}
    to={url}
  >
    { children }
  </NavLink>
}