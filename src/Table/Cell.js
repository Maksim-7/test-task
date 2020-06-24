import React from "react";

const clearInputSelection = inputElement => {
  const textEnd = inputElement.value.length;
  inputElement.setSelectionRange(textEnd, textEnd);
};

export function ReadonlyCell({ value }) {
  return <span>{value}</span>;
}

export function EditableCell({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData,
  validateCallback
}) {
  const [value, setValue] = React.useState(initialValue);
  const [prevValue, setPrevValue] = React.useState(initialValue);
  const [isEditable, setIsEditable] = React.useState(false);

  const handleChange = ({ currentTarget }) => {
    let { value } = currentTarget;

    if (validateCallback) {
      value = validateCallback(value);
    }

    setValue(value);
  };

  const handleBlur = ({ currentTarget: input }) => {
    clearInputSelection(input);
    setIsEditable(false);
    updateMyData(index, id, value);
  };

  const handleDoubleClick = ({ currentTarget: input }) => {
    clearInputSelection(input);
    setPrevValue(value);
    setIsEditable(true);
  };

  const handleKeyDown = ({ key }) => {
    switch (key) {
      case "Escape":
        setValue(prevValue);
        setIsEditable(false);
        break;
      case "Enter":
        setValue(value);
        setIsEditable(false);
        break;
      default:
    }
  };

  return (
    <input
      value={value}
      readOnly={!isEditable}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
}
