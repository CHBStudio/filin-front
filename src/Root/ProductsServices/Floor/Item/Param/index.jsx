import styles from './styles.scss';


export default ({ title, children }) => {
  return <div className={styles.root}>
    <div className={styles.title}>{ title }</div>
    { children }
  </div>
}