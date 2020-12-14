
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'BQAyvLU54ZnNU5zDmrUiBSf3ykqVBs-yIAVBFnqc6J03B4GF58nrjoPkLMfLpHWqrZYqQeb51oq_JPpZVRnmu-mxub8Iv88VCaXvZ3fpG2eFcejEIFX_7kmGl13NeRAMLz-W4GonQCeHJ6vj96N7WFT87udB48Tn3OVt3A7lI6QfOYI3aWE6GNU30klOfAI1WQ9pIMRI7PeTVnfhWolCPxe0Q2AYvUhQqKfjytRPoS-z4TztcysiKpuELz3k6rz1XzA-CqYzerR9aEdL7SOIv1j3Ah-GKPYl2nk'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
