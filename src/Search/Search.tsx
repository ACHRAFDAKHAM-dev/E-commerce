import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";
const Search = ()=>{
    return (
        <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
            <input 
            type="text"
             name="" 
             id=""
             placeholder="Search for products..."
             className="w-full h-[40px] focus:outline-none bg-inherit p-2 "
              />
              <Button className={'!absolute top-[8px] right-[5px] !text-black z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full'}>
                <IoSearch className={'text-[#4e4e4e]] text-[22px]'} />
              </Button>
        </div>
    );
}

export default Search;