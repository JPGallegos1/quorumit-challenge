interface ITime {
  prices: [];
}

const useTime = (data?: ITime) => {
  const getTimestamp =
    data && data.prices?.slice(0, 12).map((price) => price[0]);

  const timestamp =
    getTimestamp &&
    getTimestamp?.map((time: string | number | Date) => new Date(time));

  const time =
    timestamp &&
    timestamp.map(
      (time: Date) =>
        `${("00" + String(time.getHours())).slice(-2)}:${(
          "00" + String(time.getMinutes())
        ).slice(-2)}:${("00" + String(time.getSeconds())).slice(-2)}`
    );
  return { time };
};

export default useTime;
