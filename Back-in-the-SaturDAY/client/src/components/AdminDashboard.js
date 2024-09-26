import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://localhost:5000/api/users'); // Add an endpoint to get users
            setUsers(response.data);
        };

        const fetchMovies = async () => {
            const response = await axios.get('http://localhost:5000/api/movies'); // Add an endpoint to get movies
            setMovies(response.data);
        };

        fetchUsers();
        fetchMovies();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <h3>Users</h3>
            <ul>
                {users.map(user => (
                    <li key={user.username}>{user.username} - {user.role}</li>
                ))}
            </ul>
            <h3>Movies</h3>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;