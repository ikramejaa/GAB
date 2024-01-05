import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  currentDateTime: string = '';

  ngOnInit(): void {
    // Obtenir la date et l'heure actuelles
    const currentDateTimeObj = new Date();

    // Formater la date et l'heure
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false // Utiliser le format 24 heures
    };

    this.currentDateTime = currentDateTimeObj.toLocaleDateString('fr-FR', options);
  }

}
