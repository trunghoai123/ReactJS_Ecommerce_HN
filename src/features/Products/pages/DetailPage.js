import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper } from '@mui/material';
import Thumbnail from '../components/Thumbnail';
import useProductDetail from '../hooks/useProductDetail';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductInfor from '../components/ProductInfor';
import ProductMenu from '../components/ProductMenu';
import Description from '../components/Description';
import Additional from '../components/Additional';
import Reviews from '../components/Reviews';

const DetailPage = (props) => {
   const {
      params: { productId },
      url,
   } = useRouteMatch();
   const { product, isLoading } = useProductDetail(productId);

   return (
      <Box sx={{ mt: '30px' }}>
         <Container>
            <Paper elevation={0}>
               <Grid container>
                  <Grid sx={{ width: '400px', p: '12px', borderRight: '2px solid lightGray' }} item>
                     <Thumbnail></Thumbnail>
                  </Grid>
                  <Grid sx={{ p: '12px', flex: '1 1 0' }} item>
                     <ProductInfor product={product}></ProductInfor>
                  </Grid>
               </Grid>
               <ProductMenu></ProductMenu>
               <Switch>
                  <Route path={url} exact>
                     <Description content={product.description}></Description>
                  </Route>
                  <Route path={`${url}/additional`} exact>
                     <Additional></Additional>
                  </Route>
                  <Route path={`${url}/reviews`} exact>
                     <Reviews></Reviews>
                  </Route>
               </Switch>
            </Paper>
         </Container>
      </Box>
   );
};

DetailPage.propTypes = {};

export default DetailPage;
