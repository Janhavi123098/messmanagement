document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Create form data object to send post details
    const formData = new FormData(this);

    // Send the form data to the backend using AJAX
    fetch('save_post.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // Expect JSON response from PHP
    .then(data => {
        if (data.success) {
            // Create a new post element with the response data
            const postContainer = document.createElement('div');
            postContainer.classList.add('post');

            let imageGallery = '';
            if (data.images) {
                data.images.forEach(image => {
                    const imgElement = `<img src="uploads/${image}" alt="Post Image">`;
                    imageGallery += imgElement;
                });
            }

            postContainer.innerHTML = generatePostHTML(data.userName, data.title, data.content, data.category, imageGallery);
            document.getElementById('postsContainer').appendChild(postContainer);
            document.getElementById("postForm").reset(); // Clear form after successful post
        } else {
            alert("Failed to create post");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

function generatePostHTML(userName, postTitle, postContent, postCategory, imageGallery) {
    return `
        <h4>${postTitle}</h4>
        <div class="post-info">
            <span>Posted by: ${userName}</span>
            <span>Category: ${postCategory}</span>
        </div>
        ${imageGallery}
        <p>${postContent}</p>
        <div class="post-actions">
            <button class="like-btn">Like</button>
            <button class="edit-btn">Edit</button>
        </div>
        <span class="like-count">0 Likes</span>
        <div class="comments-section">
            <h5>Comments:</h5>
            <textarea class="comment-input" placeholder="Add a comment"></textarea>
            <button class="comment-btn">Post Comment</button>
            <div class="comments-container"></div>
            <span class="comment-count">0 Comments</span>
        </div>
    `;
}