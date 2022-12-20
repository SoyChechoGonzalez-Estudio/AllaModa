import {Avatar} from '@mui/material';

const CountAddedCartItems = () => {
	
	const positionNumber = {
		position: 'absolute',
		bottom: 20,
		left: 20,
		backgroundColor: '#F34E4E',
		width: 24,
		height: 24
	};
	
	return (
		<Avatar sx={positionNumber}>
			1
		</Avatar>
	);
};

export {CountAddedCartItems};