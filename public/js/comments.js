// add functionality to comment button
const commentBlog = async () => {
    console.log('hit2')
      const comment = document.querySelector('#comment').value.trim();
      const post = document.querySelector('#commentpost').value
      console.log(post)
        const response = await fetch(`/api/comments/`, {
          method: 'POST',
          body: JSON.stringify({body: comment, post_id: post }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
}




document
  .querySelector('#commentpost')
  .addEventListener('click', function(event){
    event.preventDefault();
    console.log('hit');
    commentBlog();
  });