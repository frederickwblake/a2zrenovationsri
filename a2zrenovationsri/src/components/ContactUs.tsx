import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const formStyle = {
  margin: "20px 300px 0",
  width: "900px",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    EmailAdress: "",
    PhoneNumber: "",
    ProjectAdress: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    // Handle image upload if needed
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      // Send the form data to the server
      await axios.post("http://localhost:5000/api/post", formData);

      // Optionally, you can display a success message using react-toastify
      toast.success("Form submitted successfully!");

      // Clear the form data after successful submission
      setFormData({
        FirstName: "",
        LastName: "",
        EmailAdress: "",
        PhoneNumber: "",
        ProjectAdress: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, you can display an error message using react-toastify
      toast.error("Error submitting form. Please try again.");
    }
  };

  const { FirstName, LastName, EmailAdress, PhoneNumber, ProjectAdress } =
    formData;

  return (
    <div>
      <form style={formStyle} onSubmit={handleFormSubmit}>
        <div className="container text-left">
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="FirstNameInput" className="form-label">
                  First Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="FirstNameInput"
                  name="FirstName"
                  placeholder="First"
                  value={FirstName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="LastNameInput" className="form-label">
                  Last Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="LastNameInput"
                  name="LastName"
                  placeholder="Last"
                  value={LastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="EmailInput" className="form-label">
            Email Adress*
          </label>
          <input
            type="text"
            className="form-control"
            id="EmailInput"
            name="EmailAdress"
            placeholder="yourname@domain.com"
            value={EmailAdress}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="PhoneNumberInput" className="form-label">
            Phone Number*
          </label>
          <input
            type="text"
            className="form-control"
            id="PhoneNumberInput"
            name="PhoneNumber"
            placeholder="123-456-7890"
            value={PhoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ProjectAdressInput" className="form-label">
            Project Address*
          </label>
          <input
            type="text"
            className="form-control"
            id="ProjectAdressInput"
            name="ProjectAdress"
            placeholder="123 construction street"
            value={ProjectAdress}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="imageInput" className="form-label">
            Include Images of the Project Location if Possible:
          </label>
          <input
            type="file"
            className="form-control"
            id="imageInput"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
