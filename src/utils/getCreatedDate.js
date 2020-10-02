import { formatDistanceToNow } from 'date-fns';

export default function getCreatedDate(date) {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  const seconds = new Date(date).getSeconds();

  return formatDistanceToNow(
    new Date(year, month, day, hours, minutes, seconds),
    {
      includeSeconds: true,
      addSuffix: true,
    }
  );
}
