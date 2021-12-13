import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../models/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }

  public findAllSession(): Observable<Session[]> {
    return this.httpClient.get<Session[]>("http://localhost:8080/findAllSessions");
  }

  public AddSession(session: Session) {
    return this.httpClient.post<Session>("http://localhost:8080/addSession", session);
  }

  public deleteSession(session: Session) {
    return this.httpClient.get<Session>("http://localhost:8080/deleteSessionById?id=" + session.id, { responseType: 'text' as 'json' });
  }

  public getSessionById(session: Session) {
    return this.httpClient.get<Session>("http://localhost:8080/getSession?id=" + session.id);
  }

  public UpdateSession(session: Session) {
    return this.httpClient.put<Session>("http://localhost:8080/updateSession", session);
  }

}