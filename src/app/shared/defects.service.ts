import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Defect } from './defect.model';
import { AppStore } from '../app-store';
import 'rxjs/add/operator/map';
import {
  ADD_DEFECTS,
  CREATE_DEFECT,
  UPDATE_DEFECT,
  DELETE_DEFECT
} from './defects.reducer';

const BASE_URL = 'http://localhost:3000/defects/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class DefectsService {
  defects$: Observable<Defect[]> = this.store.select('defects');

  constructor(
    private http: Http,
    private store: Store<AppStore>
  ) {}

  loadDefects() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({ type: ADD_DEFECTS, payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  saveDefect(defect: Defect) {
    return (defect.id) ? this.updateDefect(defect) : this.createDefect(defect);
  }

  createDefect(defect: Defect) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(defect), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: CREATE_DEFECT, payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateDefect(defect: Defect) {
    return this.http.put(`${BASE_URL}${defect.id}`, JSON.stringify(defect), HEADER)
      .subscribe(action => this.store.dispatch({ type: UPDATE_DEFECT, payload: defect }));
  }

  deleteDefect(defect: Defect) {
    return this.http.delete(`${BASE_URL}${defect.id}`)
      .subscribe(action => this.store.dispatch({ type: DELETE_DEFECT, payload: defect }));
  }
}
