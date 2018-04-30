export interface UserDetails {
    or_id: number;
    new_id: number;
    name: string;
}

export interface RegisteredUserDetails{
    id: number;
    user_name: string;
    user_password: string;
    name: string;
}

export interface AsscUsers{
    user_id: number;
    grp_assc: [groupDetails];
    associated_users: [UserDetails];
}

export interface groupDetails{
    group_id:number;
    group_name: string;
}

export interface AmtsAsscUsers{
    user_id:number;
    total_amt_spent: number;
}

export interface PrevEventsHistory{
    user_id: number;
    event_id: number;
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
        amount_cont: number;
        user_actve: boolean;
    }];
}
