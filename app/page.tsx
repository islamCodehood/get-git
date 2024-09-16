import CommandsList from './components/commands-list/commands-list.component';
import Search from './components/search/search.component';

export default function Home() {
	return (
		<main>
			<div className=' py-10 xl:px-40 lg:px-8 md:px-5 px-3'>
				<Search />
				<CommandsList />
			</div>
		</main>
	);
}
