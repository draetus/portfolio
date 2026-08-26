# Arca — Sistema de Relatórios de Rotas e Vendas de Passagens

> Texto de apoio para portfólio. Contém uma versão curta (estilo resumo/LinkedIn) e uma versão detalhada (case study). Nenhum trecho de código-fonte é reproduzido — apenas descrição de arquitetura, papel e decisões técnicas.

---

## Resumo curto

Atuei como **desenvolvedor backend** do Arca, um sistema de relatórios e dashboards de vendas de passagens e rotas para o setor de **transporte rodoviário intermunicipal**, construído em **Java/Spring Boot** com frontend em **React**. O maior desafio técnico do projeto foi integrar e consultar **múltiplas fontes de dados simultaneamente** (bases operacionais e de vendas distintas), o que exigiu trabalho de **otimização de queries** para consultas agregadas de relatórios com bom desempenho. Também contribuí pontualmente no frontend, dando suporte ao time responsável pela interface.

---

## Case study detalhado

### Visão geral

O Arca é um sistema de relatórios e dashboards voltado para o setor de transporte rodoviário intermunicipal, consolidando dados de **vendas de passagens**, **rotas**, **operadoras** e **fechamento financeiro** em visões analíticas (dashboards de vendas, financeiro e indicadores operacionais).

### Meu papel

Atuei como desenvolvedor backend, integrando um time responsável pela evolução do sistema. Contribuí também pontualmente no frontend (React), dando suporte ao desenvolvedor responsável pela interface.

### Arquitetura e stack técnico

- Java, Spring Boot, Spring Data JPA, Spring Security (JWT)
- Frontend em React
- Múltiplas bases de dados relacionais (PostgreSQL) integradas na mesma aplicação, cada uma isolada por contexto de domínio
- AWS SDK para armazenamento de arquivos (S3)
- ModelMapper para conversão entre camadas, OpenCSV para exportação de dados

### Principal desafio técnico: múltiplas fontes de dados e otimização de queries

O sistema precisava consultar e cruzar informações vindas de **bases de dados distintas** (dados operacionais de rotas e viagens, dados de vendas e dados locais/financeiros), cada uma configurada como um datasource independente dentro da mesma aplicação Spring Boot, com pool de conexões, `EntityManager` e `TransactionManager` próprios para cada contexto.

Isso trouxe desafios de:

- **Otimização de queries analíticas** para os dashboards de vendas e financeiro — relatórios agregados por rota, operadora, produto e período, exigindo consultas nativas otimizadas para lidar com volume de dados sem comprometer o tempo de resposta
- **Gestão de conexões concorrentes** entre múltiplas bases, dimensionando pools de conexão (HikariCP) para suportar acesso simultâneo sem gargalos
- **Modelagem de acesso a dados isolado por domínio**, mantendo cada fonte de dados com seu próprio contexto transacional dentro da mesma aplicação

Essa experiência aprofundou meu conhecimento prático em **otimização de consultas SQL**, **controle de concorrência em banco de dados** e **configuração de múltiplos datasources** em aplicações Spring — temas que hoje abordo com uma bagagem bem mais madura do que na época do projeto.

### Módulos do sistema

- **Sales** — vendas de passagens, rotas, produtos, operadoras e dashboards de vendas
- **Local/Financeiro** — fechamento financeiro e vendas consolidadas por dia, operadora e rota
- **App Motorista** — gestão de viagens e estado de viagem, integrado ao aplicativo do motorista
