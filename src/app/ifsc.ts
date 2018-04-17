export interface UserDetails {
    or_id: number;
    new_id: number;
    name: string;
}

export interface EventDetails {
    or_id: number;
    new_id: number;
    event_name: string;
    event_desc: string;
    users_desc: {
        id: number;
        name: string;
        amount_cont: number;
    };
    event_date: string;
}
