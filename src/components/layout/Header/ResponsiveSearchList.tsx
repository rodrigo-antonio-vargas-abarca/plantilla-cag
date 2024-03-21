import SVG from "@commonComponents/SVG";
import { useAppDispatch, useAppSelector } from "@hooks/common/State";
import { setResponsiveSearch } from "@state/common/layout/LayoutSlice";
import { SearchSuggestionListType } from "@data/props/Layout";
import Link from "next/link";
import Icono from "@commonComponents/Icono";
import {Iconos} from "@data/constants/Iconos";

const ResponsiveSearchList = ({ searchedArray, setSearchedWord }: SearchSuggestionListType) => {
  const dispatch = useAppDispatch();
  
  const handleSearch = () => {
    setSearchedWord("");
    dispatch(setResponsiveSearch());
  };

  return (
    <>
      {searchedArray?.map((item, index) => (
         <div className="ProfileCard u-cf" key={index}>
         <div className="ProfileCard-details ps-2">
           <div className="ProfileCard-realName">
             <Link className="realname  w-auto d-flex justify-content-start gap-2" href={`${item.path}`} onClick={handleSearch}>
               <Icono icono={Iconos.ESTRELLA}/>
               {item.title}
             </Link>
           </div>
         </div>
       </div>
      ))}

    </>
  );
};

export default ResponsiveSearchList;
