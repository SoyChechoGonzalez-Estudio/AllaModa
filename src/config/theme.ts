import {createTheme} from '@mui/material';


const primaryDefault = '#F34E4E';
const primaryHover = '#FC8172';
const primaryDisabled = '#F5C9C9';

const orangeOpacity = 'rgba(244, 107, 91, 0.08)';
const actions = '#7BB9FA';
const oldGray = '#A7A7A7';
const black = '#282828';
const white = '#FFFFFF';

const primaryColor = white;
const secondaryColor = '#FFF6EA';

declare module '@mui/material/styles' {
	interface BreakpointOptions {
		xs: number;
		sm: number;
		md: number;
		lg: number;
		xl: number;
	}
}
export const theme = createTheme({
	typography: {
		htmlFontSize: 16,
		fontFamily: [
			'Roboto',
			'Montserrat',
			'sans-serif'
		].join(',')
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
	
	
	palette: {
		primary: {
			main: primaryColor // Establece el color del AppBar a rojo
		},
		secondary: {
			main: secondaryColor
		}
	}
});
