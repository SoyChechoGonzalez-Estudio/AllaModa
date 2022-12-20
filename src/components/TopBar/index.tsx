import {Toolbar, Container, AppBar} from '@mui/material';

import {Logo} from '../Logo';
import {UserSettings} from '../UserSettings';
import {NavBar} from '../NavBar';

const TopBar = () => {
	
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar>
					<NavBar/>
					<Logo/>
					<UserSettings/>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export {TopBar};