
import './App.css';
import PostCreate from './components/PostCreate';
import PostList from './PostList';

function App() {
  return (
   <div className="container">
    <h3 className='my-3'>Create Post</h3>
    <PostCreate title="Title"/>
    <hr />
    <PostList/>
   </div>
  );
}

export default App;
