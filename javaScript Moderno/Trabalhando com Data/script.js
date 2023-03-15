const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYears = today.diff(birthday, "year");
  const nextBirthday = birthday.add(ageInYears + 1, "year");
  const daysToNextBirthday = nextBirthday.diff(today, "day");

  console.log(`Você tem ${ageInYears} anos`);
  console.log(`Proximo aniversario ${nextBirthday.format("DD/MM/YYYY")}`);
  console.log(`Faltam ${daysToNextBirthday} dias para seu aniversario`);
}

birthday("1997-12-26");
