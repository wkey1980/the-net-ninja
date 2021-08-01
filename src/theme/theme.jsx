import React from 'react'
import { createTheme } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'

const theme = createTheme({
    palette: {
        primary: {
            // main: '#fefefe'
            main: '#008080'
        },
        secondary: purple
    },
    typography: {
        fontFamily: 'Dancing Script',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
        fontSize: 36
    }
})
export default theme