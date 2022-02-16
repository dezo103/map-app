import React from 'react';
import styles from './YandexControls.module.css'
import {useDispatch} from "react-redux";
import {resetCoordinatesAC} from "../../state/coordinate-reducer";
import Button from "@mui/material/Button";
import {MyTable} from "../MyTable/MyTable";

const YandexControls = () => {

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(resetCoordinatesAC())
    }

    return (
        <div className={styles.yandexControls}>
            <Button color="error"
                    variant="contained"
                    onClick={onClickHandler}>Reset coordinates</Button>
            <MyTable/>
        </div>
    );
};

export default YandexControls;