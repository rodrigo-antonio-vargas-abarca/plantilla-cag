import SVG from "@commonComponents/SVG";
import { useAppSelector } from "@hooks/common/State";
import { BookmarkListData } from "./BookmarkListData";
import { BookmarkBack } from "./BookmarkBack";

export const BookMark = () => {
  const { flip } = useAppSelector((state) => state.layout);

  return (
    <li className="onhover-dropdown bookmark-items">
      <SVG iconId="star" />
      <div className={`onhover-show-div bookmark-flip ${flip ? "active" : ""}`}>
        <div className="flip-card">
          <div className={`flip-card-inner ${flip ? "flipped" : ""}`}>
            <BookmarkListData />
            <BookmarkBack />
          </div>
        </div>
      </div>
    </li>
  );
};