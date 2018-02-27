import Button from 'components/Button';

import styles from './styles.scss';


export default ({ contact, iconUrl }) => {
  return <div className={styles.root}>
    <Button className={styles.btn} css={{ backgroundImage: `url(${iconUrl})` }}/>
    <span className={styles.text}>{ contact }</span>
  </div>
}