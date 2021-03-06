import Title from 'components/Title';
import history from 'utils/history';

import styles from './styles.scss';


export default ({ imgUrl, title, text, iconClassName, url }) => {
  return <div
    className={styles.root}
    onClick={() => history.push(url)}
  >
    <div
      className={cn(
        styles.img,
        iconClassName
      )}
      style={{ backgroundImage: `url(${imgUrl})` }}
    />
    <Title tag="h4" className={styles.title}>{ title }</Title>
    {/*<p className={styles.text}>{ text }</p>*/}
  </div>
}