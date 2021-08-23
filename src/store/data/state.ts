export interface Columns {
  id: number;
  title: string;
  description: string;
  userId: number;
  prayers: pray[];
}

interface pray {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsIds: [];
}

export const initialState: Columns[] = [];
