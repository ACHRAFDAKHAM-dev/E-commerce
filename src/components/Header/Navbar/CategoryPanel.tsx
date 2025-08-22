import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { FaRegSquarePlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Button } from '@mui/material';
import "../Navbar/Style.css";
import { Link } from 'react-router-dom';

type Props = {
  isOpenCategoryPanel: boolean;
  setIsOpenCategoryPanel: React.Dispatch<React.SetStateAction<boolean>>;
};

function CategoryPanel(props: Props) {

  const [subMenuIndex, setSubMenuIndex] = React.useState<number | null>(null);

  const openSubMenu = (index: number) => {
    setSubMenuIndex(subMenuIndex === index ? null : index);
  };

  const DrawerList = (
    <Box
      className='Category-panel'
      sx={{ width: 250 }}
      role="presentation"
    >
      <h3 className='p-3 text-[16px] font-[500] flex items-center justify-between'>
        Shop By Categories 
        <IoClose 
          className='cursor-pointer text-[20px] font-[500]'
          onClick={() => props.setIsOpenCategoryPanel(false)}
        />
      </h3>
     
      <div className="scroll">
        <ul className='w-full'>
          <li className='list-none flex items-center relative'>
            <Link to={'/'} className='w-full'>
              <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                Fashion
              </Button>
            </Link>
            <FaRegSquarePlus
              className='absolute top-[10px] right-[15px] cursor-pointer'
              onClick={() => openSubMenu(0)}
            />
             
            {subMenuIndex === 0 && (
              <ul className='submenu absolute top-[100%] left-[0%] w-full pl-3'>
                <li className='list-none relative'>
                  <Link to={'/'} className='w-full'>
                    <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                      Apparel
                    </Button>
                  </Link>
                  <FaRegSquarePlus
                    className='absolute top-[10px] right-[15px] cursor-pointer'
                  />  

                  <ul className='inner-submenu absolute top-[100%] left-[0%] w-full pl-3'>
                    <li className='list-none relative mb-1'>
                      <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                        Smart Tablet
                      </Link> 
                    </li>
                    <li className='list-none relative mb-1'>
                      <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                        Crepe T-shirt
                      </Link> 
                    </li>
                    <li className='list-none relative mb-1'>
                      <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                        Leather Watch
                      </Link> 
                    </li>
                    <li className='list-none relative mb-1'>
                      <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                        Rolling Diamond
                      </Link> 
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer
      open={props.isOpenCategoryPanel}
      onClose={() => props.setIsOpenCategoryPanel(false)} 
    >
      {DrawerList}
    </Drawer>
  );
}

export default CategoryPanel;
