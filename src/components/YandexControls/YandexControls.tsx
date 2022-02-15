import React from 'react';
import styles from './YandexControls.module.css'
import {AppRootStateType} from "../../state/store";
import {useDispatch, useSelector} from "react-redux";
import {CoordinatesStateType, resetCoordinatesAC} from "../../state/coordinate-reducer";
import Button from "@mui/material/Button";
import {MyTable} from "../MyTable/MyTable";

const YandexControls = () => {

    const locations = useSelector<AppRootStateType, CoordinatesStateType>((state) => state.coordinates)

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(resetCoordinatesAC())
    }

    return (
        <div className={styles.yandexControls}>
            <Button
                color="error"
                variant="contained"
                onClick={onClickHandler}
            >Reset coordinates
            </Button>
            <MyTable locations={locations}/>
        </div>
    );
};

export default YandexControls;