import connect from 'utils/connect'
import { offers, modals } from 'store';
import Title from 'components/Title';
import FirstScreenContainer from 'components/FirstScreenContainer';
import FullSideLoader from 'components/FullSideLoader';

import Offer from './Offer';

import styles from './styles.scss';

@connect({ offers, modals })
export default class extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.actions.offers.startLoading();
  }

  openModalPhotos = (offerData) => () => {
    this.props.actions.modals.setData('modal-photos', offerData);
    this.props.actions.modals.open('modal-photos');
  };

  render(){
    const {offers} = this.props.store;

    if (offers.status === 'loading') {
      return <FirstScreenContainer className={styles.root}>
        <Title className={styles.title}>Арендаторам</Title>
        <div className={styles.container}>
          <FullSideLoader/>
        </div>
      </FirstScreenContainer>
    }

    if (offers.status === 'error') {
      return <FirstScreenContainer className={styles.root}>
        <Title className={styles.title}>Арендаторам</Title>
          <div className={styles.error}>Кажется что-то пошло не так...</div>
      </FirstScreenContainer>
    }

    return <FirstScreenContainer className={styles.root}>
      <Title className={styles.title}>Арендаторам</Title>
      <div className={styles.container}>
        { offers.data.map((offer, index) => <Offer
          key={index}
          img={offer.main_photo}
          area={offer.square}
          floor={offer.floor}
          type={offer.function}
          cost={offer.cost}
          block={offer.housing}
          openModalPhotos={this.openModalPhotos(offer)}
        />) }

        { offers.data.length === 0 && <div className={styles.emptyStub}>
          К сожалению, сейчас нет предложений аренды
        </div> }
      </div>
    </FirstScreenContainer>
  }
}
