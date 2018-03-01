import { Map, Marker, MarkerLayout } from 'yandex-map-react';

import Title from 'components/Title';

import BaseScreen from '../components/BaseScreen';
import ContactLine from './ContactLine';

import phoneIconUrl from './img/phone.svg';
import emailIconUrl from './img/email.svg';
import addressIconUrl from './img/address.svg';

import styles from './styles.scss';


export default () => {
  const mapState = {
    controls: ['zoomControl', ]
  };

  return <BaseScreen className={styles.root}>
    <Title tag="h2" className={styles.title}>Положение</Title>
    <p className={styles.text}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации.</p>
    <div className={styles.infoContainer}>
      <ContactLine contact="+7 498 657-01-26" iconUrl={phoneIconUrl}/>
      <ContactLine contact="hello@tsk-filin.ru" iconUrl={emailIconUrl}/>
      <ContactLine contact="Москва, 23 км МКАД, владение 3, стр. 2" iconUrl={addressIconUrl}/>
    </div>

    <div className={styles.mapWrapper}>
      <Map state={mapState} width='100%' height="100%" onMapAvailable={ref => console.warn(ref.behaviors.disable('scrollZoom'))} center={[55.754734, 37.583314]} zoom={18}>
        <Marker lat={55.754734} lon={37.583314} />
      </Map>
    </div>
  </BaseScreen>
}
// <Map ref={ref => { console.warn(ref); return ref && ref.behaviors.disable('scrollZoom');} } state={mapState} width='100%' height="100%" onAPIAvailable={function () { console.log('API loaded'); }} center={[55.754734, 37.583314]} zoom={18}>
