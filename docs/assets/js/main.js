// const netlifyUser = localStorage.getItem('netlify-cms-user');

const editButton = document.getElementById('edit-page');

const hideEl = el => el.style.display = 'none';

const showEl = el => el.style.display = 'block';

const getComponentEditableURL = component =>
  `/design-system/admin/#/collections/components/entries/${component}`;

const getComponentFromURL = url => {
  const urlParts = url.match(/components\/([\w\-]+)/);
  if (urlParts && urlParts[1]) {
    return urlParts[1];
  }
  return null;
}

// if (netlifyUser && JSON.parse(netlifyUser).token && editButton) {
if (editButton) {
  const component = getComponentFromURL(window.location.pathname);
  const url = getComponentEditableURL(component);
  showEl(editButton);
  editButton.children[0].setAttribute('href', url);
}
