import { useState } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import "./SignUp.css";


export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: ''
  })
  const { username, email, password } = formData;
  const { handleRegister, error } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="form-wrapper">
    <h1>Sign Up</h1>
    <form onSubmit={(e) => {
      e.preventDefault();
        handleRegister(formData);
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
    type='text'
    name='email'
    placeholder='Email'
    value={email}
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
    title="Sign Up"
      value="Sign Up"></input>
    </div>
</form>

  </div>
      
  )
}
