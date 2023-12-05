/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { GeneralMessageResponse, NetworkAssetInstance, NetworkInstance } from "./commons";
import { Empty } from "./google/protobuf/empty";

export interface CreateNetworkRequest {
  name: string;
  description?: string | undefined;
  symbol: string;
}

export interface GetNetworksRequest {
  name?: string | undefined;
  active?: boolean | undefined;
  skip?: number | undefined;
  limit?: number | undefined;
}

export interface GetNetworksResponse {
  data: NetworkInstance[];
  count: number;
  skip: number;
  limit: number;
}

export interface GetNetworkRequest {
  id: string;
}

export interface CreateAssetNetworkRequest {
  networkId: string;
  fullname: string;
  contractAddress: string;
}

export interface DeleteAssetNetworkRequest {
  networkId: string;
  contractAddress: string;
}

export interface GetAssetNetworkDetailsRequest {
  networkId: string;
  contractAddress: string;
}

export interface SearchNetworkRequest {
  id?: string | undefined;
  name?: string | undefined;
  symbol?: string | undefined;
}

export interface NetworksServiceClient {
  getNetworks(request: GetNetworksRequest): Observable<GetNetworksResponse>;

  createNetwork(request: CreateNetworkRequest): Observable<NetworkInstance>;

  getNetwork(request: GetNetworkRequest): Observable<NetworkInstance>;

  activateNetwork(request: GetNetworkRequest): Observable<NetworkInstance>;

  deactivateNetwork(request: GetNetworkRequest): Observable<NetworkInstance>;

  createAssetNetwork(request: CreateAssetNetworkRequest): Observable<NetworkInstance>;

  deleteAssetNetwork(request: DeleteAssetNetworkRequest): Observable<NetworkInstance>;

  getAssetNetworkDetails(request: GetAssetNetworkDetailsRequest): Observable<NetworkAssetInstance>;

  searchNetwork(request: SearchNetworkRequest): Observable<NetworkInstance>;

  seedNetworks(request: Empty): Observable<GeneralMessageResponse>;
}

export interface NetworksServiceController {
  getNetworks(
    request: GetNetworksRequest,
  ): Promise<GetNetworksResponse> | Observable<GetNetworksResponse> | GetNetworksResponse;

  createNetwork(
    request: CreateNetworkRequest,
  ): Promise<NetworkInstance> | Observable<NetworkInstance> | NetworkInstance;

  getNetwork(request: GetNetworkRequest): Promise<NetworkInstance> | Observable<NetworkInstance> | NetworkInstance;

  activateNetwork(request: GetNetworkRequest): Promise<NetworkInstance> | Observable<NetworkInstance> | NetworkInstance;

  deactivateNetwork(
    request: GetNetworkRequest,
  ): Promise<NetworkInstance> | Observable<NetworkInstance> | NetworkInstance;

  createAssetNetwork(
    request: CreateAssetNetworkRequest,
  ): Promise<NetworkInstance> | Observable<NetworkInstance> | NetworkInstance;

  deleteAssetNetwork(
    request: DeleteAssetNetworkRequest,
  ): Promise<NetworkInstance> | Observable<NetworkInstance> | NetworkInstance;

  getAssetNetworkDetails(
    request: GetAssetNetworkDetailsRequest,
  ): Promise<NetworkAssetInstance> | Observable<NetworkAssetInstance> | NetworkAssetInstance;

  searchNetwork(
    request: SearchNetworkRequest,
  ): Promise<NetworkInstance> | Observable<NetworkInstance> | NetworkInstance;

  seedNetworks(
    request: Empty,
  ): Promise<GeneralMessageResponse> | Observable<GeneralMessageResponse> | GeneralMessageResponse;
}

export function NetworksServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "getNetworks",
      "createNetwork",
      "getNetwork",
      "activateNetwork",
      "deactivateNetwork",
      "createAssetNetwork",
      "deleteAssetNetwork",
      "getAssetNetworkDetails",
      "searchNetwork",
      "seedNetworks",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("NetworksService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("NetworksService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const NETWORKS_SERVICE_NAME = "NetworksService";
