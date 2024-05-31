import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoriaModel } from "../models/categoria.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class CategoriaService {
  //url de su api (backend)
  private API_URL = 'http://localhost:8001/categorias'

  constructor(private http: HttpClient) {
  }
  getCategoria (): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(`${this.API_URL}/leerCategoria`);
  }

  agregarCategoria(categoria: CategoriaModel) : Observable<CategoriaModel> {
    return this.http.post<CategoriaModel>(`${this.API_URL}/crearCategoria`, categoria);
  }

  editarCategoria(categoria: CategoriaModel) : Observable<CategoriaModel> {
    return this.http.put<CategoriaModel>(`${this.API_URL}/editarCategoria/${categoria._id}`, categoria);
  }

  eliminarCategoria(categoria : string) : Observable<CategoriaModel> {
    console.log(categoria);
    // return this.http.delete<RecetaModel>(`${this.API_URL}/eliminar/${idReceta}`);
    return this.http.delete<CategoriaModel>(this.API_URL+'/eliminarCategoria/'+categoria);

  }
}