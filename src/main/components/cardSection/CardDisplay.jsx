import { Stack } from '@mui/material'
import React from 'react'
import MediaCard from './MediaCard'
import MediaCard1 from './MediaCard1'
import MediaCard2 from './MediaCard2'

const CardDisplay = () => {
    return (
        <Stack direction={'row'} gap={5} margin={'50px auto'} width={'95%'}>
            <MediaCard />
            <MediaCard1 />
            <MediaCard2 />
        </Stack>
    )
}

export default CardDisplay