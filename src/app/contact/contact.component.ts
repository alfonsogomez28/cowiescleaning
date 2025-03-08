import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http: HttpClient) { }

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      const formData = {
        name: contactForm.value.name,
        email: contactForm.value.email,
        message: contactForm.value.message
      };
      // Handle form submission
     this.http.post('http://localhost:3000/send-email', formData).subscribe({
        next: (response) => {
          console.log('SUCCESS!', response);
          alert('Your message has been sent successfully!');
        },
        error: (error) => {
          console.log('FAILED...', error);
          alert('There was an error sending your message. Please try again later.');
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}