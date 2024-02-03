import React, { Fragment } from "react";
import Select from "react-select";

const SelectInput = ({
  required,
  label,
  className,
  name,
  sup,
  divClass,
  borderColor,
  options,
  height,
  isMulti,
  isDark,
  values,
  withId,
  placeholder,
  packages,
  changeMethod,
  dropLabel,
  dropValue,
  dropPart,
  NoOptionText,
  isClearable,
  isSearchable,
}) => {
  const colourStyles = {
    control: (base, state) => ({
      ...base,
      background: isDark ? "transparent" : "white",
      color: isDark ? "white" : "black",
      borderColor: borderColor ? borderColor : "var(--off-white)",
      boxShadow: "none",
      height: height,
      "&:hover": {
        borderColor: "var(--off-white)",
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
      background: isDark ? "var(--root-bg)" : "white",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: isDark ? "white" : "black",
    }),
    input: (base) => ({
      ...base,
      color: isDark ? "white" : "black",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused
          ? isDark
            ? "var(--primary)"
            : "#2196f3"
          : null,
        color: isFocused
          ? isDark
            ? "white"
            : "white"
          : isDark
          ? "white"
          : "black",
        "&:hover": {
          color: "white",
        },
        wordBreak: "break-word",
      };
    },
  };
  return (
    <Fragment>
      <div className={`col-12 ${divClass && divClass}`}>
        {label && (
          <h6>
            {label}
            <sup className="text-danger">{sup}</sup>
          </h6>
        )}
        <Select
          required={required}
          name={name}
          className={`${className}`}
          classNamePrefix="react-select"
          placeholder={placeholder}
          isDisabled={false}
          isLoading={false}
          isClearable={isClearable}
          isRtl={false}
          isSearchable={isSearchable}
          isMulti={isMulti}
          styles={colourStyles}
          value={
            values && {
              [dropValue]: values[dropValue],
              [dropLabel]: withId
                ? values[dropPart] + " - " + values[dropLabel]
                : packages
                ? values[dropLabel] + " - $" + values[dropPart] + " Per Month"
                : values[dropLabel],
            }
          }
          getOptionLabel={(option) =>
            withId
              ? option[dropPart] + " - " + option[dropLabel]
              : packages
              ? option[dropLabel] + " - $" + option[dropPart] + " Per Month"
              : option[dropLabel]
          }
          getOptionValue={(option) => option[dropValue]}
          options={options}
          onChange={(obj) => changeMethod(obj)}
          noOptionsMessage={({ inputValue }) =>
            !inputValue ? NoOptionText : "No Options"
          }
        />
      </div>
    </Fragment>
  );
};

export default SelectInput;
