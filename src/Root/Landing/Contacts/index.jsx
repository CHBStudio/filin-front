import { Map, Marker } from 'yandex-map-react';

import Title from 'components/Title';
import settings from 'config/settings';

import BaseScreen from '../components/BaseScreen';
import ContactLine from './ContactLine';

import styles from './styles.scss';


export default () => {
  const mapState = {
    controls: ['zoomControl', ]
  };

  return <BaseScreen className={styles.root}>
    <Title tag="h2" className={styles.title}>Положение</Title>
    <p className={styles.text}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации.</p>
    <div className={styles.infoContainer}>
      <ContactLine type="phone"/>
      <ContactLine type="email"/>
      <ContactLine type="address"/>
    </div>

    <div className={styles.mapWrapper}>
      <Map
        state={mapState}
        width='100%'
        height="100%"
        onMapAvailable={ref => ref.behaviors.disable('scrollZoom')}
        center={[
          settings.coord.lat,
          settings.coord.lon
        ]}
        zoom={18}
      >
        <Marker
          lat={settings.coord.lat}
          lon={settings.coord.lon}
        />
      </Map>
    </div>
  </BaseScreen>
}
