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
      // <div className="background">
        <div className="form-wrapper">
          <h1>Sign In</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
              handleLogin(formData);
        }}>
        <div className="form-item">
        {
          error &&
          <p>{error}</p>
        }
       
        <input
          type='text'
            name='username'
            placeholder='Username'
          value={username}
          onChange={handleChange}
        />
        </div>

        <div className="form-item">
       
        <input
          type='password'
              name='password'
              placeholder='Password'
          value={password}
          onChange={handleChange}
        />
        </div>
        <div className="button-panel">
        <input
          type="submit"
          class="button"
          title="Sign In"
            value="Sign In"></input>
          </div>
      </form>
      <div className="form-footer">
       <Link to='/sign-up' className="register">Register</Link>
      </div>
        </div>
  )
}
