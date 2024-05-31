import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   iconComponent: { name: 'cil-speedometer' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
    ///------------------------------RECETA INICIO
    {
      title: true,
      name: 'REGISTROS'
    },
    {
      name: 'Menu',
      url: '/producto',
      iconComponent: { name: 'cil-puzzle' },
      children: [
        {
          name: 'Producto',
          url: '/producto/producto',
          icon: 'nav-icon-bullet'
        },
        {
          name: 'Categoria',
          url: '/producto/categoria',
          icon: 'nav-icon-bullet'
        },
        {
          name: 'Reportes',
          url: '/producto/reportes',
          icon: 'nav-icon-bullet'
        },
      ]
    },
    ///------------------------------RECETA FINAL
 
  
];
