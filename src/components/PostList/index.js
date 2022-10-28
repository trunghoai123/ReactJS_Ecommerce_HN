import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
   postList: PropTypes.array,
};

PostList.defaultProps = {
   postList: [],
};

function PostList({ postList }) {
   return (
      <div>
         <h2>Post-List</h2>
         <ul>
            {postList.map((post, index) => {
               return <li key={index}>{post.title}</li>;
            })}
         </ul>
      </div>
   );
}

export default PostList;
