import { Component } from "@angular/core";

@Component({
selector:'app-heroe',
templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    public nombre:string = 'IronMan';
    public edad:number = 45;

    get nombreCapitalizado():string
     {return this.nombre.toUpperCase();}

    // set cambiaNombre(value:string) 
    //  {this.nombre = value;}

    ObtenerNombre():string{
        return `${this.nombre} - ${this.edad}`
    }

    CambiarNombre(): void {
        this.nombre = 'SpiderMan';
    }

    CambiarEdad(): void {
        this.edad = 30;
    }
}