import Api from '../../api/servise';

export const columnsQuery = () => {
  return Api.get('columns');
};

export const prayersQuery = () => {
  return Api.get('prayers');
};

export const prayerPost = (id: number, title: string, checked: boolean) => {
  console.log('send data:', {id, title, description: '', checked});
  return Api.put(`prayers/${id}`, {title, description: '', checked});
};
