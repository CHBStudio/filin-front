import connect from 'utils/connect'
import {offers} from 'store';
import Title from 'components/Title';
import FirstScreenContainer from 'components/FirstScreenContainer';
import Spinner from 'components/Spinner';

import Offer from './Offer';

import styles from './styles.scss';

@connect({ offers })
export default class extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
      this.props.actions.offers.startLoading();
  }
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
        { offers.data.map((item) => <Offer
          key={item.id}
          img={`/${item.photo}`}
          area={item.square}
          floor={item.floor}
          type={item.function}
          cost={item.cost}
          block={item.housing}
        />) }

      </div>
    </FirstScreenContainer>
  }
}
