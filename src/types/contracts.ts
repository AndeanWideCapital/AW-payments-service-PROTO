/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export interface GetDecimalRequest {
  token: string;
}

export interface GetDecimalResponse {
  decimals: number;
}

export interface GetTotalSupplyRequest {
  token: string;
}

export interface GetTotalSupplyResponse {
  totalSupply: number;
}

export interface GetBalanceRequest {
  token: string;
  address: string;
}

export interface GetBalanceResponse {
  balance: number;
}

export interface SendTransferRequest {
  token: string;
  from: string;
  to: string;
  amount: number;
}

export interface SendTransferResponse {
  txHash: string;
}

export interface ContractServiceClient {
  getDecimal(request: GetDecimalRequest): Observable<GetDecimalResponse>;

  getTotalSupply(request: GetTotalSupplyRequest): Observable<GetTotalSupplyResponse>;

  getBalance(request: GetBalanceRequest): Observable<GetBalanceResponse>;

  sendTransfer(request: SendTransferRequest): Observable<SendTransferResponse>;
}

export interface ContractServiceController {
  getDecimal(
    request: GetDecimalRequest,
  ): Promise<GetDecimalResponse> | Observable<GetDecimalResponse> | GetDecimalResponse;

  getTotalSupply(
    request: GetTotalSupplyRequest,
  ): Promise<GetTotalSupplyResponse> | Observable<GetTotalSupplyResponse> | GetTotalSupplyResponse;

  getBalance(
    request: GetBalanceRequest,
  ): Promise<GetBalanceResponse> | Observable<GetBalanceResponse> | GetBalanceResponse;

  sendTransfer(
    request: SendTransferRequest,
  ): Promise<SendTransferResponse> | Observable<SendTransferResponse> | SendTransferResponse;
}

export function ContractServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getDecimal", "getTotalSupply", "getBalance", "sendTransfer"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ContractService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ContractService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CONTRACT_SERVICE_NAME = "ContractService";
