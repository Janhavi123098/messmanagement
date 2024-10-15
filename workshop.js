document.addEventListener('DOMContentLoaded', function () {
    
    // Example events to populate the event list
    const events = [
        {
            title: 'Pottery Workshop',
            date: '9 Sep',
            description: 'Master the art of pottery with expert guidance.',
            price: '₹799',
            imageUrl: 'https://via.placeholder.com/150',
            category: 'pottery',
            language: 'english'
        },
        {
            title: 'Painting Workshop',
            date: '10 Sep',
            description: 'Unleash your inner artist with hands-on painting sessions.',
            price: '₹499',
            imageUrl: 'https://via.placeholder.com/150',
            category: 'painting',
            language: 'spanish'
        },
        {
            title: 'Embroidery Workshop',
            date: '20 Sep',
            description: 'Unleash your inner artist with hands-on painting sessions.',
            price: '₹399',
            imageUrl: 'https://via.placeholder.com/150',
            category: 'embroidery',
            language: 'english'
        }
    ];

    

    // Function to populate event cards
    function populateEventCards(filteredEvents) {
        const eventList = document.getElementById('event-list');
        eventList.innerHTML = filteredEvents.map(event => `
            <div class="col-md-4">
                <div class="event-card">
                    <img src="${event.imageUrl}" alt="${event.title}" class="img-fluid">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    <p class="event-date">${event.date} | ${event.price}</p>
                    <button class="btn btn-primary" id="searchButton" onclick="showDetailsModal('${event.title}')">Details</button>
                </div>
            </div>
        `).join('');

        if (filteredEvents.length === 0) {
            eventList.innerHTML = `<p class="text-center">No events found matching your search.</p>`;
        }
    }


    // Initial population of event cards
    populateEventCards(events);

    // Handle filters form submission
document.getElementById('filtersForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get filter values
    var dateFilter = document.getElementById('dateFilter').value;
    var languageFilter = document.getElementById('languageFilter').value;
    var categoryFilter = document.getElementById('categoryFilter').value;
    var priceFilter = document.getElementById('priceFilter').value;

    // Filter events array
    var filteredEvents = events.filter(function(event) {
        var dateMatch = true;
        var languageMatch = true;
        var categoryMatch = true;
        var priceMatch = true;

        // Check for date match
        if (dateFilter) {
            // Convert both dateFilter and event.date to the same format if needed
            var selectedDate = new Date(dateFilter).toDateString();
            var eventDate = new Date(event.date).toDateString();
            dateMatch = selectedDate === eventDate;
        }

        // Check for language match
        if (languageFilter) {
            languageMatch = event.language === languageFilter;
        }

        // Check for category match
        if (categoryFilter) {
            categoryMatch = event.category === categoryFilter;
        }

        // Check for price match
        if (priceFilter) {
            var eventPrice = parseInt(event.price.replace('₹', '')); // Remove ₹ and parse
            var maxPrice = parseInt(priceFilter);  // Maximum price set by the user
            priceMatch = eventPrice <= maxPrice;
        }

        // Return only those events that match all the filters
        return dateMatch && languageMatch && categoryMatch && priceMatch;
    });

    // Populate the filtered events
    populateEventCards(filteredEvents);
});


    // Handle search functionality
    document.getElementById('searchForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const query = document.getElementById('searchInput').value.toLowerCase();
        const filteredEvents = events.filter(event => 
            event.title.toLowerCase().includes(query) || 
            event.description.toLowerCase().includes(query)
        );
        
        populateEventCards(filteredEvents);
    });
    
});



// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Function to show the details modal
/*function showDetailsModal(title) {
    const event = events.find(event => event.title === title);
    if (event) {
        document.getElementById('modalTitle').textContent = event.title;
        document.getElementById('modalLocation').textContent = event.location;
        document.getElementById('modalDate').textContent = event.date;
        document.getElementById('modalTime').textContent = event.time;
        document.getElementById('modalMentor').textContent = event.mentor;
        document.getElementById('modalFees').textContent = event.cost;
        document.getElementById('detailsModal').style.display = 'block';
    }
}
    */
// Function to show the details modal
function showDetailsModal() {
    // Populate the details modal with event information based on the title
    // This function will be called when the "Details" button is clicked on an event card
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'block';
}   

// Function to show the registration modal
function showRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    modal.style.display = 'block';
}

// Function to close the modals
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Handle form submission for registration
function submitRegistration(event) {
    event.preventDefault();
    // Handle registration logic (e.g., send data to the server)
    alert('Registration form submitted!');
    closeModal('registrationModal');
}

// Smooth scroll to events
function scrollToEvents() {
    document.querySelector('.events').scrollIntoView({ behavior: 'smooth' });
}

// Open create event modal
function openCreateEventModal() {
    document.getElementById('createEventModal').style.display = 'block';
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Create event dynamically
function createEvent(event) {
    event.preventDefault();

    // Get event data from form inputs
    const organizer = document.getElementById('organizer').value;
    const location = document.getElementById('location').value;
    const eventDate = document.getElementById('eventDate').value;
    const time = document.getElementById('time').value;
    const fees = document.getElementById('fees').value;
    const imageInput = document.getElementById('image');
    let imageURL = '';

    if (imageInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageURL = e.target.result;
            addEventCard(organizer, location, eventDate, time, fees, imageURL);
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        addEventCard(organizer, location, eventDate, time, fees, imageURL);
    }

    closeModal('createEventModal');
}

// Add a new event card
function addEventCard(organizer, location, date, time, fees, image) {
    const eventList = document.getElementById('event-list');
    const newCard = document.createElement('div');
    newCard.classList.add('col-md-4', 'mb-4');

    newCard.innerHTML = `
        <div class="card">
            <img src="${image || 'default-image.jpg'}" class="card-img-top" alt="Event Image">
            <div class="card-body">
                <h5 class="card-title">${organizer}</h5>
                <p class="card-text"><strong>Location:</strong> ${location}</p>
                <p class="card-text"><strong>Date:</strong> ${date}</p>
                <p class="card-text"><strong>Time:</strong> ${time}</p>
                <p class="card-text"><strong>Fees:</strong> ${fees}</p>
            </div>
        </div>
    `;

    eventList.appendChild(newCard);
}

