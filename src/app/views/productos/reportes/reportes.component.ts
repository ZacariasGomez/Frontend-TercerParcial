import { NgStyle,CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RowComponent, ColComponent,CardComponent,
  CardHeaderComponent, CardBodyComponent,
  ButtonDirective,TableActiveDirective, 
  TableColorDirective, TableDirective} from '@coreui/angular';

  import { CategoriaModel } from '../models/categoria.model';
  import { CategoriaService } from '../services/categoria.service';
  import { ProductoModel } from '../models/producto.model';
  import { ProductoService } from '../services/producto.service';
  import { ReporteService } from '../services/reportes.service';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [RowComponent, ColComponent,CardComponent,
    CardHeaderComponent, CardBodyComponent,CommonModule,NgStyle,
    ButtonDirective,TableActiveDirective, 
    TableColorDirective, TableDirective],

  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss'
})
export class ReportesComponent {

  listaProductos : ProductoModel[] = [];
  listaCategorias: CategoriaModel[] = [];

  constructor(
    private productoService: ProductoService,
    private categoriaService:CategoriaService,
    private reporteService:ReporteService )
     { }

  getProductosCategoria(){
    
      const categoriaNombre  = (document.getElementById('filterInput') as HTMLInputElement).value.trim();
  
      if (!categoriaNombre) {
        this.listaProductos = [];
        return;
      }

    this.reporteService.getProductoPorCategoria(categoriaNombre).subscribe({
      next : (respuesta) => {
          console.log(respuesta);
          this.listaProductos = respuesta;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }


}
