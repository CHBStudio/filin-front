import styles from './styles.scss';


export default ({ children, className }) => <a
  className={cn(styles.root, className)}
  href={`mailto:${children}`}
  target="_blank"
>{ children }</a>