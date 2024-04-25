export const useMoneyFormatter = ({
  value = 0,
  type = 1,
}: {
  value?: number;
  type?: number;
}) => {
  const number = value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  const currency: any = {
    "1": "Rp.",
    "2": "$",
  };
  return currency[type.toLocaleString()] + number;
};
