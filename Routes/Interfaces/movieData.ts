
export interface MovieDataArray {
    movieId:string,
    name:string,
    imageUrl:string,
}

export interface MovieDetailResponse{
    name:string,
    synopsis:string,
    directedBy:string,
    releaseDate: string,
    posterImage:Image,
    trailer: video
}
export interface MovieDetailData{
    name:string,
    synopsis:string,
    directedBy:string,
    releaseDate: string,
    posterImage:string,
    trailer: string
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

export interface video {
    url: string
}


