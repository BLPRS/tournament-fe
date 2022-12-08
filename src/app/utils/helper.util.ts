
function toDateString(value: any): string {
  return new Date(value).toLocaleDateString('en-CA', {
    year: 'numeric', month: '2-digit', day: '2-digit'
  })
}

function hasValue(value: any): boolean {
  return value && value !== undefined && value !== null;
}

function hasStarted(date: Date): boolean {
  if (!hasValue(date)) return false;
  const currentDate = setTimeToZero(new Date());
  date = setTimeToZero(date);
  return currentDate > date;
}

function setTimeToZero(date: Date) {
  if (!hasValue(date)) return date;
  date.setHours(0, 0, 0, 0);
  return date;
}

export {
  toDateString,
  hasValue,
  hasStarted,
  setTimeToZero
}