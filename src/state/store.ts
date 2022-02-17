import {applyMiddleware, combineReducers, createStore} from "redux";
import {coordinatesReducer} from "./coordinate-reducer";
import thunkMiddleware from 'redux-thunk'
import {foundCoordinatesReducer} from "./foundCoordinates-reducer";

const rootReducer = combineReducers({
    coordinates: coordinatesReducer,
    foundCoordinates: foundCoordinatesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;