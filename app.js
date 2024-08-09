 // JavaScript code for post_errand.html (Form Validation)
 document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('errand-form')) {
        document.getElementById('errand-form').addEventListener('submit', function(event) {
            let task = document.getElementById('task').value.trim();
            let location = document.getElementById('location').value.trim();
            let time = document.getElementById('time').value.trim();

            let errors = [];
            if (!task) errors.push("Task description is required.");
            if (!location) errors.push("Location is required.");
            if (!time) errors.push("Time is required.");

            if (errors.length > 0) {
                alert(errors.join("\n"));
                event.preventDefault(); // Prevent form submission
            }
        });
    }
});

// JavaScript code for dashboard.html (Dynamic Content Handling)
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.dashboard')) {
        // Example function to simulate data fetching
        function fetchData() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        activeErrands: [
                            { description: "Pick up groceries", location: "Main Street", time: "3:00 PM" },
                            { description: "Deliver documents", location: "5th Avenue", time: "4:00 PM" }
                        ],
                        completedErrands: [
                            { description: "Walk the dog", location: "Central Park", time: "10:00 AM" },
                            { description: "Collect dry cleaning", location: "Elm Street", time: "1:00 PM" }
                        ]
                    });
                }, 1000); // Simulating network delay
            });
        }

        fetchData().then(data => {
            // Populate Active Errands
            let activeList = document.querySelector('.dashboard .errands-list:first-of-type');
            data.activeErrands.forEach(errand => {
                let li = document.createElement('li');
                li.textContent = `${errand.description} at ${errand.location} by ${errand.time}`;
                activeList.appendChild(li);
            });

            // Populate Completed Errands
            let completedList = document.querySelector('.dashboard .errands-list:last-of-type');
            data.completedErrands.forEach(errand => {
                let li = document.createElement('li');
                li.textContent = `${errand.description} at ${errand.location} by ${errand.time}`;
                completedList.appendChild(li);
            });
        });
    }
});

// JavaScript code for errand_list.html (Interactive List)
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.errands-list')) {
        const errands = [
            { title: "Pick up a package", description: "Pickup at the post office", location: "Downtown", reward: "#100" },
            { title: "Grocery shopping", description: "Buy items from the store", location: "Supermarket", reward: "#150" }
        ];

        let errandList = document.querySelector('.errands-list');

        errands.forEach(errand => {
            let li = document.createElement('li');
            li.innerHTML = `
                <h3>${errand.title}</h3>
                <p>${errand.description}</p>
                <p><strong>Location:</strong> ${errand.location}</p>
                <p><strong>Reward:</strong> ${errand.reward}</p>
                <button>Accept Errand</button>
            `;
            errandList.appendChild(li);
        });

        document.querySelectorAll('.errands-list button').forEach(button => {
            button.addEventListener('click', function() {
                if (confirm('Are you sure you want to accept this errand?')) {
                    alert('You have accepted this errand!');
                    // Here, you would send data to the backend to mark the errand as accepted
                }
            });
        });
    }
});

// JavaScript code for profile.html (Profile Information Handling)
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.profile')) {
        const userProfile = {
            name: "Adebayo Abdullahi",
            email: "adebayoabdullahi009@gmail.com",
            location: "Abeokuta",
            bio: "I love helping others with their errands!"
        };

        document.querySelector('.profile h2').textContent = `Welcome, ${userProfile.name}`;
        document.querySelector('.profile-details').innerHTML = `
            <p><strong>Name:</strong> ${userProfile.name}</p>
            <p><strong>Email:</strong> ${userProfile.email}</p>
            <p><strong>Location:</strong> ${userProfile.location}</p>
            <p><strong>Bio:</strong> ${userProfile.bio}</p>
            <button id="edit-profile">Edit Profile</button>
        `;

        document.getElementById('edit-profile')?.addEventListener('click', function() {
            alert('Edit profile functionality is not yet implemented.');
            // Here, you would open a modal or redirect to an edit profile page
        });
    }
});

// JavaScript code for admin.html (Admin Dashboard Interactivity)
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.activity-list')) {
        const recentActivity = [
            { action: "User Choleric posted a new errand.", timestamp: "2 hours ago" },
            { action: "User Choleric completed an errand.", timestamp: "3 hours ago" }
        ];

        let activityList = document.querySelector('.activity-list');

        recentActivity.forEach(activity => {
            let li = document.createElement('li');
            li.innerHTML = `
                <p>${activity.action}</p>
                <p><em>${activity.timestamp}</em></p>
            `;
            activityList.appendChild(li);
        });

        // Add more admin-specific functionalities as needed
    }
});
  