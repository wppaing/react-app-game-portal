const baseUrl = "https://api.rawg.io/api/";
const apiKey = `${process.env.REACT_APP_API_KEY}`;

const cm = () => {
  let m = new Date().getMonth() + 1;
  return m < 10 ? `0${m}` : m;
};
const cd = () => {
  let d = new Date().getDate();
  return d < 10 ? `0${d}` : d;
};

const currentDate = `${new Date().getFullYear()}-${cm()}-${cd()}`;
const lastYear = `${new Date().getFullYear() - 1}-${cm()}-${cd()}`;
const nextYear = `${new Date().getFullYear() + 1}-${cm()}-${cd()}`;

const popularGames = `games?key=${apiKey}&dates=${lastYear},${nextYear}&ordering=-rating&page_size=10`;
const upcomingGames = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${baseUrl}${popularGames}`;
export const upcomingGamesUrl = () => `${baseUrl}${upcomingGames}`;
export const newGamesUrl = () => `${baseUrl}${newGames}`;
