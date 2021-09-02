import {AuthenticationApi} from './generated/api/authentication-api';
import {ColumnsApi} from './generated/api/columns-api';
import {CommentsApi} from './generated/api/comments-api';
import {PrayersApi} from './generated/api/prayers-api';
import Api, {ApiAuthorization, baseUrl} from './service';

export const ApiMap = {
  Authentication: new AuthenticationApi(
    undefined,
    baseUrl,
    ApiAuthorization.instance,
  ),
  Columns: new ColumnsApi(undefined, baseUrl, Api.instance),
  Comments: new CommentsApi(undefined, baseUrl, Api.instance),
  Prayers: new PrayersApi(undefined, baseUrl, Api.instance),
};
