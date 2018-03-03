import styles from './styles.scss';


export default ({ children, className }) => <a
  className={cn(styles.root, className)}
  href={`http://maps.yandex.ru/?text=${children}`}
  target="_blank"
>{ children }</a>