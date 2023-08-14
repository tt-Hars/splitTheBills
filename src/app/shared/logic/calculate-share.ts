export interface MemberDetail {
  memberId: string,
  memberName: string
}

export interface ContributionDetail extends MemberDetail {
  amount: number,
  currency: string
}

export interface EventDetail {
  eventId: string;
  eventName: string;
  membersContribution: ContributionDetail[]
}

export interface TransactionDetail extends EventDetail {
  transactionId: string;
}

export class CalculateShare {
  eventDetails: EventDetail[] = []
  constructor(eventDetails: EventDetail[]){
    this.eventDetails = eventDetails
  }

  calculateStandaloneEventShare() {

  }
}