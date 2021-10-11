export interface Prayer {
  id: number;
  title: string;
  description: string | null;
  checked: boolean;
  columnId: number;
  comments: Comment[];
}

export interface Comment {
  body: string;
  created: string;
  id: number;
  prayerId: number;
}

export interface PrayerData {
  data: Record<string, Prayer>;
  isError: boolean;
  errors: string[];
  isLoading: boolean;
}

export const initialState: PrayerData = {
  data: {},
  isLoading: false,
  isError: false,
  errors: [],
};

export interface GetSinglePrayer {
  data: Prayer;
}

export interface ChangePrayerRequest {
  id: number;
  title: string;
  checked: boolean;
}

export interface AddNewPrayerRequest {
  title: string;
  columnId: number;
}

export interface AddNewPrayer {
  data: {
    checked: boolean;
    column: {
      id: number;
      title: string;
      description: null | string;
      userId: number;
    };
    columnId: number;
    description: null | string;
    id: number;
    title: string;
  };
}
