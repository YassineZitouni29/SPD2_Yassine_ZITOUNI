<template>
    <ul class="tag-list">
        <li v-for="tag in tags" :key="tag" class="tag-item">
            <div>{{ tag }}</div>
            <div>
                <button @click="$emit('changeDisplay', tag)" class="see-all-btn">see ALL</button>
            </div>
        </li>
    </ul>
</template>
<script>
    export default{
        name:"tagList",
        data(){
            return{
                tags: [],
            };
        },
        mounted(){
            fetch("http://localhost:3000/posts")
            .then(response=>response.json())
            .then(data=>{
                this.tags = [...new Set(data.flatMap(p=>p.tags))].sort((a,b)=>a.localeCompare(b))
            })
        }
    }
</script>

<style scoped>
.tag-list {
    max-height: 300px; /* Adjust height as needed */
    overflow-y: auto;
    padding: 10px;
    border-radius: 8px;
    background: #f8f9fa;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    list-style-type: none;
}

.tag-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #ddd;
    transition: background 0.3s ease;
}

.tag-item:hover {
    background: #e9ecef;
}

.tag-name {
    font-weight: 600;
    color: #333;
}

.see-all-btn {
    padding: 6px 12px;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.see-all-btn:hover {
    background: #0056b3;
}
</style>
