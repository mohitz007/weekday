import React from "react";
import "./styles.css";

const SelectInput = ({ optionArray, width, handleClick, defaultValue }) => {
  return (
    <div>
      <select
        style={{ width }}
        className="temp"
        defaultValue={defaultValue}
        onChange={(e) => {
          handleClick(e.target.value);
        }}
      >
        {optionArray.map((item, index) => {
          if (index === 0) {
            return <option selected={defaultValue===''} value="">{item}</option>;
          } else {
            return <option value={item}>{item}</option>;
          }
        })}
      </select>
    </div>
  );
};

const Header = ({
  minExpFilter,
  locationFilter,
  salaryFilter,
  remoteFilter,
  roleFilter,
  handleMinExpChange,
  handleLocationChange,
  handleSalaryChange,
  handleRemoteChange,
  handleRoleChange,
}) => {
  return (
    <div class="headerContainer">
      <SelectInput
        width={150}
        handleClick={handleRoleChange}
        defaultValue={roleFilter}
        optionArray={[
          "Roles",
          "Backend",
          "Frontend",
          "Fullstack",
          "iOS",
          "Flutter",
          "React-native",
          "Android",
          "Tech-lead",
        ]}
      />
      <SelectInput
        width={220}
        handleClick={handleLocationChange}
        defaultValue={locationFilter}
        optionArray={[
          "Number of employees",
          "1 - 10",
          "11 - 20",
          "21 - 50",
          "51 - 100",
          "101 - 200",
          "201 - 500",
          "500+",
        ]}
      />
      <SelectInput
        width={200}
        defaultValue={minExpFilter}
        handleClick={handleMinExpChange}
        optionArray={[
          "Experience",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
        ]}
      />
      <SelectInput
        defaultValue={remoteFilter}
        handleClick={handleRemoteChange}
        width={200}
        optionArray={["Office-type", "Remote", "in-office"]}
      />
      <SelectInput
        defaultValue={salaryFilter}
        handleClick={handleSalaryChange}
        width={300}
        optionArray={[
          "Minimum Base pay salary",
          "00L",
          "10L",
          "20L",
          "30L",
          "40L",
        ]}
      />
      {(minExpFilter ||
        locationFilter ||
        salaryFilter ||
        remoteFilter ||
        roleFilter) && (
        <div
          onClick={() => {
            handleMinExpChange("");
            handleLocationChange("");
            handleSalaryChange("");
            handleRemoteChange("");
            handleRoleChange("");
          }}
          className="clearFilterStyles"
        >
          Clear All Filter
        </div>
      )}
    </div>
  );
};

export default Header;
