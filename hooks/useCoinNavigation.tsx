import { useRouter } from "next/router";

const useCoinNavigation = (
  name: string | string[] | undefined,
  vs_currency: string | string[] | undefined
) => {
  const router = useRouter();

  const getCoinDataPerDay = () => {
    router.push({
      pathname: `/detail/days/${name}`,
      query: { name, vs_currency },
    });
  };

  const getCoinDataPerWeeks = () => {
    router.push({
      pathname: `/detail/weeks/${name}`,
      query: { name, vs_currency },
    });
  };

  const getCoinDataPerMonth = () => {
    router.push({
      pathname: `/detail/month/${name}`,
      query: { name, vs_currency },
    });
  };
  return {
    getCoinDataPerDay,
    getCoinDataPerWeeks,
    getCoinDataPerMonth,
  };
};

export default useCoinNavigation;
