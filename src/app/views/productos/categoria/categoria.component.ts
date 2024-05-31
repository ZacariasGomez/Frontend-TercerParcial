import { NgStyle,CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, 
  FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, 
  TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective} from '@coreui/angular';

  import { CategoriaModel } from '../models/categoria.model';
  import { CategoriaService } from '../services/categoria.service';

  @Component({

  selector: 'app-categoria',

  standalone: true,

  imports: [RowComponent,CommonModule, ColComponent,CardComponent,
    CardHeaderComponent, CardBodyComponent,FormControlDirective, FormDirective, 
    FormLabelDirective, FormSelectDirective, ButtonDirective, TableActiveDirective, 
    TableColorDirective, TableDirective, TextColorDirective,FormsModule, ReactiveFormsModule,NgStyle],

  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  listaCategorias : CategoriaModel[] = [];
  categoriaModelo : CategoriaModel = new CategoriaModel();
  /**
   *
   */
  constructor(private categoriaService: CategoriaService) {

    this.getCategorias();

  }

  getCategorias(){
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

 
  agregarCategoria(){
    this.categoriaService.agregarCategoria(this.categoriaModelo).subscribe({
      next : (respuesta) => {
          console.log("Se guardo exitosamente",respuesta);
          this.getCategorias();
          this.categoriaModelo = new CategoriaModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  eliminarCategoria(producto: CategoriaModel){
    console.log("itema para eliminar", producto);
    this.categoriaService.eliminarCategoria(producto._id).subscribe({
      next : (respuesta) => {
          console.log("Se elimino exitosamente",respuesta);
          this.getCategorias();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  verCategoria(categoria: CategoriaModel){
    this.categoriaModelo = categoria;
  }

  editarCategoria(){
    this.categoriaService.editarCategoria(this.categoriaModelo).subscribe({
      next : (respuesta) => {
          console.log("Se edito exitosamente",respuesta);
          this.getCategorias();
          this.categoriaModelo = new CategoriaModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  guardarCategoria(){
    console.log(this.categoriaModelo);
    if (this.categoriaModelo._id == '') {
      console.log("guardar", this.categoriaModelo);
      this.agregarCategoria();
    } else {
      console.log("editar", this.categoriaModelo);
      this.editarCategoria();
    }
  }
}
