const updateHandler = async () => {
  console.log('hit2')
    const updateName = document.querySelector('#updatename').value.trim();
    console.log(updateName)
    const updateDescription = document.querySelector('#updatedesc').value.trim();
    const updateID = document.querySelector('#updateid').value.trim();
  
    if (updateName && updateDescription) {
      const response = await fetch(`/api/blogposts/${updateID}`, {
        method: 'PUT',
        body: JSON.stringify({name: updateName, description: updateDescription }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create blogpost');
      }
    }
  };

document
  .querySelector('#updatepost')
  .addEventListener('click', function(event){
    event.preventDefault();
    console.log('hit');
    updateHandler();
  });