import CloseButton from 'components/CloseButton';
import Slider from 'components/Slider';
import connect from 'utils/connect';
import { modals } from 'store';

import styles from './styles.scss';


@connect({ modals })
export default class extends Component{
  constructor(props){
    super(props);
    this.modalId = 'modal-photos';
    this.props.actions.modals.register(this.modalId);
  }

  closeModal = () => {
    this.props.actions.modals.close(this.modalId);
  };

  render(){
    const modal = this.props.store.modals[this.modalId];
    if(!modal) {
      return null;
    }

    const { isOpen, data } = modal;

    return <div className={cn(styles.root, !isOpen && styles.rootHidden)}>
      <CloseButton
        className={styles.closeBtn}
        onClick={this.closeModal}
      />
      <div className={styles.content}>
        <Slider
          imgs={data.photos}
        />
      </div>
    </div>
  }
}