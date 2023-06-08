import {
  TableEntryDeleteButton,
  TableEntryDescription,
  TableEntryEditButton,
  StatusButton,
  TableEntryText,
  TableEntryViewButton,
  FilterButton,
} from "components";

import { Link } from "router";
import { Search } from "react-feather";

import { useLocation } from "react-router-dom";

export default function Employees() {
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
          <div className="container__main__content__listing__header__left__filter">
            <FilterButton to="" text="Pending Projects" />
            <FilterButton to="" text="Completed Projects" />
          </div>
        </div>
        <div className="container__main__content__listing__header__right">
          <Link
            to=""
            className="container__main__content__listing__header__right__button__exp"
          >
            Export
          </Link>
          <Link
            to={location.pathname.toLowerCase() + "/add"}
            className="container__main__content__listing__header__right__button"
          >
            Add New
          </Link>
        </div>
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            Actions
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Status
          </div>
          <div className="container__main__content__listing__table__header__entry">
            First Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Last Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Phone No.
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Email
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Referred By
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Username
          </div>

          <div className="container__main__content__listing__table__header__entry">
            Department
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Role
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
        </div>
      </div>
    </div>
  );
}

function TableEntry() {
  return (
    <div className="container__main__content__listing__table__content__list">
      <div className="container__main__content__listing__table__content__list__entry">
        <TableEntryViewButton to="/john-doe" />
        <TableEntryEditButton />
        <TableEntryDeleteButton />
      </div>
      <StatusButton text="Active" />
      <TableEntryText>john</TableEntryText>
      <TableEntryText>deved</TableEntryText>
      <TableEntryText>+92343323454</TableEntryText>
      <TableEntryText>Abraaa323@gmail.com</TableEntryText>
      <TableEntryDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
        nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl
        nisl sit amet nisl.
      </TableEntryDescription>

      <TableEntryText>Adbraaaaa</TableEntryText>
      <TableEntryDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
        nisl eget ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl
        nisl sit amet nisl.
      </TableEntryDescription>
      <TableEntryText>Admin</TableEntryText>
    </div>
  );
}
