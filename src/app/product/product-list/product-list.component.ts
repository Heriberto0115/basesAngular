import { Component } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="Saludo en variable";
  imageWidth:number=50;
  imageMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:IProducto[]=[
    {
      "productoID":1,
      "Modelo":'A4',
      "Descripcion":"2 puertas familiar",
      "year":"Marzo 30 2024",
      "Precio": 500000,
      "Marca":"AUDI",
      "Color":"Negro",
      "imagenUrl":"https://wallpapercave.com/wp/wp1849317.jpg"
    },
    {
      "productoID":2,
      "Modelo":"Mazda 3",
      "Descripcion":"4 puertas familiar",
      "year":"Diciembre 25 2024",
      "Precio":300000,
      "Marca":"KIA",
      "Color":"Plata",
      "imagenUrl":"https://media-assets.mazda.eu/image/upload/q_auto,f_auto/mazdaes/globalassets/cars/2024-mazda3-hatchback/showroom/230307_673_378_slidinggallerystatic_large_m3.jpg?rnd=498ba7"
    },
    {
      "productoID":3,
      "Modelo":"GOLF",
      "Descripcion":"2 puertas familiar",
      "year":"Enero 3 2024",
      "Precio":400000,
      "Marca":"VOLKSWAGEN",
      "Color":"ROJO",
      "imagenUrl":"https://img.remediosdigitales.com/5d0856/golf-gti/1366_2000.jpeg"
    }
  ]

}
