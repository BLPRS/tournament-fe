
export function toDateString(value: any): string {
  return new Date(value).toLocaleDateString('en-CA', {
    year: 'numeric', month: '2-digit', day: '2-digit'
  })
}