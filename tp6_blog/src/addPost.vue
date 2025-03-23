<template>
    <div class="form-container">
        <fieldset class="form-box">
            <legend class="form-title"> Post Information</legend>

            <div class="form-group">
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter the title" v-model="title">
            </div>

            <div class="form-group">
                <label for="text">Content</label>
                <textarea id="text" placeholder="Enter your text" v-model="text"></textarea>
            </div>

            <div class="form-group">
                <label for="tags">Tags</label>
                <input id="tags" type="text" placeholder="Enter tags, separated by commas" v-model="tagss">
            </div>

            <button class="submit-btn" @click="submitPost">Submit</button>
        </fieldset>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            text: "",
            tagss: ""
        };
    },
    methods: {
        submitPost() {
        // Redirect user
        

        // Prepare post data
        let tag = {
            title: this.title,
            text: this.text,
            tags: this.tagss.split(",") // Splitting tags by comma
        };

        // Send data to JSON Server
        fetch("http://localhost:3000/posts", {
            method: "POST", // Use POST to add a new post
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tag)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Post added:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
        this.$router.push({ path: "/yassine" });
    }
}
}
</script>

<style scoped>
/* Center the form */
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f4f7fc;
}

/* Form box styling */
.form-box {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border-radius: 10px;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: none;
}

/* Title */
.form-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
    text-align: center;
    padding-bottom: 10px;
}

/* Form group */
.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

label {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 5px;
    color: #555;
}

/* Inputs & textarea */
input, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

input:focus, textarea:focus {
    outline: none;
    border-color: #3498db;
}

/* Textarea specific styling */
textarea {
    resize: vertical;
    min-height: 80px;
}

/* Submit button */
.submit-btn {
    width: 100%;
    padding: 10px;
    font-size: 1.1rem;
    font-weight: bold;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
}

.submit-btn:hover {
    background: #2980b9;
    transform: scale(1.05);
}
</style>
