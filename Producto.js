export class Producto {
    // Propiedades
    title  = "";
    description = "";
    price ;
    thumbnail = "";
    code = "";
    stock = "";
    id ;
  
    // Métodos
    constructor(ID,title, description ="",price,thumbnail,code,stock){
        this.title  = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.id = ID;
    }

  }


  export class ProductManager{
     IDN;
     productos = [];
     constructor(){
        IDN=0;
     }
     addProduct(title, description ="",price,thumbnail,code,stock) {
        IDN ++;
        const prod = new Producto(IDN,title, description ="",price,thumbnail,code,stock);
        this.productos.push(prod);
     }
     getProducts(){
        return this.productos;
     }
     getProductById(id){
        let prodEn;
        for(prod of productos){
            if (prod.ID === id){
                prodEn = prod;
            }
        }
        this.productos.forEach()
        if (!prodEn) {
            console.log("Error no se encontro el ID")
        }
        return prodEn;
     }
    }


