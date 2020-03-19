const padTime = (time: number): string => {
  return "".padStart.call(time, 2, "0")
}

const getDateTime = (): string => {
  const d = new Date()
  const year = "".slice.call(d.getUTCFullYear(), 2)
  const month = padTime(d.getUTCMonth() + 1)
  const date = padTime(d.getUTCDate())
  const hours = padTime(d.getUTCHours())
  const min = padTime(d.getUTCMinutes())
  const secs = padTime(d.getUTCSeconds())

  return `${year}${month}${date}-${hours}${min}${secs}`
}

export default getDateTime
