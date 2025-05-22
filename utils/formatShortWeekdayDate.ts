export const formatShortWeekdayDate = (date: Date) => {
  const weekday = new Intl.DateTimeFormat('es-ES', { weekday: 'short' }).format(date);
  const dayMonth = new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'short',
  }).format(date);

  return `${weekday}, ${dayMonth}`;
};
