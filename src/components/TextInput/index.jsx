import styles from './styles.scss';


export default ({ value='', onChange=()=>{}, className, placeholder='' }) => {
  return <input
    type="text"
    className={cn(styles.root, className)}
    onChange={onChange}
    // value={value}
    placeholder={placeholder}
  />
}