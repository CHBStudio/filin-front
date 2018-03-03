import urls from 'config/urls';

import Services from '../components/Services';

import testIconUrl from './img/testIcon.svg';


export default () => {
  return <Services
    title="Услуги"
    buttonText="Все услуги"
    data={[
      { imgUrl: testIconUrl, title: 'Шиномонтаж', text: 'Мы предлагаем вам воспользоваться комплексом шиномонтажных услуг нашей сети магазинов. Шиномонтаж производится на п.' },
      { imgUrl: testIconUrl, title: 'Шиномонтаж', text: 'Мы предлагаем вам воспользоваться комплексом шиномонтажных услуг нашей сети магазинов. Шиномонтаж производится на п.' },
      { imgUrl: testIconUrl, title: 'Шиномонтаж', text: 'Мы предлагаем вам воспользоваться комплексом шиномонтажных услуг нашей сети магазинов. Шиномонтаж производится на п.' },
    ]}
    linkTo={urls.psServices('all')}
  />
}