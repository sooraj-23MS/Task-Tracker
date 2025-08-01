import { useState } from "react";
import "./Login.css";
export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
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

  // form Validation

  const [errors, setErrors] = useState({});

  const formValidation = () => {
    const newErrors = {};

    const { username, password } = formData;

    if (!username) newErrors.username = "Username Required";
    else if (username.length < 4) newErrors.username = "Minimum 4 characters";

    if (!password) newErrors.password = "Password Required";
    else if (password.length < 6) newErrors.password = "Minimum 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      console.log("Login with:", [formData.username, formData.password]);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <form className="login-form">
          <div className="form-title">Login</div>
          <div className="form-input">
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={formEventHandler}
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={formEventHandler}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="form-btnLink">
            <button onClick={handleSubmit}>Login</button>
          </div>
          <a href="/signup">No account</a>
        </form>
      </div>
    </div>
  );
}
