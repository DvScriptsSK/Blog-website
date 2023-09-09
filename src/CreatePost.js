import React from 'react';
import './CreatePost.css';

function CreatePost({ triggerEffectInApp }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    triggerEffectInApp(Object.fromEntries(formData)); // Convert FormData to an object
  }

  return (
    <div className='createpost-base'>
      <form method='post' onSubmit={handleSubmit}>
        <input type='text' name='header' placeholder='Header' />
        <input type='text' name='description' placeholder='Description' />
        <button type='submit' className='createpost-button'>Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
