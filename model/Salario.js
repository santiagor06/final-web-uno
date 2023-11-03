export class Salario{
    _cantidad;
    _fecha=new Date().toLocaleDateString();

    get fecha(){
        return this._fecha
    }
    get cantidad(){
        return "$"+this._cantidad
    }
    set cantidad(cantidad){
        if(cantidad>0)this._cantidad=cantidad
    }

}