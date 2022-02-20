import {Dispatch} from "redux";
import {yandexMapAPI} from "../api/yandexMapAPI";
import {v1} from "uuid";

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
            return [...state, {
                longitude: action.longitude,
                latitude: action.latitude,
                name: action.name,
                id: action.id
            }]
        case 'COORDINATES/REMOVE-LOCATION':
            return state.filter(loc => loc.id !== action.id)
        case 'COORDINATES/RESET-COORDINATES':
            return []
        default:
            return state
    }
}

export const resetCoordinatesAC = () => ({type: 'COORDINATES/RESET-COORDINATES'})

export const setLocationAC = (textDataLocation: string, coordinatesDataLocation: Array<number>) => {
    return {
        type: 'COORDINATES/SET-LOCATION',
        name: textDataLocation,
        latitude: coordinatesDataLocation[0],
        longitude: coordinatesDataLocation[1],
        id: v1()
    } as const
}

export const removeLocationAC = (id: string) => {
    return {
        type: 'COORDINATES/REMOVE-LOCATION', id
    } as const
}


export const setLocationTC = (location: any) => (dispatch: Dispatch) => {
    yandexMapAPI.getAddressByCoordinates(location)
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
    name?: string,
    id: string
}

export type CoordinatesStateType = Array<LocationType>

