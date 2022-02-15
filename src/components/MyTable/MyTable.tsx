import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {CoordinatesStateType} from "../../state/coordinate-reducer";

type MyTablePropsType = {
    locations: CoordinatesStateType
}

export const MyTable = (props: MyTablePropsType) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 360}} aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell>{props.locations[0]}</TableCell>
                    </TableRow><TableRow>
                        <TableCell>{props.locations[1]}</TableCell>
                    </TableRow>
                    {/*{props.locations.map((row, index) => (*/}
                    {/*    <TableRow*/}
                    {/*        key={index}*/}
                    {/*        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/}
                    {/*    >*/}
                    {/*        <TableCell component="th" scope="row">*/}
                    {/*            {index + 1}*/}
                    {/*        </TableCell>*/}
                    {/*        <TableCell align="right">{row}</TableCell>*/}
                    {/*    </TableRow>*/}
                    {/*))}*/}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

