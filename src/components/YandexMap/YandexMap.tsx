import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import styles from './YandexMap.module.css'
import {useDispatch, useSelector} from "react-redux";
import {CoordinatesStateType, setLocationTC} from "../../state/coordinate-reducer";
import {AppRootStateType} from "../../state/store";

const YandexMap = () => {

    const dispatch = useDispatch()
    const locations = useSelector<AppRootStateType, CoordinatesStateType>((state) => state.coordinates)

    const changeCoordinationFormat = (arr: any) => {
        return [arr[0], arr[1]] = [arr[1], arr[0]]
    }

    const onClickHandler = (e: any) => {
        //console.log(e)
        let formattedCoordinates = changeCoordinationFormat(e.get('coords'))
        dispatch(setLocationTC(formattedCoordinates))
    }

    return (
        <YMaps className={styles.yandexMap}>
            <Map onClick={(e: any) => {
                onClickHandler(e)
            }}
                 defaultState={{center: [54.31, 26.86], zoom: 12}}
                 width={"100vw"}
                 height={"100vh"}
            >
                {locations.map((mapPoint: any, index) => <Placemark
                    key={index}
                    geometry={[+mapPoint.longitude, +mapPoint.latitude]}
                    properties={ {iconContent: index+1} }
                    options={{preset: 'islands#violetIcon'}}
                />)}
            </Map>
        </YMaps>
    );
};

export default YandexMap;