import './App.css';
import {ThemeProvider} from '@mui/material';
import {theme} from './config/theme';
import {BrowserRouter} from 'react-router-dom';
import {Landing} from './pages/Landing';
import {TopBar} from './components/TopBar';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<TopBar/>
				<Landing/>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;

