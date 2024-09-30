export interface ApiResponse<T> {
    message?: string;
    data: T;
}

export interface User {
    name: string,
    email: string
}