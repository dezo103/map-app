import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {CoordinatesStateType, LocationType, removeLocationAC, reorderLocationsAC} from "../../state/coordinate-reducer";
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import IconButton from "@mui/material/IconButton";


export const MyTable = () => {

    const dispatch = useDispatch()
    const locations = useSelector<AppRootStateType, CoordinatesStateType>((state) => state.coordinates)

    const removeItem = (id: string) => {
        dispatch(removeLocationAC(id))
    }


    const [currentCard, setCurrentCard] = useState<null | LocationType>(null)

    function dragStartHandler(e: any, el: any) {
        setCurrentCard(el)
    }

    function dragOverHandler(e: any) {
        e.preventDefault()
    }

    function dropHandler(e: any, el: any) {
        e.preventDefault()
        const reorderedLocationsArray = locations.map(c => {
            if (currentCard && (c.id === el.id)) {
                return {...c, order: currentCard.order}
            }
            if (currentCard && (c.id === currentCard.id)) {
                return {...c, order: el.order}
            }
            return c
        })
        dispatch(reorderLocationsAC(reorderedLocationsArray))
    }

    const sortCards = (a: any, b: any) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 360}} aria-label="simple table">
                <TableBody>
                    {locations.sort(sortCards).map((el) => <TableRow
                        key={el.id}
                        style={{cursor: "grab"}}
                        onDragStart={(e: any) => dragStartHandler(e, el)}
                        onDragOver={(e: any) => dragOverHandler(e)}
                        onDrop={(e: any) => dropHandler(e, el)}
                        draggable={true}
                        >
                            <TableCell>{el.order}</TableCell>
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
                        {/*<TableCell>order {el.order}</TableCell>*/}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

