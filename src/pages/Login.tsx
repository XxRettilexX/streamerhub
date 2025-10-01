import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (username.trim()) {
      login(username);
      navigate('/profile');
    } else {
      alert('Inserisci un username!');
    }
  };

  return (
    <div className="page login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Accedi a StreamerHub</h2>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Inserisci il tuo username"
          />
        </div>

        <button type="submit" className="btn-primary">
          Accedi
        </button>
      </form>
    </div>
  );
}

export default Login;
