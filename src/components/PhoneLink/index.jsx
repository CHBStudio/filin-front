import styles from './styles.scss';


export default ({ children, className='' }) => {
  return <a
    href={`tel:${children}`}
    className={cn(styles.root, className)}
    target="_blank"
  >
    { children }
  </a>;
}