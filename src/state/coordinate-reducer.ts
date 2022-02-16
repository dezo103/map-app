import {Dispatch} from "redux";
import {yandexMapAPI} from "../api/yandexMapAPI";

const initialState: CoordinatesStateType = [
    // {
    //     latitude: 45.67,
    //     longitude: 33.45,
    //     name: 'Gudula'
    // },
    // {
    //     latitude: 45.67,
    //     longitude: 33.45,
    //     name: 'Gudula'
    // },
]

export const coordinatesReducer = (state: CoordinatesStateType = initialState, action: any): any => {
    switch (action.type) {
        case 'COORDINATES/SET-LOCATION':
            return [...state, {longitude: action.longitude, latitude: action.latitude, name: action.name}]
        case 'COORDINATES/RESET-COORDINATES':
            return []
        default:
            return state
    }
}

export const resetCoordinatesAC = () => ({type: 'COORDINATES/RESET-COORDINATES'})

const setLocationAC = (textDataLocation: string, coordinatesDataLocation: Array<number>) => {
    return {
        type: 'COORDINATES/SET-LOCATION',
        name: textDataLocation,
        latitude: coordinatesDataLocation[0],
        longitude: coordinatesDataLocation[1]
    }
}

export const setLocationTC = (location: any) => (dispatch: Dispatch) => {
    yandexMapAPI.getAdressByCoordinates(location)
        .then((res) => {
            //console.log(location)
            //console.log(res.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text)
            let response = (res.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text)
            dispatch(setLocationAC(response, location))
        })
}

export type LocationType = {
    latitude: number,
    longitude: number,
    name?: string
}

export type CoordinatesStateType = Array<LocationType>

