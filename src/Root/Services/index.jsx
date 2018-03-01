import FirstScreenContainer from 'components/FirstScreenContainer';
import Title from 'components/Title';
import Switch from 'components/Switch';

import Types from './Types';

import styles from './styles.scss';


export default () => {
  return <FirstScreenContainer>
    <Title className={styles.title}>Товары и услуги</Title>
    <div className={styles.topControls}>
      <Switch
        sections={['Товары', 'Услуги']}
      />
    </div>

    <div className={styles.sides}>
      <div className={styles.leftSide}>
        left
      </div>
      <div className={styles.rightSide}>
        <Types
          types={[
            { id: '1', name: 'Шины' },
            { id: '2', name: 'Стекла' },
            { id: '3', name: 'Двери' },
            { id: '4', name: 'Мука' },
          ]}
        />
      </div>
    </div>
  </FirstScreenContainer>;
}