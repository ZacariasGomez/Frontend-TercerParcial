import { NgStyle,CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl } from '@angular/forms';

import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, 
  FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, 
  TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective} from '@coreui/angular';

import { ProductoModel } from '../models/producto.model';
import { CategoriaService } from '../services/categoria.service';
import { ProductoService } from '../services/producto.service';
import { CategoriaModel } from '../models/categoria.model';
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RowComponent, ColComponent,CardComponent,
    CardHeaderComponent, CardBodyComponent,FormControlDirective, FormDirective, 
    FormLabelDirective, FormSelectDirective, ButtonDirective, TableActiveDirective, 
    TableColorDirective, TableDirective, TextColorDirective,FormsModule, ReactiveFormsModule,NgStyle,CommonModule],

  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})

export class ProductoComponent {

  listaProductos : ProductoModel[] = [];
  listaCategorias: CategoriaModel[] = [];
  productoModelo : ProductoModel = new ProductoModel();
  /**
   *
   */
  constructor(private productoService: ProductoService,private categoriaService:CategoriaService ) {
    this.getProductos();
    this.getCategoria();

  }

  getProductos(){
    this.productoService.getProducto().subscribe({
      next : (respuesta) => {
          console.log(respuesta);
          this.listaProductos = respuesta;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  getCategoria(){
    this.categoriaService.getCategoria().subscribe({
      next : (respuesta) => {
          console.log(respuesta);
          this.listaCategorias = respuesta;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
 
  agregarProducto(){
    this.productoService.agregarProducto(this.productoModelo).subscribe({
      next : (respuesta) => {
          console.log("Se guardo exitosamente",respuesta);
          this.getProductos();
          this.productoModelo = new ProductoModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  eliminarProducto(producto: ProductoModel){
    console.log("itema para eliminar", producto);
    this.productoService.eliminarProducto(producto._id).subscribe({
      next : (respuesta) => {
          console.log("Se elimino exitosamente",respuesta);
          this.getProductos();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  verProducto(producto: ProductoModel){
    this.productoModelo = producto;
  }

  editarProducto(){
    this.productoService.editarProducto(this.productoModelo).subscribe({
      next : (respuesta) => {
          console.log("Se edito exitosamente",respuesta);
          this.getProductos();
          this.productoModelo = new ProductoModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  guardarProducto(){
    console.log(this.productoModelo);
    if (this.productoModelo._id == '') {
      console.log("guardar", this.productoModelo);
      this.agregarProducto();
    } else {
      console.log("editar", this.productoModelo);
      this.editarProducto();
    }
  }
}
