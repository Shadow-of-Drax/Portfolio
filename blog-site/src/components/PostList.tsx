import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

interface Comment {
  content: string;
  author: string;
}

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  comments: Comment[];
}

const PostList: React.FC = () => {
  const { token, userId } = useContext(AuthContext);
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:5000/api/posts');
    setPosts(response.data as Post[]);
  };

  const deletePost = async (postId: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post', error);
    }
  };

  const saveEdits = async (postId: string) => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${postId}`, { title: editedTitle, content: editedContent }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditingPostId(null);
      fetchPosts();
    } catch (error) {
      console.error('Error updating post', error);
    }
  };

  const [newComment, setNewComment] = useState('');

  const handleAddComment = async (e: React.FormEvent, postId: string) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/posts/${postId}/comments`, { content: newComment }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNewComment('');
      fetchPosts();
    } catch (error) {
      console.error('Error adding comment', error);
    }
  };

  const startEditing = (post: Post) => {
    setEditingPostId(post._id);
    setEditedTitle(post.title);
    setEditedContent(post.content);
  };

  return (
    <div>
      {/* Pagination controls */}
      <div>
        {Array.from({ length: totalPages }, (_, idx) => (
          <button key={idx} onClick={() => handlePageChange(idx + 1)}>
            {idx + 1}
          </button>
        ))}
      </div>

      {posts.map((post) => (
        <div key={post._id}>
          {editingPostId === post._id ? (
            <div>
              <input value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
              <textarea value={editedContent} onChange={(e) => setEditedContent(e.target.value)} />
              <button onClick={() => saveEdits(post._id)}>Save</button>
              <button onClick={() => setEditingPostId(null)}>Cancel</button>
            </div>
          ) : (
            <div>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <p>By: {post.author}</p>
              <p>Date: {new Date(post.date).toLocaleDateString()}</p>
              {userId === post.author && (
                <div>
                  <button onClick={() => startEditing(post)}>Edit</button>
                  <button onClick={() => deletePost(post._id)}>Delete</button>
                </div>
              )}
              <div>
                {/* Existing post details */}
                <h3>Comments:</h3>
                {post.comments.map((comment: Comment, idx: number) => (
                  <div key={idx}>
                    <p>{comment.content}</p>
                    <p>By: {comment.author}</p>
                  </div>
                ))}

                {token && (
                  <form onSubmit={(e) => handleAddComment(e, post._id)}>
                    <textarea
                      required
                      placeholder="Add a comment"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;