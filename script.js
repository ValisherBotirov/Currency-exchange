// fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (res) {
//     let [data] = res;
//     console.log(data);
//   });

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");

let api = [
  {
    id: 69,
    Code: "840",
    Ccy: "USD",
    CcyNm_RU: "\u0414\u043e\u043b\u043b\u0430\u0440 \u0421\u0428\u0410",
    CcyNm_UZ: "AQSH dollari",
    CcyNm_UZC: "\u0410\u049a\u0428 \u0434\u043e\u043b\u043b\u0430\u0440\u0438",
    CcyNm_EN: "US Dollar",
    Nominal: "1",
    Rate: "11483.91",
    Diff: "-25.68",
    Date: "25.03.2022",
  },
  {
    id: 21,
    Code: "978",
    Ccy: "EUR",
    CcyNm_RU: "\u0415\u0432\u0440\u043e",
    CcyNm_UZ: "EVRO",
    CcyNm_UZC: "E\u0412\u0420\u041e",
    CcyNm_EN: "Euro",
    Nominal: "1",
    Rate: "12618.52",
    Diff: "-107.63",
    Date: "25.03.2022",
  },
  {
    id: 57,
    Code: "643",
    Ccy: "RUB",
    CcyNm_RU:
      "\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c",
    CcyNm_UZ: "Rossiya rubli",
    CcyNm_UZC:
      "\u0420\u043e\u0441\u0441\u0438\u044f \u0440\u0443\u0431\u043b\u0438",
    CcyNm_EN: "Russian Ruble",
    Nominal: "1",
    Rate: "118.85",
    Diff: "5.46",
    Date: "25.03.2022",
  },
  {
    id: 22,
    Code: "826",
    Ccy: "GBP",
    CcyNm_RU:
      "\u0424\u0443\u043d\u0442 \u0441\u0442\u0435\u0440\u043b\u0438\u043d\u0433\u043e\u0432",
    CcyNm_UZ: "Angliya funt sterlingi",
    CcyNm_UZC:
      "\u0410\u043d\u0433\u043b\u0438\u044f \u0444\u0443\u043d\u0442 \u0441\u0442\u0435\u0440\u043b\u0438\u043d\u0433\u0438",
    CcyNm_EN: "Pound Sterling",
    Nominal: "1",
    Rate: "15131.20",
    Diff: "8.75",
    Date: "25.03.2022",
  },
  {
    id: 33,
    Code: "392",
    Ccy: "JPY",
    CcyNm_RU: "\u0418\u0435\u043d\u0430",
    CcyNm_UZ: "Yaponiya iyenasi",
    CcyNm_UZC:
      "\u042f\u043f\u043e\u043d\u0438\u044f \u0438\u0435\u043d\u0430\u0441\u0438",
    CcyNm_EN: "Japan Yen",
    Nominal: "1",
    Rate: "94.38",
    Diff: "-2.4",
    Date: "25.03.2022",
  },
  {
    id: 6,
    Code: "944",
    Ccy: "AZN",
    CcyNm_RU:
      "\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d\u0441\u043a\u0438\u0439 \u043c\u0430\u043d\u0430\u0442",
    CcyNm_UZ: "Ozarbayjon manati",
    CcyNm_UZC:
      "\u041e\u0437\u0430\u0440\u0431\u0430\u0439\u0436\u043e\u043d \u043c\u0430\u043d\u0430\u0442\u0438",
    CcyNm_EN: "Azerbaijan Manat",
    Nominal: "1",
    Rate: "6759.22",
    Diff: "-15.11",
    Date: "25.03.2022",
  },
  {
    id: 7,
    Code: "050",
    Ccy: "BDT",
    CcyNm_RU:
      "\u0411\u0430\u043d\u0433\u043b\u0430\u0434\u0435\u0448\u0441\u043a\u0430\u044f \u0442\u0430\u043a\u0430",
    CcyNm_UZ: "Bangladesh takasi",
    CcyNm_UZC:
      "\u0411\u0430\u043d\u0433\u043b\u0430\u0434\u0435\u0448 \u0442\u0430\u043a\u0430\u0441\u0438",
    CcyNm_EN: "Bangladesh Taka",
    Nominal: "1",
    Rate: "133.19",
    Diff: "-0.22",
    Date: "25.03.2022",
  },
  {
    id: 8,
    Code: "975",
    Ccy: "BGN",
    CcyNm_RU:
      "\u0411\u043e\u043b\u0433\u0430\u0440\u0441\u043a\u0438\u0439 \u043b\u0435\u0432",
    CcyNm_UZ: "Bolgariya levi",
    CcyNm_UZC:
      "\u0411\u043e\u043b\u0433\u0430\u0440\u0438\u044f \u043b\u0435\u0432\u0438",
    CcyNm_EN: "Bulgarian Lev",
    Nominal: "1",
    Rate: "6452.00",
    Diff: "-55.37",
    Date: "25.03.2022",
  },
  {
    id: 9,
    Code: "048",
    Ccy: "BHD",
    CcyNm_RU:
      "\u0411\u0430\u0445\u0440\u0435\u0439\u043d\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440",
    CcyNm_UZ: "Bahrayn dinori",
    CcyNm_UZC:
      "\u0411\u0430\u04b3\u0440\u0430\u0439\u043d \u0434\u0438\u043d\u043e\u0440\u0438",
    CcyNm_EN: "Bahraini Dinar",
    Nominal: "1",
    Rate: "30461.30",
    Diff: "-68.12",
    Date: "25.03.2022",
  },
  {
    id: 10,
    Code: "096",
    Ccy: "BND",
    CcyNm_RU:
      "\u0411\u0440\u0443\u043d\u0435\u0439\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440",
    CcyNm_UZ: "Bruney dollari",
    CcyNm_UZC:
      "\u0411\u0440\u0443\u043d\u0435\u0439 \u0434\u043e\u043b\u043b\u0430\u0440\u0438",
    CcyNm_EN: "Brunei Dollar",
    Nominal: "1",
    Rate: "8457.73",
    Diff: "-30.17",
    Date: "25.03.2022",
  },
  {
    id: 11,
    Code: "986",
    Ccy: "BRL",
    CcyNm_RU:
      "\u0411\u0440\u0430\u0437\u0438\u043b\u044c\u0441\u043a\u0438\u0439 \u0440\u0435\u0430\u043b",
    CcyNm_UZ: "Braziliya reali",
    CcyNm_UZC:
      "\u0411\u0440\u0430\u0437\u0438\u043b\u0438\u044f \u0440\u0435\u0430\u043b\u0438",
    CcyNm_EN: "Brazilian Real",
    Nominal: "1",
    Rate: "2379.69",
    Diff: "96.27",
    Date: "25.03.2022",
  },
  {
    id: 12,
    Code: "933",
    Ccy: "BYN",
    CcyNm_RU:
      "\u0411\u0435\u043b\u043e\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c",
    CcyNm_UZ: "Belorus rubli",
    CcyNm_UZC:
      "\u0411\u0435\u043b\u043e\u0440\u0443\u0441 \u0440\u0443\u0431\u043b\u0438",
    CcyNm_EN: "Belarusian Ruble",
    Nominal: "1",
    Rate: "3525.92",
    Diff: "-15.49",
    Date: "25.03.2022",
  },
  {
    id: 13,
    Code: "124",
    Ccy: "CAD",
    CcyNm_RU:
      "\u041a\u0430\u043d\u0430\u0434\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440",
    CcyNm_UZ: "Kanada dollari",
    CcyNm_UZC:
      "\u041a\u0430\u043d\u0430\u0434\u0430 \u0434\u043e\u043b\u043b\u0430\u0440\u0438",
    CcyNm_EN: "Canadian Dollar",
    Nominal: "1",
    Rate: "9129.43",
    Diff: "9.31",
    Date: "25.03.2022",
  },
  {
    id: 14,
    Code: "756",
    Ccy: "CHF",
    CcyNm_RU:
      "\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043a\u0438\u0439 \u0444\u0440\u0430\u043d\u043a",
    CcyNm_UZ: "Shveytsariya franki",
    CcyNm_UZC:
      "\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0438\u044f \u0444\u0440\u0430\u043d\u043a\u0438",
    CcyNm_EN: "Swiss Franc",
    Nominal: "1",
    Rate: "12305.95",
    Diff: "-11.68",
    Date: "25.03.2022",
  },
  {
    id: 15,
    Code: "156",
    Ccy: "CNY",
    CcyNm_RU:
      "\u042e\u0430\u043d\u044c \u0440\u0435\u043d\u043c\u0438\u043d\u0431\u0438",
    CcyNm_UZ: "Xitoy yuani",
    CcyNm_UZC: "\u0425\u0438\u0442\u043e\u0439 \u044e\u0430\u043d\u0438",
    CcyNm_EN: "Yuan Renminbi",
    Nominal: "1",
    Rate: "1802.47",
    Diff: "-6.36",
    Date: "25.03.2022",
  },
  {
    id: 16,
    Code: "192",
    Ccy: "CUP",
    CcyNm_RU:
      "\u041a\u0443\u0431\u0438\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e",
    CcyNm_UZ: "Kuba pesosi",
    CcyNm_UZC: "\u041a\u0443\u0431\u0430 \u043f\u0435\u0441\u043e\u0441\u0438",
    CcyNm_EN: "Cuban Peso",
    Nominal: "1",
    Rate: "478.50",
    Diff: "-1.07",
    Date: "25.03.2022",
  },
  {
    id: 17,
    Code: "203",
    Ccy: "CZK",
    CcyNm_RU:
      "\u0427\u0435\u0448\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430",
    CcyNm_UZ: "Chexiya kronasi",
    CcyNm_UZC:
      "\u0427\u0435\u0445\u0438\u044f \u043a\u0440\u043e\u043d\u0430\u0441\u0438",
    CcyNm_EN: "Czech Koruna",
    Nominal: "1",
    Rate: "511.17",
    Diff: "-1.28",
    Date: "25.03.2022",
  },
  {
    id: 18,
    Code: "208",
    Ccy: "DKK",
    CcyNm_RU:
      "\u0414\u0430\u0442\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430",
    CcyNm_UZ: "Daniya kronasi",
    CcyNm_UZC:
      "\u0414\u0430\u043d\u0438\u044f \u043a\u0440\u043e\u043d\u0430\u0441\u0438",
    CcyNm_EN: "Danish Krone",
    Nominal: "1",
    Rate: "1696.19",
    Diff: "-13.37",
    Date: "25.03.2022",
  },
  {
    id: 19,
    Code: "012",
    Ccy: "DZD",
    CcyNm_RU:
      "\u0410\u043b\u0436\u0438\u0440\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440",
    CcyNm_UZ: "Jazoir dinori",
    CcyNm_UZC:
      "\u0416\u0430\u0437\u043e\u0438\u0440 \u0434\u0438\u043d\u043e\u0440\u0438",
    CcyNm_EN: "Algerian Dinar",
    Nominal: "1",
    Rate: "80.59",
    Diff: "-0.17",
    Date: "25.03.2022",
  },
  {
    id: 20,
    Code: "818",
    Ccy: "EGP",
    CcyNm_RU:
      "\u0415\u0433\u0438\u043f\u0435\u0442\u0441\u043a\u0438\u0439 \u0444\u0443\u043d\u0442",
    CcyNm_UZ: "Misr funti",
    CcyNm_UZC: "\u041c\u0438\u0441\u0440 \u0444\u0443\u043d\u0442\u0438",
    CcyNm_EN: "Egyptian Pound",
    Nominal: "1",
    Rate: "627.54",
    Diff: "-104.62",
    Date: "25.03.2022",
  },
  {
    id: 2,
    Code: "971",
    Ccy: "AFN",
    CcyNm_RU: "\u0410\u0444\u0433\u0430\u043d\u0438",
    CcyNm_UZ: "Afg\u2018oniston afg\u2018onisi",
    CcyNm_UZC:
      "\u0410\u0444\u0493\u043e\u043d\u0438\u0441\u0442\u043e\u043d \u0430\u0444\u0493\u043e\u043d\u0438\u0441\u0438",
    CcyNm_EN: "AF Afghani",
    Nominal: "1",
    Rate: "130.75",
    Diff: "0.26",
    Date: "25.03.2022",
  },
  {
    id: 4,
    Code: "032",
    Ccy: "ARS",
    CcyNm_RU:
      "\u0410\u0440\u0433\u0435\u043d\u0442\u0438\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e",
    CcyNm_UZ: "Argentina pesosi",
    CcyNm_UZC:
      "\u0410\u0440\u0433\u0435\u043d\u0442\u0438\u043d\u0430 \u043f\u0435\u0441\u043e\u0441\u0438",
    CcyNm_EN: "Argentine Peso",
    Nominal: "1",
    Rate: "104.23",
    Diff: "-0.87",
    Date: "25.03.2022",
  },
  {
    id: 23,
    Code: "981",
    Ccy: "GEL",
    CcyNm_RU:
      "\u0413\u0440\u0443\u0437\u0438\u043d\u0441\u043a\u0438\u0439 \u043b\u0430\u0440\u0438",
    CcyNm_UZ: "Gruziya larisi",
    CcyNm_UZC:
      "\u0413\u0440\u0443\u0437\u0438\u044f \u043b\u0430\u0440\u0438\u0441\u0438",
    CcyNm_EN: "Georgian Lari",
    Nominal: "1",
    Rate: "3549.89",
    Diff: "-41.25",
    Date: "25.03.2022",
  },
  {
    id: 24,
    Code: "344",
    Ccy: "HKD",
    CcyNm_RU:
      "\u0413\u043e\u043d\u0433\u043a\u043e\u043d\u0433\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440",
    CcyNm_UZ: "Gongkong dollari",
    CcyNm_UZC:
      "\u0413\u043e\u043d\u0433\u043a\u043e\u043d\u0433 \u0434\u043e\u043b\u043b\u0430\u0440\u0438",
    CcyNm_EN: "Hong Kong Dollar",
    Nominal: "1",
    Rate: "1467.69",
    Diff: "-4.28",
    Date: "25.03.2022",
  },
  {
    id: 25,
    Code: "348",
    Ccy: "HUF",
    CcyNm_RU:
      "\u0412\u0435\u043d\u0433\u0435\u0440\u0441\u043a\u0438\u0439 \u0444\u043e\u0440\u0438\u043d\u0442",
    CcyNm_UZ: "Vengriya forinti",
    CcyNm_UZC:
      "\u0412\u0435\u043d\u0433\u0440\u0438\u044f \u0444\u043e\u0440\u0438\u043d\u0442\u0438",
    CcyNm_EN: "Hungarian Forint",
    Nominal: "1",
    Rate: "33.64",
    Diff: "-0.43",
    Date: "25.03.2022",
  },
  {
    id: 26,
    Code: "360",
    Ccy: "IDR",
    CcyNm_RU: "\u0420\u0443\u043f\u0438\u044f",
    CcyNm_UZ: "Indoneziya rupiyasi",
    CcyNm_UZC:
      "\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u044f \u0440\u0443\u043f\u0438\u044f\u0441\u0438",
    CcyNm_EN: "Rupiah",
    Nominal: "10",
    Rate: "8.00",
    Diff: "-0.03",
    Date: "25.03.2022",
  },
  {
    id: 27,
    Code: "376",
    Ccy: "ILS",
    CcyNm_RU:
      "\u041d\u043e\u0432\u044b\u0439 \u0438\u0437\u0440\u0430\u0438\u043b\u044c\u0441\u043a\u0438\u0439 \u0448\u0435\u043a\u0435\u043b\u044c",
    CcyNm_UZ: "Isroil shekeli",
    CcyNm_UZC:
      "\u0418\u0441\u0440\u043e\u0438\u043b \u0448\u0435\u043a\u0435\u043b\u0438",
    CcyNm_EN: "New Israeli Sheqel",
    Nominal: "1",
    Rate: "3562.67",
    Diff: "16.89",
    Date: "25.03.2022",
  },
  {
    id: 28,
    Code: "356",
    Ccy: "INR",
    CcyNm_RU:
      "\u0418\u043d\u0434\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f",
    CcyNm_UZ: "Hindiston rupiyasi",
    CcyNm_UZC:
      "\u04b2\u0438\u043d\u0434\u0438\u0441\u0442\u043e\u043d \u0440\u0443\u043f\u0438\u044f\u0441\u0438",
    CcyNm_EN: "Indian Rupee",
    Nominal: "1",
    Rate: "150.37",
    Diff: "-0.8",
    Date: "25.03.2022",
  },
  {
    id: 29,
    Code: "368",
    Ccy: "IQD",
    CcyNm_RU:
      "\u0418\u0440\u0430\u043a\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440",
    CcyNm_UZ: "Iroq dinori",
    CcyNm_UZC: "\u0418\u0440\u043e\u049b \u0434\u0438\u043d\u043e\u0440\u0438",
    CcyNm_EN: "Iraqi Dinar",
    Nominal: "1",
    Rate: "7.87",
    Diff: "-0.02",
    Date: "25.03.2022",
  },
  {
    id: 30,
    Code: "364",
    Ccy: "IRR",
    CcyNm_RU:
      "\u0418\u0440\u0430\u043d\u0441\u043a\u0438\u0439 \u0440\u0438\u0430\u043b",
    CcyNm_UZ: "Eron riali",
    CcyNm_UZC: "\u042d\u0440\u043e\u043d \u0440\u0438\u0430\u043b\u0438",
    CcyNm_EN: "Iranian Rial",
    Nominal: "10",
    Rate: "2.73",
    Diff: "-0.01",
    Date: "25.03.2022",
  },
  {
    id: 31,
    Code: "352",
    Ccy: "ISK",
    CcyNm_RU:
      "\u0418\u0441\u043b\u0430\u043d\u0434\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430",
    CcyNm_UZ: "Islandiya kronasi",
    CcyNm_UZC:
      "\u0418\u0441\u043b\u0430\u043d\u0434\u0438\u044f \u043a\u0440\u043e\u043d\u0430\u0441\u0438",
    CcyNm_EN: "Iceland Krona",
    Nominal: "1",
    Rate: "89.37",
    Diff: "0.31",
    Date: "25.03.2022",
  },
  {
    id: 32,
    Code: "400",
    Ccy: "JOD",
    CcyNm_RU:
      "\u0418\u043e\u0440\u0434\u0430\u043d\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440",
    CcyNm_UZ: "Iordaniya dinori",
    CcyNm_UZC:
      "\u0418\u043e\u0440\u0434\u0430\u043d\u0438\u044f \u0434\u0438\u043d\u043e\u0440\u0438",
    CcyNm_EN: "Jordanian Dinar",
    Nominal: "1",
    Rate: "16197.33",
    Diff: "-36.22",
    Date: "25.03.2022",
  },
  {
    id: 5,
    Code: "036",
    Ccy: "AUD",
    CcyNm_RU:
      "\u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440",
    CcyNm_UZ: "Avstraliya dollari",
    CcyNm_UZC:
      "\u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u044f \u0434\u043e\u043b\u043b\u0430\u0440\u0438",
    CcyNm_EN: "Australian Dollar",
    Nominal: "1",
    Rate: "8589.96",
    Diff: "99.34",
    Date: "25.03.2022",
  },
  {
    id: 34,
    Code: "417",
    Ccy: "KGS",
    CcyNm_RU:
      "\u041a\u0438\u0440\u0433\u0438\u0437\u0441\u043a\u0438\u0439 \u0441\u043e\u043c",
    CcyNm_UZ: "Qirg\u2018iz somi",
    CcyNm_UZC: "\u049a\u0438\u0440\u0493\u0438\u0437 \u0441\u043e\u043c\u0438",
    CcyNm_EN: "Kyrgyzstan Som",
    Nominal: "1",
    Rate: "115.45",
    Diff: "5.26",
    Date: "25.03.2022",
  },
  {
    id: 35,
    Code: "116",
    Ccy: "KHR",
    CcyNm_RU: "\u0420\u0438\u0435\u043b\u044c",
    CcyNm_UZ: "Kambodja riyeli",
    CcyNm_UZC:
      "\u041a\u0430\u043c\u0431\u043e\u0434\u0436\u0430 \u0440\u0438\u0435\u043b\u0438",
    CcyNm_EN: "Riel",
    Nominal: "1",
    Rate: "2.84",
    Diff: "-0.01",
    Date: "25.03.2022",
  },
  {
    id: 36,
    Code: "410",
    Ccy: "KRW",
    CcyNm_RU:
      "\u0412\u043e\u043d\u0430 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u041a\u043e\u0440\u0435\u044f",
    CcyNm_UZ: "Koreya Respublikasi voni",
    CcyNm_UZC:
      "\u041a\u043e\u0440\u0435\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0441\u0438 \u0432\u043e\u043d\u0438",
    CcyNm_EN: "The Korean Republic Won",
    Nominal: "1",
    Rate: "9.39",
    Diff: "-0.09",
    Date: "25.03.2022",
  },
  {
    id: 37,
    Code: "414",
    Ccy: "KWD",
    CcyNm_RU:
      "\u041a\u0443\u0432\u0435\u0439\u0442\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440",
    CcyNm_UZ: "Quvayt dinori",
    CcyNm_UZC:
      "\u049a\u0443\u0432\u0430\u0439\u0442 \u0434\u0438\u043d\u043e\u0440\u0438",
    CcyNm_EN: "Kuwaiti Dinar",
    Nominal: "1",
    Rate: "37763.60",
    Diff: "-109.35",
    Date: "25.03.2022",
  },
  {
    id: 38,
    Code: "398",
    Ccy: "KZT",
    CcyNm_RU:
      "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0439 \u0442\u0435\u043d\u0433\u0435",
    CcyNm_UZ: "Qozog\u2018iston tengesi",
    CcyNm_UZC:
      "\u049a\u043e\u0437\u043e\u0493\u0438\u0441\u0442\u043e\u043d \u0442\u0435\u043d\u0433\u0435\u0441\u0438",
    CcyNm_EN: "Kazakhstan Tenge",
    Nominal: "1",
    Rate: "23.13",
    Diff: "0.5",
    Date: "25.03.2022",
  },
  {
    id: 39,
    Code: "418",
    Ccy: "LAK",
    CcyNm_RU:
      "\u041b\u0430\u043e\u0441\u0441\u043a\u0438\u0439 \u043a\u0438\u043f",
    CcyNm_UZ: "Laos kipisi",
    CcyNm_UZC: "\u041b\u0430\u043e\u0441 \u043a\u0438\u043f\u0438\u0441\u0438",
    CcyNm_EN: "Lao Kip",
    Nominal: "1",
    Rate: "0.99",
    Diff: "-0.01",
    Date: "25.03.2022",
  },
  {
    id: 40,
    Code: "422",
    Ccy: "LBP",
    CcyNm_RU:
      "\u041b\u0438\u0432\u0430\u043d\u0441\u043a\u0438\u0439 \u0444\u0443\u043d\u0442",
    CcyNm_UZ: "Livan funti",
    CcyNm_UZC: "\u041b\u0438\u0432\u0430\u043d \u0444\u0443\u043d\u0442\u0438",
    CcyNm_EN: "Lebanese Pound",
    Nominal: "1",
    Rate: "7.59",
    Diff: "-0.02",
    Date: "25.03.2022",
  },
  {
    id: 41,
    Code: "434",
    Ccy: "LYD",
    CcyNm_RU:
      "\u041b\u0438\u0432\u0438\u0439\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440",
    CcyNm_UZ: "Liviya dinori",
    CcyNm_UZC:
      "\u041b\u0438\u0432\u0438\u044f \u0434\u0438\u043d\u043e\u0440\u0438",
    CcyNm_EN: "Libyan Dinar",
    Nominal: "1",
    Rate: "2467.06",
    Diff: "-7.27",
    Date: "25.03.2022",
  },
  {
    id: 42,
    Code: "504",
    Ccy: "MAD",
    CcyNm_RU:
      "\u041c\u0430\u0440\u043e\u043a\u043a\u0430\u043d\u0441\u043a\u0438\u0439 \u0434\u0438\u0440\u0445\u0430\u043c",
    CcyNm_UZ: "Marokash dirhami",
    CcyNm_UZC:
      "\u041c\u0430\u0440\u043e\u043a\u0430\u0448 \u0434\u0438\u0440\u04b3\u0430\u043c\u0438",
    CcyNm_EN: "Moroccan Dirham",
    Nominal: "1",
    Rate: "1183.91",
    Diff: "7.91",
    Date: "25.03.2022",
  },
  {
    id: 43,
    Code: "498",
    Ccy: "MDL",
    CcyNm_RU:
      "\u041c\u043e\u043b\u0434\u0430\u0432\u0441\u043a\u0438\u0439 \u043b\u0435\u0439",
    CcyNm_UZ: "Moldaviya leyi",
    CcyNm_UZC:
      "\u041c\u043e\u043b\u0434\u0430\u0432\u0438\u044f \u043b\u0435\u0439\u0438",
    CcyNm_EN: "Moldovan Leu",
    Nominal: "1",
    Rate: "625.83",
    Diff: "2",
    Date: "25.03.2022",
  },
  {
    id: 44,
    Code: "104",
    Ccy: "MMK",
    CcyNm_RU:
      "\u041c\u044c\u044f\u043d\u043c\u0430\u043d\u0441\u043a\u0438\u0439 \u043a\u044c\u044f\u0442",
    CcyNm_UZ: "Myanma kyati",
    CcyNm_UZC:
      "\u041c\u044c\u044f\u043d\u043c\u0430 \u043a\u044c\u044f\u0442\u0438",
    CcyNm_EN: "Kyat",
    Nominal: "1",
    Rate: "6.46",
    Diff: "-0.01",
    Date: "25.03.2022",
  },
  {
    id: 45,
    Code: "496",
    Ccy: "MNT",
    CcyNm_RU:
      "\u041c\u043e\u043d\u0433\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u0442\u0443\u0433p\u0438\u043a",
    CcyNm_UZ: "Mongoliya tugriki",
    CcyNm_UZC:
      "\u041c\u043e\u043d\u0433\u043e\u043b\u0438\u044f \u0442\u0443\u0433\u0440\u0438\u043a\u0438",
    CcyNm_EN: "Tugrik",
    Nominal: "1",
    Rate: "3.94",
    Diff: "0",
    Date: "25.03.2022",
  },
  {
    id: 46,
    Code: "484",
    Ccy: "MXN",
    CcyNm_RU:
      "\u041c\u0435\u043a\u0441\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e",
    CcyNm_UZ: "Meksika pesosi",
    CcyNm_UZC:
      "\u041c\u0435\u043a\u0441\u0438\u043a\u0430 \u043f\u0435\u0441\u043e\u0441\u0438",
    CcyNm_EN: "Mexican Peso",
    Nominal: "1",
    Rate: "568.06",
    Diff: "7.51",
    Date: "25.03.2022",
  },
  {
    id: 47,
    Code: "458",
    Ccy: "MYR",
    CcyNm_RU:
      "\u041c\u0430\u043b\u0430\u0439\u0437\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0438\u043d\u0433\u0433\u0438\u0442",
    CcyNm_UZ: "Malayziya ringgiti",
    CcyNm_UZC:
      "\u041c\u0430\u043b\u0430\u0439\u0437\u0438\u044f \u0440\u0438\u043d\u0433\u0433\u0438\u0442\u0438",
    CcyNm_EN: "Malaysian Ringgit",
    Nominal: "1",
    Rate: "2717.25",
    Diff: "-27.7",
    Date: "25.03.2022",
  },
  {
    id: 48,
    Code: "578",
    Ccy: "NOK",
    CcyNm_RU:
      "\u041d\u043e\u0440\u0432\u0435\u0436\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430",
    CcyNm_UZ: "Norvegiya kronasi",
    CcyNm_UZC:
      "\u041d\u043e\u0440\u0432\u0435\u0433\u0438\u044f \u043a\u0440\u043e\u043d\u0430\u0441\u0438",
    CcyNm_EN: "Norwegian Krone",
    Nominal: "1",
    Rate: "1329.57",
    Diff: "25.38",
    Date: "25.03.2022",
  },
  {
    id: 49,
    Code: "554",
    Ccy: "NZD",
    CcyNm_RU:
      "\u041d\u043e\u0432\u043e\u0437\u0435\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440",
    CcyNm_UZ: "Yangi Zelandiya dollari",
    CcyNm_UZC:
      "\u042f\u043d\u0433\u0438 \u0417\u0435\u043b\u0430\u043d\u0434\u0438\u044f \u0434\u043e\u043b\u043b\u0430\u0440\u0438",
    CcyNm_EN: "New Zealand Dollar",
    Nominal: "1",
    Rate: "7977.87",
    Diff: "54.67",
    Date: "25.03.2022",
  },
  {
    id: 50,
    Code: "512",
    Ccy: "OMR",
    CcyNm_RU:
      "\u041e\u043c\u0430\u043d\u0441\u043a\u0438\u0439 \u0440\u0438\u0430\u043b",
    CcyNm_UZ: "Ummon riali",
    CcyNm_UZC: "\u0423\u043c\u043c\u043e\u043d \u0440\u0438\u0430\u043b\u0438",
    CcyNm_EN: "Rial Omani",
    Nominal: "1",
    Rate: "29828.34",
    Diff: "-66.7",
    Date: "25.03.2022",
  },
  {
    id: 51,
    Code: "608",
    Ccy: "PHP",
    CcyNm_RU:
      "\u0424\u0438\u043b\u0438\u043f\u043f\u0438\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e",
    CcyNm_UZ: "Filippin pesosi",
    CcyNm_UZC:
      "\u0424\u0438\u043b\u0438\u043f\u043f\u0438\u043d \u043f\u0435\u0441\u043e\u0441\u0438",
    CcyNm_EN: "Philippine Piso",
    Nominal: "1",
    Rate: "219.44",
    Diff: "-0.45",
    Date: "25.03.2022",
  },
  {
    id: 52,
    Code: "586",
    Ccy: "PKR",
    CcyNm_RU:
      "\u041f\u0430\u043a\u0438\u0441\u0442\u0430\u043d\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f",
    CcyNm_UZ: "Pokiston rupiyasi",
    CcyNm_UZC:
      "\u041f\u043e\u043a\u0438\u0441\u0442\u043e\u043d \u0440\u0443\u043f\u0438\u044f\u0441\u0438",
    CcyNm_EN: "Pakistan Rupee",
    Nominal: "1",
    Rate: "63.05",
    Diff: "-0.63",
    Date: "25.03.2022",
  },
  {
    id: 53,
    Code: "985",
    Ccy: "PLN",
    CcyNm_RU: "\u0417\u043b\u043e\u0442\u044b\u0439",
    CcyNm_UZ: "Polsha zlotiysi",
    CcyNm_UZC:
      "\u041f\u043e\u043b\u044c\u0448\u0430 \u0437\u043b\u043e\u0442\u0438\u0439\u0441\u0438",
    CcyNm_EN: "Polish Zloty",
    Nominal: "1",
    Rate: "2652.11",
    Diff: "-42.4",
    Date: "25.03.2022",
  },
  {
    id: 54,
    Code: "634",
    Ccy: "QAR",
    CcyNm_RU:
      "\u041a\u0430\u0442\u0430\u0440\u0441\u043a\u0438\u0439 \u0440\u0438\u0430\u043b",
    CcyNm_UZ: "Qatar riali",
    CcyNm_UZC: "\u049a\u0430\u0442\u0430\u0440 \u0440\u0438\u0430\u043b\u0438",
    CcyNm_EN: "Qatari Rial",
    Nominal: "1",
    Rate: "3135.11",
    Diff: "-14.41",
    Date: "25.03.2022",
  },
  {
    id: 55,
    Code: "946",
    Ccy: "RON",
    CcyNm_RU:
      "\u0420\u0443\u043c\u044b\u043d\u0441\u043a\u0438\u0439 \u043b\u0435\u0439",
    CcyNm_UZ: "Ruminiya leyi",
    CcyNm_UZC:
      "\u0420\u0443\u043c\u0438\u043d\u0438\u044f \u043b\u0435\u0439\u0438",
    CcyNm_EN: "Romanian Leu",
    Nominal: "1",
    Rate: "2549.71",
    Diff: "-22.15",
    Date: "25.03.2022",
  },
  {
    id: 56,
    Code: "941",
    Ccy: "RSD",
    CcyNm_RU:
      "\u0421\u0435\u0440\u0431\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440",
    CcyNm_UZ: "Serbiya dinori",
    CcyNm_UZC:
      "\u0421\u0435\u0440\u0431\u0438\u044f \u0434\u0438\u043d\u043e\u0440\u0438",
    CcyNm_EN: "Serbian Dinar",
    Nominal: "1",
    Rate: "107.18",
    Diff: "-0.92",
    Date: "25.03.2022",
  },
  {
    id: 3,
    Code: "051",
    Ccy: "AMD",
    CcyNm_RU:
      "\u0410\u0440\u043c\u044f\u043d\u0441\u043a\u0438\u0439 \u0434\u0440\u0430\u043c",
    CcyNm_UZ: "Armaniston drami",
    CcyNm_UZC:
      "\u0410\u0440\u043c\u0430\u043d\u0438\u0441\u0442\u043e\u043d \u0434\u0440\u0430\u043c\u0438",
    CcyNm_EN: "Armenian Dram",
    Nominal: "1",
    Rate: "23.52",
    Diff: "-0.02",
    Date: "25.03.2022",
  },
  {
    id: 58,
    Code: "682",
    Ccy: "SAR",
    CcyNm_RU:
      "\u0421\u0430\u0443\u0434\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0438\u044f\u043b",
    CcyNm_UZ: "Saudiya\u00a0Arabistoni\u00a0riali",
    CcyNm_UZC:
      "\u0421\u0430\u0443\u0434\u0438\u044f\u00a0\u0410\u0440\u0430\u0431\u0438\u0441\u0442\u043e\u043d\u0438\u00a0\u0440\u0438\u0430\u043b\u0438",
    CcyNm_EN: "Saudi Riyal",
    Nominal: "1",
    Rate: "3061.48",
    Diff: "-6.44",
    Date: "25.03.2022",
  },
  {
    id: 59,
    Code: "938",
    Ccy: "SDG",
    CcyNm_RU:
      "\u0421\u0443\u0434\u0430\u043d\u0441\u043a\u0438\u0439 \u0444\u0443\u043d\u0442",
    CcyNm_UZ: "Sudan funti",
    CcyNm_UZC: "\u0421\u0443\u0434\u0430\u043d \u0444\u0443\u043d\u0442\u0438",
    CcyNm_EN: "Sudanese Pound",
    Nominal: "1",
    Rate: "25.69",
    Diff: "-0.05",
    Date: "25.03.2022",
  },
  {
    id: 60,
    Code: "752",
    Ccy: "SEK",
    CcyNm_RU:
      "\u0428\u0432\u0435\u0434\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430",
    CcyNm_UZ: "Shvetsiya kronasi",
    CcyNm_UZC:
      "\u0428\u0432\u0435\u0446\u0438\u044f \u043a\u0440\u043e\u043d\u0430\u0441\u0438",
    CcyNm_EN: "Swedish Krona",
    Nominal: "1",
    Rate: "1220.21",
    Diff: "0.35",
    Date: "25.03.2022",
  },
  {
    id: 61,
    Code: "702",
    Ccy: "SGD",
    CcyNm_RU:
      "\u0421\u0438\u043d\u0433\u0430\u043f\u0443\u0440\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440",
    CcyNm_UZ: "Singapur dollari",
    CcyNm_UZC:
      "\u0421\u0438\u043d\u0433\u0430\u043f\u0443\u0440 \u0434\u043e\u043b\u043b\u0430\u0440\u0438",
    CcyNm_EN: "Singapore Dollar",
    Nominal: "1",
    Rate: "8457.73",
    Diff: "-30.17",
    Date: "25.03.2022",
  },
  {
    id: 62,
    Code: "760",
    Ccy: "SYP",
    CcyNm_RU:
      "\u0421\u0438\u0440\u0438\u0439\u0441\u043a\u0438\u0439 \u0444\u0443\u043d\u0442",
    CcyNm_UZ: "Suriya funti",
    CcyNm_UZC: "\u0421\u0443\u0440\u0438\u044f \u0444\u0443\u043d\u0442\u0438",
    CcyNm_EN: "Syrian Pound",
    Nominal: "1",
    Rate: "4.57",
    Diff: "-0.01",
    Date: "25.03.2022",
  },
  {
    id: 63,
    Code: "764",
    Ccy: "THB",
    CcyNm_RU: "\u0411\u0430\u0442",
    CcyNm_UZ: "Tailand bati",
    CcyNm_UZC:
      "\u0422\u0430\u0438\u043b\u0430\u043d\u0434 \u0431\u0430\u0442\u0438",
    CcyNm_EN: "Baht",
    Nominal: "1",
    Rate: "341.63",
    Diff: "-3.69",
    Date: "25.03.2022",
  },
  {
    id: 64,
    Code: "972",
    Ccy: "TJS",
    CcyNm_RU: "\u0421\u043e\u043c\u043e\u043d\u0438",
    CcyNm_UZ: "Tojikiston somonisi",
    CcyNm_UZC:
      "\u0422\u043e\u0436\u0438\u043a\u0438\u0441\u0442\u043e\u043d \u0441\u043e\u043c\u043e\u043d\u0438\u0441\u0438",
    CcyNm_EN: "Tajikistan Somoni",
    Nominal: "1",
    Rate: "883.04",
    Diff: "-1.97",
    Date: "25.03.2022",
  },
  {
    id: 65,
    Code: "934",
    Ccy: "TMT",
    CcyNm_RU:
      "\u041d\u043e\u0432\u044b\u0439 \u0442\u0443\u0440\u043a\u043c\u0435\u043d\u0441\u043a\u0438\u0439 \u043c\u0430\u043d\u0430\u0442",
    CcyNm_UZ: "Turkmaniston manati",
    CcyNm_UZC:
      "\u0422\u0443\u0440\u043a\u043c\u0430\u043d\u0438\u0441\u0442\u043e\u043d \u043c\u0430\u043d\u0430\u0442\u0438",
    CcyNm_EN: "Turkmenistan New Manat",
    Nominal: "1",
    Rate: "3285.81",
    Diff: "-7.35",
    Date: "25.03.2022",
  },
  {
    id: 66,
    Code: "788",
    Ccy: "TND",
    CcyNm_RU:
      "\u0422\u0443\u043d\u0438\u0441\u0441\u043a\u0438\u0439 \u0434\u0438\u043d\u0430\u0440",
    CcyNm_UZ: "Tunis dinori",
    CcyNm_UZC:
      "\u0422\u0443\u043d\u0438\u0441 \u0434\u0438\u043d\u043e\u0440\u0438",
    CcyNm_EN: "Tunisian Dinar",
    Nominal: "1",
    Rate: "3888.63",
    Diff: "-45.73",
    Date: "25.03.2022",
  },
  {
    id: 67,
    Code: "949",
    Ccy: "TRY",
    CcyNm_RU:
      "\u0422\u0443\u0440\u0435\u0446\u043a\u0430\u044f \u043b\u0438\u0440\u0430",
    CcyNm_UZ: "Turkiya lirasi",
    CcyNm_UZC:
      "\u0422\u0443\u0440\u043a\u0438\u044f \u043b\u0438\u0440\u0430\u0441\u0438",
    CcyNm_EN: "Turkish Lira",
    Nominal: "1",
    Rate: "773.75",
    Diff: "-3.91",
    Date: "25.03.2022",
  },
  {
    id: 68,
    Code: "980",
    Ccy: "UAH",
    CcyNm_RU: "\u0413\u0440\u0438\u0432\u043d\u0430",
    CcyNm_UZ: "Ukraina grivnasi",
    CcyNm_UZC:
      "\u0423\u043a\u0440\u0430\u0438\u043d\u0430 \u0433\u0440\u0438\u0432\u043d\u0430\u0441\u0438",
    CcyNm_EN: "Ukrainian Hryvnia",
    Nominal: "1",
    Rate: "390.61",
    Diff: "1.89",
    Date: "25.03.2022",
  },
  {
    id: 1,
    Code: "784",
    Ccy: "AED",
    CcyNm_RU: "\u0414\u0438\u0440\u0445\u0430\u043c \u041e\u0410\u042d",
    CcyNm_UZ: "BAA dirhami",
    CcyNm_UZC: "\u0411\u0410\u0410 \u0434\u0438\u0440\u04b3\u0430\u043c\u0438",
    CcyNm_EN: "UAE Dirham",
    Nominal: "1",
    Rate: "3126.49",
    Diff: "-6.99",
    Date: "25.03.2022",
  },
  {
    id: 70,
    Code: "858",
    Ccy: "UYU",
    CcyNm_RU:
      "\u0423\u0440\u0443\u0433\u0432\u0430\u0439\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e",
    CcyNm_UZ: "Urugvay pesosi",
    CcyNm_UZC:
      "\u0423\u0440\u0443\u0433\u0432\u0430\u0439 \u043f\u0435\u0441\u043e\u0441\u0438",
    CcyNm_EN: "Peso Uruguayo",
    Nominal: "1",
    Rate: "271.26",
    Diff: "1.49",
    Date: "25.03.2022",
  },
  {
    id: 71,
    Code: "928",
    Ccy: "VES",
    CcyNm_RU:
      "\u0412\u0435\u043d\u0435\u0441\u0443\u044d\u043b\u044c\u0441\u043a\u0438\u0439 \u0431\u043e\u043b\u0438\u0432\u0430\u0440",
    CcyNm_UZ: "Venesuela bolivari",
    CcyNm_UZC:
      "\u0412\u0435\u043d\u0435\u0441\u0443\u044d\u043b\u0430 \u0431\u043e\u043b\u0438\u0432\u0430\u0440\u0438",
    CcyNm_EN: "Bol\u00edvar",
    Nominal: "1",
    Rate: "2657.39",
    Diff: "-25.75",
    Date: "25.03.2022",
  },
  {
    id: 72,
    Code: "704",
    Ccy: "VND",
    CcyNm_RU: "\u0414\u043e\u043d\u0433",
    CcyNm_UZ: "Vetnam dongi",
    CcyNm_UZC:
      "\u0412\u044c\u0435\u0442\u043d\u0430\u043c \u0434\u043e\u043d\u0433\u0438",
    CcyNm_EN: "Dong",
    Nominal: "10",
    Rate: "5.02",
    Diff: "-0.01",
    Date: "25.03.2022",
  },
  {
    id: 73,
    Code: "960",
    Ccy: "XDR",
    CcyNm_RU: "\u0421\u0414\u0420",
    CcyNm_UZ: "SDR",
    CcyNm_UZC: "\u0421\u0414\u0420",
    CcyNm_EN: "SDR",
    Nominal: "1",
    Rate: "15831.14",
    Diff: "-89.5",
    Date: "25.03.2022",
  },
  {
    id: 74,
    Code: "886",
    Ccy: "YER",
    CcyNm_RU:
      "\u0419\u0435\u043c\u0435\u043d\u0441\u043a\u0438\u0439 \u0440\u0438\u0430\u043b",
    CcyNm_UZ: "Yaman riali",
    CcyNm_UZC: "\u042f\u043c\u0430\u043d \u0440\u0438\u0430\u043b\u0438",
    CcyNm_EN: "Yemeni Rial",
    Nominal: "1",
    Rate: "45.90",
    Diff: "-0.1",
    Date: "25.03.2022",
  },
  {
    id: 75,
    Code: "710",
    Ccy: "ZAR",
    CcyNm_RU: "\u0420\u044d\u043d\u0434",
    CcyNm_UZ: "Janubiy Afrika randi",
    CcyNm_UZC:
      "\u0416\u0430\u043d\u0443\u0431\u0438\u0439 \u0410\u0444\u0440\u0438\u043a\u0430 \u0440\u0430\u043d\u0434\u0438",
    CcyNm_EN: "Rand",
    Nominal: "1",
    Rate: "777.55",
    Diff: "8.32",
    Date: "25.03.2022",
  },
];
console.log(api);

let dollar = api.find(function (val) {
  return val.Ccy == "USD";
});
let oneDollar = dollar.Rate;

let rubl = api.find(function (val) {
  return val.Ccy == "RUB";
});
let oneRubl = rubl.Rate;

if (select1.value == "sum") {
  input1.addEventListener("input", function () {
    let input1Value = +input1.value;
    // 1-inputni valuesi sum bo'lgan hol uchun
    // 2-input un
    if (select2.value == "rub" && select1.value == "sum") {
      input2.value = "";
      input2.value = `${(input1Value / oneRubl).toFixed(6)} Rubl`;
    }
    if (select2.value == "sum" && select1.value == "sum") {
      input2.value = "";
      input2.value = `${input1Value} Sum`;
    }
    if (select2.value == "usd" && select1.value == "sum") {
      input2.value = "";
      input2.value = `${(input1Value / oneDollar).toFixed(6)} $`;
    }
    // 3-input un
    if (select3.value == "usd" && select1.value == "sum") {
      input3.value = "";
      input3.value = `${(input1Value / oneDollar).toFixed(6)} $`;
    }
    if (select3.value == "sum" && select1.value == "sum") {
      input3.value = "";
      input3.value = `${input1Value} Sum`;
    }
    if (select3.value == "rub" && select1.value == "sum") {
      input3.value = "";
      input3.value = `${(input1Value / oneRubl).toFixed(6)} Rubl`;
    }
    // 1-inputni valuesi rubl bo'lgan hol uchun
    // 2-input un
    if (select2.value == "rub" && select1.value == "rub") {
      input2.value = `${input1Value} Rubl`;
    }
    if (select2.value == "sum" && select1.value == "rub") {
      input2.value = `${input1Value * oneRubl} sum`;
    }
    if (select2.value == "usd" && select1.value == "rub") {
      input2.value = `${((input1Value * oneRubl) / oneDollar).toFixed(6)} $`;
    }
    // 3-input un
    if (select3.value == "usd" && select1.value == "rub") {
      input3.value = `${((input1Value * oneRubl) / oneDollar).toFixed(6)} $`;
    }
    if (select3.value == "sum" && select1.value == "rub") {
      input3.value = `${input1Value * oneRubl} sum`;
    }
    if (select3.value == "rub" && select1.value == "rub") {
      input3.value = `${input1Value} Rubl`;
    }
    // 1-inputni valusi dollar bo'lgan hol uchun
    // 2-input un
    if (select2.value == "rub" && select1.value == "usd") {
      input2.value = `${((input1Value * oneDollar) / oneRubl).toFixed(6)} Rubl`;
    }
    if (select2.value == "sum" && select1.value == "usd") {
      input2.value = `${input1Value * oneDollar} sum`;
    }
    if (select2.value == "usd" && select1.value == "usd") {
      input2.value = `${input1Value} $`;
    }
    // 3-input un
    if (select3.value == "usd" && select1.value == "usd") {
      input3.value = `${input1Value} $`;
    }
    if (select3.value == "sum" && select1.value == "usd") {
      input3.value = `${input1Value * oneDollar} sum`;
    }
    if (select3.value == "rub" && select1.value == "usd") {
      input3.value = `${((input1Value * oneDollar) / oneRubl).toFixed(6)} Rubl`;
    }
  });
}
