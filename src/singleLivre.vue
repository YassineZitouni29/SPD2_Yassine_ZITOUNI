<template>
<div class="fiche">
        <h3>{{ livre.titre }}</h3>
        <h3>{{ livre.author }}</h3>
        <h3>{{ livre.category }}</h3>
        <div class="text-preview">
            {{livre.resume}}
        </div>
        <div v-if="livre.disponible" class="btn kayn">Available</div>
        <div v-else class="btn makayn">NON Available</div>
        <router-link :to="{ path: '/livre/' + livre.id, query: { id: livre.id }}">
            <button class="btn see-all-btn">See All</button>
        </router-link>
        
</div>
</template>
<script>
export default{
    name: "singleLivre",
    props:{
        livre: Object
    },
}
</script>
<style scoped>
.fiche {
    background: #ffffff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 300px;
    margin: 20px auto;
}

.fiche:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}


.fiche h3 {
    font-size: 1.6rem;
    color: #2c3e50;
    margin-bottom: 10px;
}


.text-preview {
    font-size: 1rem;
    color: black;
    margin-bottom: 15px;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
}


.btn {
    font-size: 1.1rem;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s, transform 0.3s;
    margin: 5px;
}


.see-all-btn {
    background-color: #3498db;
    color: white;
}

.see-all-btn:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
}
.kayn{
    background-color: green;
    color: white;
}
.kayn:hover {
    background-color: green;
    transform: translateY(-2px);
}
.makayn{
    background-color: red;
    color: white;
}
.makayn:hover {
    background-color: rgb(170, 8, 8);
    transform: translateY(-2px);
}
</style>
