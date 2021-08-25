import Api from '../../api/servise';

export const columnsQuery = () => {
  return Api.get('columns');
};

export const prayersQuery = () => {
  return Api.get('prayers');
};

export const prayerPost = (id: number, title: string, checked: boolean) => {
  return Api.put(`prayers/${id}`, {title, description: '', checked});
};

export const newPrayerPost = (ColumnId: number, title: string) => {
  console.log('newPrayerPost: ', ColumnId, {
    title,
    description: '',
    checked: false,
  });
  return Api.post(`/columns/${ColumnId}/prayers`, {
    title,
    description: '',
    checked: false,
  });
};
