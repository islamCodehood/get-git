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
				className='dark:bg-[#222]  rounded-lg p-5
        w-full focus:ring-none focus-border-none text-base
          focus-visible:outline-none focus-visible:outline-red-300 focus-visible:outline-2 focus:outline-2'
				autoFocus
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					handleSearch(e.target.value)
				}
			/>
		</div>
	);
};

export default Search;
