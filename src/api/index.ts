import {AuthenticationApi} from './generated/api/authentication-api';
import {ColumnsApi} from './generated/api/columns-api';
import {CommentsApi} from './generated/api/comments-api';
import {PrayersApi} from './generated/api/prayers-api';
import Api, {ApuAuthorization, baseUrl} from './servise';

export const ApiMap = {
  Authentication: new AuthenticationApi(
    undefined,
    baseUrl,
    ApuAuthorization.instanse,
  ),
  Columns: new ColumnsApi(undefined, baseUrl, Api.instanse),
  Comments: new CommentsApi(undefined, baseUrl, Api.instanse),
  Prayers: new PrayersApi(undefined, baseUrl, Api.instanse),
};
