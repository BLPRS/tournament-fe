
export function toDateString(value: any): string {
  return new Date(value).toLocaleDateString('en-CA', {
    year: 'numeric', month: '2-digit', day: '2-digit'
  })
}

export function hasStarted(date: Date): boolean {
  const currentDate = new Date();
  date.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);
  return currentDate > date;
}