import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        navigate('/');
    };

    return (
        <div className="page">
            <h1>Profilo Utente</h1>
            <div className="profile-card">
                <h2>Benvenuto, {username}!</h2>
                <p>Questa è la tua area personale protetta.</p>

                <div className="profile-info">
                    <h3>Le tue informazioni:</h3>
                    <ul>
                        <li>Username: {username}</li>
                        <li>Abbonamento: Premium</li>
                        <li>Stream preferiti: 12</li>
                        <li>Prodotti acquistati: 5</li>
                    </ul>
                </div>

                <button onClick={handleLogout} className="btn-secondary">
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Profile;