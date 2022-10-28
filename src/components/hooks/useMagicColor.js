import { useEffect, useRef, useState } from 'react';

const randColor = (curColor) => {
   const listColor = ['red', 'green', 'yellow'];
   const curIndex = listColor.indexOf(curColor);
   let randIndex = curIndex;
   while (randIndex === curIndex) {
      randIndex = Math.trunc(Math.random() * listColor.length);
   }
   return listColor[randIndex];
};
const useMagicColor = () => {
   const [color, setColor] = useState('black');
   const colorRef = useRef('red');
   useEffect(() => {
      const inter = setInterval(() => {
         console.log('init color: ' + color);
         console.log('color Ref: ' + colorRef.current);
         const newColor = randColor(colorRef.current);
         colorRef.current = newColor;
         setColor(newColor);
      }, 2000);
      return () => {
         clearInterval(inter);
      };
   }, []);
   return { color };
};

export default useMagicColor;
