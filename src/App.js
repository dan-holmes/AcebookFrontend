import Post from './Post.js'
import './App.css';

let post1 = {
  message: 'First post!',
  username: 'ds.danielh',
  created_at: '12/11/2020 12:31:32'
}

let post2 = {
  message: 'Second post!',
  username: 'ds.danielh',
  created_at: '13/11/2020 12:31:32'
}

function App() {
  return (
    <div className="App">
      <Post data={post1} />
      <Post data={post2} />
    </div>
  );
}

export default App;
