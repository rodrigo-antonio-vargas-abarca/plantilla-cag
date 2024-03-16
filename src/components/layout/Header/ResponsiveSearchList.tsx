import SVG from "@commonComponents/SVG";
import { useAppDispatch, useAppSelector } from "@hooks/common/State";
import { setResponsiveSearch } from "@state/common/layout/LayoutSlice";
import { SearchSuggestionListType } from "@data/props/Layout";
import Link from "next/link";

const ResponsiveSearchList = ({ searchedArray, setSearchedWord }: SearchSuggestionListType) => {
  const dispatch = useAppDispatch();
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  
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
             <Link className="realname  w-auto d-flex justify-content-start gap-2" href={`/${i18LangStatus}/${item.path}`} onClick={handleSearch}>
               <SVG iconId={`stroke-${item.icon}`} />
               {item.title}
             </Link>
           </div>
         </div>
       </div>
      ))}
      {!searchedArray?.length && <p>Opps!! There are no result found.</p>}
    </>
  );
};

export default ResponsiveSearchList;
