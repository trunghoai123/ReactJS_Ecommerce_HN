// commercial app in reactjs course (hau nguyen - udemy)
import React from 'react';
import './App.css';
import './index.css';
import Todo from 'features/Todo';
import { Route, Switch } from 'react-router-dom';
import ProductFeature from 'features/Products';
import { makeStyles } from '@mui/styles';
import CartPage from 'features/Cart';
import Photo from 'features/Photo';
import Header from 'components/Header';

const useStyles = makeStyles({});
function App() {
   const classes = useStyles();
   return (
      <div className='App'>
         <Header></Header>
         <Switch>
            <Route path={'/todo-list'} exact component={Todo}></Route>
            <Route path={'/products'} component={ProductFeature}></Route>
            <Route path={'/cart'} component={CartPage}></Route>
            <Route path={'/photos'} component={Photo}></Route>
         </Switch>
      </div>
   );
}

export default App;

// import React from 'react';
// import HomePage from './redux/pages/HomePage';
// import './App.css';
// function App() {
//    return (
//       <div className='App'>
//          <HomePage></HomePage>
//       </div>
//    );
// }

// export default App;

//axios
// import React, { useEffect } from 'react';
// import categoryApi from './api/axios/categoryApi';

// function App() {
//    useEffect(() => {
//       async function fetchAPi() {
//          const params = { _limit: 2 };
//          const response = categoryApi.getAll(params);
//          console.log(response);
//       }
//       fetchAPi();
//    });
//    return <div className='App'></div>;
// }

// export default App;

// import { useEffect, useState } from 'react';
// import PostList from './components/PostList';
// import Pagination from './components/Pagination';
// import queryString from 'query-string';
// import Search from './components/Search';

// function App() {
//    const [pagination, setPagination] = useState({
//       _page: 1,
//       _limit: 10,
//       _totalRows: 1, // total records
//    });
//    const [filters, setFilters] = useState({
//       _limit: 10,
//       _page: 1,
//       title_like: '',
//    });
//    const [listPost, setListPost] = useState([]);
//    useEffect(() => {
//       async function fetchPost() {
//          try {
//             const params = queryString.stringify(filters);
//             const url = `http://js-post-api.herokuapp.com/api/posts?${params}`;
//             const response = await fetch(url);
//             const responseJSON = await response.json();
//             const { data, pagination } = responseJSON;
//             setPagination(pagination);
//             setListPost(data);
//          } catch (error) {
//             console.log('failed to fetch: ' + error);
//          }
//       }
//       fetchPost();
//    }, [filters]);
//    const handlePageChange = (newPage) => {
//       setFilters({
//          ...filters,
//          _page: newPage,
//       });
//    };
//    const handleSearchTitle = (formValues) => {
//       //formValues: { searchValue }
//       setFilters({
//          ...filters,
//          _page: 1,
//          title_like: formValues.searchValue,
//       });
//    };
//    return (
//       <div classtitle='App'>
//          <PostList postList={listPost}></PostList>
//          <Search onSubmit={handleSearchTitle}></Search>
//          <Pagination
//             onPageChange={handlePageChange}
//             pagination={pagination}
//          ></Pagination>
//       </div>
//    );
// }

// export default App;
