function generateData(startYear: number, endYear: number) {
  const data = [];
  const startDate = new Date(`${startYear}-01-01`);
  const endDate = new Date(`${endYear}-12-31`);

  function getRandomTimeOfDay() {
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);
    return { hour, minute };
  }

  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    for (let i = 0; i < 2; i++) {
      const { hour, minute } = getRandomTimeOfDay();

      d.setHours(hour, minute, 0, 0);

      const timestamp = d.getTime();

      const value = Math.random() * 1000 + 5000;

      data.push([timestamp, value]);
    }
  }
  return data;
}

export const CHART_DATA = generateData(2018, 2018);
