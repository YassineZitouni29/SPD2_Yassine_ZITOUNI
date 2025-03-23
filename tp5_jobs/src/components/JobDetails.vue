<template>
    <div class="details-container">
        <h3>{{ obj[0] }}</h3>
        <h3>{{ obj[1] }}</h3>
        <h3>{{ obj[2] }}</h3>
        <h3>{{ obj[3] }}</h3>
    </div>
</template>

<script setup>
import { inject, computed } from 'vue';

const jobId = inject('selectedJob');
const jobs = inject('jobs');

const obj = computed(() => {
    let title = "", salary = "", date = "", description = "";
    for (let job of jobs.value) {
        if (job.id === jobId.value) {
            title = job.titre;
            salary = job.salaire;
            date = job["date de création"];
            description = job.description;
        }
    }
    return [title, salary, date, description];
});
</script>

<style scoped>
.details-container {
    height: 100%;
    background-color: #3a3a3a;
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 8px;
}

h3 {
    margin: 0;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
}
</style>
