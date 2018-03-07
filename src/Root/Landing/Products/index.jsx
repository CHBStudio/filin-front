import urls from 'config/urls';

import Services from '../components/Services';

import testIconUrl from './img/testIcon.svg';


export default () => {
  return <Services
    title="Товары"
    buttonText="Все товары"
    data={[
      { imgUrl: testIconUrl, title: 'Запчасти грузовые', },
      { imgUrl: testIconUrl, title: 'Запчасти легковые', },
      { imgUrl: testIconUrl, title: 'Масла', },
      { imgUrl: testIconUrl, title: 'Аксессуары', },
      { imgUrl: testIconUrl, title: 'Шины', },
      { imgUrl: testIconUrl, title: 'Аккумуляторы', },
    ]}
    linkTo={urls.psProducts('all')}
  />
}