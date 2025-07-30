import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ListaClientesComponent } from "../../components/lista-clientes/lista-clientes.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, CardsComponent, FooterComponent, ListaClientesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
