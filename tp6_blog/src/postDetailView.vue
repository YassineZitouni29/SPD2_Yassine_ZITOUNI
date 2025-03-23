<template>
    <div class="detail-container">
        <div class="detail-card">
            <h2 class="detail-title">Post Details</h2>
            <p class="detail-text">
                {{$route.query.text}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "AllDetail",
};
</script>

<style scoped>
/* Container Styling */
.detail-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f9f9f9;
}

/* Card Styling */
.detail-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    text-align: center;
}

/* Title Styling */
.detail-title {
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 10px;
}

/* Text Styling */
.detail-text {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.5;
}
</style>
