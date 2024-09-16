import { commands } from '@/app/data/commands';
import CommandCard from './command-card/command-card-component';
import { useEffect, useState } from 'react';
type SearchProps = {
	searchValue: string;
};
const CommandsList = ({ searchValue }: SearchProps) => {
  const [filteredCommands, setFilteredCommands] = useState(commands);
	useEffect(() => {
		const filteredCommands = commands.filter(command => {
			return (
				command.name.toLowerCase().includes(searchValue.toLowerCase()) ||
				command.use.toLowerCase().includes(searchValue.toLowerCase()) ||
				command.tag.toLowerCase().includes(searchValue.toLowerCase()) ||
				command.flags.some(flag =>
					flag.name.toLowerCase().includes(searchValue.toLowerCase())
				)
			);
		});
		setFilteredCommands(filteredCommands);
	}, [searchValue]);
	return (
		<div className='flex flex-col gap-6 justify-center items-center h-full w-full'>
			{filteredCommands?.length > 0 &&
				filteredCommands.map((command, index) => (
					<CommandCard key={index} command={command} />
				))}
		</div>
	);
};

export default CommandsList;
