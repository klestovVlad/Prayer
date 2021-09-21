import { ApiMap } from '../../api';
import Api from '../../api/service';

const { Comments } = ApiMap;

export const commentsQuery = () => {
  return Comments.commentsControllerFindColumns();
};

export const newCommentPost = (prayerId: number, title: string) => {
  return Api.post(`prayers/${prayerId}/comments`, {
    body: title,
  });
};

export const deleteCommentPost = (commentId: number) => {
  return Comments.commentsControllerDelete({ commentId });
};
