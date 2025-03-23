<template>
    <div class="welcome-container">
        <div class="welcome-message">
            Welcome!! Here you can view incredible posts and post yours.
        </div>
        <nav class="navbar">
            <router-link to="/yassine" class="nav-link">Home</router-link>
            <router-link to="/edit" class="nav-link">Edit</router-link>
            <router-link to="/add" class="nav-link">Add Post</router-link>
        </nav>
    </div>
</template>

<style scoped>
/* General container styling */
.welcome-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh;
    background-color: #f0f4f8;
    font-family: 'Arial', sans-serif;
    color: #333;
    text-align: center;
}

/* Welcome message */
.welcome-message {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #2c3e50;
    line-height: 1.4;
}

/* Compact Navbar */
.navbar {
    display: flex;
    justify-content: center;
    gap: 15px;
    background: #ffffff;
    padding: 8px 15px;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    width: auto;
}

/* Link styling */
.nav-link {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    padding: 8px 12px;
    border-radius: 5px;
    background-color: #3498db;
    color: white;
    transition: background-color 0.3s, transform 0.2s;
}

/* Link hover effect */
.nav-link:hover {
    background-color: #2980b9;
    transform: translateY(-1px);
}

/* Responsive styling */
@media (max-width: 600px) {
    .navbar {
        gap: 10px;
        padding: 6px 10px;
    }
    .nav-link {
        font-size: 0.9rem;
        padding: 6px 10px;
    }
}
</style>
