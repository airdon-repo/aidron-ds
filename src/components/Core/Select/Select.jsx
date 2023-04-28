import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { TextField } from "../TextField";
import { SelectItem } from "./SelectItem";

const Select = ({
  children,
  label,
  width,
  selected,
  placeholder,
  multiselect,
  handleChange,
  readOnly,
}) => {
  const [selectedItem, setSelectedItem] = useState(
    typeof selected === "object" ? undefined : selected
  );
  const [multiSelected, setMultiSelected] = useState(
    multiselect ? selected : []
  );
  const [selectedText, setSelectedText] = useState(label);
  const [richChildren, setRichChildren] = useState(children);
  const [showOptions, setShowOptions] = useState(false);
  const node = useRef();

  const checkSelected = (value) => {
    if (multiselect) {
      return multiSelected.some((e) => e === value);
    }
    return selectedItem === value;
  };

  const handleMultiple = (value) => {
    setShowOptions(true);
    setMultiSelected(
      multiSelected.some((e) => e === value)
        ? multiSelected.filter((e) => e !== value)
        : [value, ...multiSelected]
    );
  };

  const handleSingle = (value) =>
    setSelectedItem(value === selectedItem ? undefined : value);

  const PropedChildren =
    richChildren &&
    richChildren.map((child, idx) => {
      if (React.isValidElement(child) && child.type === SelectItem) {
        return React.cloneElement(child, {
          key: idx.toString(),
          onSelect: multiselect ? handleMultiple : handleSingle,
          selected: checkSelected(child.props.value),
        });
      }
      return child;
    });

  const changeHandler = (x) => {
    if (x !== "") {
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
    const filtered = children?.filter((child) => {
      if (typeof child.props?.children === "string") {
        return (
          child.props?.children.toLowerCase().indexOf(x.toLowerCase()) !== -1
        );
      }
      if (typeof child.props?.children === "object") {
        return child.props?.label.toLowerCase().indexOf(x.toLowerCase()) !== -1;
      }
      return false;
    });
    setRichChildren(filtered);
  };

  const parseName = (names) => {
    if (names.length > 1) {
      return `${names[0]} ...(+${names.length - 1})`;
    }
    return names.reduce((a, x) => `${a}, ${x}`, "").substr(2);
  };

  useEffect(() => {
    if (children) {
      setRichChildren(
        children.map((child, idx) => {
          if (React.isValidElement(child) && child.type === SelectItem) {
            return React.cloneElement(child, {
              key: idx.toString(),
              onSelect: multiselect ? handleMultiple : handleSingle,
              selected: checkSelected(child.props.value),
            });
          }
          return child;
        })
      );
    }
  }, [children]);

  useEffect(() => {
    if (multiselect) {
      const names = children
        ?.filter((child) => {
          if (multiSelected.some((e) => e === child.props.value)) {
            return child.props.children;
          }
          return false;
        })
        .filter(Boolean)
        .map((x) => x.props.children);
      setSelectedText(`${label} ${parseName(names)}`);
    }
    if (handleChange) handleChange(multiSelected);
  }, [multiSelected]);

  useEffect(() => {
    if (!multiselect) {
      if (handleChange) handleChange(selectedItem);
      setShowOptions(false);
      if (children && selectedItem) {
        const first = children?.find(
          (child) => child.props.value === selectedItem
        );
        setSelectedText(
          `${label} ${selectedItem && first ? first.props.children : undefined}`
        );
      }
      if (!selectedItem) setSelectedText(label);
    }
  }, [selectedItem]);

  useEffect(() => {
    if (!multiselect) setSelectedItem(selected);
    else setMultiSelected(selected);
  }, [selected]);

  // eslint-disable-next-line consistent-return
  const handleClickOutside = (e) => {
    if (!node.current.contains(e.target)) {
      return setShowOptions(false);
    }
  };

  useEffect(() => {
    if (showOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOptions]);

  return (
    <>
      <select
        defaultValue={selectedItem}
        title="menu-select-hidden"
        hidden
        multiple={multiselect ? 1 : 0}
        onChange={handleChange}
        className={["ragnarok", "menu-select-hidden"].join(" ")}
      >
        {children &&
          children.map((option, idx) => (
            <option value={option.props.value.toString()} key={idx.toString()}>
              {option.props.children}
            </option>
          ))}
      </select>

      <div
        ref={node}
        style={{ width }}
        data-testid="select"
        className={[
          "ragnarok",
          "menu-select-wrapper",
          showOptions ? "open" : "close",
        ].join(" ")}
      >
        <TextField
          iconRight="chevron-down"
          width={width}
          readOnly={readOnly}
          onClickRight={() => setShowOptions(!showOptions)}
          label={selectedText || label}
          helpClass="help"
          type="search"
          onChange={changeHandler}
          placeholder={placeholder}
        />
        <div
          data-testid="menu-select"
          className={[
            "ragnarok",
            "menu-select",
            showOptions ? "open" : "close",
          ].join(" ")}
        >
          {PropedChildren && PropedChildren}
        </div>
      </div>
    </>
  );
};

Select.propTypes = {
  /**
   * Which item should be selected?
   */
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Label text to show
   */
  label: PropTypes.string,
  /**
   * Width of the whole component
   */
  width: PropTypes.string,
  /**
   * Width of the whole component
   */
  readOnly: PropTypes.bool,
  /**
   * Should it accept multiselect?
   */
  multiselect: PropTypes.bool,
  /**
   * Heading contents
   */
  children: PropTypes.any,
  /**
   * Optional change handler
   */
  handleChange: PropTypes.func,
};

Select.defaultProps = {
  children: "",
  selected: undefined,
  label: undefined,
  multiselect: false,
  width: "250px",
  readOnly: false,
  handleChange: undefined,
};

export { Select };
