import { Typography } from '@mui/material';

const Header = () => {
	return (
		<header className='py-6 px-10 border-b border-gray-500'>
			<Typography component='h1' className='font-bold text-3xl font-mono'>
				get g<span className='text-sky-400'>i</span>t
			</Typography>
		</header>
	);
};

export default Header;
