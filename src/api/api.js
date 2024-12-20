import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-1-vwa9.onrender.com/api",
});

export const getArticles = () => {
  return articlesApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const getArticle = (id) => {
  return articlesApi.get(`/articles/${id}`).then((res) => {
    return res.data.article;
  });
};

export const getArticleComments = (id) => {
  return articlesApi.get(`/articles/${id}/comments`).then((res) => {
    return res.data.comments;
  });
};
