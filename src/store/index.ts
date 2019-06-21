import history from "./history";
import { routerMiddleware, routerReducer } from "react-router-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducer"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore, PersistConfig } from "redux-persist"

const middleware = routerMiddleware(history);

const rootReducer = combineReducers({
    ...reducers,
    router: routerReducer
})

const persistConfig: PersistConfig = {
    key: 'root',
    storage,
    whitelist: ['draft'],
}

const persistedReducer: typeof rootReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(middleware)) :
        applyMiddleware(middleware))

const persistor = persistStore(store)

export { store, persistor };