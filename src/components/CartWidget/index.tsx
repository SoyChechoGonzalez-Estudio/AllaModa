import {Box} from '@mui/material';
import {ShoppingBag} from '@mui/icons-material';
import {CountAddedCartItems} from '../CountAddedCartItems';

const CartWidget = () => {
	
	return (
		<Box sx={{position: 'relative'}}>
			<ShoppingBag sx={{fontSize: 32}}/>
			<CountAddedCartItems/>
		</Box>
	
	);
};

export {CartWidget};