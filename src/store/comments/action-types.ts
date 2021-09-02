import {Prayer} from '../prayers/state';
import {Comment} from './state';

export interface GetComments {
  commentsData: Comment[];
}

export interface AddNewComment {
  body: string;
  card: Prayer;
  created: string;
  id: number;
  prayerId: number;
  user: {
    email: string;
    id: number;
    name: string;
    token: string;
  };
}

export interface addNewCommentRequest {
  title: string;
  prayerId: number;
}
