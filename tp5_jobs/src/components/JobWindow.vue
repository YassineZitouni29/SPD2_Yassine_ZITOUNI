<template>
    <div class="window">
        <JobsList class="half" />
        <JobDetails class="half" />
    </div>
</template>

<script setup>
import JobsList from "./JobsList.vue";
import JobDetails from "./JobDetails.vue";
</script>

<style scoped>
.window {
    display: flex;
    width: 80%;
    background-color: #3b82f6; /* Softer blue */
    height: 80vh;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.half {
    width: 50%;
    padding: 16px;
    background-color: #1e293b; /* Darker contrast */
    color: white;
    display: flex;
    flex-direction: column;
}
</style>
