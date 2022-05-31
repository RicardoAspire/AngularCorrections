export interface userHttp{
    data: Idata,
}

export interface Idata{
    id: string, 
    email: string, 
    first_name: string, 
    last_name: string, 
    avatar: string
}

export interface addUser{
    name: string, 
    email: string
}