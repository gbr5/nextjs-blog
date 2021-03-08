import React from 'react';
import { parseISO, format } from 'date-fns';

interface IProps {
  dateString: string;
}

const Date: React.FC<IProps> = ({ dateString }: IProps) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export default Date;
