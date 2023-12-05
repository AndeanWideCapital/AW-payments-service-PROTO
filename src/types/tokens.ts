/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export interface GetTokenDecimalsRequest {
  symbol: string;
}

export interface GetTokenDecimalsResponse {
  decimals: number;
}

export interface GetTokenBalanceRequest {
  symbol: string;
  address: string;
}

export interface GetTokenBalanceResponse {
  balance: number;
}

export interface SendTokenTransferRequest {
  symbol: string;
  from: string;
  to: string;
  amount: number;
}

export interface SendTokenTransferResponse {
  txid: string;
}

export interface TokensServiceClient {
  getTokenDecimals(request: GetTokenDecimalsRequest): Observable<GetTokenDecimalsResponse>;

  getTokenBalance(request: GetTokenBalanceRequest): Observable<GetTokenBalanceResponse>;

  sendTokenTransfer(request: SendTokenTransferRequest): Observable<SendTokenTransferResponse>;
}

export interface TokensServiceController {
  getTokenDecimals(
    request: GetTokenDecimalsRequest,
  ): Promise<GetTokenDecimalsResponse> | Observable<GetTokenDecimalsResponse> | GetTokenDecimalsResponse;

  getTokenBalance(
    request: GetTokenBalanceRequest,
  ): Promise<GetTokenBalanceResponse> | Observable<GetTokenBalanceResponse> | GetTokenBalanceResponse;

  sendTokenTransfer(
    request: SendTokenTransferRequest,
  ): Promise<SendTokenTransferResponse> | Observable<SendTokenTransferResponse> | SendTokenTransferResponse;
}

export function TokensServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getTokenDecimals", "getTokenBalance", "sendTokenTransfer"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("TokensService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("TokensService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const TOKENS_SERVICE_NAME = "TokensService";
