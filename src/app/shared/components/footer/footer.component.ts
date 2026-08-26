import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAVIGATION } from '../../../core/constants/navigation';
import { CONTACT_INFO } from '../../../core/constants/contact-info';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  readonly navLinks = NAVIGATION;
  readonly contact = CONTACT_INFO;
  readonly currentYear = new Date().getFullYear();
}
