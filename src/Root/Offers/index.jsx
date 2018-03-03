import connect from 'utils/connect'
import { offers, modals } from 'store';
import Title from 'components/Title';
import FirstScreenContainer from 'components/FirstScreenContainer';
import Spinner from 'components/Spinner';

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
    offerData.photos = [
      'https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?h=350&dpr=2&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?h=350&dpr=2&auto=compress&cs=tinysrgb',
      'https://images.pexels.com/photos/64272/blossom-bloom-flower-red-64272.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
    ];

    this.props.actions.modals.setData('modal-photos', offerData);
    this.props.actions.modals.open('modal-photos');
  };

  render(){
    const {offers} = this.props.store;

    if (offers.status === 'loading') {
      return <FirstScreenContainer className={styles.root}>
        <Title className={styles.title}>Арендаторам</Title>
        <div className={styles.container}>
          <Spinner className={styles.spinner} />
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
          img={`/${offer.photo}`}
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
