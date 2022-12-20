import './App.css';
import {ThemeProvider} from '@mui/material';
import {theme} from './config/theme';
import {Header} from './components/Header';
import {BrowserRouter} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Header/>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;

