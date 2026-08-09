import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAVIGATION } from '../../../core/constants/navigation';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('menuContainer') menuContainer?: ElementRef<HTMLElement>;
  @ViewChild('menuToggle') menuToggle?: ElementRef<HTMLButtonElement>;

  menuItems = NAVIGATION;
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isMenuOpen) {
      return;
    }

    const target = event.target as Node;
    const clickedInsideMenu = this.menuContainer?.nativeElement.contains(target);
    const clickedToggle = this.menuToggle?.nativeElement.contains(target);

    if (!clickedInsideMenu && !clickedToggle) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeMenu();
  }
}
