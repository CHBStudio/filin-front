import styles from './styles.scss';


export default ({ imgUrl }) => {
  return <div className={styles.root} style={{ backgroundImage: `url(${imgUrl})` }}/>
}