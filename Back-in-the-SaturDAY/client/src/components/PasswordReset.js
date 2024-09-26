import React, { useState } from 'react';
import axios from 'axios';

const PasswordReset = () => {
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleReset = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }
        try {
            await axios.post('http://localhost:5000/api/reset-password', { username, newPassword });
            setMessage('Password updated successfully');
        } catch (error) {
            setMessage('Error updating password');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleReset}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default PasswordReset;