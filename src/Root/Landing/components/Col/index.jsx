import Title from 'components/Title';

import styles from './styles.scss';


export default ({ imgUrl, title, text, iconClassName }) => {
  return <div className={styles.root}>
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