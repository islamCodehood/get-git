import { commands } from '@/app/data/commands';
import CommandCard from './command-card/command-card-component';
import { useEffect, useState } from 'react';
type SearchProps = {
	searchValue: string;
};
const CommandsList = ({ searchValue }: SearchProps) => {
  const [filteredCommands, setFilteredCommands] = useState(commands);
	useEffect(() => {
    const formattedSearchValue = searchValue.trim().toLowerCase().split(' ')
    formattedSearchValue.map((value) => {
      const filteredCommands = commands.filter(command => {
        return (
          command.name.toLowerCase().includes(value) ||
          command.use.toLowerCase().includes(value) ||
          command.tag.toLowerCase().includes(value) ||
          command.flags.some(flag =>
            flag.name.toLowerCase().includes(value)
          )
        );
      });
      setFilteredCommands(filteredCommands);
    })
		// 	return (
		// 		command.name.toLowerCase().includes(formattedSearchValue) ||
		// 		command.use.toLowerCase().includes(formattedSearchValue) ||
		// 		command.tag.toLowerCase().includes(formattedSearchValue) ||
		// 		command.flags.some(flag =>
		// 			flag.name.toLowerCase().includes(formattedSearchValue)
		// 		)
		// 	);
		// });
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
