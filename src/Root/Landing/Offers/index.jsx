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

    if(isLoaded && data.length === 0){
      return null;
    }

    return <BaseScreen className={styles.root}>
      <Title className={styles.title}>Арендаторам</Title>
      { !window.__IS_MOBILE__ && <Button
        className={styles.btn}
        onClick={() => history.push(urls.offers)}
      >
        Все предложения
      </Button> }
      <p className={styles.text}>
        Предлагаются в аренду следующие торговые и офисные площади
      </p>
      { isLoading && <FullSideLoader/> }
      { isLoaded && <div className={styles.container}>
        { data.map((offerData, index) => {
          return <OfferCard
            data={offerData}
            key={index}
          />
        }) }
      </div> }
    </BaseScreen>
  }
}