import { deletePost } from '../utils/mockAPI';

// In the BlogPost component
const handleDelete = () => {
  deletePost(post.id);
  navigate('/');
};

// Inside the JSX return statement
<button onClick={handleDelete}>Delete</button>
