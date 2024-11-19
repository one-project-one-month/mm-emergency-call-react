export enum UserType {
    SERVICE_PROVIDER = "Service Provider",
    NORMAL_USER = "Normal User",
}

export type FilterByRole = "All" | UserType

export interface User {
    id: number;
    name: string;
    emailAddress: string;
    address: string;
    role: UserType;
}