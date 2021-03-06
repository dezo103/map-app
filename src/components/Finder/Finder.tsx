import React, {ChangeEvent, useState} from 'react';
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

    const [textValue, setTextValue] = useState('')

    const dispatch = useDispatch()
    const address = useSelector<AppRootStateType, any>((state) => state.foundCoordinates)
    const useStyles = makeStyles({
        textField: {
            width: '70%'
        },
        button: {
            width: '20%'
        },
        typography: {
            width: '70%',
            color: '#666',
            paddingLeft: '10px'
        }
    })

    const style = useStyles()

    const onClickHandler = () => {
        dispatch(setAddressTC(textValue))
    }

    const onAddClickHandler = () => {
        dispatch(setLocationTC(splitString(address)))
        dispatch(resetAddressAC())
        setTextValue('')
    }

    const onChangeTextValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTextValue(e.currentTarget.value)
    }

    return (
        <div className={styles.finder}>
            <TextField label="Find location"
                       variant="outlined"
                       className={style.textField}
                       value={textValue}
                       onChange={onChangeTextValue}
            />
            <Button color="primary"
                    variant="contained"
                    className={style.button}
                    onClick={onClickHandler}
                    disabled={textValue === ""}>Find</Button>
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

