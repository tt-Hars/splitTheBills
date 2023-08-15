export interface MemberDetail {
  memberId: string;
  memberName: string;
}

export interface ContributionDetail extends MemberDetail {
  amount: number;
  currency: string;
  actualContribution: number;
}

export interface EventDetail {
  eventId: string;
  eventName: string;
  members: ContributionDetail[];
}

export interface TransactionDetail {
  transactionId: string;
  events: EventDetail[];
}
