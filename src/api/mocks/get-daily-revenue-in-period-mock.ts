import { http, HttpResponse } from "msw";
import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    { date: "01/10/2024", receipt: 1845 },
    { date: "02/10/2024", receipt: 1375 },
    { date: "03/10/2024", receipt: 1772 },
    { date: "04/10/2024", receipt: 1265 },
    { date: "05/10/2024", receipt: 742 },
    { date: "06/10/2024", receipt: 1978 },
    { date: "07/10/2024", receipt: 729 },
  ]);
});
