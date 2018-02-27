import styles from './styles.scss';


export default ({ className, css={}, children }) => {
  return <div className={cn(styles.root, className)} style={css}>
    { children }
  </div>
}