import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';

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
    <Layout>
      <div className="page-container">
        <h3>
          Sign In
        </h3>
        <div className="form-container">
    <form onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
      {
        error &&
        <p>{error}</p>
      }
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <Link to='/sign-up'>Register</Link>
      <button >Submit</button>
          </form>
          </div>
      </div>
      </Layout>
  )
}
