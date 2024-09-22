'use client';
import { useEffect, useState, useRef } from 'react';
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
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [messageVisible, setMessageVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
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

	useEffect(() => {
		if (ref.current === null) return;
		const getMousePosition = (event: MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
			setMessageVisible(true);
			console.log('mouse position', mousePosition);
		};
		const removeMessage = () => {
			setMessageVisible(false);
		};

		const card = ref.current;
		console.log('card', card);	
		card.addEventListener('mousemove', getMousePosition);
		card.addEventListener('mouseleave', removeMessage);
		return () => {
			card.removeEventListener('mousemove', getMousePosition);
			card.removeEventListener('mouseleave', removeMessage);
		};
	}, []);

	return (
		<>
			<div
				ref={ref}
				className='p-6 w-full bg-[#F6F0F1] dark:bg-[#222222] rounded-lg flex flex-col cursor-pointer 
				transition duration-300 ease-in-out transform 
			hover:bg-[#D9C9CC] hover:dark:bg-[#2c2a2a] shadow-md relative overflow-hidden'
				onClick={handleCopy}>
				<div className='flex justify-between'>
					<h3 className='font-semibold text-lg text-gray-500'># {command.tag}</h3>
				</div>
				<h2 className='font-bold text-xl text-red-700'>{command.name}</h2>
				<p className='text-base'>{command.use}</p>
				<div className='flex flex-col'>
					{command.flags?.length > 0 &&
						command.flags.map((flag: Flag, index: number) => (
							<div key={index} className='flex flex-col mt-4 items-start'>
								<p className='font-semibold text-lg text-gray-100 bg-gray-500 inline px-2 rounded-[4px]'>
									{flag.name}
								</p>
								<p className='text-base'>{flag.use}</p>
							</div>
						))}
				</div>
			</div>
			{copied && (
				<div
					className={`${
						copied ? 'block' : 'hidden'
					} fixed p-2 bg-gray-300 text-gray-800 top-3 left-1/2 translate-x-1/2 rounded`}>
					<p className='text-base'>Copied!</p>
				</div>
			)}
			<div
				style={{
					top: `${mousePosition.y + 10}px`,
					left: `${mousePosition.x + 10}px`,
					display: `${messageVisible ? 'block' : 'none'}`,
				}}
				className={`fixed text-xs text-gray-300 z-50 bg-gray-800 p-2`}>
				<p>Click to copy</p>
			</div>
		</>
	);
};

export default CommandCard;
