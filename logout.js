document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');

    logoutBtn.addEventListener('click', () => {
      // Delete all cookies
      const cookies = document.cookie.split('; ');

      for (let i = 0; i < cookies.length; i++) {
        const cookieName = cookies[i].split('=')[0];
        document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      }

      // Redirect the user to the login page
      window.location.href = 'login.html';
    });
  });
