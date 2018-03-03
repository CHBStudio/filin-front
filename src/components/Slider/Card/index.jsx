import styles from './styles.scss';


export default ({ imgUrl, className }) => {
  return <div
    className={cn(styles.root, className)}
    style={{ backgroundImage: `url(${imgUrl})`
    }}
  />
}