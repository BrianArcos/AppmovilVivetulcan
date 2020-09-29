import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imagen } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';


const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>( query: string ){
    query = URL + query;
    return this.http.get<T>(query);
  }

  getTodasImagenes(){
    return this.ejecutarQuery<Imagen[]>(`/galeria_establecimientos`);
  }

  getImagenesEstablecimientos( id: string ){
    return this.ejecutarQuery<Imagen[]>(`/galeria_establecimientos/${ id }`); 
  }
  
  getImagenesAtractivos( id: string ){
    return this.ejecutarQuery<Imagen[]>(`/galeria_atractivos/${ id }`); 
  }

}
