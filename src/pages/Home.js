import React, { useState, useEffect } from "react";
import api from "../services/api";

const Home = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await api.get("/articles");
                setArticles(response.data.articles);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div>
            <h1>News Articles</h1>
            {articles.length === 0 ? (
                <p>No articles available</p>
            ) : (
                articles.map((article) => (
                    <div key={article.PK}> {/* Use a unique identifier */}
                        <h3>{article.Title}</h3>
                        <p>{article.Content}</p>
                        <p><strong>Author:</strong> {article.Author}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Home;
