import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (username.trim()) {
            // Simulate login
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);

            // Exercise 3: Navigate to profile
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