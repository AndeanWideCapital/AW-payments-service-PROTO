/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { AuthUserInstance } from "./commons";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface AccessTokenResponse {
  accessToken: string;
}

export interface LogoutResponse {
  message: string;
}

export interface GenerateAccessTokenRequest {
  clientId: string;
  clientSecret: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface AuthServiceClient {
  login(request: LoginRequest): Observable<LoginResponse>;

  generateAccessToken(request: GenerateAccessTokenRequest): Observable<AccessTokenResponse>;

  refreshToken(request: RefreshTokenRequest): Observable<AccessTokenResponse>;

  logout(request: AuthUserInstance): Observable<LogoutResponse>;
}

export interface AuthServiceController {
  login(request: LoginRequest): Promise<LoginResponse> | Observable<LoginResponse> | LoginResponse;

  generateAccessToken(
    request: GenerateAccessTokenRequest,
  ): Promise<AccessTokenResponse> | Observable<AccessTokenResponse> | AccessTokenResponse;

  refreshToken(
    request: RefreshTokenRequest,
  ): Promise<AccessTokenResponse> | Observable<AccessTokenResponse> | AccessTokenResponse;

  logout(request: AuthUserInstance): Promise<LogoutResponse> | Observable<LogoutResponse> | LogoutResponse;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["login", "generateAccessToken", "refreshToken", "logout"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTH_SERVICE_NAME = "AuthService";
