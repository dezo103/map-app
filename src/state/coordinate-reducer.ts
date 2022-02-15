import {Dispatch} from "redux";
import {yandexMapAPI} from "../api/yandexMapAPI";

const initialState: CoordinatesStateType = [
]

export const coordinatesReducer = (state: CoordinatesStateType = initialState, action: any): any => {
    switch (action.type) {
        case 'COORDINATES/SET-LOCATION':
            return [...state, action.location]
        case 'COORDINATES/RESET-COORDINATES':
            return []
        default:
            return state
    }
}

export const setLocationAC = (location: LocationType) => ({type: 'COORDINATES/SET-LOCATION', location})
export const resetCoordinatesAC = () => ({type: 'COORDINATES/RESET-COORDINATES'})


export const getAdressTC = (location: any) => (dispatch: Dispatch) => {
    yandexMapAPI.getAdressByCoordinates(location)
        .then((res) => {
           console.log(res.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text)})
}

export type LocationType = Array<number>

export type CoordinatesStateType = Array<LocationType>

