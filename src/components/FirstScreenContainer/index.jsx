import styles from './styles.scss';


export default ({ children, className }) => {
  return <div className={cn(styles.root, className)}>
    { children }
  </div>
}
