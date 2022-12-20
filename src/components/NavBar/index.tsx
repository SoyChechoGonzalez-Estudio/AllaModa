import {useState, MouseEvent} from 'react';

import {Box, IconButton, Menu, MenuItem, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Camisas', 'Camisetas', 'Jeans', 'Pantalones', 'OverSize', 'Buzos'];

const NavBar = () => {
	
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	
	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	
	
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	
	return (
		<Box sx={{flexGrow: 1, display: 'flex'}}>
			<IconButton
				size="large"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleOpenNavMenu}
				color="inherit"
			>
				<MenuIcon/>
			</IconButton>
			<Menu
				id="menu-appbar"
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
				sx={{
					display: 'block',
				}}
			>
				{pages.map((page) => (
					<MenuItem key={page} onClick={handleCloseNavMenu}>
						<Typography textAlign="center">{page}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};

export {NavBar};