import {ApiMap} from '../../api';
import Api from '../../api/service';

const {Prayers, Columns} = ApiMap;

export const prayersQuery = () => {
  return Prayers.cardsControllerFindColumns();
};

export const prayerPost = (id: number, title: string, checked: boolean) => {
  return Prayers.cardsControllerUpdate({
    prayerId: id,
    cardsDto: {title, description: '', checked},
  });
  return Api.put(`prayers/${id}`, {title, description: '', checked});
};

export const newPrayerPost = (columnId: number, title: string) => {
  return Columns.columnsControllerCreateCard({
    columnId,
    cardsDto: {
      title,
      description: '',
      checked: false,
    },
  });
  return Api.post(`columns/${columnId}/prayers`, {
    title,
    description: '',
    checked: false,
  });
};

export const deletePrayerPost = (prayerId: number) => {
  return Prayers.cardsControllerDelete({prayerId});
};
