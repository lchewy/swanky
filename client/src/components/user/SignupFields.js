import React from "react";

export default values => {
  // { input, label, type, meta: { error, touched } }
  // console.log("fields ", values);
  return (
    <div>
      <label>{values.label}</label>
      <input {...values.input} type={values.type} required style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {values.meta.touched && values.meta.error}
      </div>
    </div>
  );
};
