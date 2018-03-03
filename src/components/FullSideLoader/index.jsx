import Spinner from 'components/Spinner';

import styles from './styles.scss';


export default ({ className }) => {
  return <Spinner className={cn(styles.root, className)}/>
}