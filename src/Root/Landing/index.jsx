import propTypes from 'prop-types';

import Header from './Header';
import About from './About';

import styles from './styles.scss';


export default class extends Component{

  static propTypes = {};

  static defaultProps = {};

  constructor(props){
    super(props);
  }

  render(){
    return <div className={styles.root}>
      <Header/>
      <div className={styles.screensContainer}>
        <About/>
      </div>
    </div>
  }
}


