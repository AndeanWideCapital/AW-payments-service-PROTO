/* eslint-disable */

export interface NetworkInstance {
  id: string;
  name: string;
  description?: string | undefined;
  symbol: string;
  isActive: boolean;
  assets: NetworkAssetInstance[];
}

export interface NetworkAssetInstance {
  fullname: string;
  name: string;
  originAddress?: string | undefined;
  originEnergyLimit?: number | undefined;
  contractAddress: string;
  codeHash?: string | undefined;
  base58Address?: string | undefined;
  abi?: NetworkAssetInstance_ABIInstance | undefined;
}

export interface NetworkAssetInstance_ABIInstance {
  entrys: NetworkAssetInstance_ABIInstance_Entry[];
}

export interface NetworkAssetInstance_ABIInstance_Input {
  name: string;
  type: string;
  /** Solo cuando es usado en eventos */
  indexed: boolean;
}

export interface NetworkAssetInstance_ABIInstance_Output {
  /** Opcional, puede no ser utilizado */
  name: string;
  type: string;
}

export interface NetworkAssetInstance_ABIInstance_Entry {
  type: string;
  /** Solo para Eventos y Funciones */
  name: string;
  inputs: NetworkAssetInstance_ABIInstance_Input[];
  /** Solo para Funciones */
  outputs: NetworkAssetInstance_ABIInstance_Output[];
  /** Solo para Constructor y Funciones */
  stateMutability: string;
}

export interface MnemonicPhraseInstance {
  id: string;
  userId: string;
  mnemonicPhrase?: string | undefined;
  createdAt: string;
  updatedAt: string;
}

export interface WalletInstance {
  id: string;
  address: string;
  network?: NetworkInstance | undefined;
}

export interface AuthUserInstance {
  id: string;
  username: string;
  email: string;
  roles: string[];
  wallets: WalletInstance[];
  emailVerifiedAt: string;
  scope: string;
}

export interface UserInstance {
  id: string;
  username: string;
  email: string;
  roles: string[];
  isActive: boolean;
  wallets: WalletInstance[];
  createdAt: string;
  updatedAt: string;
}

export interface GeneralMessageResponse {
  message: string;
}

export interface BalanceInstance {
  userId: string;
  address: string;
  networkId: string;
  networkSymbol: string;
  token: string;
  balance: string;
  decimals: string;
  rawBalance: string;
}

export interface AccountsInstance {
  id: string;
  bitsoAccountId: string;
  userId: string;
  accountNumber: string;
  accountOwnerName: string;
  address?: AccountsInstance_AddressInstance | undefined;
  bankName: string;
  routingNumber: string;
  last4?: string | undefined;
  isActive: boolean;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}

export interface AccountsInstance_AddressInstance {
  city?: string | undefined;
  country?: string | undefined;
  postalCode?: string | undefined;
  state?: string | undefined;
  streetLine1?: string | undefined;
  streetLine2?: string | undefined;
}

export interface BitsoBankAccountInstance {
  id: string;
  bankName: string;
  last4: string;
  accountOwnerName: string;
}

export interface WithdrawalIntance {
  id?: string | undefined;
  sequentialId: number;
  bitsoId: string;
  user?: WithdrawalIntance_User | undefined;
  bitsoRequest?: WithdrawalIntance_BitsoRequest | undefined;
  bitsoResponse?: WithdrawalIntance_BitsoResponse | undefined;
  status?: string | undefined;
  receivingAccount?: WithdrawalIntance_ReceivingAccount | undefined;
  currency?: string | undefined;
  method?: string | undefined;
  protocol?: string | undefined;
  amount?: string | undefined;
  fee?: string | undefined;
  total?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}

export interface WithdrawalIntance_User {
  id: string;
  username: string;
  email: string;
  roles: string[];
}

export interface WithdrawalIntance_BitsoRequest {
  amount: string;
  asset: string;
  currency: string;
  externalAccountId: string;
  method: string;
  network: string;
  originId: string;
  protocol: string;
  onBehalfOfCustomerId: string;
  wireMessage?: string | undefined;
}

export interface WithdrawalIntance_BitsoResponse {
  wid?: string | undefined;
  status?: string | undefined;
  createdAt?: string | undefined;
  currency?: string | undefined;
  method?: string | undefined;
  methodName?: string | undefined;
  amount?: string | undefined;
  asset?: string | undefined;
  network?: string | undefined;
  protocol?: string | undefined;
  integration?: string | undefined;
  details?: WithdrawalIntance_BitsoResponse_Details | undefined;
}

export interface WithdrawalIntance_BitsoResponse_Details {
  originId?: string | undefined;
}

export interface WithdrawalIntance_ReceivingAccount {
  id: string;
  userId?: string | undefined;
  bitsoAccountId?: string | undefined;
  bankName?: string | undefined;
  last4?: string | undefined;
  accountOwnerName?: string | undefined;
}
