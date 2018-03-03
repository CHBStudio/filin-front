import Button from 'components/Button';
import { modals } from 'store';
import connect from 'utils/connect';

import styles from './styles.scss';


const OfferCard = ({ data, actions }) => {

  const onClickPhotos = () => {
    actions.modals.setData('modal-photos', data);
    actions.modals.open('modal-photos');
  };

  return <div className={styles.root}>
    <div className={styles.img} style={{ backgroundImage: `url(${data.main_photo})` }}/>
    <div className={styles.infoContainer}>
      <span className={styles.paramLine}>Этаж: <b>{data.floor}</b></span>
      <span className={styles.paramLine}>Площадь: <b>{data.square}</b> м<sup>2</sup></span>
      <span className={styles.paramLine}>Назначение: <b>{data.function}</b></span>
      <span className={styles.paramLine}>Цена аренды: <b>{data.cost}</b> ₽</span>
    </div>
    <Button
      className={styles.btn}
      onClick={onClickPhotos}
    >Фотографии</Button>
  </div>
};


export default connect({ modals })(OfferCard);