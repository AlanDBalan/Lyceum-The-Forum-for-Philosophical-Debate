const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
<<<<<<< HEAD
  document.querySelector('#logout').addEventListener('click', logout);
  
=======
  document.querySelector('#logout').addEventListener('click', logout);
>>>>>>> 90e9ad1d0ac7d32c6af41f7b71edac37abb8b355
