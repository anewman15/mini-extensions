import { Record, Records, FieldSet } from 'airtable';
import { createStore } from 'redux';
import combinedReducer from '../reducers';
import { loadStoreFromLocalStorage, saveStoreToLocaStorage } from './persist';

type initialStateType = {
  user: Record<FieldSet> | null,
  classes: Records<FieldSet> | null,
  students: undefined
};

const initialState: initialStateType = loadStoreFromLocalStorage();

const store = createStore(
  combinedReducer,
  initialState,
);

store.subscribe(() => saveStoreToLocaStorage(store.getState()));

export default store;
