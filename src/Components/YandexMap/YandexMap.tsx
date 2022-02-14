import React from 'react';
import {YMaps, Map} from 'react-yandex-maps';
import styles from './YandexMap.module.css'

const YandexMap = () => {
    return (
        <YMaps className={styles.yandexMap}>
            <Map
                defaultState={{center: [55.75, 37.57], zoom: 9}}
                width={"100vw"}
                height={"100vh"}
            />
        </YMaps>
    );
};

export default YandexMap;