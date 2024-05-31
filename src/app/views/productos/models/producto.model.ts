import { CategoriaModel } from "./categoria.model";

export class ProductoModel {
    _id : string = '';
    nombre : string ='';
    marca: string='';
    descripcion: string='';
    cantidad: number = 0;
    categoria: CategoriaModel;

    constructor() {
      this._id = '';
      this.nombre = '';
      this.marca = '';
      this.descripcion = '';
      this.cantidad = 0;
      this.categoria = { _id: '', nombre: '' }; // Inicializa con un objeto vacío
    }
  }
 