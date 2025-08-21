import { Button} from "@mui/material";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";


function Navbar (){
    return (
       <>
        <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
            <div className="col_1 w-[20%]">
                <Button className="!text-black gap-2 w-full">
                    <RiMenu2Fill className="text-[18px]" />
                    Shop By Categories 
                    <LiaAngleDownSolid className="text-[13px] ml-auto font-bold"/>
                    </Button>
            </div>
            <div className="col_2 w-[60%]">
                <ul className="flex items-center gap-2">
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                        <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                            Home
                        </Button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                Fashion
                            </Button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                Electronics
                            </Button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                Bags
                            </Button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                Footwear
                            </Button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                Groceries
                            </Button>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                Beauty
                            </Button>    
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                wellness
                            </Button>   
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                Jewellery
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col_3 w-[20%] ">
                <p className="text-[15px] font-[500] flex items-center gap-3 mb-0 mt-0">
                    <GoRocket className="text-[18px]"/>
                    Free International Delivery
                </p>
            </div>
        </div>
    </nav>


        {/* Category Panel Components */}
    <CategoryPanel/>
       </>
    );
}
export default Navbar;


















// import { Button} from "@mui/material";
// import { RiMenu2Fill } from "react-icons/ri";
// import { LiaAngleDownSolid } from "react-icons/lia";
// import { Link } from "react-router-dom";
// import { GoRocket } from "react-icons/go";


// function Navbar (){
// const listItems = [
// {id:1,title:';klas;kl'},
// {id:2,title:'lkl;l'},
// {id:3,title:'klkl;kl'},
// {id:4,title:';l;l;l'},
// {id:5,title:';l;l;l'},
// {id:6,title:';;l'},
// {id:7,title:'kl;l'},
// {id:8,title:';l;l'},
// ]

// const list = listItems.map((item)=>{
// return (
// <li className="list-none" key={item.id}>
//        <Link to="/" className="link transition text-[14px] font-[500]">
//             <Button className="link transition !text-black !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
//                  {item.title}
//              </Button>
//         </Link>
// </li>
// )
// })
//     return (
//         <nav className="py-2">
//         <div className="container flex items-center justify-end gap-8">
//             <div className="col_1 w-[20%]">
//                 <Button className="!text-black gap-2 w-full">
//                     <RiMenu2Fill className="text-[18px]" />
//                     Shop By Categories 
//                     <LiaAngleDownSolid className="text-[13px] ml-auto font-bold"/>
//                     </Button>
//             </div>
//             <div className="col_2 w-[60%]">
//                 <ul className="flex items-center gap-2">
// 			{list}
//                  </ul>
//             </div>
//             <div className="col_3 w-[20%] ">
//                 <p className="text-[15px] font-[500] flex items-center gap-3 mb-0 mt-0">
//                     <GoRocket className="text-[18px]"/>
//                     Free International Delivery
//                 </p>
//             </div>
//         </div>
//     </nav>
//     );
// }
// export default Navbar;