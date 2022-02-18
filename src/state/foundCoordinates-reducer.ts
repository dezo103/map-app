import {Dispatch} from "redux";
import {yandexMapAPI} from "../api/yandexMapAPI";

const initialState: null | string = ""

export const foundCoordinatesReducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case 'ADDRESS/SET-ADDRESS':
            return action.location
        case 'ADDRESS/RESET-ADDRESS':
            return ""
        default:
            return state
    }
}

const setAddressAC = (addressDataLocation: any) => {
    return {
        type: 'ADDRESS/SET-ADDRESS',
        location: addressDataLocation
    }
}

export const resetAddressAC = () => ({type: 'ADDRESS/RESET-ADDRESS'})

export const setAddressTC = (address: any) => (dispatch: Dispatch) => {
    yandexMapAPI.gedCoordinateByAddress(address)
        .then((res)=>{
            //console.log(res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos)
            let response = (res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos)
            dispatch(setAddressAC(response))
        })
}
