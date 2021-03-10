import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import "./SignIn.css";


export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin, error } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
      <div className="background">
        <div className="page-container">
        <div className="form-container">
          <form onSubmit={(e) => {
             e.preventDefault();
              handleLogin(formData);
        }}>
        <h3>Sign In</h3>
        {
          error &&
          <p>{error}</p>
        }
       <label className="label-sign">
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
       </label>
        <br />
       <label className="label-sign">
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
       <button >Submit</button><br></br>
       <Link to='/sign-up' className="register">Register</Link>
          </form>
          </div>
      </div>
       </div>
  )
}
