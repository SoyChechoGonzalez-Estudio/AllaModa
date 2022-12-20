import {useState, MouseEvent} from 'react';

import {Tooltip, IconButton, Avatar, Menu, MenuItem, Typography, Box, Stack} from '@mui/material';
import {CartWidget} from '../CartWidget';

const settings = ['Mi Perfil', 'Mi cuenta', 'Cerrar Sesión'];

const UserSettings = () => {
	
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
	
	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};
	
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	
	return (
		<Stack direction="row" alignItems="center" gap="32px" sx={{flexGrow: 0}}>
			<CartWidget/>
			<Box>
				<Tooltip title="Open settings">
					<IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
						<Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/61368094?v=4"/>
					</IconButton>
				</Tooltip>
				<Menu
					sx={{mt: '45px'}}
					id="menu-appbar"
					anchorEl={anchorElUser}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					open={Boolean(anchorElUser)}
					onClose={handleCloseUserMenu}>
					{settings.map((setting) => (
						<MenuItem key={setting} onClick={handleCloseUserMenu}>
							<Typography textAlign="center">{setting}</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
		</Stack>
	);
};

export {UserSettings};