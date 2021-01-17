import{ Component } from '@angular/core'
import { ClientesComponent } from '../clientes/clientes.component';

@Component({
    selector:'hello',
    templateUrl:'./hello.component.html'
})

export class HelloComponent{
    nome : string;
    clientes : Cliente[];
    constructor(){
        this.nome = 'Junior';
        let fulano = new Cliente('fulano',30);
        let cicrano = new Cliente('cicrano',28);
        let outro = new Cliente('outro',25);
        this.clientes = [fulano, cicrano,outro];
    }
}

class Cliente{
    
    constructor(
        public nome: string,
        public idade: number
    ){}
}