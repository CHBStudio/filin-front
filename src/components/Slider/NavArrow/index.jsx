import Button from 'components/Button';

import styles from './styles.scss';


export default (side) => ({ onClick=()=>{} }) => {
  return <Button
    className={cn(
      styles.root,
      side === 'left' && styles.rootLeft,
      side === 'right' && styles.rootRight,
    )}
    onClick={onClick}
  >
    <span className={cn(
      styles.icon,
      side === 'left' && styles.iconLeft,
      side === 'right' && styles.iconRight,
    )}/>
  </Button>
}