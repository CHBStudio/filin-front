import urls from 'config/urls';

import Services from '../components/Services';

import testIconUrl from './img/testIcon.svg';


export default () => {
  return <Services
    title="Услуги"
    buttonText="Все услуги"
    data={[
      { imgUrl: testIconUrl, title: 'Шиномонтаж грузовой/легковой', },
      { imgUrl: testIconUrl, title: 'Установка и настройка тахографов', },
      { imgUrl: testIconUrl, title: 'Автомойка легковая', },
      { imgUrl: testIconUrl, title: 'Автосервис легковой', },
      { imgUrl: testIconUrl, title: 'Складские услуги', },
      { imgUrl: testIconUrl, title: 'Кафе и Душ', },
    ]}
    linkTo={urls.psServices('all')}
  />
}