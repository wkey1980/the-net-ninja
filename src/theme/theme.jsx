import { purple, lime, green, orange } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
	palette: {
		primary: {
			main: '#fefefe'
		},
	secondary: orange
},

	typography: {
		fontFamily: 'Quicksand',
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	}
})
export default theme