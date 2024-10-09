import { http, HttpResponse } from "msw";
import { DeliveryOrderParams } from "../delivery-order";

export const deliveryOrderMock = http.patch<DeliveryOrderParams, never, never>(
  "/orders/:orderId/delivery",
  async ({ params }) => {
    if (params.orderId === "error-order-id") {
      return new HttpResponse(null, { status: 400 });
    }

    return new HttpResponse(null, { status: 204 });
  },
);
