import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = 'DatingApp';
  url : string = "https://localhost:5001/api/users"
  users : any;
  
  
  ngOnInit(): void {
    this.http.get(this.url).subscribe({
      next: response => this.users = response,
      error : error => console.log(error),
      complete: () => console.log('Request completed successfully')
    })
  }
}
