/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { WithdrawalIntance } from "./commons";
import { Empty } from "./google/protobuf/empty";

export interface CreateBitsoWireWithdrawalRequest {
  userId: string;
  amount: number;
  asset: string;
  currency: string;
  externalAccountId: string;
  wireMessage?:
    | string
    | undefined;
  /** Optional, defaults to bridge */
  method?:
    | string
    | undefined;
  /** Optional, defaults to bridge */
  network?:
    | string
    | undefined;
  /** Optional, defaults to wire */
  protocol?: string | undefined;
}

export interface GetBitsoWireWithdrawalRequest {
  id: string;
  userId?: string | undefined;
}

export interface GetBitsoWireWithdrawalsRequest {
  userId?: string | undefined;
  bitsoId?: string | undefined;
  status?: string | undefined;
  limit?: number | undefined;
  skip?: number | undefined;
}

export interface GetBitsoWireWithdrawalsResponse {
  data: WithdrawalIntance[];
  count: number;
  skip: number;
  limit: number;
}

export interface FetchBitsoWireWithdrawalRequest {
  id: string;
}

export interface FetchBitsoWireWithdrawalsResponse {
  data: WithdrawalIntance[];
}

export interface GetBitsoWireFeesResponse {
  fees: GetBitsoWireFeesResponse_Fee[];
}

export interface GetBitsoWireFeesResponse_Fee {
  currency: string;
  fixed: number;
  variable: number;
}

export interface PaymentsServiceClient {
  createBitsoWireWithdrawal(request: CreateBitsoWireWithdrawalRequest): Observable<WithdrawalIntance>;

  getBitsoWireWithdrawals(request: GetBitsoWireWithdrawalsRequest): Observable<GetBitsoWireWithdrawalsResponse>;

  getBitsoWireWithdrawal(request: GetBitsoWireWithdrawalRequest): Observable<WithdrawalIntance>;

  fetchBitsoWireWithdrawal(request: FetchBitsoWireWithdrawalRequest): Observable<WithdrawalIntance>;

  fetchBitsoWireWithdrawals(request: Empty): Observable<FetchBitsoWireWithdrawalsResponse>;

  getBitsoWireFees(request: Empty): Observable<GetBitsoWireFeesResponse>;
}

export interface PaymentsServiceController {
  createBitsoWireWithdrawal(
    request: CreateBitsoWireWithdrawalRequest,
  ): Promise<WithdrawalIntance> | Observable<WithdrawalIntance> | WithdrawalIntance;

  getBitsoWireWithdrawals(
    request: GetBitsoWireWithdrawalsRequest,
  ):
    | Promise<GetBitsoWireWithdrawalsResponse>
    | Observable<GetBitsoWireWithdrawalsResponse>
    | GetBitsoWireWithdrawalsResponse;

  getBitsoWireWithdrawal(
    request: GetBitsoWireWithdrawalRequest,
  ): Promise<WithdrawalIntance> | Observable<WithdrawalIntance> | WithdrawalIntance;

  fetchBitsoWireWithdrawal(
    request: FetchBitsoWireWithdrawalRequest,
  ): Promise<WithdrawalIntance> | Observable<WithdrawalIntance> | WithdrawalIntance;

  fetchBitsoWireWithdrawals(
    request: Empty,
  ):
    | Promise<FetchBitsoWireWithdrawalsResponse>
    | Observable<FetchBitsoWireWithdrawalsResponse>
    | FetchBitsoWireWithdrawalsResponse;

  getBitsoWireFees(
    request: Empty,
  ): Promise<GetBitsoWireFeesResponse> | Observable<GetBitsoWireFeesResponse> | GetBitsoWireFeesResponse;
}

export function PaymentsServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "createBitsoWireWithdrawal",
      "getBitsoWireWithdrawals",
      "getBitsoWireWithdrawal",
      "fetchBitsoWireWithdrawal",
      "fetchBitsoWireWithdrawals",
      "getBitsoWireFees",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("PaymentsService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("PaymentsService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PAYMENTS_SERVICE_NAME = "PaymentsService";
