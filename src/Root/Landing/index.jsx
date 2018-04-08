import About from './About';
import Products from './Products';
import Services from './Services';
import Description from './Description';
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
        <Products/>
        <Services/>
        <Description/>
        <Offers/>
        <Contacts/>
      </div>
    </div>
  }
}


