import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError, tap } from 'rxjs/operators';
import { Post } from "./post.model";

let searchParams = new HttpParams();
searchParams = searchParams.append('print', 'pretty');
searchParams = searchParams.append('custom', 'key');

@Injectable({ providedIn: 'root' })
export class PostService {
    private urlBase = 'https://curso-angular-36237-default-rtdb.firebaseio.com/';
    error = new Subject<string>();

    headers = {
        headers: new HttpHeaders({
            'Custom-Header': 'hola'
        }),
        params: searchParams
    };

    constructor(private http: HttpClient) { }

    // creteNewPost(data: Post) {
    //     return this.http.post<{ name: string }>(`${this.urlBase}posts.json`, data);
    // }

    creteNewPost(data: Post) {
        this.http.post<{ name: string }>(`${this.urlBase}posts.json`, data,
            {
                observe: 'response',
            })
            .subscribe(resp => {
                console.log(resp.body)
                //return resp;
            }, error => this.error.next(error.error.error));
    }

    getPosts() {
        return this.http.get<{ [key: string]: Post }>(`${this.urlBase}posts.json`, this.headers)
            .pipe(
                map(respData => {
                    const postsArray: Post[] = [];
                    for (const key in respData) {
                        if (respData.hasOwnProperty(key))
                            postsArray.push({ ...respData[key], id: key });
                    }
                    return postsArray;
                }),
                catchError(errorResp => {
                    return throwError(errorResp);
                })
            );
    }

    deletePosts() {
        return this.http.delete(`${this.urlBase}posts.json`,
            {
                observe: 'events',
                responseType: 'text'
            })
            .pipe(tap(event => {
                console.log(event);
                if (event.type === HttpEventType.Response)
                    console.log(event.body)
            }))
    }
}