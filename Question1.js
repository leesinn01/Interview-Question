async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
}
async function createPost(title, body) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      body: body
    })
  });
  const data = await response.json();
  console.log(data);
}
const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', fetchData);

const createButton = document.getElementById('createButton');
createButton.addEventListener('click', () => {
  const title = prompt("Post title:");
  const body = prompt("Post body:");
  createPost(title, body);
});