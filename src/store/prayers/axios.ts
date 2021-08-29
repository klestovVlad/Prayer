import Api from '../../api/servise';

export const prayersQuery = () => {
  return Api.get('prayers');
};

export const prayerPost = (id: number, title: string, checked: boolean) => {
  return Api.put(`prayers/${id}`, {title, description: '', checked});
};

export const newPrayerPost = (columnId: number, title: string) => {
  return Api.post(`columns/${columnId}/prayers`, {
    title,
    description: '',
    checked: false,
  });
};

export const deletePrayerPost = (prayerId: number) => {
  return Api.delete(`prayers/${prayerId}`);
};
