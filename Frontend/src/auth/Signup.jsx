import "./Signup.css"
import { useState } from "react";
export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phno: "",
    password: "",
  });

  const formEventHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
  };

  const [errors, setErrors] = useState({});

  const formValidation = () => {
    const { name, email, phno, password } = formData;
    const newErrors = {};
    // console.log(name,email,phno,password);

    if (!name) newErrors.name = "Name Required";
    else if (name.length < 5) newErrors.name = "Minimum 5 characters";

    if (!email) newErrors.email = "Email Required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";

    if (!phno) newErrors.phno = "Name Required";
    else if (phno.length < 10) newErrors.phno = "10 digit Required";

    if (!password) newErrors.password = "password Required";
    else if (password.length < 6) newErrors.password = "Minimum 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      console.log("Registration Successfull");
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <form className="signup-form">
          <div className="form-title">Signup</div>
          <div className="form-input">
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={formData.name}
              onChange={formEventHandler}
            />
            {errors.name && <span className="error">{errors.name}</span>}
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={formEventHandler}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <input
              type="text"
              placeholder="Enter PhNo"
              name="phno"
              value={formData.phno}
              onChange={formEventHandler}
            />
            {errors.phno && <span className="error">{errors.phno}</span>}
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={formEventHandler}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="form-btnLink">
            <button onClick={handleSubmit}>Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}
