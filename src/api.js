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
export const getAtriclesCommets = (article_id) => {
  return redcarNewsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => data);
};

export const postAcomment = (article_id, text, user = "tickle122") => {
  const obj = {
    username: user,
    body: text,
  };
  return redcarNewsApi
    .post(`/articles/${article_id}/comments`, obj)
    .then(({ data }) => console.log(data));
};

export const voteForTheArticle = (article_id) => {
  const obj = { inc_votes: +1 };
  return redcarNewsApi
    .patch(`/articles/${article_id}`, obj)
    .then(({ data }) => data);
};

export const ulikeArticle = (article_id) => {
  const obj = { inc_votes: -1 };
  return redcarNewsApi
    .patch(`/articles/${article_id}`, obj)
    .then(({ data }) => data);
};
