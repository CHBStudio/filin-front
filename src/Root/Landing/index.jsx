import propTypes from 'prop-types';

import About from './About';
import Services from './Services';
import Products from './Products';
import Offers from './Offers';
import Contacts from './Contacts';

import styles from './styles.scss';


export default class extends Component{

  static propTypes = {};

  static defaultProps = {};

  constructor(props){
    super(props);
  }

  render(){
    return <div className={styles.root}>
      <div className={styles.screensContainer}>
        <About/>
        <Services/>
        <Products/>
        <Offers/>
        <Contacts/>
      </div>
    </div>
  }
}


