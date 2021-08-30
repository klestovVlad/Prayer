import Api from '../../api/servise';

export const commentsQuery = () => {
  return Api.get('comments');
};

export const newCommentPost = (prayerId: number, title: string) => {
  return Api.post(`prayers/${prayerId}/comments`, {
    body: title,
  });
};

export const deleteCommentPost = (commentId: number) => {
  return Api.delete(`comments/${commentId}`);
};
