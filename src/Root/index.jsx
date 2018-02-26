import { Route, Switch, Redirect } from 'react-router-dom';

import urls from 'config/urls';

import Landing from './Landing';

import styles from './styles.scss';


export default class extends Component{
  constructor(props){
    super(props);
  }

  render(){

    return <div className={styles.root}>
      <Switch>
        <Route path={urls.landing} render={() => <Landing/>}/>
        <Redirect to={urls.landing}/>
      </Switch> }
    </div>;
  }
}