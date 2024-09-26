import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmailNotification from './EmailNotification'; // Import the EmailNotification component


const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [editing, setEditing] = useState(null); // Track if editing a movie

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://localhost:5000/api/users');
            setUsers(response.data);
        };

        const fetchMovies = async () => {
            const response = await axios.get('http://localhost:5000/api/movies');
            setMovies(response.data);
        };

        fetchUsers();
        fetchMovies();
    }, []);

    const handleAddMovie = async () => {
        try {
            await axios.post('http://localhost:5000/api/movies', { title, poster, videoUrl });
            setMovies([...movies, { title, poster, videoUrl }]);
            setTitle('');
            setPoster('');
            setVideoUrl('');
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    const handleEditMovie = async (id) => {
        if (editing) {
            try {
                await axios.put(`http://localhost:5000/api/movies/${id}`, { title, poster, videoUrl });
                const updatedMovies = movies.map(movie => 
                    movie._id === id ? { ...movie, title, poster, videoUrl } : movie
                );
                setMovies(updatedMovies);
                setEditing(null);
                setTitle('');
                setPoster('');
                setVideoUrl('');
            } catch (error) {
                console.error('Error updating movie:', error);
            }
        } else {
            const movieToEdit = movies.find(movie => movie._id === id);
            setTitle(movieToEdit.title);
            setPoster(movieToEdit.poster);
            setVideoUrl(movieToEdit.video);
            setEditing(id);
        }
    };

    const handleDeleteMovie = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/movies/${id}`);
            setMovies(movies.filter(movie => movie._id !== id));
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <EmailNotification /> {/* Include the EmailNotification component */}
            <h3>Manage Movies</h3>
            <h3>Manage Movies</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Poster URL"
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
            />
            <input
                type="text"
                placeholder="YouTube Video URL"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
            />
            <button onClick={() => (editing ? handleEditMovie(editing) : handleAddMovie())}>
                {editing ? 'Update Movie' : 'Add Movie'}
            </button>

            <h3>Users</h3>
            <ul>
                {users.map(user => (
                    <li key={user.username}>{user.username} - {user.role}</li>
                ))}
            </ul>

            <h3>Movies</h3>
            <ul>
                {movies.map(movie => (
                    <li key={movie._id}>
                        {movie.title}
                        <button onClick={() => handleEditMovie(movie._id)}>Edit</button>
                        <button onClick={() => handleDeleteMovie(movie._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        
    );
};

export default AdminDashboard;