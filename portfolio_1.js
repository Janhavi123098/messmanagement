document.addEventListener('DOMContentLoaded', () => {
    // Load profile data from localStorage
    const profileData = JSON.parse(localStorage.getItem('profileData'));

    if (profileData) {
        // Populate profile information
        document.getElementById('first-name').textContent = profileData.firstName || 'N/A';
        document.getElementById('last-name').textContent = profileData.lastName || 'N/A';
        document.getElementById('bio').textContent = profileData.bio || 'N/A';
        document.getElementById('email').textContent = profileData.email || 'N/A';
        document.getElementById('phone').textContent = profileData.phone || 'N/A';

        // Set profile picture
        document.getElementById('profile-pic').src = profileData.profilePic || 'default-profile.jpg';
    } 

    // Handle logout
    document.getElementById('logout-button').addEventListener('click', () => {
        localStorage.removeItem('loggedIn'); // Clear login state
        localStorage.removeItem('profileData'); // Clear profile data
        window.location.href = 'index.php'; // Redirect to login page
    });

    // Handle post creation with AJAX to interact with PHP (add_post.php)
    document.getElementById('post-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(this); // Collect form data, including file

        fetch('add_post.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text()) // Expecting a response from add_post.php
        .then(data => {
            if (data.includes("Post added successfully")) {
                alert("Post added successfully!");
                fetchPosts(); // Refresh the posts dynamically
            } else {
                alert("Error: " + data);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });

        // Reset the form after submission
        document.getElementById('post-form').reset();
    });

    // Function to dynamically fetch and display posts
    function fetchPosts() {
        fetch('fetch_posts.php') // Fetch posts from the server
            .then(response => response.json()) // Expecting JSON format
            .then(posts => {
                const postsContainer = document.getElementById('posts-container');
                postsContainer.innerHTML = '<h1><b>Your Posts</b></h1>'; // Clear current posts

                if (posts.length === 0) {
                    postsContainer.innerHTML += '<p>No posts available.</p>';
                } else {
                    posts.forEach(post => {
                        const postDiv = document.createElement('div');
                        postDiv.className = 'post';

                        const img = document.createElement('img');
                        img.src = post.image;
                        postDiv.appendChild(img);

                        const caption = document.createElement('p');
                        caption.textContent = post.caption;
                        postDiv.appendChild(caption);

                        const date = document.createElement('p');
                        date.innerHTML = `<small>Posted on: ${post.created_at}</small>`;
                        postDiv.appendChild(date);

                        postsContainer.appendChild(postDiv);
                    });
                }
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
    }

    // Fetch posts on page load
    fetchPosts();

    // Add functionality for the "Go to Create Post" button
    const scrollToCreatePostButton = document.querySelector('.scroll-button');
    const createPostSection = document.querySelector('.create-post');

    if (scrollToCreatePostButton && createPostSection) {
        scrollToCreatePostButton.addEventListener('click', () => {
            createPostSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
