import { Input, Select, Textarea } from "components";

import { Link } from "router";
import { useBackLocation } from "global";

export default function EmployeeAdd() {
  const backLocation = useBackLocation();
  return (
    <div className="container__main__content__details">
      <div className="container__main__content__details__main container__main__content__details__main__special">
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Status" placeholder="Enter first name" />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Last Name" placeholder="Enter status" />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Phone" placeholder="Batch Number" />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Select
              label="Select Products"
              placeholder="select "
              isMulti
              options={[
                { value: "Active", label: "Active" },
                { value: "Deactive", label: "Deactive" },
              ]}
            />
          </div>
        </div>

        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Referred By"
              placeholder="Enter referred by"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Address" placeholder="Enter address" />
          </div>
        </div>
        <div className="container__main__content__details__main__row">
          <div className="container__main__content__details__main__row__entry">
            <Input
              type="text"
              label="Referred By"
              placeholder="Enter referred by"
            />
          </div>
          <div className="container__main__content__details__main__row__entry">
            <Input type="text" label="Address" placeholder="Enter address" />
          </div>
        </div>

        <Textarea label="Description" placeholder="Enter Description" />
      </div>
      <div className="container__main__content__details__buttons">
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__primary"
        >
          Add
        </Link>
        <Link
          to={backLocation}
          className="container__main__content__details__buttons__button container__main__content__details__buttons__secondary"
        >
          Discard
        </Link>
      </div>
    </div>
  );
}
