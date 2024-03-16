import SVG from "@commonComponents/SVG";
import { MenuList } from "@data/layout/Menu";
import { MenuItem, SearchSuggestionItem } from "@data/props/Layout";
import { ChangeEvent, useEffect, useState } from "react";
import { Form, Input, InputGroup } from "reactstrap";
import SearchSuggestionList from "./SearchSuggestionList";
import { getLinkItemsArray } from "@state/common/layout/HeaderBookmarkSlice";
import { useAppDispatch } from "@hooks/common/State";

export const HeaderSearch = () => {
  const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const suggestionArray: SearchSuggestionItem[] = [];
    let num = 0;
    const getAllLink = (item: MenuItem, icon: string | undefined) => {
      if (item.children) {
        item.children.forEach((ele) => {
          getAllLink(ele, icon);
        });
      } else {
        num = num + 1;
        suggestionArray.push({ icon: icon, title: item.title, path: item.path ? item.path : '' , bookmarked: false, id: num });
      }
    };
    MenuList?.forEach((item) => {
      item.Items?.forEach((child) => {
        getAllLink(child, child.icon);
      });
    });
    setArr(suggestionArray);
    dispatch(getLinkItemsArray(suggestionArray));
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!searchedWord) setSearchedWord("");
    setSearchedWord(e.target.value);
    const result = arr.filter((item) =>item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchedArray(result);
  };

  return (
    <li className="d-md-block d-none">
      <Form className="search-form mb-0 position-relative">
        <InputGroup>
          <span className="input-icon">
            <SVG iconId="search-header" />
            <Input className="w-100 border-0 shadow-none" type="search" placeholder="Search" onChange={(e) => handleSearch(e)} value={searchedWord} />
          </span>
        </InputGroup>
        <div className={`Typeahead-menu header-menu custom-scrollbar ${searchedWord.length ? "is-open" : ""}`}>
          <SearchSuggestionList searchedArray={searchedArray} setSearchedWord={setSearchedWord} />
        </div>
      </Form>
    </li>
  );
};
