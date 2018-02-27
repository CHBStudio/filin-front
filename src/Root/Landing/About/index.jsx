import BaseScreen from '../components/BaseScreen';
import Slider from './Slider';
import Description from './Description';

import styles from './styles.scss';


export default class extends Component{
  constructor(props){
    super(props);

    this.state = {
      windowHeight: null,
    }
  }

  resizeListener = () => {
    this.setState({ windowHeight: window.innerHeight });
  };

  componentWillMount(){
    window.addEventListener('resize', this.resizeListener);
  }

  componentDidMount(){
    this.resizeListener();
  }

  render(){

    const { windowHeight } = this.state;

    const style = windowHeight ? { minHeight: `${windowHeight}px` } : {};

    return <BaseScreen
      className={styles.root}
      css={style}
    >
      <Slider/>
      <Description/>
    </BaseScreen>
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.resizeListener);
  }
}