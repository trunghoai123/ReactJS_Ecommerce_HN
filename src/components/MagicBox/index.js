import React from 'react';
import useMagicColor from '../hooks/useMagicColor';
import './styles.scss';

const MagicBox = () => {
   const { color } = useMagicColor();
   return (
      <div style={{ backgroundColor: color }} className='magic_container'></div>
   );
};

export default MagicBox;
