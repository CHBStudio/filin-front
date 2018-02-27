import styles from './styles.scss';


export default () => {
  return <div className={styles.root}>
    <span className={styles.infoLine}>+7 498 657-01-26</span>
    <span className={styles.infoLine}>hello@tsk-filin.ru</span>
    <br/>
    <span className={styles.infoLine}>Москва, 23 км МКАД, владение 3, стр. 2</span>
  </div>
}