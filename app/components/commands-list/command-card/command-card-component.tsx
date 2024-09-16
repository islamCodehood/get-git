'use client';
import { IconButton, Paper, Typography } from '@mui/material';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { useEffect, useState } from 'react';

const CommandCard = ({ command }: any) => {
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
		}, 2000);
	}, [copied]);

	return (
		<Paper
			elevation={hovered ? 6 : 3}
			className='p-6 w-full bg-[#222] rounded-lg flex flex-col cursor-copy'
			onClick={handleCopy}
			onMouseLeave={() => setHovered(false)}
			onMouseEnter={() => setHovered(true)}>
			<div className='flex justify-between'>
				<Typography
					component='h3'
					className='font-mono font-semibold text-sm text-gray-400'>
					# {command.tag}
				</Typography>
				<IconButton className='text-gray-400' onClick={handleCopy}>
					<ContentCopyOutlinedIcon />
				</IconButton>
			</div>
			<Typography
				component='h2'
				className='font-mono font-semibold text-lg text-sky-400'>
				{command.name}
			</Typography>
			<Typography component='p' className='font-mono text-sm text-gray-300'>
				{command.use}
			</Typography>
			<div className='flex flex-col'>
				{command.flags?.length > 0 &&
					command.flags.map((flag: any, index: number) => (
						<div key={index} className='flex flex-col mt-4 items-start'>
							<Typography className='font-mono font-semibold text-sm text-gray-300 bg-gray-600 inline px-1 rounded-sm'>
								{flag.name}
							</Typography>
							<Typography component='p' className='font-mono text-sm text-gray-300'>
								{flag.use}
							</Typography>
						</div>
					))}
			</div>
			{copied && (
				<Paper
					className={`${
						copied ? 'block' : 'hidden'
					} fixed p-1 bg-gray-300 text-gray-800 top-3 left-1/2 translate-x-1/2 translate-y-1/2`}>
					<Typography component='p' className='text-sm'>
						Copied!
					</Typography>
				</Paper>
			)}
		</Paper>
	);
};

export default CommandCard;
