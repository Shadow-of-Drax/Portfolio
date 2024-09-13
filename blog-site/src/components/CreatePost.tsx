import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').required('Required'),
});

const CreatePost: React.FC = () => {
const { token, username } = useContext(AuthContext);
const [title, setTitle] = useState('');
const [content, setContent] = useState('');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await axios.post('http://localhost:5000/api/posts', { title, content }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTitle('');
    setContent('');
  } catch (error) {
    console.error('Error creating post', error);
  }
}

return (
  <form onSubmit={handleSubmit}>
    <h2>Create a New Post</h2>
    <input type="text" required placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
    <textarea required placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
    <button type="submit">Create Post</button>
  </form>
);
};

const Register: React.FC = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // handle submit
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" />
          {/* ... other fields */}
          <button type="submit" disabled={isSubmitting}>Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePost;