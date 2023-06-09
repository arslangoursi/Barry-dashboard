import {
  TableEntryDeleteButton,
  TableEntryEditButton,
  TableEntryStatus,
  TableEntryText,
} from "components";

import { Link } from "router";
import { Search } from "react-feather";
import { useLocation } from "react-router-dom";

export default function Zipcodes() {
  const location = useLocation();
  return (
    <div className="container__main__content__listing">
      <div className="container__main__content__listing__header">
        <div className="container__main__content__listing__header__left">
          <form className="container__main__content__listing__header__left__search">
            <input
              type="text"
              placeholder="Search"
              className="container__main__content__listing__header__left__search__field"
            />
            <button className="container__main__content__listing__header__left__search__button">
              <Search size={20} color="currentColor" />
            </button>
          </form>
        </div>
        <div className="container__main__content__listing__header__right">
          <Link
            to={location.pathname.toLowerCase() + "/add"}
            className="container__main__content__listing__header__right__button"
          >
            Add
          </Link>
        </div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Status
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Delivery Charges
          </div>
          <div className="container__main__content__listing__table__header__entry">
            VAT
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Actions
          </div>
        </div>
        <div className="container__main__content__listing__table__content">
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
        </div>
      </div>
    </div>
  );
}

function TableEntry() {
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        {/* <TableEntryViewButton /> */}
        <TableEntryEditButton />
        <TableEntryDeleteButton />
      </div>
      {/* <TableEntryStatus /> */}
      <TableEntryText>john devved</TableEntryText>
      <TableEntryText>9384</TableEntryText>
      <TableEntryText>77777</TableEntryText>{" "}
      <TableEntryText>Active</TableEntryText>
    </div>
  );
}
