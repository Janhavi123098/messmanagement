// Scroll to Blog section
document.getElementById('blogsBtn').addEventListener('click', function () {
    document.getElementById('blogsSection').scrollIntoView({ behavior: 'smooth' });
});

// Scroll to Posts section (default on load)
document.getElementById('postsBtn').addEventListener('click', function () {
    document.getElementById('postsSection').scrollIntoView({ behavior: 'smooth' });
});

// On page load, show the Posts section
window.onload = function () {
    document.getElementById('postsSection').scrollIntoView({ behavior: 'smooth' });
};

// Blog data for the modal
const blogData = [
    {
        id: 1,
        title: 'The Art of Handicraft',
        image: 'https://via.placeholder.com/600x300', // Replace with actual image
        author: 'John Doe',
        fullDescription: 'This blog explores different styles of handicraft art, ranging from pottery, weaving, carving, and embroidery. It dives into how artisans keep traditional methods alive while also incorporating modern design ideas...',
        date: 'Created on Sept 14'
    },
    {
        id: 2,
        title: 'Traditional vs. Modern Craftsmanship',
        image: 'https://via.placeholder.com/600x300', // Replace with actual image
        author: 'Jane Smith',
        fullDescription: 'In this blog, we explore the differences and similarities between traditional handicraft techniques and modern craftsmanship. From materials used to methods passed down through generations...',
        date: 'Created on Sept 14'
    },
    {
        id: 3,
        title: 'Handmade Jewelry Trends',
        image: 'https://via.placeholder.com/600x300', // Replace with actual image
        author: 'Emily Adams',
        fullDescription: 'Handmade jewelry has seen a resurgence in popularity in recent years. This blog highlights some of the major trends and explains why consumers are opting for unique, handcrafted pieces over mass-produced items...',
        date: 'Created on Sept 14'
    }
];

// Function to open modal and display specific blog data
function openModal(blogId) {
    const blog = blogData.find(b => b.id === blogId);

    document.getElementById('blogImage').src = blog.image;
    document.getElementById('blogTitle').textContent = blog.title;
    document.getElementById('blogAuthor').textContent = `Written by ${blog.author}`;
    document.getElementById('blogFullDescription').textContent = blog.fullDescription;
    document.getElementById('blogDate').textContent = blog.date;

    document.getElementById('blogModal').style.display = 'flex';
}

// Function to close modal
function closeModal() {
    document.getElementById('blogModal').style.display = 'none';
}

// Close the modal when clicking outside of the content
window.onclick = function(event) {
    const modal = document.getElementById('blogModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
// Blog data for the modal (already existing blog data)

// Additional posts and blogs (hidden initially)
const additionalPosts = [
    '<img src="https://via.placeholder.com/150" alt="Handicraft 9">',
    '<img src="https://via.placeholder.com/150" alt="Handicraft 10">',
    '<img src="https://via.placeholder.com/150" alt="Handicraft 11">',
    '<img src="https://via.placeholder.com/150" alt="Handicraft 12">',
    '<img src="https://via.placeholder.com/150" alt="Handicraft 13">',
    '<img src="https://via.placeholder.com/150" alt="Handicraft 14">',
    '<img src="https://via.placeholder.com/150" alt="Handicraft 15">',
    '<img src="https://via.placeholder.com/150" alt="Handicraft 16">'
];

const additionalBlogs = [
    {
        title: 'Blog 4: The Craft of Weaving',
        description: 'Weaving is an ancient craft that has evolved into a popular art form... <span class="read-more" onclick="openModal(4)">Read More</span>',
    },
    {
        title: 'Blog 5: The Rise of Eco-Friendly Crafts',
        description: 'Eco-friendly crafts focus on sustainable materials and environmental awareness... <span class="read-more" onclick="openModal(5)">Read More</span>',
    },
    {
        title: 'Blog 6: Artistic Pottery Trends',
        description: 'Pottery is not just functional, but it has become a key artistic expression... <span class="read-more" onclick="openModal(6)">Read More</span>',
    }
];

// Load more posts functionality
document.getElementById('loadMorePosts').addEventListener('click', function() {
    const gallery = document.getElementById('gallery');
    additionalPosts.forEach(post => {
        gallery.innerHTML += post;
    });
    this.style.display = 'none'; // Hide load more button after loading
});

// Load more blogs functionality
document.getElementById('loadMoreBlogs').addEventListener('click', function() {
    const blogsSection = document.getElementById('blogs');
    additionalBlogs.forEach(blog => {
        const blogPost = document.createElement('article');
        blogPost.classList.add('blog-post');
        blogPost.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
        `;
        blogsSection.appendChild(blogPost);
    });
    this.style.display = 'none'; // Hide load more button after loading
});

// Show/Hide Back to Top Button on scroll
window.onscroll = function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block"; // Show button after scrolling 100px
    } else {
        backToTopBtn.style.display = "none"; // Hide button when at the top
    }
};

// Smooth scroll back to top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}