
export interface MovieDataArray {
    movieId:string,
    name:string,
    imageUrl:string,
}

export interface MovieResponse {
    emsId:        string;
    emsVersionId: string;
    name:         string;
    posterImage:  Image;
}

export interface Image {
    url: string;
}


