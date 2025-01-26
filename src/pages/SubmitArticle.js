import React, { useState } from "react";
import api from "../services/api";

const SubmitArticle = () => {
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        content: "",
        author: "",
        tags: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...formData,
            tags: formData.tags.split(",").map((tag) => tag.trim()),
        };
        try {
            const response = await api.post("/articles", payload);
            alert("Article submitted successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error submitting article:", error);
            alert("Failed to submit article.");
        }
    };

    return (
        <div>
            <h1>Submit a New Article</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="id"
                    placeholder="Article ID"
                    value={formData.id}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="content"
                    placeholder="Content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="tags"
                    placeholder="Tags (comma-separated)"
                    value={formData.tags}
                    onChange={handleChange}
                />
                <button type="submit">Submit Article</button>
            </form>
        </div>
    );
};

export default SubmitArticle;
