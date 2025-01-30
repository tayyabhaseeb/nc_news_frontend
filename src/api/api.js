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

export const incrementVotes = (id) => {
  return articlesApi
    .patch(`/articles/${id}`, { inc_votes: 1 })
    .then((response) => response.data.article);
};

export const decrementVotes = (id) => {
  return articlesApi
    .patch(`/articles/${id}`, { inc_votes: -1 })
    .then((response) => response.data.article);
};

export const addNewComment = (id, userName, userMessage) => {
  return articlesApi
    .post(`/articles/${id}/comments`, {
      username: userName,
      body: userMessage,
    })
    .then((data) => {
      return data.data.comment;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const addNewArticle = (author, title, body, topic, article_img_url) => {
  return articlesApi
    .post(`/articles`, {
      author,
      title,
      body,
      topic,
      article_img_url,
    })
    .then((data) => {
      console.log(data);
      return data;
    });
};

export const getSpecificArticle = (topic) => {
  return articlesApi.get(`/articles?topic=${topic}`).then((res) => {
    return res.data.articles;
  });
};

export const getAllUsers = () => {
  return articlesApi.get("/users").then((res) => {
    return res.data.users;
  });
};

export const deleteCommentById = (id) => {
  return articlesApi.delete(`/comments/${id}`).then((res) => {
    return res;
  });
};
