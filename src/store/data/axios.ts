// import Api from '../../api/servise';

// export const columnsQuery = () => {
//   return Api.get('columns');
// };

// export const prayersQuery = () => {
//   return Api.get('prayers');
// };

// export const commentsQuery = () => {
//   return Api.get('comments');
// };

// export const prayerPost = (id: number, title: string, checked: boolean) => {
//   return Api.put(`prayers/${id}`, {title, description: '', checked});
// };

// export const deleteColumnPost = (columnId: number) => {
//   return Api.delete(`columns/${columnId}`);
// };

// export const addNewColumnPost = (title: string) => {
//   return Api.post('columns', {title, description: ''});
// };

// export const newPrayerPost = (columnId: number, title: string) => {
//   return Api.post(`columns/${columnId}/prayers`, {
//     title,
//     description: '',
//     checked: false,
//   });
// };

// export const deletePrayerPost = (prayerId: number) => {
//   return Api.delete(`prayers/${prayerId}`);
// };

// export const newCommentPost = (prayerId: number, title: string) => {
//   return Api.post(`prayers/${prayerId}/comments`, {
//     body: title,
//   });
// };
