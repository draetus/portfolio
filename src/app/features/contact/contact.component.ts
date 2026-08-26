import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT_INFO } from '../../core/constants/contact-info';

interface ContactMethod {
  label: string;
  value: string;
  href: string;
  cta: string;
  external?: boolean;
  secondaryHref?: string;
  secondaryCta?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {

  readonly contactMethods: ContactMethod[] = [
    {
      label: 'LinkedIn',
      value: CONTACT_INFO.linkedinHandle,
      href: CONTACT_INFO.linkedinUrl,
      cta: 'Connect on LinkedIn',
      external: true
    },
    {
      label: 'Email',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      cta: 'Send an email'
    },
    {
      label: 'Phone',
      value: CONTACT_INFO.phoneDisplay,
      href: CONTACT_INFO.phoneHref,
      cta: 'Call',
      secondaryHref: CONTACT_INFO.whatsappUrl,
      secondaryCta: 'WhatsApp'
    }
  ];
}
