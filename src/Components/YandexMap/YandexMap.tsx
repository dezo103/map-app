import React from 'react';
import {YMaps, Map} from 'react-yandex-maps';
import styles from './YandexMap.module.css'

const YandexMap = () => {

    const onClickHandler = (ev:any) => {
        console.log(ev)
    }

    return (
        <YMaps className={styles.yandexMap}>
            <Map
                defaultState={{center: [53.902284, 27.34], zoom: 10}}
                width={"100vw"}
                height={"100vh"}
                onClick={(e: any)=>{onClickHandler(e)}}
            />
        </YMaps>
    );
};

export default YandexMap;