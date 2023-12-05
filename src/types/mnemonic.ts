/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { MnemonicPhraseInstance } from "./commons";
import { Empty } from "./google/protobuf/empty";

export interface GeneratePhraseResponse {
  mnemonicPhrase: string;
}

export interface RegisterMnemonicPhraseRequest {
  userId: string;
  mnemonicPhrase: string;
}

export interface RegisterMnemonicPhraseResponse {
  id: string;
  userId: string;
  mnemonicPhrase: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetMnemonicPhraseListRequest {
  userId: string;
  skip: number;
  limit: number;
}

export interface GetMnenomicPhraseRequest {
  id: string;
}

export interface GetMnemonicPhraseListResponse {
  data: MnemonicPhraseInstance[];
  total: number;
  skip: number;
  limit: number;
}

export interface SeedMnemonicPhraseRequest {
  userId: string;
}

export interface MnemonicServiceClient {
  generateMnemonicPhrase(request: Empty): Observable<GeneratePhraseResponse>;

  registerMnemonicPhrase(request: RegisterMnemonicPhraseRequest): Observable<RegisterMnemonicPhraseResponse>;

  getMnemonicPhraseList(request: GetMnemonicPhraseListRequest): Observable<GetMnemonicPhraseListResponse>;

  getMnemonicPhrase(request: GetMnenomicPhraseRequest): Observable<MnemonicPhraseInstance>;

  getLatestMnemonicPhrase(request: Empty): Observable<MnemonicPhraseInstance>;

  seedMnemonicPhrase(request: SeedMnemonicPhraseRequest): Observable<RegisterMnemonicPhraseResponse>;
}

export interface MnemonicServiceController {
  generateMnemonicPhrase(
    request: Empty,
  ): Promise<GeneratePhraseResponse> | Observable<GeneratePhraseResponse> | GeneratePhraseResponse;

  registerMnemonicPhrase(
    request: RegisterMnemonicPhraseRequest,
  ):
    | Promise<RegisterMnemonicPhraseResponse>
    | Observable<RegisterMnemonicPhraseResponse>
    | RegisterMnemonicPhraseResponse;

  getMnemonicPhraseList(
    request: GetMnemonicPhraseListRequest,
  ): Promise<GetMnemonicPhraseListResponse> | Observable<GetMnemonicPhraseListResponse> | GetMnemonicPhraseListResponse;

  getMnemonicPhrase(
    request: GetMnenomicPhraseRequest,
  ): Promise<MnemonicPhraseInstance> | Observable<MnemonicPhraseInstance> | MnemonicPhraseInstance;

  getLatestMnemonicPhrase(
    request: Empty,
  ): Promise<MnemonicPhraseInstance> | Observable<MnemonicPhraseInstance> | MnemonicPhraseInstance;

  seedMnemonicPhrase(
    request: SeedMnemonicPhraseRequest,
  ):
    | Promise<RegisterMnemonicPhraseResponse>
    | Observable<RegisterMnemonicPhraseResponse>
    | RegisterMnemonicPhraseResponse;
}

export function MnemonicServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "generateMnemonicPhrase",
      "registerMnemonicPhrase",
      "getMnemonicPhraseList",
      "getMnemonicPhrase",
      "getLatestMnemonicPhrase",
      "seedMnemonicPhrase",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("MnemonicService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("MnemonicService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const MNEMONIC_SERVICE_NAME = "MnemonicService";
