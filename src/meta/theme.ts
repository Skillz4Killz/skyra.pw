import { blue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: blue[600],
			light: blue[400],
			dark: blue[800],
			contrastText: '#ffffff'
		},
		secondary: {
			main: '#2D2D2D',
			light: '#36393F',
			dark: '#212121',
			contrastText: '#ffffff'
		},
		background: {
			default: '#16171d'
		},
		common: {
			white: '#EEEEEE',
			black: '#16171d'
		},
		error: {
			main: '#C22E14'
		}
	}
});