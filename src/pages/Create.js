import { Button, Container, Typography } from '@material-ui/core'
import React from 'react'

import { makeStyles } from '@material-ui/core';

// Icons
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({

})

export default function Create() {

	const classes = useStyles()

	return (
		<Container>

			<Typography
				variant="h6"
				component="h2"
				color="textSecondary"
				gutterBottom
			>
				Create a New Note
			</Typography>

			<Button
				onClick={() => console.log('You Have Clicked Me')}
				type="submit"
				color="primary"
				variant="contained"
				endIcon={<KeyboardArrowRightIcon />}
			>
				Submit
			</Button>
			<Button
				onClick={() => console.log('You Have Clicked Me')}
				type="submit"
				color="secondary"
				variant="contained"
				endIcon={<KeyboardArrowRightIcon />}
			>
				Exit
			</Button>

		</Container>
	)
}
