<template>
  <div id="JobsList">
    <div class="header">
      <span class="title">Jobs:</span>
      <span class="material-icons add-icon" @click="addModal = true">add</span>
    </div>
    <div class="scrollable-div">
      <JobListTile v-for="job in jobs" :key="job.id" :jobId="job.id" class="tile" />
    </div>

    <ModalVue v-model="addModal">
      <div id="change-form">
        <label>Titre</label>
        <input class="inp" type="text" v-model="jobTitle" />
        <label>Description</label>
        <input class="inp" type="text" v-model="jobDescription" />
        <label>Salaire</label>
        <input class="inp" type="text" v-model="jobSalary" />
        <label>Date de création</label>
        <input class="inp" type="text" v-model="jobDate" />
        <button class="button" @click="addJob">Add Job</button>
      </div>
    </ModalVue>
  </div>
</template>

<script setup>
import JobListTile from "./JobListTile.vue";
import ModalVue from "./ModalVue.vue";
import { inject, ref } from "vue";

const jobs = inject("jobs");
const addModal = ref(false);

const jobTitle = ref("");
const jobDescription = ref("");
const jobDate = ref("");
const jobSalary = ref("");

function addJob() {
  fetch("http://localhost:3000/jobs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      titre: jobTitle.value,
      description: jobDescription.value,
      "date de création": jobDate.value,
      salaire: jobSalary.value,
    }),
  });
  addModal.value = false;
}
</script>

<style scoped>
#JobsList {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: rgb(45, 45, 45);
  border-radius: 12px;
  padding: 16px;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6a0dad;
  padding: 12px;
  border-radius: 8px;
  color: white;
}

.title {
  font-size: 22px;
  font-weight: 600;
}

.add-icon {
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.add-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.scrollable-div {
  overflow: auto;
  max-height: 60vh;
  scrollbar-color: #fff rgb(45, 45, 45);
  scrollbar-width: thin;
  padding: 8px;
}

.tile {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 12px;
  border-radius: 8px;
  background-color: #4a4a4a;
  transition: background-color 0.3s;
}

.tile:hover {
  background-color: #5a5a5a;
}

.material-icons {
  border-radius: 50%;
  transition: background-color 0.3s;
}

.material-icons:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.button {
  width: fit-content;
  border: none;
  padding: 12px;
  background-color: red;
  color: white;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 10px;
  align-self: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: darkred;
}

#change-form {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 500px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}

label {
  margin-top: 8px;
  font-weight: 600;
}

.inp {
  height: 30px;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #ccc;
}
</style>
