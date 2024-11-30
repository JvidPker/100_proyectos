section_hora()


function section_hora() {
  const p_hour = document.getElementById("p_hour")
  const p_min = document.getElementById("p_min")
  const p_sec = document.getElementById("p_sec")
  const p_day = document.getElementById("p_day")
  const p_month = document.getElementById("p_month")
  const p_year = document.getElementById("p_year")

  // const el = document.querySelectorAll("input[value='3']").forEach(element => element.click());

  p_hour.innerText = fechas().time_hour
  p_min.innerText = fechas().time_minute
  p_sec.innerText = fechas().time_second
  p_day.innerText = fechas().date_day
  p_month.innerText = `"${fechas().date_month_name}"`
  p_year.innerText = fechas().date_year

  window.requestAnimationFrame(section_hora)
}


function fechas() {
  const DATE = {}
  const month_names = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const counts_60 = ["", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentieth", "twenty-first", "twenty-second", "twenty-third", "twenty-fourth", "twenty-fifth", "twenty-sixth", "twenty-seventh", "twenty-eighth", "twenty-ninth", "thirtieth", "thirty-first", "thirty-second", "thirty-third", "thirty-fourth", "thirty-fifth", "thirty-sixth", "thirty-seventh", "thirty-eighth", "thirty-ninth", "fortieth", "forty-first", "forty-second", "forty-third", "forty-fourth", "forty-fifth", "forty-sixth", "forty-seventh", "forty-eighth", "forty-ninth", "fiftieth", "fifty-first", "fifty-second", "fifty-third", "fifty-fourth", "fifty-fifth", "fifty-sixth", "fifty-seventh", "fifty-eighth", "fifty-ninth", "sixtieth"]

  const number_60 = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine", "sixty"]

  const new_date = new Date()

  const new_hora = new_date.getHours() <= 9 ? `0${new_date.getHours()}` : new_date.getHours()
  const new_minutes = new_date.getMinutes() <= 9 ? `0${new_date.getMinutes()}` : new_date.getMinutes()
  const new_seconds = new_date.getSeconds() <= 9 ? `0${new_date.getSeconds()}` : new_date.getSeconds()

  const new_day = new_date.getDate() <= 9 ? `0${new_date.getDate()}` : new_date.getDate()
  const new_month = new_date.getMonth() <= 9 ? `0${new_date.getMonth() + 1}` : new_date.getMonth() + 1
  const new_year = new_date.getFullYear()

  DATE.date_complete = `${new_day}/${new_month}/${new_year}`
  DATE.date_day_year = `${new_day}/${new_year}`
  DATE.date_day_month = `${new_day}/${new_month}`
  DATE.date_month_year = `${new_month}/${new_year}`
  DATE.date_day = `${new_day}`
  DATE.date_day_name = `${counts_60[new_day]}`
  DATE.date_month = `${new_month}`
  DATE.date_month_name = `${month_names[new_month]}`
  DATE.date_year = `${new_year}`

  DATE.time_complete = `${new_hora}:${new_minutes}:${new_seconds}`
  DATE.time_hour_minute = `${new_hora}:${new_minutes}`
  DATE.time_hour_hour_second = `${new_hora}:${new_seconds}`
  DATE.time_minute_second = `${new_minutes}:${new_seconds}`
  DATE.time_hour = `${new_hora}`
  DATE.time_hour_name = `${number_60[new_hora]}`
  DATE.time_minute = `${new_minutes}`
  DATE.time_minute_name = `${number_60[new_minutes]}`
  DATE.time_second = `${new_seconds}`
  DATE.time_second_name = `${number_60[new_seconds]}`

  return DATE
}
