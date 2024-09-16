import { OutlinedInput } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Search = () => {
  return (
    <div className="mb-6 w-full">
      <OutlinedInput
        placeholder='Search by name, use, flag, or tag..'
        className='bg-[#222] border border-gray-700 rounded-lg p-2 text-gray-400 w-full'
        autoFocus
        endAdornment={<SearchOutlinedIcon />}
      />
    </div>
  )
}

export default Search;