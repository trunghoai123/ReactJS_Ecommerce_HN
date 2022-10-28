import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const RandomPhoto = ({ name, imageUrl, onImageUrlChange, onButtonBlur, className = '' }) => {
   const handleRandomImageUrl = () => {
      const randomId = Math.trunc(Math.random() * 2000);
      onImageUrlChange(`https://picsum.photos/200/300?random=${randomId}`);
   };
   return (
      <>
         <div>
            <Button
               name={name}
               onClick={handleRandomImageUrl}
               onBlur={onButtonBlur}
               type='button'
               outline
               color='primary'
            >
               Random photo
            </Button>
         </div>
         <div>
            <img width='200px' height='200px' src={imageUrl || 'https://rg.link/UiJhErx'} alt={name} />
         </div>
      </>
   );
};

RandomPhoto.propTypes = {
   name: PropTypes.string.isRequired,
   imageUrl: PropTypes.string.isRequired,
   onImageUrlChange: PropTypes.func.isRequired,
   onButtonBlur: PropTypes.func.isRequired,
   className: PropTypes.string,
};

export default RandomPhoto;
