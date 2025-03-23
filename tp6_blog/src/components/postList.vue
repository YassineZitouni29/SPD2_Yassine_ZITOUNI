<template>
    <tagList @changeDisplay="filtered" />
    <div v-if="error">
        {{ error }}
    </div>
    <div v-else id="ok">
        <singlePost v-for="post in filteredTag" :key="post.id" :post="post"/> 
    </div>
</template>

<script>
import singlePost from './singlePost.vue';
import tagList from './tagList.vue';

export default {
    name: "postList",
    components: { singlePost, tagList },
    data() {
        return {
            posts: [],
            error: null,
            tagg: null,
            filteredTag: [],
            interval: null,
        };
    },
    methods: {
        fetchPosts() {
            fetch("http://localhost:3000/posts")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch posts");
                    }
                    return response.json();
                })
                .then(data => {
                    this.posts = data;
                    this.filteredTag = data;
                })
                .catch(err => {
                    this.error = err.message;
                    console.error("Error fetching posts:", err);
                });
            },
        filtered(tag) {
            this.tagg = tag;
            this.filteredTag = tag
                ? this.posts.filter(p => p.tags.includes(tag))
                : this.posts;
        }
    },

    mounted() {
        this.fetchPosts();
    },
};
</script>

<style scoped>
#ok {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            flex: 1;
        }
</style>
