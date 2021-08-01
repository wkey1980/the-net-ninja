import { Button, Container, TextField, Typography } from '@material-ui/core'
import React from 'react'

import { makeStyles } from '@material-ui/core';

// Icons
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
	field: {
		marginTop: 20,
		marginBottom: 20,
		display: 'block',
	}
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

			<form noValidate autoComplete="off">

			<TextField
					className={classes.field}
					label="Note Title"
					variant="outlined"
					color="secondary"
					fullWidth
					required />

				<TextField
					className={classes.field}
					label="Details"
					variant="outlined"
					color="secondary"
					fullWidth
					required
					multiline rows={4} />

			</form>

			<Button
				onClick={() => console.log('You Have Clicked Me')}
				type="submit"
				color="secondary"
				variant="contained"
				endIcon={<KeyboardArrowRightIcon />}
			>
				Submit
			</Button>

		</Container>
	)
}
