import { Route, Switch, Redirect } from 'react-router-dom';

import urls from 'config/urls';

import Header from './Header';
import Landing from './Landing';
import Offers from './Offers';
import ProductsServices from './ProductsServices';
import ModalPhotos from './ModalPhotos';

import styles from './styles.scss';


export default class extends Component{
  constructor(props){
    super(props);
  }

  render(){

    return <div className={styles.root}>
      <ModalPhotos/>
      <Header/>
      <Switch>
        <Route path={urls.landing} render={() => <Landing/>}/>
        <Route path={urls.offers} render={() => <Offers/>}/>
        <Route path={urls.ps} render={() => <ProductsServices/>}/>
        <Redirect to={urls.landing}/>
      </Switch>
    </div>;
  }
}