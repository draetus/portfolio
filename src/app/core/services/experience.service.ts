import { Injectable } from '@angular/core';
import { ExperienceItem } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private readonly experienceItems: ExperienceItem[] = [
    {
      company: 'PalmSoft Tecnologia',
      role: 'Backend Developer',
      location: 'Remote, Brazil',
      period: 'Mar 2019 — Present',
      description: 'Backend developer across five different products, taking on progressively more ownership of architecture, integrations and delivery over time — while staying hands-on with code throughout.',
      progression: ['Junior Developer', 'Mid-Level Developer', 'Senior Developer', 'Tech Lead', 'Tech Lead & Partner'],
      highlights: [
        'Delivered backend services for 5 production systems: a mobile community app, a sales and reporting platform, a 6-vertical modular platform, a hospitality access-control system, and a physical access-control platform I co-founded.',
        'Built 20+ third-party integrations across payment gateways, smart locks, facial recognition, hospital systems and hotel PMS platforms.',
        'Designed microservices architectures for high-volume asynchronous processing (batch jobs, retries, per-vendor fallback policies) across two access-control platforms.',
        'Responsibilities grew organically with the projects — my day-to-day focus has stayed on backend architecture and hands-on development.'
      ]
    },
    {
      company: 'SulAmérica',
      role: 'Backend Developer',
      location: 'Remote, Brazil',
      period: 'Aug 2021 — Present',
      description: 'Backend developer on ControlVP, SulAmérica\'s 15+ year core insurance and travel-insurance platform, plus Seguro Viagem REST, a satellite modernization project built alongside it.',
      highlights: [
        'Work across policies, claims, billing and commissioning inside a large, highly regulated legacy Java codebase (Spring, Hibernate, JSF/PrimeFaces, REST/SOAP, Oracle, DB2).',
        'Built a REST-to-SOAP translation layer and Kafka-based asynchronous flows for Seguro Viagem REST, a middleware modernizing access to the legacy travel-insurance services.',
        'Contribute to technical decisions within a culture that encourages developers to speak up beyond the formal scope of the role.'
      ]
    }
  ];

  getExperiences(): ExperienceItem[] {
    return this.experienceItems;
  }
}
