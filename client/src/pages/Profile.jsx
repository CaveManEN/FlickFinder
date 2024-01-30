import React, { useState, useEffect } from 'react';
import '../profile.css';

const ProfilePage = ({ username }) => {
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define fetchData inside useEffect
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`http://localhost:3001/api/user/${username}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (username) {
            fetchData();
        }
    }, [username]);

    if (!username) {
        return (
            <div className="not-logged-in">
                <div className="login-card">
                    <h2>Please Log In</h2>
                    <p>Access to this page is restricted. Please log in to view your profile.</p>
                    <a href="/login">Log In</a> {/* Replace with your login route */}
                </div>
            </div>
        );
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="profile-page">
            <div className="profile-name-box">
                <h1>{userData.username}'s Profile</h1>
            </div>
            <div className="profile-liked-movies">
                <h2>Liked Movies:</h2>
                <ul className="profile-movie-list">
                    {userData.likedMovies?.map(movie => (
                        <li key={movie.id} className="movie-card">
                            <div className="movie-title">{movie.title}</div>
                            <div className="movie-info">More info...</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProfilePage;
