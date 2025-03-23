<template>
    <div class="fiche">
        <h3>{{ post.title }}</h3>
        <div class="text-preview">{{ post.text.substring(0, 50) }}...</div>
        
        <!-- "See All" Button -->
        <router-link :to="{ path: '/post/' + post.title, query: { text: post.text }}">
            <button class="btn see-all-btn">See All</button>
        </router-link>
        <router-link :to="{ path: '/edit', query: { id: post.id }}">
            <button class="btn edit-btn">Edit</button>
        </router-link>
        <button @click="deletePost()" class="btn delete-btn">Delete Post</button>
    </div>
</template>

<script>
export default {
    name: "singlePost",
    props: {
        post: Object
    },
    methods:{
        deletePost(){
            fetch(`http://localhost:3000/posts/${this.post.id}`,{
                method: "DELETE",
            });
        }
    }
};
</script>

<style scoped>
/* Card Container Styling */
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

/* Hover Effect for Card */
.fiche:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

/* Title Styling */
.fiche h3 {
    font-size: 1.6rem;
    color: #2c3e50;
    margin-bottom: 10px;
}

/* Text Preview Styling */
.text-preview {
    font-size: 1rem;
    color: #7f8c8d;
    margin-bottom: 15px;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Button Styling */
.btn {
    font-size: 1.1rem;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s, transform 0.3s;
    margin: 5px;
}

/* "See All" Button */
.see-all-btn {
    background-color: #3498db;
    color: white;
}

.see-all-btn:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
}

/* "Edit" Button */
.edit-btn {
    background-color: #f39c12;
    color: white;
}

.edit-btn:hover {
    background-color: #e67e22;
    transform: translateY(-2px);
}
.delete-btn{
    background-color: red;
    color: white;
}
.delete-btn:hover {
    background-color: rgb(170, 8, 8);
    transform: translateY(-2px);
}
</style>
