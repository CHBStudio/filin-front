import Button from 'components/Button';
import Title from 'components/Title';

import styles from './styles.scss';


export default ({ area, floor, type, cost, block }) => {
  return <div className={styles.root}>
    <div className={styles.img}/>
    <div className={styles.info}>
      <Title className={styles.title}>{ area } м2, { floor } этаж</Title>
      <div className={styles.params}>
        <span className={styles.param}>
          Назначение помещения: <b>{ type }</b>
        </span>
        <span className={styles.param}>
          Площадь: <b>{ area } м2</b>
        </span>
        <span className={styles.param}>
          Цена аренды помещ./мес: <b>{ cost } ₽</b>
        </span>
        <span className={styles.param}>
          Этаж: <b>{ floor }</b>
        </span>
        <span className={styles.param}>
          Корпус: <b>{ block }</b>
        </span>
      </div>
      <Button className={styles.btn}>Фотографии</Button>
    </div>
  </div>
}