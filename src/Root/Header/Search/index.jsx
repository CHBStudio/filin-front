import TextInput from 'components/TextInput';
import Button from 'components/Button';

import styles from './styles.scss';


export default ({ className, value, onChange }) => {
  return <div className={cn(styles.root, className)}>
    <TextInput  value={value} onChange={onChange} className={styles.input}/>
    <Button className={styles.searchBtn}/>
  </div>
}