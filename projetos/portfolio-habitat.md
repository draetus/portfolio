# Habitat — Plataforma de Gestão e Acesso para Hotelaria

> Texto de apoio para portfólio. Contém uma versão curta (estilo resumo/LinkedIn) e uma versão detalhada (case study). Nenhum trecho de código-fonte é reproduzido — apenas descrição de arquitetura, papel e decisões técnicas.

---

## Resumo curto

No Habitat, meu primeiro projeto como **Tech Lead**, fui responsável por **todas as decisões técnicas e por todo o desenvolvimento do backend**, além de atuar na organização e gestão do time (front-end, infraestrutura) e em decisões conjuntas de arquitetura, design e custo de infraestrutura. O sistema atende o setor de hotelaria, com **check-in facial** (Azure Face API), **controle de acesso por fechaduras inteligentes** (Tuya) e reconhecimento facial em áreas comuns (Segware), integração com PMS (**Stays**) e arquitetura de **microsserviços** desenhada para suportar processamento assíncrono em larga escala. Também liderei decisões de dimensionamento e custo de infraestrutura em AWS.

---

## Case study detalhado

### Visão geral

O Habitat é uma plataforma voltada para o setor de **hotelaria**, cobrindo desde o check-in do hóspede (com validação facial) até o controle de acesso físico às unidades e áreas comuns via fechaduras inteligentes. O sistema foi desenhado para escalar para uma demanda alta e majoritariamente assíncrona (processamento de senhas de acesso, notificações, sincronizações com fornecedores externos).

Havia integração planejada com o Airbnb, que não chegou a ser implementada por questões contratuais com a plataforma — mas o sistema segue em produção com integração ativa com o **Stays** (PMS de gestão hoteleira).

### Meu papel

Meu primeiro projeto como **Tech Lead**. Fui o único desenvolvedor backend do projeto, responsável por todas as decisões técnicas do backend, e também participei ativamente da organização e gestão do time, com decisões tomadas em conjunto com as equipes de front-end e infraestrutura — desde a organização do design e seu impacto em performance/usabilidade, até o dimensionamento e custo das máquinas de produção.

Equipe do projeto: eu (Tech Lead e único dev backend), 2 desenvolvedores front-end, 1 responsável por infraestrutura, 1 gestor de projeto e 1 PO.

### Arquitetura: microsserviços

O backend foi dividido em 4 serviços independentes (Spring Boot):

- **restcommunication** — API REST principal, responsável pela comunicação com os front-ends e com terceiros
- **batchprocessor** — motor de processamento assíncrono, responsável por sincronizar senhas de acesso, notificações e integrações externas via um sistema de tarefas persistidas em banco (fila própria, com status e parâmetros), processadas por jobs agendados
- **emailsender** — serviço dedicado ao envio de e-mails transacionais
- **s3communication** — serviço dedicado à comunicação com armazenamento de arquivos (AWS S3)

A decisão de separar em microsserviços foi motivada pela expectativa de uma demanda alta, com grande parte do processamento sendo assíncrono (geração e sincronização de senhas de fechaduras, verificação facial, notificações). Em retrospecto, essa divisão trouxe uma sobrecarga de manutenção significativa por eu ser o único responsável pelo backend, cuidando de múltiplos serviços implantados de forma independente — um aprendizado importante sobre dimensionar a complexidade arquitetural de acordo com o tamanho do time e a demanda real, e não apenas com a demanda projetada.

Para a fila de processamento assíncrono, a decisão foi usar uma fila própria baseada em tabela no banco de dados, em vez de um message broker dedicado (RabbitMQ, SQS, etc.) — decisão consciente de custo, já que o cliente não via necessidade desse investimento diante da demanda real do momento. O planejamento de evolução da arquitetura já previa um gatilho concreto para introduzir uma tecnologia de mensageria dedicada (a partir de um determinado volume de unidades conectadas), mas a demanda se estabilizou antes de atingir esse patamar, e o cenário de acesso de maior volume acabou migrando para o projeto seguinte.

### Controle de acesso e check-in facial

- **Tuya** — integração com fechaduras inteligentes instaladas nos apartamentos/unidades, usada para geração e sincronização de senhas de acesso
- **Segware** — integração de reconhecimento facial para controle de acesso às áreas comuns do empreendimento
- **Mibo** — integração planejada para uma futura funcionalidade de acesso, que não chegou a ir para produção
- **Azure Face API** — usada para validação de detecção facial (confirmar se uma imagem enviada contém um rosto) como parte do fluxo de check-in

### Integrações com PMS/channel manager

- **Stays** — integração com sistema de gestão hoteleira (PMS), em produção e em uso até hoje
- **Lodgify** — avaliada, mas não implementada por decisão de custo
- **Airbnb** — integração planejada, não implementada por impedimento contratual com a plataforma

### Front-ends

- **userfront** (React) — front-end de uso interno para administradores e proprietários
- **facialfront** (React) — front-end voltado ao hóspede final, incluindo o fluxo de check-in facial
- **app-admin** (React Native / Expo) — versão mobile do userfront

A stack do front-end mobile (Expo/React Native) foi definida com base na experiência prévia dos desenvolvedores de front-end já presentes no time.

### Infraestrutura e decisões de custo

- Deploy em instâncias AWS EC2, com ambientes segregados de desenvolvimento, QA e produção
- Dimensionamento das instâncias definido a partir da análise de consumo real de memória e processamento de cada serviço
- Planejamento de escalabilidade orientado por gatilhos de demanda predefinidos (ex.: a partir de um determinado número de unidades conectadas, evoluir para uma tecnologia de mensageria dedicada), evitando investimento antecipado em infraestrutura sem necessidade comprovada

### Principais aprendizados como Tech Lead

- Balancear ambição arquitetural (microsserviços para escalar) com a capacidade real de manutenção do time — importante lição sobre não superdimensionar a arquitetura em relação à demanda e aos recursos disponíveis
- Tomada de decisão técnica compartilhada com times de front-end e infraestrutura, indo além do código: design, usabilidade e custo de infraestrutura como parte das decisões de engenharia
