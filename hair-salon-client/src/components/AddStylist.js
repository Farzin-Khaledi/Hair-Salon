import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function AddStylist() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleMobile = (e) => setMobile(e.target.value);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name, mobile };

    console.log(requestBody)

    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios.post(`${process.env.REACT_APP_API_URL}/api/stylists`, requestBody,
    { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  
  return (
    <div className="SignupPage">
      <h1>Register Stylist</h1>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Mobile</label>
        <input  name="mobile" type="Number" placeholder="123-4567-8901" value={mobile} onChange={handleMobile} />
        
        <button type="submit">Sign Up</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  )
}

export default AddStylist;