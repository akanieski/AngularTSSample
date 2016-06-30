export class IQueryResult {
    artists: IArtistQueryResult;
}
export class IArtistQueryResult {
    href: string;
    items: IArtistResult[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}
export class IArtistResult {
    href: string;
    id: string;
    images: { height: number, width: number, url: string }[];
    followers: { href: string, total: number };
    external_urls: { spotify: string };
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

export class SpotifyService {
    static $inject: string[] = ['$http', '$q'];
    spotifyUrl: string = "https://api.spotify.com/v1/search";

    constructor(
        private $http: ng.IHttpService,
        private $q: ng.IQService) {
        
    }

    search(query: string) {
        return this.$q((resolve, reject) => {
            if (query) {
                this.$http
                    .get<IQueryResult>(`${this.spotifyUrl}?q=${query}&type=artist`)
                    .then((response) => resolve(response.data),
                    (response) => reject(response.data));
            } else {
                resolve(null);
            }
        });
    }
}