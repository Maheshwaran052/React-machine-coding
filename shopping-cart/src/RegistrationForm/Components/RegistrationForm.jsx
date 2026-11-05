import { useState } from "react";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      console.log("Submitted", formData);
      setErrors(null);
    }
  };
  const validateForm = () => {
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!firstName.trim()) {
      validationErrors.firstName = "FirstName is empty";
    }
    if (!lastName.trim()) {
      validationErrors.lastName = "LastName is empty";
    }
    if (!emailRegex.test(email)) {
      validationErrors.email = "Invalid email address";
    }
    if (password.length < 8) {
      validationErrors.password = "Password must contain 8 characters";
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Password doesn't match";
    }
    return validationErrors;
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="FirstName"
          placeholder="Enter Fname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <p>{errors.firstName}</p>}
        <input
          type="text"
          aria-label="LastName"
          placeholder="Enter Lname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
        <input
          type="email"
          aria-label="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          aria-label="Password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
        <input
          type="password"
          aria-label="Confirm Password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <button aria-label="Register" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
export default RegistrationForm;
