import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {CoordinatesStateType} from "../../state/coordinate-reducer";


export const MyTable = () => {

    const locations = useSelector<AppRootStateType, CoordinatesStateType>((state) => state.coordinates)

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 360}} aria-label="simple table">
                <TableBody>
                    {locations.map((el, index) => <TableRow
                        key={index}>
                            <TableCell>{el.latitude}</TableCell>
                            <TableCell>{el.longitude}</TableCell>
                            <TableCell>{el.name}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

