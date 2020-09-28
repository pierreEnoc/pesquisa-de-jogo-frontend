
export type RecordsResponse = {
    content: RecordItem[];
    totalPages: number;
}

export type RecordItem = {

    id: number;
    moment: string;
    name: string;
    age: number;
    gameTitle: StringConstructor;
    gamePlatform: Platform;
    genreName: string;

}

export type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';