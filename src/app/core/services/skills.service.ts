import { Injectable } from '@angular/core';
import { SkillCategory } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private readonly categories: SkillCategory[] = [
    {
      title: 'Programming & Backend',
      summary: 'Core backend languages and frameworks for enterprise-grade Java-based systems.',
      keywords: [
        'Java',
        'TypeScript',
        'JavaScript',
        'Spring Boot',
        'Spring Data JPA',
        'Spring Security',
        'Hibernate'
      ]
    },
    {
      title: 'API & Integration',
      summary: 'Service design skills for API-first systems, internal integrations and legacy modernization.',
      keywords: [
        'REST APIs',
        'SOAP',
        'Microservices',
        'Kafka',
        'SQS',
        'SNS'
      ]
    },
    {
      title: 'Architecture & Patterns',
      summary: 'Software architecture styles and design patterns for maintainable, scalable backend platforms.',
      keywords: [
        'Monolithic',
        'Layered Architecture',
        'Hexagonal Architecture',
        'Clean Architecture',
        'Microkernel',
        'Space-Based Architecture',
        'Cell-Based Architecture',
        'Event-Driven Architecture'
      ]
    },
    {
      title: 'Transition Architecture',
      summary: 'Migration and modernization patterns used to evolve systems without business disruption.',
      keywords: [
        'Strangler Fig',
        'Anti-Corruption Layer',
        'Change Data Capture',
        'Dark Launch',
        'Migration Patterns'
      ]
    },
    {
      title: 'Resilience & Reliability',
      summary: 'Operational resilience practices that protect services from failure and improve availability.',
      keywords: [
        'Retry',
        'Timeout',
        'Circuit Breaker',
        'Bulkhead',
        'Backup',
        'Disaster Recovery',
        'High Availability'
      ]
    },
    {
      title: 'Documentation & Quality',
      summary: 'API documentation and delivery practices that help teams release safe, well-defined software.',
      keywords: [
        'Swagger',
        'OpenAPI',
        'CI/CD',
        'Unit Testing',
        'Integration Testing',
        'Functional Testing',
        'TDD',
        'Design Patterns'
      ]
    },
    {
      title: 'Observability & Monitoring',
      summary: 'Monitoring, metrics and observability tools for production telemetry and alerting.',
      keywords: [
        'Prometheus',
        'Grafana',
        'OpenTelemetry',
        'Metrics',
        'Tracing',
        'Logging'
      ]
    },
    {
      title: 'Cloud & Deployment',
      summary: 'Modern cloud-native tooling and deployment practices that increase scalability and reliability.',
      keywords: [
        'AWS',
        'Docker',
        'Kubernetes',
        'CI/CD'
      ]
    },
    {
      title: 'Databases & Storage',
      summary: 'Relational and NoSQL storage expertise for high-throughput backend services.',
      keywords: [
        'PostgreSQL',
        'MySQL',
        'Oracle',
        'MongoDB',
        'DynamoDB'
      ]
    },
    {
      title: 'Culture & Collaboration',
      summary: 'Remote-friendly engineering culture, DevOps practices and modern collaboration methods.',
      keywords: [
        'Git',
        'GitHub',
        'GitHub Copilot',
        'Jira',
        'Confluence',
        'AI-assisted development',
        'ChatGPT',
        'Claude',
        'Gemini',
        'DevOps',
        'Zero Trust'
      ]
    }
  ];

  getCategories(): SkillCategory[] {
    return this.categories;
  }
}
