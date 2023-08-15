import { EventDetail, TransactionDetail } from "../models/data.model";


// can be made a service??
export class CalculateShare {
  constructor() {}

  calculateAllEventsShare(eventDetails: EventDetail[]): EventDetail[] {
    const allEventsSplit = [];
    eventDetails.forEach((eventDetail) => {
      const singleEventSplit = this.calculateStandaloneEvent(eventDetail);
      allEventsSplit.push(singleEventSplit);
    });
    return allEventsSplit;
  }

  calculateStandaloneEvent(eventDetail: EventDetail): EventDetail {
    const totalAmt = eventDetail.members.reduce(
      (sum, member) => (sum += member.amount),
      0
    );
    let medianAmt = 0;

    medianAmt = Math.floor(totalAmt / eventDetail.members.length);
    return {
      ...eventDetail,
      members: eventDetail.members.map((member) => ({
        ...member,
        actualContribution: member.amount - medianAmt,
      })),
    };
  }

  calculateEventShare(transactionDetail: TransactionDetail): TransactionDetail {
    return {
      ...transactionDetail,
      events: this.calculateAllEventsShare(transactionDetail.events),
    };
  }
}
