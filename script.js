document.addEventListener('DOMContentLoaded', function() {
    loadGameStats();
    loadUserList();
    loadGameSettings();
    loadChatSettings();
    loadEconomyStats();
    loadNotifications();
});

function loadGameStats() {
    fetch('https://games.roblox.com/v1/games')
        .then(response => response.json())
        .then(data => {
            const statsDiv = document.getElementById('game-stats');
            statsDiv.innerHTML = `
                <p>Active Games: ${data.games.length}</p>
                <p>...</p>
            `;
        });
}

function loadUserList() {
    fetch('https://users.roblox.com/v1/users')
        .then(response => response.json())
        .then(data => {
            const userListDiv = document.getElementById('user-list');
            userListDiv.innerHTML = data.users.map(user => `<p>${user.username}</p>`).join('');
        });
}

function loadGameSettings() {
    fetch('https://develop.roblox.com/v1/universes/123456789/places')
        .then(response => response.json())
        .then(data => {
            const gameSettingsDiv = document.getElementById('game-settings');
            gameSettingsDiv.innerHTML = data.places.map(place => `<p>${place.name}</p>`).join('');
        });
}

function loadChatSettings() {
    fetch('https://chat.roblox.com/v2/get-messages')
        .then(response => response.json())
        .then(data => {
            const chatSettingsDiv = document.getElementById('chat-settings');
            chatSettingsDiv.innerHTML = data.messages.map(message => `<p>${message.content}</p>`).join('');
        });
}

function loadEconomyStats() {
    fetch('https://economy.roblox.com/v1/transactions')
        .then(response => response.json())
        .then(data => {
            const economyStatsDiv = document.getElementById('economy-stats');
            economyStatsDiv.innerHTML = `
                <p>Total Sales: ${data.totalSales}</p>
                <p>...</p>
            `;
        });
}

function loadNotifications() {
    fetch('https://notifications.roblox.com/v1/notifications')
        .then(response => response.json())
        .then(data => {
            const notificationListDiv = document.getElementById('notification-list');
            notificationListDiv.innerHTML = data.notifications.map(notification => `<p>${notification.message}</p>`).join('');
        });
}
