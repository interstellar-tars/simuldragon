document.addEventListener('DOMContentLoaded', function() {
    loadGameStats();
    loadGameSettings();
    loadChatSettings();
    loadEconomyStats();
    loadNotifications();
});

// Function to search for a user by username or ID
function searchUser() {
    const userInput = document.getElementById('searchUser').value;

    fetch(`https://users.roblox.com/v1/users/search?keyword=${userInput}&limit=1`)
        .then(response => response.json())
        .then(data => {
            if (data.data.length > 0) {
                const user = data.data[0];
                displayUserDetails(user);
            } else {
                document.getElementById('user-details').innerHTML = '<p>User not found.</p>';
            }
        })
        .catch(error => console.error('Error fetching user data:', error));
}

// Function to display user details
function displayUserDetails(user) {
    const userDetailsDiv = document.getElementById('user-details');
    userDetailsDiv.innerHTML = `
        <p>Username: ${user.name}</p>
        <p>User ID: ${user.id}</p>
        <p>Display Name: ${user.displayName}</p>
        <p>Status: ${user.status}</p>
    `;
}

// Function to ban a user
function banUser() {
    const userId = document.getElementById('moderateUser').value;

    fetch(`https://usermoderation.roblox.com/v1/user/moderate`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: parseInt(userId),
            actionType: 'Ban'
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('moderation-result').innerHTML = `<p>User ${userId} has been banned.</p>`;
    })
    .catch(error => console.error('Error banning user:', error));
}

// Function to unban a user
function unbanUser() {
    const userId = document.getElementById('moderateUser').value;

    fetch(`https://usermoderation.roblox.com/v1/user/moderate`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: parseInt(userId),
            actionType: 'Unban'
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('moderation-result').innerHTML = `<p>User ${userId} has been unbanned.</p>`;
    })
    .catch(error => console.error('Error unbanning user:', error));
}
