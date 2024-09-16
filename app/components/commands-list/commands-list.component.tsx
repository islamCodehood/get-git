import { commands } from "@/app/data/commands";
import CommandCard from "./command-card/command-card-component";

const CommandsList = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-full w-full">
      {
        commands?.length > 0 && commands.map((command, index) => (
          <CommandCard key={index} command={command} />
        ))
      }
    </div>
  )
}

export default CommandsList;