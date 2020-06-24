import React, { useState } from "react";
import TextField from "./TextField.jsx";

const FormExample = () => {
  const [defaultValue, setDefaultValue] = useState("초기값이 있을수 있습니다.");
  const [value, setValue] = useState("");
  const [readOnlyValue, setReadOnlyValue] = useState("읽기전용입니다.");
  const onChange = (value) => setValue(value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("### e: ", value, value.length);
  };

  return (
    <article>
      <h2 className="sc-out">Form UI 페이지</h2>
      <section>
        <h3 className="page-title">Form UI</h3>
        <form className="form" onSubmit={onSubmit}>
          <fieldset>
            <legend className="sc-out">폼 예제</legend>
            <div className="form__item form__control">
              <TextField
                id="textarea"
                label="Default"
                defaultValue={defaultValue}
                value={value}
                max={200}
                change={onChange}
                placeholder="내용을 입력해주세요."
              />

              <button
                type="submit"
                className="submit"
                disabled={value.length === 0 || defaultValue === value}
              >
                <span>전송</span>
              </button>
            </div>

            <div className="form__item">
              <TextField
                id="disabledTextarea"
                label="Disabled"
                placeholder="내용을 입력해주세요."
                disabled
              />
            </div>

            <div className="form__item">
              <TextField
                id="readOnlyTextarea"
                label="ReadOnly"
                defaultValue={readOnlyValue}
                placeholder="내용을 입력해주세요."
                readOnly
              />
            </div>
          </fieldset>
        </form>
      </section>
    </article>
  );
};

export default FormExample;
