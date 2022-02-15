import React from 'react';
import {YMaps, Map} from 'react-yandex-maps';
import styles from './YandexMap.module.css'
import {useDispatch} from "react-redux";
import {getAdressTC, setLocationAC} from "../../state/coordinate-reducer";

const YandexMap = () => {

    const dispatch = useDispatch()

    const changeCoordinationFormat = (arr: any) => {
        return [arr[0], arr[1]] = [arr[1], arr[0]]
    }

    const onClickHandler = (e:any) => {
        let formattedCoordinates = changeCoordinationFormat(e.get('coords'))
        dispatch(setLocationAC(formattedCoordinates))
        dispatch(getAdressTC(formattedCoordinates))
        console.log(formattedCoordinates)
    }

    return (
        <YMaps className={styles.yandexMap}>
            <Map
                defaultState={{center: [54.31, 26.86], zoom: 12}}
                width={"100vw"}
                height={"100vh"}
                onClick={(e: any)=>{onClickHandler(e)}}
            />
        </YMaps>
    );
};

export default YandexMap;