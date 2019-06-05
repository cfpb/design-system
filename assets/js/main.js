const netlifyUser = localStorage.getItem('netlify-cms-user');

if (netlifyUser && JSON.parse(netlifyUser).token) {
  console.log('hi!');
}
