import Api from '../../api/servise';

export const commentsQuery = () => {
  return Api.get('comments');
};

export const newCommentPost = (prayerId: number, title: string) => {
  return Api.post(`prayers/${prayerId}/comments`, {
    body: title,
  });
};
