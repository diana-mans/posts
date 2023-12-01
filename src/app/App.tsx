import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import PostsList from '../pages/PostsList/PostsList';
import PostsDetails from '../pages/PostsDetails/PostsDetails';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:postId" element={<PostsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
