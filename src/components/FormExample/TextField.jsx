import React, { useState } from "react";

const TextField = ({
  label,
  defaultValue,
  max,
  id,
  value,
  placeholder,
  change,
  disabled,
  readOnly,
}) => {
  const [focused, setFocused] = useState(false);
  const count = value ? max - value.length : max;

  return (
    <div className="textfield">
      <label htmlFor={id} className="textfield__label">
        {label}
      </label>
      <div
        className={`textfield__textarea ${
          value && value.length > 0 && focused ? "textfield__textarea--focused" : ""
        }`}
      >
        <textarea
          id={id}
          maxLength={max}
          placeholder={placeholder}
          defaultValue={defaultValue ? defaultValue : value}
          disabled={disabled}
          readOnly={readOnly}
          onChange={(e) => change(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <span className="textfield__count">
          {value ? count <= 0 ? <i className="color-hilight">0</i> : count : max}
        </span>
      </div>
    </div>
  );
};

export default TextField;
