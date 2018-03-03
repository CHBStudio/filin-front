import Button from 'components/Button';

import styles from './styles.scss';


export default (side, className) => ({ onClick=()=>{} }) => {
  return <Button
    className={cn(
      styles.root,
      side === 'left' && styles.rootLeft,
      side === 'right' && styles.rootRight,
      className,
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