<template>
    <div class="job-container" ref="containerRef" @click="handleClick">
        <span class="job-title">{{ title }}</span>
        <div class="spacer"></div>
        <div class="actions">
            <span class="material-icons-outlined edit-icon" @click.stop="changeJob(jobId)">edit</span>
            <span class="material-icons-outlined delete-icon" @click.stop="confirmDelete">delete</span>
        </div>
    </div>
</template>

<script setup>
import { inject, defineProps, computed } from 'vue';

const showDeleteModal = inject('showDeleteModal');
const change = inject('changeSelectedJob');
const toDeleteJob = inject('toDeleteJob');
const changeJob = inject('changeJob');
const jobs = inject('jobs');

const props = defineProps({
    jobId: { type: Number, required: true }
});

const title = computed(() => {
    const job = jobs.value.find(j => j.id === props.jobId);
    return job ? job.titre : '';
});

const handleClick = (e) => {
    const element = e.currentTarget;
    element.parentElement.querySelectorAll('.job-container').forEach(el => el.classList.remove('focused'));
    element.classList.add('focused');
    change(props.jobId);
};

const confirmDelete = () => {
    toDeleteJob.value = props.jobId;
    showDeleteModal();
};
</script>

<style scoped>
.job-container {
    display: flex;
    align-items: center;
    padding: 12px;
    background: #2d2d2d;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border-left: 4px solid transparent;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.job-container:hover {
    background: #383838;
}

.focused {
    border-left: 4px solid #ffffff;
    background: #404040;
}

.job-title {
    font-weight: 600;
    color: white;
    white-space: nowrap;
}

.spacer {
    flex-grow: 1;
}

.actions {
    display: flex;
    gap: 10px;
}

.material-icons-outlined {
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    transition: background 0.3s ease;
}

.edit-icon:hover {
    background: rgba(0, 255, 0, 0.2);
}

.delete-icon:hover {
    background: rgba(255, 0, 0, 0.2);
}
</style>
