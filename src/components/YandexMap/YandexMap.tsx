import React from 'react';
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import styles from './YandexMap.module.css'
import {useDispatch, useSelector} from "react-redux";
import {CoordinatesStateType, setLocationTC} from "../../state/coordinate-reducer";
import {AppRootStateType} from "../../state/store";
import {changeCoordinationFormat} from "../../utils/changeCoordinationFormat";

const YandexMap = () => {

    const dispatch = useDispatch()
    const locations = useSelector<AppRootStateType, CoordinatesStateType>((state) => state.coordinates)
    const mapCenter = useSelector<AppRootStateType, any>((state) => state.mapCenter)

    const onDblClickHandler = (e: any) => {
        let formattedCoordinates = changeCoordinationFormat(e.get('coords'))
        dispatch(setLocationTC(formattedCoordinates))
    }

    return (
        <YMaps className={styles.yandexMap}>
            <Map onDblClick={(e: any) => {
                e.preventDefault()
                onDblClickHandler(e)
            }}
                 //defaultState={{center: [54.31, 26.86], zoom: 12}}
                 width={"100vw"}
                 height={"100vh"}
                 state={{center: mapCenter, zoom: 11}}
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