import './App.css';
import React, { useState } from 'react';
import Posts from './posts.json';
import CardShower from './card';
import CreatePost from './CreatePost';

function App() {
  const [Creating, SetCreating] = useState(false);
  const [posting, setPosting] = useState(Posts);

  const triggerEffectInApp = (data) => {
    console.log(data);
    setPosting([...posting, data]); // Use spread operator to append data to the existing array
  };

  function CreatePostRender() {
    if (Creating) {
      return <CreatePost triggerEffectInApp={triggerEffectInApp} />;
    }
  }
  

  return (
    <div className="App">
      <div className='card-container'>
       {posting.map((post, index) => (
          <CardShower
            key={index}
            header={post.header}
            description={post.description}
          />
  ))}
      </div>
      <button onClick={() => SetCreating(!Creating)}>Create Post</button>
      <CreatePostRender />
    </div>
  );
}

export default App;
