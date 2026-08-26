# Bewiki — Plataforma Modular de Serviços

> Texto de apoio para portfólio. Contém uma versão curta (estilo resumo/LinkedIn) e uma versão detalhada (case study). Nenhum trecho de código-fonte é reproduzido — apenas descrição de arquitetura, papel e decisões técnicas.

---

## Resumo curto

Atuei como **único desenvolvedor backend e Tech Lead** do Bewiki, uma plataforma backend em **Java/Spring Boot** estruturada em módulos de negócio independentes — **Becare** (agendamento médico), **Behome** (aluguel de imóveis short/long stay), **Bemarket** (marketplace de mercado), **Bemobi** (aluguel de carros), **Bepark** (estacionamento) e **Bework** (coworking). Fui responsável por toda a arquitetura backend, por mais de 15 integrações com serviços externos (pagamentos, assinatura digital, fechaduras inteligentes, notificações, geolocalização, sistemas hospitalares) e participei ativamente das decisões de infraestrutura e de arquitetura frontend. Desenvolvi ainda um serviço satélite de integração com o sistema hospitalar **Tasy**, automatizando a sincronização de cadastro médico e o processamento de orçamentos de pacientes.

---

## Case study detalhado

### Visão geral

O Bewiki é uma plataforma backend monolítica construída em Java com Spring Boot, projetada para atender múltiplos verticais de negócio através de módulos especializados dentro de uma única base de código, compartilhando autenticação, cadastro de usuários, pagamentos e infraestrutura comum.

### Meu papel

Único desenvolvedor backend e Tech Lead do projeto, responsável por:

- Todas as decisões de arquitetura backend e modelagem de dados
- Definição de infraestrutura (cloud, deploy, pipelines)
- Participação ativa em decisões de arquitetura frontend, alinhando contratos de API e fluxos entre camadas
- Condução de todas as integrações com sistemas de terceiros e parceiros de negócio

### Módulos de negócio

- **Becare** — módulo de saúde: agendamento de consultas médicas, cadastro de profissionais, planos e assinaturas
- **Behome** — hotelaria: aluguel de apartamentos em regime short stay e long stay, check-in/checkout, dashboards operacionais
- **Bemarket** — controle de mercado e compras estilo delivery, com consulta de preços e integração com fornecedores
- **Bemobi** — aluguel de veículos
- **Bepark** — gestão de estacionamento e cálculo de tempo/valor de permanência
- **Bework** — aluguel de espaços de coworking (salas de reunião, planos short/long stay)

### Arquitetura e stack técnico

- Java 11, Spring Boot, Spring Data JPA, Spring Security com autenticação JWT
- PostgreSQL, com versionamento de schema via Liquibase
- Documentação de API via OpenAPI/Swagger
- Geração de documentos e contratos (Apache POI, JODConverter)
- Armazenamento de arquivos em AWS S3
- Pipeline de CI/CD via GitLab

### Integrações externas

Mais de 15 integrações com serviços de terceiros, entre elas:

- Gateways de pagamento (cobrança recorrente, cartão de crédito, links de cobrança)
- Assinatura digital de contratos
- Fechaduras inteligentes (smart locks) para controle de acesso de hóspedes e visitantes
- Notificações via WhatsApp e push notifications (Firebase)
- Busca e validação de endereços (CEP)
- Integração com ERP/sistema de gestão hoteleira para sincronização de reservas e hóspedes
- Integração com o sistema hospitalar Tasy (detalhada abaixo)

### Integração com o sistema hospitalar Tasy

Como extensão do módulo Becare, desenvolvi um serviço satélite dedicado (Spring Boot, conectado diretamente ao banco do Tasy) responsável por:

- Sincronizar automaticamente o cadastro de médicos entre o Tasy e o Bewiki
- Detectar novos orçamentos de pacientes gerados no Tasy e processá-los automaticamente na plataforma
- Gerar links de cobrança e disparar cobrança automática quando aplicável
- Rodar como job agendado (scheduler), garantindo que os registros do Tasy fossem refletidos no Bewiki sem intervenção manual

### Desafios técnicos

- Manter um monolito coeso e organizado para 6 verticais de negócio distintas, cada uma com domínio e regras próprias, sem comprometer a manutenibilidade
- Orquestrar integrações com mais de 15 sistemas externos, cada um com particularidades de autenticação, formatos e SLAs
- Garantir sincronização confiável e idempotente entre um sistema hospitalar legado (Tasy) e a plataforma, evitando duplicidade de processamento e cobrança
