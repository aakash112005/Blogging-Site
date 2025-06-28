// script.js

let blogPosts = [];

// Function to add blog post.

function addBlogPost(title, content) {
     if(!title.length){
        alert("Please enter valid title");
    }
    else if(!content.length){
        alert("Please enter valid content");
    }
    else{
    const blogPost = {
        title,
        content,
        id: Date.now()
    };
    blogPosts.push(blogPost);
    displayBlogPosts();
}
}

// Function to delete blog post
function deleteBlogPost(id) {
    blogPosts = blogPosts.filter(blogPost => blogPost.id !== id);
    displayBlogPosts();
}

// Function to display blog posts
function displayBlogPosts() {
    console.log(blogPosts.length);
    
   
 
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';
    blogPosts.forEach(blogPost => {
        const blogPostHTML = `
            <div class="blog-post">
                <h2>${blogPost.title}</h2>
                <p>${blogPost.content}</p>
                <button class="delete-btn" onclick="deleteBlogPost(${blogPost.id})">Delete</button>
            </div>
        `;
        blogPostsContainer.insertAdjacentHTML('beforeend', blogPostHTML);
    });
}


// Event listener for add blog post button
document.getElementById('add-blog-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    addBlogPost(title, content);
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
});  