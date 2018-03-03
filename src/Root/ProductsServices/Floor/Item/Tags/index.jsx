import styles from './styles.scss';


export default ({ tags }) => {
  return <div className={styles.root}>
    { tags.map((tag, index) => {
      return <span
        key={index}
        className={styles.tag}
      >{ tag.title }</span>
    }) }
  </div>
}