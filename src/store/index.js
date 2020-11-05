import { persistStore, persistReducer} from 'redux-persist';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
