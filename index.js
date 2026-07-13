// Write your code here!

function displayPosts(posts) {
  const postList = document.querySelector("#post-list");

  posts.forEach((post) => {
    const listItem = document.createElement("li");

    const title = document.createElement("h1");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    listItem.append(title, body);

    postList.appendChild(listItem);
  });
}

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = await response.json();

    displayPosts(posts);
  } catch (error) {
    console.log("Error retreiving posts: ", error);
  }
}

fetchPosts();
