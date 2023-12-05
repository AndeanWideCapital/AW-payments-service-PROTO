/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { AccountsInstance, BitsoBankAccountInstance } from "./commons";
import { Empty } from "./google/protobuf/empty";

export interface CreateAccountRequest {
  userId: string;
  accountNumber: string;
  accountOwnerName: string;
  address?: CreateAccountRequest_Address | undefined;
  bankName: string;
  routingNumber: string;
}

export interface CreateAccountRequest_Address {
  city?: string | undefined;
  country?: string | undefined;
  postalCode?: string | undefined;
  state?: string | undefined;
  streetLine1?: string | undefined;
  streetLine2?: string | undefined;
}

export interface GetAccountsRequest {
  search?: string | undefined;
  userId?: string | undefined;
  city?: string | undefined;
  country?: string | undefined;
  bankName?: string | undefined;
  skip?: number | undefined;
  limit?: number | undefined;
}

export interface GetAccountsResponse {
  data: AccountsInstance[];
  count: number;
  skip: number;
  limit: number;
}

export interface GetAccountRequest {
  id: string;
  userId?: string | undefined;
}

export interface BitsoBankAccountsResponse {
  accounts: BitsoBankAccountInstance[];
}

export interface BitsoBankAccountRequest {
  id: string;
}

export interface FetchAndCreateBitsoBankAccountRequest {
  id: string;
  userId: string;
}

export interface AccountServiceClient {
  createAccount(request: CreateAccountRequest): Observable<AccountsInstance>;

  getAccounts(request: GetAccountsRequest): Observable<GetAccountsResponse>;

  getAccount(request: GetAccountRequest): Observable<AccountsInstance>;

  activateAccount(request: GetAccountRequest): Observable<AccountsInstance>;

  deactivateAccount(request: GetAccountRequest): Observable<AccountsInstance>;

  getBitsoAccounts(request: Empty): Observable<BitsoBankAccountsResponse>;

  getBistoAccount(request: BitsoBankAccountRequest): Observable<BitsoBankAccountInstance>;

  fetchAndCreateBitsoAccount(request: FetchAndCreateBitsoBankAccountRequest): Observable<BitsoBankAccountInstance>;
}

export interface AccountServiceController {
  createAccount(
    request: CreateAccountRequest,
  ): Promise<AccountsInstance> | Observable<AccountsInstance> | AccountsInstance;

  getAccounts(
    request: GetAccountsRequest,
  ): Promise<GetAccountsResponse> | Observable<GetAccountsResponse> | GetAccountsResponse;

  getAccount(request: GetAccountRequest): Promise<AccountsInstance> | Observable<AccountsInstance> | AccountsInstance;

  activateAccount(
    request: GetAccountRequest,
  ): Promise<AccountsInstance> | Observable<AccountsInstance> | AccountsInstance;

  deactivateAccount(
    request: GetAccountRequest,
  ): Promise<AccountsInstance> | Observable<AccountsInstance> | AccountsInstance;

  getBitsoAccounts(
    request: Empty,
  ): Promise<BitsoBankAccountsResponse> | Observable<BitsoBankAccountsResponse> | BitsoBankAccountsResponse;

  getBistoAccount(
    request: BitsoBankAccountRequest,
  ): Promise<BitsoBankAccountInstance> | Observable<BitsoBankAccountInstance> | BitsoBankAccountInstance;

  fetchAndCreateBitsoAccount(
    request: FetchAndCreateBitsoBankAccountRequest,
  ): Promise<BitsoBankAccountInstance> | Observable<BitsoBankAccountInstance> | BitsoBankAccountInstance;
}

export function AccountServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "createAccount",
      "getAccounts",
      "getAccount",
      "activateAccount",
      "deactivateAccount",
      "getBitsoAccounts",
      "getBistoAccount",
      "fetchAndCreateBitsoAccount",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AccountService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AccountService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const ACCOUNT_SERVICE_NAME = "AccountService";
