import Title from 'components/Title';
import Button from 'components/Button';
import history from 'utils/history';
import urls from 'config/urls';
import { landingOffers } from "store";
import connect from 'utils/connect';
import FullSideLoader from 'components/FullSideLoader';

import BaseScreen from '../components/BaseScreen';
import OfferCard from './OfferCard';
import testImgUrl from './img/testImg.jpg';

import styles from './styles.scss';


@connect({ landingOffers })
export default class extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.actions.landingOffers.startLoad();
  }

  render(){
    const { status, data } = this.props.store.landingOffers;
    const isLoading = status === 'loading';
    const isLoaded = status === 'loaded';

    return <BaseScreen className={styles.root}>
      <Title className={styles.title}>Арендаторам</Title>
      { !window.__IS_MOBILE__ && <Button
        className={styles.btn}
        onClick={() => history.push(urls.offers)}
      >
        Все предложения
      </Button> }
      <p className={styles.text}>
        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."
      </p>
      { isLoading && <FullSideLoader/> }
      { isLoaded && <div className={styles.container}>
        { data.map((offerData, index) => {
          return <OfferCard
            data={offerData}
            key={index}
          />
        }) }
        { window.__IS_MOBILE__ && <Button
          className={styles.btn}
          onClick={() => history.push(urls.offers)}
        >
          Все предложения
        </Button> }
      </div> }
    </BaseScreen>
  }
}