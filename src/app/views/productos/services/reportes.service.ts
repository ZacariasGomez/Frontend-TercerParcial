import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductoModel } from "../models/producto.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class ReporteService {
  //url de su api (backend)
  private API_URL = 'http://localhost:8001/productos'

  constructor(private http: HttpClient) { }

  getProductoPorCategoria(nombre: string): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${this.API_URL}/productoPorCategoria/${nombre}`);
  }

}