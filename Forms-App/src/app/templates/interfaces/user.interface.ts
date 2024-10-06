export interface User {
    name: string;
    games: Games[]
}

export interface Games {
    id: number;
    nameGame: string
}