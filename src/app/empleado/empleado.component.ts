import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Mensaje generado desde el archivo ts y no el html  <br> {{ numero_empleado }} <br> {{ objetc }} <br>{{ array}}</p>",
  //styleUrl: './empleado.component.css'
  //cuando solo se quiera agregar detalles y no se requiera un archivo aparte 
  styles:["p{background-color:bisque;}"]

})
export class EmpleadoComponent {
  nombre = "hola"
  numero_empleado = 1
  objetc = {"clave": "valor"}
  array = ["hola","adios"]
  private atributo = "hola"

  activate = true

  usuRegistro= true

  mensaje = "nada"

  addNombre(value:String){

  }

  // setAlertUsu(){ 
  //   this.mensaje = "ahora es algo"
  // }
  getAtributo(){
    return this.atributo;
  }

  getRegsitroUsuario(){
    this.usuRegistro=false
    
  }

  setusuarioRegistro(event:Event){
    //alert(event.target)

    if((<HTMLInputElement>event.target).value=="si"){
      this.mensaje="Usuario registrado"
    }else{
      this.mensaje="No hay registro"
    }
  }

  // cambioNombre(event:Event){
  //   this.nombre=(<HTMLInputElement>event.target).value;
  // }
}
