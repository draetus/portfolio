# HappyHelp — Rede Social de Ajuda Comunitária

> Texto de apoio para portfólio. Contém uma versão curta (estilo resumo/LinkedIn) e uma versão detalhada (case study). Nenhum trecho de código-fonte é reproduzido — apenas descrição de arquitetura, papel e decisões técnicas.

---

## Resumo curto

HappyHelp foi meu **primeiro projeto profissional**, uma rede social mobile (React + Ionic/Cordova) para conexão entre usuários que ofereciam e buscavam ajuda em suas comunidades, com backend em **Java/Spring Boot**. Comecei atuando como desenvolvedor Júnior, com apoio de um dev sênior, e depois assumi a **responsabilidade total pelo backend** do projeto. Foi meu primeiro contato prático com **cálculos de geolocalização** (busca de usuários por proximidade) e com o desenvolvimento de uma **feature de chat em tempo real**. Também contribuí pontualmente no frontend.

---

## Case study detalhado

### Visão geral

O HappyHelp é uma rede social mobile focada em conectar pessoas que precisavam de algum tipo de ajuda com pessoas dispostas a oferecê-la em suas comunidades, com recursos de perfil, geolocalização, chat, gamificação (challenges, "happy coins"), planos de assinatura e "happy places" (locais recomendados).

### Meu papel

Meu primeiro projeto profissional na empresa. Iniciei atuando como desenvolvedor Júnior, com apoio direto de um desenvolvedor sênior, e evoluí ao longo do projeto até assumir **responsabilidade total pelo backend**. Contribuí pontualmente também no frontend, como desenvolvedor secundário.

### Arquitetura e stack técnico

- **Backend**: Java, Spring Boot, Spring Data JPA, autenticação via JWT
- **Frontend**: React com Ionic/Cordova (aplicativo híbrido web, Android e iOS), Redux + Redux-Saga para gerenciamento de estado
- Comunicação em tempo real via WebSocket com protocolo STOMP
- Firebase para push notifications
- Integração com gateway de pagamento (PagSeguro) para assinaturas e planos
- Geração de relatórios e documentos (CSV, PDF, e-mail)

### Geolocalização — primeiro contato com o tema

Uma das principais features do sistema era permitir a busca de usuários e locais próximos por raio de distância. Implementei a lógica de cálculo de distância geográfica (fórmula de Haversine) diretamente em consultas ao banco de dados, permitindo filtrar e ordenar resultados por proximidade em tempo de busca. Foi meu primeiro projeto trabalhando com esse tipo de cálculo geoespacial aplicado a um produto real.

### Chat — feature em tempo real

Desenvolvi a funcionalidade de chat entre usuários utilizando **WebSocket com STOMP**, incluindo autenticação integrada ao handshake da conexão, controle de sessão/presença (eventos de login e desconexão) e histórico de mensagens paginado. Foi minha primeira experiência implementando comunicação bidirecional em tempo real em um sistema em produção.

### Outras funcionalidades do backend

- Cadastro e autenticação de usuários, preferências e perfis
- Sistema de gamificação (challenges, "happy coins" e transações associadas)
- Planos de assinatura e checkout com integração de pagamento
- Módulo de administração (moderação de usuários, denúncias, banimentos)
- Notificações push e por e-mail
