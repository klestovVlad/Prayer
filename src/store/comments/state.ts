import { Prayer } from '../prayers/state';

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

export interface Comment {
  body: string;
  created: string;
  id: number;
  prayerId: number | null;
  userId: number;
}

export interface CommentData {
  data: Record<string, Comment>;
  isLoading: boolean;
  isError: boolean;
  errors: string[];
}

export const initialState: CommentData = {
  data: {},
  isLoading: false,
  isError: false,
  errors: [],
};
