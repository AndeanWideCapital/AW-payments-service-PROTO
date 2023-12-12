/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { UserInstance, WalletInstance } from "./commons";
import { Empty } from "./google/protobuf/empty";

export interface UsersQuery {
  search?: string | undefined;
  username?: string | undefined;
  email?: string | undefined;
  role?: string | undefined;
  active?: boolean | undefined;
  skip?: number | undefined;
  limit?: number | undefined;
}

export interface InternalUserInstance {
  id: string;
  username: string;
  email: string;
  roles: string[];
  isActive: boolean;
  password: string;
  emailVerifiedAt: string;
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  passwordRecoveryToken: string;
  wallets: WalletInstance[];
  createdAt: string;
  updatedAt: string;
}

export interface UserList {
  data: UserInstance[];
  count: number;
  skip: number;
  limit: number;
}

export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
  role?: string | undefined;
}

export interface GetUserRequest {
  id?: string | undefined;
  username?: string | undefined;
  email?: string | undefined;
  clientId?: string | undefined;
}

export interface SetPasswordRequest {
  id: string;
  password: string;
}

export interface GenerateClientSecretResponse {
  clientSecret: string;
}

export interface ClientIdResponse {
  clientId: string;
}

export interface RegisteRefreshTokenRequest {
  id: string;
  refreshToken: string;
}

export interface RevokeRefreshTokenRequest {
  id: string;
}

export interface UserIsActiveRequest {
  id: string;
}

export interface UserIsActiveResponse {
  isActive: boolean;
}

export interface UpdateUserRequest {
  id: string;
  username?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  emailVerifiedAt?: string | undefined;
  passwordRecoveryToken?: string | undefined;
}

export interface UserServiceClient {
  getUsers(request: UsersQuery): Observable<UserList>;

  createUser(request: CreateUserRequest): Observable<UserInstance>;

  getUser(request: GetUserRequest): Observable<UserInstance>;

  deactivateUser(request: GetUserRequest): Observable<UserInstance>;

  activateUser(request: GetUserRequest): Observable<UserInstance>;

  setPassword(request: SetPasswordRequest): Observable<UserInstance>;

  generateClientSecret(request: GetUserRequest): Observable<GenerateClientSecretResponse>;

  getClientId(request: GetUserRequest): Observable<ClientIdResponse>;

  registerRefreshToken(request: RegisteRefreshTokenRequest): Observable<UserInstance>;

  revokeRefreshToken(request: RevokeRefreshTokenRequest): Observable<UserInstance>;

  getInternalUserMessage(request: GetUserRequest): Observable<InternalUserInstance>;

  seedAdminUser(request: Empty): Observable<UserInstance>;

  userIsActive(request: UserIsActiveRequest): Observable<UserIsActiveResponse>;

  updateUser(request: UpdateUserRequest): Observable<UserInstance>;
}

export interface UserServiceController {
  getUsers(request: UsersQuery): Promise<UserList> | Observable<UserList> | UserList;

  createUser(request: CreateUserRequest): Promise<UserInstance> | Observable<UserInstance> | UserInstance;

  getUser(request: GetUserRequest): Promise<UserInstance> | Observable<UserInstance> | UserInstance;

  deactivateUser(request: GetUserRequest): Promise<UserInstance> | Observable<UserInstance> | UserInstance;

  activateUser(request: GetUserRequest): Promise<UserInstance> | Observable<UserInstance> | UserInstance;

  setPassword(request: SetPasswordRequest): Promise<UserInstance> | Observable<UserInstance> | UserInstance;

  generateClientSecret(
    request: GetUserRequest,
  ): Promise<GenerateClientSecretResponse> | Observable<GenerateClientSecretResponse> | GenerateClientSecretResponse;

  getClientId(request: GetUserRequest): Promise<ClientIdResponse> | Observable<ClientIdResponse> | ClientIdResponse;

  registerRefreshToken(
    request: RegisteRefreshTokenRequest,
  ): Promise<UserInstance> | Observable<UserInstance> | UserInstance;

  revokeRefreshToken(
    request: RevokeRefreshTokenRequest,
  ): Promise<UserInstance> | Observable<UserInstance> | UserInstance;

  getInternalUserMessage(
    request: GetUserRequest,
  ): Promise<InternalUserInstance> | Observable<InternalUserInstance> | InternalUserInstance;

  seedAdminUser(request: Empty): Promise<UserInstance> | Observable<UserInstance> | UserInstance;

  userIsActive(
    request: UserIsActiveRequest,
  ): Promise<UserIsActiveResponse> | Observable<UserIsActiveResponse> | UserIsActiveResponse;

  updateUser(request: UpdateUserRequest): Promise<UserInstance> | Observable<UserInstance> | UserInstance;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "getUsers",
      "createUser",
      "getUser",
      "deactivateUser",
      "activateUser",
      "setPassword",
      "generateClientSecret",
      "getClientId",
      "registerRefreshToken",
      "revokeRefreshToken",
      "getInternalUserMessage",
      "seedAdminUser",
      "userIsActive",
      "updateUser",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";
