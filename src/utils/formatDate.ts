import { format } from 'date-fns'; // eslint-disable-line
import pt from 'date-fns/locale/pt'; // eslint-disable-line

const formatDate = (date: Date): string => {
  const newDate = new Date(date);
  return format(
    newDate,
    'dd/MM/yyyy', // 22/01/2019
    { locale: pt },
  );
};

export default formatDate;
