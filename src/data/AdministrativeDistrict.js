const data = {
  台北市: {
    中正區: '500',
    大同區: '1000',
    中山區: '800',
    松山區: '500',
    大安區: '500',
    萬華區: '1000',
    信義區: '500',
    士林區: '2000',
    北投區: '2500',
    內湖區: '800',
    南港區: '500',
    文山區: '1000',
  },
  新北市: {
    板橋區: '1000',
    汐止區: '500',
    永和區: '800',
    中和區: '1000',
    三重區: '1500',
  },
};

export const datacountries = Object.getOwnPropertyNames(data);

export const datatownships = datacountries.map((v, i, array) =>
  Object.getOwnPropertyNames(data[array[i]])
);

export const dataprice = datacountries.map((v, i, array) =>
  Object.values(data[array[i]])
);
