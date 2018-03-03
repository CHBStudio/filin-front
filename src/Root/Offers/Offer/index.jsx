import Button from 'components/Button';
import Title from 'components/Title';

import styles from './styles.scss';


export default ({
  img,
  area,
  floor,
  type,
  cost,
  block,
  openModalPhotos,
}) => {
  return <div className={styles.root}>
    <div
      className={styles.img}
      style={{backgroundImage: `url(${img})`}}
    />
    <div className={styles.info}>
      <Title className={styles.title}>
        { area } м<sup>2</sup>, { floor } этаж
      </Title>
      <div className={styles.params}>
        <span className={styles.param}>
          Назначение помещения: <b>{ type }</b>
        </span>
        <span className={styles.param}>
          Площадь: <b>{ area } м<sup>2</sup></b>
        </span>
        <span className={styles.param}>
          Цена аренды помещ./мес: <b>{ cost } ₽</b>
        </span>
        <span className={styles.param}>
          Этаж: <b>{ floor }</b>
        </span>
        { block && <span className={styles.param}>
            Корпус: <b>{ block }</b>
          </span>}
      </div>
      <Button
        className={styles.btn}
        onClick={openModalPhotos}
      >
        Фотографии
      </Button>
    </div>
  </div>
}
