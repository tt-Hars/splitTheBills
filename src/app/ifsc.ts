export interface UserDetails {
    or_id: number;
    new_id: number;
    name: string;
}

export interface EventDetails {
    or_id: number;
    new_id: number;
    event_name: string;
    event_tot_amt: number;
    event_desc: string;
    event_date: string;
    users_desc: [{
        id: number;
        // name: string;
        amount_cont: number;
        user_actve: boolean;
    }];
    // users_desc: any;
}
