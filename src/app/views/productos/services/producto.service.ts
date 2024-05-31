import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductoModel } from "../models/producto.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class ProductoService {
  //url de su api (backend)
  private API_URL = 'http://localhost:8001/productos'

  constructor(private http: HttpClient) {
  }

  getProducto (): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${this.API_URL}/leerProducto`);
  }

  agregarProducto(producto: ProductoModel) : Observable<ProductoModel> {
    return this.http.post<ProductoModel>(`${this.API_URL}/crearProducto`, producto);
  }

  editarProducto(producto: ProductoModel) : Observable<ProductoModel> {
    return this.http.put<ProductoModel>(`${this.API_URL}/editarProducto/${producto._id}`, producto);
  }

  eliminarProducto(idProducto : string) : Observable<ProductoModel> {
    console.log(idProducto);
    // return this.http.delete<RecetaModel>(`${this.API_URL}/eliminar/${idReceta}`);
    return this.http.delete<ProductoModel>(this.API_URL+'/eliminarProducto/'+idProducto);

  }
}