import Title from 'components/Title';
import Button from 'components/Button';
import history from 'utils/history';

import BaseScreen from '../BaseScreen';
import Col from '../Col';

import styles from './styles.scss';


export default ({ data, title, linkTo, buttonText }) => {
  return <BaseScreen className={styles.root}>

    <div className={styles.topBar}>
      <Title className={styles.title}>{title}</Title>
      <Button
        className={styles.btn}
        onClick={() => history.push(linkTo)}
      >
        { buttonText }
      </Button>
    </div>

    <div className={styles.container}>
      { data.map((colData, index) => {
        return <Col
          key={index}
          imgUrl={colData.imgUrl}
          title={colData.title}
          text={colData.text}
        />
      }) }
    </div>
  </BaseScreen>
}