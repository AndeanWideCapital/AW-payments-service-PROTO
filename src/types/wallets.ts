/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { BalanceInstance, NetworkInstance, WalletInstance } from "./commons";

export interface CreateWalletRequest {
  userId: string;
  mnemonicPhraseId: string;
  networkType: string;
}

export interface GetWalletRequest {
  id?: string | undefined;
  userId?: string | undefined;
}

export interface GetWalletResponse {
  id: string;
  userId: string;
  address: string;
  network?: NetworkInstance | undefined;
  createdAt: string;
  updatedAt: string;
}

export interface GetInternalMessageWalletResponse {
  id: string;
  userId: string;
  address: string;
  publicKey: string;
  privateKey: string;
}

export interface GetWalletsResponse {
  data: WalletInstance[];
  count: number;
  skip: number;
  limit: number;
}

export interface FilterWalletsRequest {
  userId?: string | undefined;
  networkId?: string | undefined;
  address?: string | undefined;
  networkType?: string | undefined;
}

export interface QueryWallets {
  userId?: string | undefined;
  networkId?: string | undefined;
  address?: string | undefined;
  networkType?: string | undefined;
  skip?: number | undefined;
  limit?: number | undefined;
}

export interface GetBalanceByUserRequest {
  userId: string;
}

export interface BalanceResponse {
  data: BalanceInstance[];
}

export interface GetBalanceByNetworkRequest {
  userId: string;
  networkType: string;
}

export interface GetBalanceByTokenRequest {
  userId: string;
  networkType: string;
  token: string;
}

export interface TransferRequest {
  from: string;
  to: string;
  amount: string;
  token: string;
  networkType: string;
}

export interface TransferResponse {
  txHash: string;
}

export interface getTransfersRequest {
  userId?: string | undefined;
  networkType?: string | undefined;
}

export interface getTransferRequest {
  txHash: string;
}

export interface WalletsServiceClient {
  createWallet(request: CreateWalletRequest): Observable<WalletInstance>;

  getWallet(request: GetWalletRequest): Observable<GetWalletResponse>;

  getWallets(request: QueryWallets): Observable<GetWalletsResponse>;

  getInternalMessageWallet(request: GetWalletRequest): Observable<GetInternalMessageWalletResponse>;

  filterWallets(request: FilterWalletsRequest): Observable<GetWalletsResponse>;

  getBalanceByUser(request: GetBalanceByUserRequest): Observable<BalanceResponse>;

  getBalancesByNetwork(request: GetBalanceByNetworkRequest): Observable<BalanceResponse>;

  getBalanceByToken(request: GetBalanceByTokenRequest): Observable<BalanceInstance>;

  transfer(request: TransferRequest): Observable<TransferResponse>;
}

export interface WalletsServiceController {
  createWallet(request: CreateWalletRequest): Promise<WalletInstance> | Observable<WalletInstance> | WalletInstance;

  getWallet(request: GetWalletRequest): Promise<GetWalletResponse> | Observable<GetWalletResponse> | GetWalletResponse;

  getWallets(request: QueryWallets): Promise<GetWalletsResponse> | Observable<GetWalletsResponse> | GetWalletsResponse;

  getInternalMessageWallet(
    request: GetWalletRequest,
  ):
    | Promise<GetInternalMessageWalletResponse>
    | Observable<GetInternalMessageWalletResponse>
    | GetInternalMessageWalletResponse;

  filterWallets(
    request: FilterWalletsRequest,
  ): Promise<GetWalletsResponse> | Observable<GetWalletsResponse> | GetWalletsResponse;

  getBalanceByUser(
    request: GetBalanceByUserRequest,
  ): Promise<BalanceResponse> | Observable<BalanceResponse> | BalanceResponse;

  getBalancesByNetwork(
    request: GetBalanceByNetworkRequest,
  ): Promise<BalanceResponse> | Observable<BalanceResponse> | BalanceResponse;

  getBalanceByToken(
    request: GetBalanceByTokenRequest,
  ): Promise<BalanceInstance> | Observable<BalanceInstance> | BalanceInstance;

  transfer(request: TransferRequest): Promise<TransferResponse> | Observable<TransferResponse> | TransferResponse;
}

export function WalletsServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "createWallet",
      "getWallet",
      "getWallets",
      "getInternalMessageWallet",
      "filterWallets",
      "getBalanceByUser",
      "getBalancesByNetwork",
      "getBalanceByToken",
      "transfer",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("WalletsService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("WalletsService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const WALLETS_SERVICE_NAME = "WalletsService";
