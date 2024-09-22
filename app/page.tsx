'use client';
import { useState } from 'react';
import CommandsList from './components/commands-list/commands-list.component';
import Search from './components/search/search.component';

export default function Home() {
	const [searchValue, setSearchValue] = useState<string>('');
	const handleSearch = (searchValue: string) => {
		setSearchValue(searchValue);
	};
	return (
		<main>
			<div className='py-10 xl:px-56 lg:px-36 md:px-24 px-3'>
				<Search handleSearch={handleSearch} />
				<CommandsList searchValue={searchValue} />
			</div>
		</main>
	);
}
