import React from 'react';
import styles from './YandexControls.module.css'
import {useDispatch, useSelector} from "react-redux";
import {CoordinatesStateType, resetCoordinatesAC} from "../../state/coordinate-reducer";
import Button from "@mui/material/Button";
import {MyTable} from "../MyTable/MyTableEd";
import {Finder} from "../Finder/Finder"
import {AppRootStateType} from "../../state/store";

const YandexControls = () => {

    const dispatch = useDispatch()
    const locations = useSelector<AppRootStateType, CoordinatesStateType>((state) => state.coordinates)
    console.log(locations)
    const onClickHandler = () => {
        dispatch(resetCoordinatesAC())
    }

    return (
        <div className={styles.yandexControls}>
            <p className={styles.description}>To add new location click 'Find location' or double click on the map</p>
            <Finder />
            <Button color="error"
                    variant="contained"
                    onClick={onClickHandler}
                    disabled={locations.length === 0 }
            >Reset coordinates</Button>
            <MyTable/>
        </div>
    );
};

export default YandexControls;