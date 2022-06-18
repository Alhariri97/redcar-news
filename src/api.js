import axios from "axios";

const redcarNewsApi = axios.create({
  baseURL: "https://redcar-news.herokuapp.com/api",
});

export const getArticles = (topic, order, sortBy) => {
  if (sortBy) {
    const sort_by = sortBy;
    return redcarNewsApi
      .get("/articles", { params: { topic, order, sort_by } })
      .then(({ data }) => data)
      .catch((er) => {
        console.log(er);
        return er;
      });
  } else {
    return redcarNewsApi
      .get("/articles", { params: { topic, order } })
      .then(({ data }) => data)
      .catch((er) => {
        // console.log(er);
        return er;
      });
  }
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

export const postAcomment = (article_id, text, user) => {
  const obj = {
    username: user,
    body: text,
  };
  return redcarNewsApi
    .post(`/articles/${article_id}/comments`, obj)
    .then(({ data }) => data);
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
    .then(({ data }) => data)
    .catch((e) => e);
};

export const deleteComment = (id) => {
  return redcarNewsApi.delete(`/comments/${id}`).then(({ data }) => {
    return data;
  });
};

export const getUser = (username) => {
  return redcarNewsApi.get(`/users/${username}`).then(({ data }) => {
    return data;
  });
};
