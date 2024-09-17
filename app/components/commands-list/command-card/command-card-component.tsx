'use client';
import { IconButton } from '@mui/material';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { useEffect, useState } from 'react';
type CommandCardProps = {
	command: {
		name: string;
		use: string;
		flags: Flag[];
		tag: string;
	};
};
type Flag = {
	name: string;
	use: string;
};

const CommandCard = ({ command }: CommandCardProps) => {
	const [copied, setCopied] = useState(false);
	const [hovered, setHovered] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(command.name);
		setCopied(true);
	};

	useEffect(() => {
		if (!copied) return;
		setTimeout(() => {
			setCopied(false);
		}, 1000);
	}, [copied]);

	return (
		<>
			<div
				className='p-6 w-full bg-[#222222] rounded-lg flex flex-col cursor-pointer transition duration-300 ease-in-out transform hover:scale-[1.01] 
			hover:bg-[#2c2a2a] shadow-md'
				onClick={handleCopy}
				onMouseLeave={() => setHovered(false)}
				onMouseEnter={() => setHovered(true)}>
				<div className='flex justify-between'>
					<h3 className='font-mono font-semibold text-sm text-gray-400'>
						# {command.tag}
					</h3>
					<IconButton
						sx={{
							color: 'gray',
						}}
						onClick={handleCopy}>
						<ContentCopyOutlinedIcon
							sx={{
								color: 'gray',
							}}
						/>
					</IconButton>
				</div>
				<h2 className='font-mono font-semibold text-lg text-sky-400'>
					{command.name}
				</h2>
				<p className='font-mono text-sm text-gray-300'>{command.use}</p>
				<div className='flex flex-col'>
					{command.flags?.length > 0 &&
						command.flags.map((flag: Flag, index: number) => (
							<div key={index} className='flex flex-col mt-4 items-start'>
								<p className='font-mono font-semibold text-sm text-gray-300 bg-gray-600 inline px-1 rounded-sm'>
									{flag.name}
								</p>
								<p className='font-mono text-sm text-gray-300'>{flag.use}</p>
							</div>
						))}
				</div>
			</div>
			{copied && (
				<div
					className={`${
						copied ? 'block' : 'hidden'
					} fixed p-2 bg-gray-300 text-gray-800 top-3 left-1/2 translate-x-1/2 rounded`}>
					<p className='text-sm'>Copied!</p>
				</div>
			)}
		</>
	);
};

export default CommandCard;
