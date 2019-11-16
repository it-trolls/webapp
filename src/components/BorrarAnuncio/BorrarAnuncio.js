import React from 'react'
import * as apiActions from '../../store/actions/apiActions'
import {useDispatch, useSelector} from 'react-redux'
import {Container, Paper, Typography, Button} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import {useQuery} from '../queryHelper'

const BorrarArticulo = () => {
    const query = useQuery();
    const dispatch = useDispatch()
    const token = useSelector(state => state.user.token)

    const confirmDelete = () => {
        dispatch(apiActions.deleteAnuncio(query.get('id'), token))
    }
    return(
        <Container>
            <Paper>
                <Typography>
                    ¿Estas seguro que deseas borrar el anuncio: ?
                </Typography>
                <NavLink to="/dashboard">
                    <Button variant="contained" color="primary">Volver</Button>
                </NavLink>
                <Button variant="contained" color="secondary" onClick={confirmDelete}>Borrar</Button>
            </Paper>
        </Container>
    )
}

export default BorrarArticulo;