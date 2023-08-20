import { Component, Input, OnInit } from "@angular/core";
import { SharedModule } from "../../shared.module";
import { TransactionDetail } from "../../models/data.model";

@Component({
  selector: "app-result",
  standalone: true,
  imports: [SharedModule],
  templateUrl: "./result.component.html",
  styles: [],
})
export class ResultComponent implements OnInit {
  @Input() transactionDetail: TransactionDetail;
  result = new Map();

  ngOnInit(): void {
    // this.showResult()
  }

  showResult(t: TransactionDetail) {
    // this.result = [];
    this.transactionDetail = t;
    const { events } = this.transactionDetail;
    events.forEach((event) => {
      const eventResult = new Map();
      const { members, eventName } = event;
      members.forEach((member) => {
        eventResult.set(member.memberId, {
          amount: member.amount,
          originalAmtOwed: member.actualContribution,
          name: member.memberName,
          isOwed: member.actualContribution > 0,
          amountOwed: member.actualContribution,
          owingMembers: new Map(),
        });
      });
      this.result.set(event.eventId, {
        eventName,
        eventResult
      });
    });
    for (let eventKey of this.result.keys()) {
      const {eventResult} = this.result.get(eventKey);
      for (let k of eventResult.keys()) {
        const member = eventResult.get(k);
        if (member.isOwed) {
          this.fillOwingMembers(k, member, eventResult);
        }
      }
    }
    console.log(this.result);
  }

  fillOwingMembers = (key, member, eventResult) => {
    const owingMembers = new Map();
    for (const [currentKey, currentMember] of eventResult) {
      if (
        key !== currentKey &&
        member.amountOwed !== 0 &&
        currentMember.amountOwed !== 0
      ) {
        if (member.amountOwed >= -currentMember.amountOwed) {
          owingMembers.set(currentKey, {
            member: currentMember.name,
            owedAmount: currentMember.amountOwed,
          });
          member.amountOwed -= -currentMember.amountOwed;
          currentMember.amountOwed = 0;
        } else {
          owingMembers.set(currentKey, {
            member: currentMember.name,
            owedAmount: -member.amountOwed,
          });
          currentMember.amountOwed = -(
            member.amountOwed - currentMember.amountOwed
          );
          member.amountOwed = 0;
        }
      }
    }
    member.owingMembers = owingMembers;
  };
}
