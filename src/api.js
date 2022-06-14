import axios from "axios";

const redcarNewsApi = axios.create({
  baseURL: "https://redcar-news.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return redcarNewsApi
    .get("/articles", { params: { topic } })
    .then(({ data }) => data);
};
export const getOnArticle = (article_id) => {
  return redcarNewsApi.get(`/articles/${article_id}`).then(({ data }) => data);
};

export const getTopics = () => {
  return redcarNewsApi.get(`/topics`).then(({ data }) => data);
};
