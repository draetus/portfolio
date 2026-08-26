import { Injectable } from '@angular/core';
import { ProjectItem } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly projectItems: ProjectItem[] = [
    {
      slug: 'happyhelp',
      name: 'HappyHelp',
      company: 'PalmSoft Tecnologia',
      role: 'Junior Developer',
      summary: 'Mobile community help network (React + Ionic/Cordova) connecting people offering and seeking help nearby, backed by a Java/Spring Boot API. My first professional project — started as a Junior Developer supported by a senior engineer and grew into full backend ownership.',
      highlights: [
        'Implemented Haversine-based geolocation queries to search and rank users and places by proximity — first hands-on work with geospatial data.',
        'Built a real-time chat feature with WebSocket + STOMP, including connection-handshake authentication, presence tracking and paginated message history.',
        'Delivered gamification (challenges, in-app currency), subscription plans with payment checkout, and an admin moderation module.'
      ],
      stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'JWT', 'WebSocket/STOMP', 'React', 'Ionic/Cordova', 'Redux-Saga', 'Firebase'],
      featured: false
    },
    {
      slug: 'arca',
      name: 'Arca',
      company: 'PalmSoft Tecnologia',
      role: 'Mid-Level Developer',
      summary: 'Reporting and dashboard platform for intercity bus ticket sales and route management, built with Java/Spring Boot and a React frontend, consolidating sales, operations and financial data into analytics views.',
      highlights: [
        'Integrated and queried multiple independent databases (operations, sales, finance) inside a single application, each with its own connection pool, EntityManager and TransactionManager.',
        'Optimized native analytical queries for sales and financial dashboards aggregated by route, carrier, product and period.',
        'Tuned HikariCP connection pools to support concurrent access across multiple data sources without bottlenecks.'
      ],
      stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'PostgreSQL', 'AWS S3', 'React'],
      featured: false
    },
    {
      slug: 'bewiki',
      name: 'Bewiki',
      company: 'PalmSoft Tecnologia',
      role: 'Senior Developer',
      summary: 'Modular backend platform serving six independent business verticals — healthcare scheduling, short/long-stay rentals, marketplace, car rental, parking and coworking — as sole backend developer and de facto technical owner.',
      highlights: [
        'Owned backend architecture and data modeling for 6 business modules sharing common auth, billing and infrastructure.',
        'Delivered 15+ third-party integrations: payment gateways, digital signature, smart locks, WhatsApp/push notifications, address lookup and hotel PMS sync.',
        'Built a satellite service integrating with the Tasy hospital system, automating doctor-registry sync and patient budget processing via scheduled jobs.'
      ],
      stack: ['Java 11', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'PostgreSQL', 'Liquibase', 'OpenAPI/Swagger', 'AWS S3'],
      featured: false
    },
    {
      slug: 'habitat',
      name: 'Habitat',
      company: 'PalmSoft Tecnologia',
      role: 'Tech Lead',
      summary: 'Hospitality access and guest-management platform with facial check-in and smart-lock access control — my first project as Tech Lead, sole backend developer and owner of every technical decision.',
      highlights: [
        'Designed a 4-service microservices architecture (REST API, async batch processor, email sender, S3 gateway) to handle high-volume asynchronous processing.',
        'Integrated smart locks (Tuya) and facial recognition (Segware, Azure Face API) for a facial check-in flow, plus Stays PMS synchronization.',
        'Led infrastructure sizing and cost decisions on AWS EC2, learning to balance architectural ambition against real team capacity.'
      ],
      stack: ['Java', 'Spring Boot', 'Microservices', 'Azure Face API', 'Tuya', 'Segware', 'AWS EC2/S3', 'React', 'React Native'],
      featured: false
    },
    {
      slug: 'controle-de-acesso',
      name: 'Aegis - Access Control',
      company: 'PalmSoft Tecnologia',
      role: 'Tech Lead & Partner',
      summary: 'Founder and Technical Lead of a physical access-control integration platform connecting dozens of lock, turnstile and facial-recognition vendors behind a single configurable interface — now running with 1,000+ devices simultaneously connected in production.',
      highlights: [
        'Planned and led the product from concept, including migrating the entire client base from the previous platform (Habitat).',
        'Designed a 5-service microservices architecture, including a dedicated service isolating sensitive VPN/hardware communication from the rest of the backend.',
        'Built per-vendor fallback and retry policies for unreliable hardware (locks, turnstiles, cameras), backed by Prometheus/Micrometer monitoring.',
        'Own technical decisions plus business strategy: performance/cost trade-offs, security risk assessment, and a roadmap toward SQS/EventBridge, Kubernetes and an independent spin-off company.'
      ],
      stack: ['Java', 'Spring Boot', 'Microservices', 'Tuya', 'Hikvision', 'Segware', 'VPN', 'Prometheus', 'Micrometer', 'AWS'],
      featured: true
    },
    {
      slug: 'controlvp',
      name: 'ControlVP',
      company: 'SulAmérica',
      role: 'Mid-Level Developer',
      summary: 'Core insurance, pension and travel-insurance platform at SulAmérica with 15+ years in production — a large multi-module Java system supporting policies, claims, redemptions, billing, commissioning and regulatory compliance.',
      highlights: [
        'Work transversally across business domains (policies, claims, billing, commissioning) inside a large, highly critical legacy codebase.',
        'Contribute to technical decisions within a culture that encourages developer input beyond the formal scope of the role.',
        'Navigate and safely evolve a 15+ year-old system covering regulatory compliance (FATCA, PEP, LGPD, SUSEP) and integrations with PeopleSoft and external partners.'
      ],
      stack: ['Spring Framework', 'Hibernate', 'ActiveMQ', 'JSF/PrimeFaces', 'REST', 'SOAP', 'Oracle', 'DB2', 'JasperReports', 'Docker', 'Jenkins'],
      featured: true
    },
    {
      slug: 'seguroviagem-rest',
      name: 'Seguro Viagem REST',
      company: 'SulAmérica',
      role: 'Mid-Level Developer',
      summary: 'Satellite middleware modernizing access to SulAmérica’s travel-insurance core by exposing a modern, documented REST API that translates and forwards requests to the legacy SOAP services.',
      highlights: [
        'Led development jointly with a junior developer, working directly with senior architects on architecture decisions.',
        'Built a REST-to-SOAP translation layer with intermediate response-code validation and consistent error handling for REST consumers.',
        'Used Apache Kafka to add asynchronous variants for heavier operations (bulk policy issuance, cancellations) alongside the original synchronous flows.'
      ],
      stack: ['Spring Boot', 'Swagger/OpenAPI', 'Keycloak', 'Apache Kafka', 'REST', 'SOAP', 'BDD'],
      featured: false
    }
  ];

  getProjects(): ProjectItem[] {
    return this.projectItems;
  }
}
