// reducers/hobby.js
const initialState = {
   list: [
      { title: 'Listening to music', id: 1 },
      { title: 'coding', id: 2 },
      { title: 'watching tv', id: 3 },
   ],
   selectedId: null,
};
const hobbyReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_HOBBY': {
         const newList = [...state.list];
         newList.push(action.payload);
         return {
            ...state,
            list: newList,
         };
      }
      case 'SET_ACTIVE_HOBBY': {
         return {
            ...state,
            selectedId: action.payload.id,
         };
      }
      default:
         return state;
   }
};
export default hobbyReducer;
