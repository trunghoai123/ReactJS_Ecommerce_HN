import PropTypes from 'prop-types';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import ListProduct from './pages/ListProduct';
import DetailPage from './pages/DetailPage';

const ProductFeature = (props) => {
   const match = useRouteMatch();
   return (
      <div>
         <Switch>
            <Route path={match.url} exact component={ListProduct}></Route>
            <Route path={`${match.url}/:productId`} component={DetailPage}></Route>
         </Switch>
      </div>
   );
};

ProductFeature.propTypes = {};

export default ProductFeature;
