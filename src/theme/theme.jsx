import React from 'react'
import { createTheme } from '@material-ui/core'

const theme = createTheme({
    palette: {
        primary: {
            main: '#fca945'
        },
        secondary: {
            main: '#ff00ff'
        }
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