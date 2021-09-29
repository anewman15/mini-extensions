import { createStore } from 'redux';
import combinedReducer from '../reducers';

// type initialStateType = {
//   user: Record<FieldSet>,
//   classes: Records<FieldSet>,
//   students: {
//     [key: string]: string
//   }
// };

const initialState: any = {
  user: {
    id: '',
    fields: {
      Name: '',
      Classes: [
        '', ''
      ],
    }
  },
  classes: [
    {
      id: '',
      fields: {
        Name: '',
        Students: [],
      }
    }
  ],
  students: {
    "": "",
  }
};

const store = createStore(
  combinedReducer,
  initialState,
);

export default store;
