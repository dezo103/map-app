import React from 'react';
import Button from "@mui/material/Button";
import styles from './Finder.module.css'
import TextField from "@mui/material/TextField";
import {makeStyles} from "@mui/styles";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {resetAddressAC, setAddressTC} from "../../state/foundCoordinates-reducer";
import {AppRootStateType} from "../../state/store";
import {setLocationTC} from "../../state/coordinate-reducer";
import {splitString} from "../../utils/splitString";

export const Finder = () => {

    const dispatch = useDispatch()
    const address = useSelector<AppRootStateType, any>((state) => state.foundCoordinates)
    //console.log(address)
    const useStyles = makeStyles({
        textField: {
            width: '70%'
        },
        button: {
            width: '20%'
        },
        typography: {
            width: '70%',
            color: '#666'
        }
    })

    const style = useStyles()

    const onClickHandler = () => {
        dispatch(setAddressTC('Москва'))
    }

    const onAddClickHandler = () => {
        dispatch(setLocationTC(splitString(address)))
        dispatch(resetAddressAC())
    }

    return (
        <div className={styles.finder}>
            <TextField label="Find location"
                       variant="outlined"
                       className={style.textField}
            />
            <Button color="primary"
                    variant="contained"
                    className={style.button}
                    onClick={onClickHandler}>Find</Button>
            <div className={styles.outputCoordinates}>
                <Typography
                    className={style.typography}
                >Coordinates: {address}</Typography>
            </div>
            <Button color="success"
                    variant="contained"
                    className={style.button}
                    onClick={onAddClickHandler}
                    disabled={address === ""}>Add to list</Button>
        </div>
    );
};

