import {Link} from 'react-router-dom';


import Logotipo from '/Logotipo.svg';
import Box from '@mui/material/Box';


const Logo = () => {
	return (
		<Box sx={{flexGrow: 1, display: 'block', mr: 1}}>
			<Link to="/">
				<img src={Logotipo} alt=""/>
			</Link>
		</Box>
	);
};

export {Logo};