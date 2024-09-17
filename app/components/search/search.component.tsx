import { OutlinedInput } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Search = ({
	handleSearch,
}: {
	handleSearch: (value: string) => void;
}) => {
	return (
		<div className='mb-6 w-full flex '>
			<input
				type='text'
				placeholder='Search by name, use, flag, or tag..'
				className='bg-[#222] border border-gray-700 rounded-lg p-5
        text-gray-400 w-full focus:ring-1 focus:ring-gray-700 
          focus-visible:outline-none focus-visible:outline-sky-400 focus-visible:outline-1 focus:outline-1'
				autoFocus
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					handleSearch(e.target.value)
				}
			/>
			{/* <SearchOutlinedIcon className='text-gray-400' /> */}
		</div>
	);
};

export default Search;
