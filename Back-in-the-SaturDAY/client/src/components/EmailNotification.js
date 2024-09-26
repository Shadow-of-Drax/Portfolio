import React, { useState } from 'react';
import axios from 'axios';

const EmailNotification = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSendEmail = async () => {
        try {
            await axios.post('http://localhost:5000/api/request-reset', { username });
            setMessage('Email sent successfully');
        } catch (error) {
            setMessage('Error sending email');
        }
    };

    return (
        <div>
            <h3>Send Password Reset Email</h3>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSendEmail}>Send Email</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default EmailNotification;