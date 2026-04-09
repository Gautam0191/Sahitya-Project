import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("फॉर्म डेटा:", formData);
    alert("संदेश भेजने की सुविधा जल्द ही सक्रिय होगी!");
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">हमसे संपर्क करें</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <input name="name" type="text" className="form-control" placeholder="आपका नाम" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input name="email" type="email" className="form-control" placeholder="ई-मेल" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <textarea name="message" className="form-control" rows="5" placeholder="आपका संदेश" onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">संदेश भेजें</button>
      </form>
    </div>
  );
};

export default Contact;