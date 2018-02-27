import Button from 'components/Button';

import styles from './styles.scss';


export default ({ area, cost, type, imgUrl }) => {
  return <div className={styles.root}>
    <div className={styles.img} style={{ backgroundImage: `url(${imgUrl})` }}/>
    <div className={styles.infoContainer}>
      <span className={styles.paramLine}>Площадь: <b>{area}</b> м2</span>
      <span className={styles.paramLine}>Цена аренды: <b>{cost}</b> ₽</span>
      <span className={styles.paramLine}>Назначение: <b>{type}</b></span>
    </div>
    <Button className={styles.btn}>Подробнее</Button>
  </div>
}