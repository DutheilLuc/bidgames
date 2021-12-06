import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const ArticleList = () => {
    const [articles, setArticle] = useState([]);

    useEffect(() => {
        getArticles();
    }, []);

    const getArticles = async () => {
        const response = await axios.get('http://localhost:5000/articles');
        setArticle(response.data);
    }

    const deleteArticle = async (id) => {
        await axios.delete(`http://localhost:5000/articles/${id}`);
        getArticles();
    }

    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                { articles.map((article, index) => (
                    <tr key={ article.id }>
                        <td>{ index + 1 }</td>
                        <td>{ article.title }</td>
                        <td>{ article.price }</td>
                        <td>
                            <Link to={`/edit/${article.id}`} className="button is-small is-info">Edit</Link>
                            <button onClick={ () => deleteArticle(article.id) } className="button is-small is-danger">Delete</button>
                        </td>
                    </tr>
                )) }

                </tbody>
            </table>
        </div>
    )
}

export default ArticleList