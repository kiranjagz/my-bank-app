export interface AccountModel {
  idNumber: string;
  availableBalance: number;
  totalBalance: number;
  overDraftBalance: number;
  accountType: string;
  interestEarned?: number;
  interestRate?: number;
}
