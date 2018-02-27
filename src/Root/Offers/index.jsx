import Title from 'components/Title';

import Offer from './Offer';

import styles from './styles.scss';


export default class extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return <div className={styles.root}>
      <Title className={styles.title}>Арендаторам</Title>
      <div className={styles.container}>
        <Offer
          area="150"
          floor="3"
          type="Магазин"
          cost="97000"
          block="2"
        />
        <Offer
          area="150"
          floor="3"
          type="Магазин"
          cost="97000"
          block="2"
        />
        <Offer
          area="150"
          floor="3"
          type="Магазин"
          cost="97000"
          block="2"
        />
        <Offer
          area="150"
          floor="3"
          type="Магазин"
          cost="97000"
          block="2"
        />
      </div>
    </div>
  }
}