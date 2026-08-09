import { Injectable } from '@angular/core';
import { ExperienceItem } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private readonly experienceItems: ExperienceItem[] = [
    {
      company: 'PalmSoft Tecnologia',
      role: 'Technical Lead | Backend Engineer',
      location: 'Remote, Brazil',
      period: 'Sep 2022 — Present',
      description: 'Leading backend architecture, delivery and mentoring for Java microservices used in payments, logistics and customer portals.',
      highlights: [
        'Led a 6-engineer backend team, defining architecture, technical direction and delivery consistency.',
        'Delivered scalable Java + Spring Boot microservices in AWS using Docker and CI/CD pipelines.',
        'Partnered directly with clients to turn business requirements into resilient backend solutions.',
        'Improved team efficiency through code reviews, mentoring and architecture guidance.',
        'Built integrations with internal and third-party systems using SQL and NoSQL databases.'
      ]
    },
    {
      company: 'SulAmérica',
      role: 'Java Backend Engineer',
      location: 'Remote, Brazil',
      period: 'Aug 2021 — Present',
      description: 'Contributing to high-performance backend services and the migration of critical modules into a modern microservices architecture.',
      highlights: [
        'Developed and maintained Java Spring Boot services supporting 50k+ daily requests.',
        'Designed REST APIs for internal and external systems, reducing integration bottlenecks by 15–20%.',
        'Improved production stability by troubleshooting critical issues and reducing recurring incidents by 30–40%.',
        'Built integrations across distributed systems with third-party and internal services.',
        'Worked in Agile teams using Jira and Confluence to deliver iterative improvements.'
      ]
    },
    {
      company: 'Mid-Level Backend Developer',
      role: 'Java Backend Engineer',
      location: 'Remote, Brazil',
      period: 'Aug 2021 — Aug 2022',
      description: 'Delivered backend solutions across multiple business domains, focusing on service quality and scalable architecture.',
      highlights: [
        'Developed Java and Spring Boot services for rental, food, transport and marketplace systems.',
        'Acted as the primary developer after the architecture phase, driving implementation and stability.',
        'Adapted system architecture to evolving business requirements while preserving delivery pace.',
        'Supported frontend integration using React, ensuring strong API contracts and efficient handoffs.'
      ]
    },
    {
      company: 'Junior Back-End Developer',
      role: 'Java Backend Developer',
      location: 'Remote, Brazil',
      period: 'Mar 2019 — Aug 2021',
      description: 'Built backend applications using Java and Spring Boot while improving delivery reliability with automation and testing.',
      highlights: [
        'Developed backend systems across multiple projects using Java, Spring Boot and relational databases.',
        'Implemented CI/CD pipelines to improve deployment reliability and release confidence.',
        'Contributed to React frontend work when required, strengthening backend-to-frontend integrations.'
      ]
    }
  ];

  getExperiences(): ExperienceItem[] {
    return this.experienceItems;
  }
}
