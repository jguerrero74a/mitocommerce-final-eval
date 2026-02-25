import { CategoriesFeaturedService } from '@/app/modules/category/services/categories-featured.service';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = signal(new Date().getFullYear());

  companyLinks = [
    { title: 'Sobre Nosotros', url: '/about' },
    { title: 'Información de Envío', url: '/track-order' },
    { title: 'Política de Privacidad', url: '/policy' },
    { title: 'Términos y Condiciones', url: '/terms' },
    { title: 'Contáctanos', url: '/contact' },
    { title: 'Centro de Soporte', url: '/faq' },
  ];

  socialMedia = [
    { icon: 'ri-facebook-line', url: 'https://facebook.com' },
    { icon: 'ri-twitter-x-line', url: 'https://twitter.com' },
    { icon: 'ri-dribbble-line', url: 'https://dribbble.com' },
    { icon: 'ri-instagram-line', url: 'https://instagram.com' },
  ];

  newsletterEmail = signal('');

  private categoriesFeaturedService = inject(CategoriesFeaturedService);
  categories = this.categoriesFeaturedService.categories;

  onNewsletterSubmit(): void {
    if (this.newsletterEmail()) {
      console.log(this.newsletterEmail());
    }
  }
}
