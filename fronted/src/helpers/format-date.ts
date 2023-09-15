import dayjs from 'dayjs';
import 'dayjs/locale/es';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(localizedFormat);
dayjs.extend(timezone);
dayjs.extend(utc);

dayjs.tz.setDefault('America/El_Salvador');

dayjs.locale('es');

export const formatDate = dayjs.utc;
