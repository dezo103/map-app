import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {CoordinatesStateType, removeLocationAC} from "../../state/coordinate-reducer";
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import IconButton from "@mui/material/IconButton";


export const MyTable = () => {

    const dispatch = useDispatch()
    const locations = useSelector<AppRootStateType, CoordinatesStateType>((state) => state.coordinates)

    const removeItem = (id: string) => {
        dispatch(removeLocationAC(id))
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 360}} aria-label="simple table">
                <TableBody>
                    {locations.map((el, index) => <TableRow
                        key={index}>
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{el.latitude}</TableCell>
                            <TableCell>{el.longitude}</TableCell>
                            <TableCell>{el.name}</TableCell>
                            <TableCell>
                                <IconButton
                                    onClick={() => {removeItem(el.id)}}
                                >
                                    <DeleteIcon
                                        sx={{ color: red[200] }}
                                    />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

