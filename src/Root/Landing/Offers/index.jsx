import Title from 'components/Title';
import Button from 'components/Button';
import history from 'utils/history';
import urls from 'config/urls';

import BaseScreen from '../components/BaseScreen';
import OfferCard from './OfferCard';
import testImgUrl from './img/testImg.jpg';

import styles from './styles.scss';


export default () => {

  const data = [
    { area: '81,2', cost: '97440', type: 'магазин', imgUrl: testImgUrl },
    { area: '81,2', cost: '97440', type: 'магазин', imgUrl: testImgUrl },
    { area: '81,2', cost: '97440', type: 'магазин', imgUrl: testImgUrl },
  ];

  return <BaseScreen className={styles.root}>
    <Title className={styles.title}>Арендаторам</Title>
    <Button
      className={styles.btn}
      onClick={() => history.push(urls.offers)}
    >
      Все предложения
    </Button>
    <p className={styles.text}>
      Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."
    </p>
    <div className={styles.container}>
      { data.map((offerData, index) => {
        return <OfferCard
          key={index}
          area={offerData.area}
          cost={offerData.cost}
          type={offerData.type}
          imgUrl={offerData.imgUrl}
        />
      }) }
    </div>
  </BaseScreen>
}