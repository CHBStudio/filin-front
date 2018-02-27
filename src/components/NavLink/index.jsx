import { NavLink } from 'react-router-dom';

import styles from './styles.scss';


export default ({ children, className, to }) => {
  return <NavLink
    className={cn(styles.root, className)}
    to={to}
    activeClassName={styles.rootActive}
  >{ children }</NavLink>
}