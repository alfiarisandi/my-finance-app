const BASE_URL_BE = process.env.NEXT_PUBLIC_BASE_URL;

//auth
const SIGN_IN = `${BASE_URL_BE}/auth/login`;
const SIGN_UP = `${BASE_URL_BE}/auth/register`;
const ACTIVATION_ACCOUNT = `${BASE_URL_BE}/auth/activation`;
const RESEND_CODE_ACTIVATION = `${BASE_URL_BE}/auth/resend-activation-code`;

const AUTH = (params?: string) => `${BASE_URL_BE}/auth${params}`;

//dashboard
const FETCH_DASHBOARD = (params?: string) => `${BASE_URL_BE}/dashboard`;

//tabungan
const FETCH_TABUNGAN = `${BASE_URL_BE}/uang-tabungan/get-tabungan`;

//anggaran
const FETCH_ANGGARAN_BYMONTH = (params?: string) =>
  `${BASE_URL_BE}/anggaran/get-by-month`;

//pengeluaran
const INSERT_OUTCOME = `${BASE_URL_BE}/pengeluaran/insert`;

export {
  AUTH,
  SIGN_IN,
  SIGN_UP,
  FETCH_DASHBOARD,
  FETCH_ANGGARAN_BYMONTH,
  FETCH_TABUNGAN,
  INSERT_OUTCOME,
};
