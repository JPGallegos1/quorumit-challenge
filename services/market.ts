export const getMarketData = async (
  coinName: string | string[] | undefined,
  isInUsd: string | string[] | undefined
) => {
  let urlDays = `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=${isInUsd}&days=1`;
  let urlWeeks = `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=${isInUsd}&days=14`;
  let urlMonths = `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=${isInUsd}&days=30`;

  const getByDays = () => fetch(urlDays).then((res) => console.log(res));
  const getByWeeks = () => fetch(urlWeeks).then((res) => console.log(res));
  const getByMonth = () => fetch(urlMonths).then((res) => console.log(res));

  await Promise.allSettled([getByDays(), getByWeeks(), getByMonth()]).then(
    (result) => console.log(result)
  );
};
