/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export interface GetContractDecimalRequest {
  token: string;
}

export interface GetContractDecimalResponse {
  decimals: number;
}

export interface GetContractTotalSupplyRequest {
  token: string;
}

export interface GetContractTotalSupplyResponse {
  totalSupply: number;
}

export interface GetContractBalanceRequest {
  token: string;
  address: string;
}

export interface GetContractBalanceResponse {
  balance: number;
}

export interface SendContractContractTransferRequest {
  token: string;
  from: string;
  to: string;
  amount: number;
}

export interface SendContractTransferResponse {
  txHash: string;
}

export interface ContractServiceClient {
  getContractDecimal(request: GetContractDecimalRequest): Observable<GetContractDecimalResponse>;

  getContractTotalSupply(request: GetContractTotalSupplyRequest): Observable<GetContractTotalSupplyResponse>;

  getContractBalance(request: GetContractBalanceRequest): Observable<GetContractBalanceResponse>;

  sendContractTransfer(request: SendContractContractTransferRequest): Observable<SendContractTransferResponse>;
}

export interface ContractServiceController {
  getContractDecimal(
    request: GetContractDecimalRequest,
  ): Promise<GetContractDecimalResponse> | Observable<GetContractDecimalResponse> | GetContractDecimalResponse;

  getContractTotalSupply(
    request: GetContractTotalSupplyRequest,
  ):
    | Promise<GetContractTotalSupplyResponse>
    | Observable<GetContractTotalSupplyResponse>
    | GetContractTotalSupplyResponse;

  getContractBalance(
    request: GetContractBalanceRequest,
  ): Promise<GetContractBalanceResponse> | Observable<GetContractBalanceResponse> | GetContractBalanceResponse;

  sendContractTransfer(
    request: SendContractContractTransferRequest,
  ): Promise<SendContractTransferResponse> | Observable<SendContractTransferResponse> | SendContractTransferResponse;
}

export function ContractServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "getContractDecimal",
      "getContractTotalSupply",
      "getContractBalance",
      "sendContractTransfer",
    ];
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
