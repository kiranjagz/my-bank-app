
  export interface Account {
      idNumber: string;
      availableBalance: number;
      totalBalance: number;
      accountType: string;
  }

  export interface AccountData {
      accounts: Account[];
      message: string;
      notificationMessage: string;
  }


