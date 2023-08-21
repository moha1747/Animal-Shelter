import '../styles/petition.css';
import React, { useState } from "react";

const Petition = ({ signatures, setSignatures }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    hometown: "",
  });
  const [hasError, setHasError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let error = false;

    if (!formData.fullName || !formData.hometown) {
      error = true;
    }
    if (
      !formData.email ||
      !formData.email.includes("@") ||
      !formData.email.includes(".com")
    ) {
      error = true;
    }

    setHasError(error);
    if (!error) {
      setSignatures((prevSignatures) => [...prevSignatures, formData]);
      setFormData({ fullName: "", email: "", hometown: "" });
    }
  };

  return (
    <div className="petition-container">
      <h2 style={{ paddingRight: "150px" }}>Sign Our Petition</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Full Name"
          className={hasError && !formData.fullName ? "error" : ""}
        />
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          style={{ paddingTop: "10px" }}
          className={
            hasError &&
            (!formData.email ||
              !formData.email.includes("@") ||
              !formData.email.includes(".com"))
              ? "error"
              : ""
          }
        />
        <br />

        <input
          type="text"
          name="hometown"
          value={formData.hometown}
          onChange={handleInputChange}
          placeholder="Hometown"
          className={hasError && !formData.hometown ? "error" : ""}
        />
        <div style={{ paddingTop: "50px" }}>
          <button className="btn__form" type="submit">
            SIGN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Petition;
