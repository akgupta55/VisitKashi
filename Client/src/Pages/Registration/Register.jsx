import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AuthStyles.css";
import { useState } from "react";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
          answer,
        }
      );
      if (res && res.data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="main" onSubmit={handleSubmit}>
        <div className="left-side">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample image"
          />
        </div>
        <div className="cn">
          <h1>CREATE AN ACCOUNT</h1>
          <div className="box">
            <input
              className="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="fname"
              name="fname"
              required
            />
          </div>
          <div className="box">
            <input
              className="name"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="fname"
              name="fname"
              required
            />
          </div>
          <div className="box">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              required
            />
          </div>
          <div className="box">
            <input
              type="number"
              placeholder="Enter Phone no."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="fname"
              name="fname"
              required
            />
          </div>
          <div className="box">
            <input
              className="name"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              id="fname"
              name="fname"
              required
            />
          </div>
          <div className="box">
            <input
              className="name"
              placeholder="Enter the best Palce you visit"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              type="text"
              id="fname"
              name="fname"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
