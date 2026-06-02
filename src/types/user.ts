export interface User {
    _id: string;
    username: string;
    email: string;
    groups: string[];
    invitations: string[];
    createdAt: Date;
    updatedAt: Date;
}