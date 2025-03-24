<template>
    <div class="welcome-container">
        <div class="welcome-message">
            Welcome!! Here you can view incredible books 
        </div>
        <nav class="navbar">
            <input class="search_title" placeholder="Filter By Title" :model="title" @input="filtered()">
            <input class="search_title" placeholder="Filter By Author" :model="author" @input="filtered()">
        </nav>
    </div>
    <div id="ok">
        <singleLivre v-for="livre of filteredL" :key="livre.title" :livre="livre"/>
    </div>
</template>
<script>
import singleLivre from './singleLivre.vue';
export default{
    name:"libraryHome",
    components: {singleLivre},
    data(){
        return{
            title: null,
            author: null,
            livres: [],
            filteredL: []
        };
    },
    methods:{
        filtered() {
            this.filteredL = this.title
                ? this.livres.filter(p => p.titre.includes(this.title))
                : this.livres;
        }
    },
    mounted(){
        fetch("http://localhost:3000/livres")
        .then(response=>response.json())
        .then(data=>{
            this.livres = data;
            this.filteredL = data;
        }
        )
        .catch(error => {
            console.error("Error:", error);
        });
    }
}
</script>
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
.search_title{
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
</style>