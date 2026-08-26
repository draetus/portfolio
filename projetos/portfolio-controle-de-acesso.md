# Controle de Acesso — Plataforma Integradora de Sistemas de Acesso

> Texto de apoio para portfólio. Contém uma versão curta (estilo resumo/LinkedIn) e um case study extenso — este é um dos projetos foco do portfólio. Nenhum trecho de código-fonte é reproduzido — apenas descrição de arquitetura, papel e decisões técnicas/de negócio.

---

## Resumo curto

Sou **sócio e Líder Técnico** do Controle de Acesso, uma plataforma que atua como **super integradora de sistemas de controle de acesso físico** — conectando dezenas de fornecedores de fechaduras, catracas e câmeras de reconhecimento facial em uma única interface configurável, tanto no comportamento do backend quanto na experiência do usuário. Planejei o projeto desde a concepção, incluindo a migração da base de clientes do meu projeto anterior (Habitat), e hoje sou o único responsável por todas as decisões técnicas e de arquitetura, além de participar ativamente de decisões de negócio, priorização, segurança e planejamento de escala. O sistema está em produção com **mais de 1.000 dispositivos conectados simultaneamente**, baixíssima incidência de suporte e alto grau de automação. O projeto tem plano de evolução para se tornar uma empresa independente.

---

## Case study detalhado

### Visão geral e origem do projeto

O Controle de Acesso nasceu da minha experiência liderando o backend do Habitat, meu projeto anterior. Enquanto o Habitat era focado especificamente em hotelaria, esse novo projeto foi concebido desde o início para ser uma **plataforma genérica de integração de controle de acesso**: em vez de atender apenas um segmento de mercado, o objetivo é integrar dezenas — e, no roadmap, centenas — de APIs de terceiros (fechaduras, catracas, câmeras faciais) por trás de uma camada única, altamente configurável tanto na interface quanto no comportamento do backend.

Fiz todo o planejamento do projeto desde o nascimento, incluindo o plano de migração da base de clientes do Habitat para essa nova plataforma — migração que hoje está em fase final de conclusão. O projeto tem um plano de negócio para se tornar uma **empresa independente**, com escala planejada tanto do ponto de vista técnico quanto comercial.

Hoje, sou **sócio e Líder Técnico** do projeto: todas as decisões técnicas passam por mim, e sou completamente responsável pela arquitetura, pelo backend e por boa parte das decisões de negócio ligadas à tecnologia.

### Meu papel: além do código

Diferente de projetos anteriores, aqui minha atuação vai além da arquitetura e do desenvolvimento:

- **Decisões de negócio orientadas por dados técnicos**: avaliação de trade-off entre performance e lucro esperado, análise se vale a pena desenvolver determinada funcionalidade considerando risco de negócio e retorno
- **Priorização e planejamento**: definição de prioridades de desenvolvimento e do roadmap técnico alinhado ao plano de crescimento da empresa
- **Segurança**: avaliação constante de riscos de segurança em uma plataforma que lida com controle de acesso físico de terceiros
- **Planejamento de escala** técnica e de negócio a médio/longo prazo
- **Adaptação do fluxo de trabalho da empresa** ao projeto, incluindo a introdução de cultura de boas práticas e DevOps na organização
- **Documentação abrangente**: não só do backend, mas também de negócio, frontend e infraestrutura — incluindo documentação de API pública (OpenAPI/Swagger) para permitir que o desenvolvimento do frontend evolua de forma independente do backend

### Arquitetura: microsserviços com propósito

O projeto reaproveita a estrutura de microsserviços já usada no Habitat, mas aqui a decisão faz muito mais sentido dado o roadmap de features planejadas e o objetivo de suportar centenas de integrações de forma independente e resiliente:

- **restcommunication** — API REST principal, comunicação com os front-ends e com terceiros, com documentação OpenAPI para consumo independente pelo time de frontend
- **batchprocessor** — motor de processamento assíncrono, com sistema de tarefas, retry e tratamento de erro por fornecedor (cada integração externa tem suas próprias exceções de timeout, dispositivo offline, falha de comunicação, etc.)
- **emailsender** — serviço dedicado ao envio de e-mails transacionais
- **s3communication** — serviço dedicado à comunicação com armazenamento de arquivos (S3)
- **deviceconnector** — serviço criado especificamente para **isolar a comunicação via VPN diretamente com os dispositivos físicos**, separando essa responsabilidade sensível (rede, protocolos proprietários de hardware) do restante do backend

### Confiabilidade: fallback, retry e monitoramento constante

Trabalhar com dezenas de fornecedores de hardware físico (fechaduras, câmeras, catracas) trouxe desafios reais de confiabilidade:

- **Fallbacks e políticas de retry por fornecedor**: cada integração externa (Tuya, Hikvision, Segware, Situator, Mibo, Caco, entre outros) tem tratamento de erro específico — timeouts, dispositivo offline, falha de criação de senha — com uma camada de retry controlada (número máximo de tentativas, reenvio de tarefas, bloqueio e notificação por e-mail quando o retry se esgota)
- **Fechaduras com falhas intermitentes**: parte do trabalho foi lidar com hardware que falha de forma não determinística, exigindo retry insistente e mecanismos de tolerância a falha em vez de assumir sucesso na primeira tentativa
- **Limitação de streaming de câmeras**: parte das câmeras integradas não suporta streaming de vídeo real, o que exigiu adaptar a solução para trabalhar com captura periódica de imagens (snapshots) em vez de vídeo contínuo
- **Monitoramento constante do sistema**: uso de Spring Actuator com métricas expostas via Micrometer/Prometheus, permitindo observabilidade contínua da saúde dos serviços

### Integrações de hardware e software

- **Tuya** — fechaduras inteligentes
- **Hikvision** — dispositivos de controle de acesso/câmeras
- **Segware** — reconhecimento facial para áreas comuns
- **Situator, Caco, Mibo** — fornecedores adicionais de controle de acesso, cada um com seu próprio conjunto de particularidades e tratamento de erro
- **Stays** — integração com PMS (gestão hoteleira), herdada e evoluída do projeto anterior
- **Lodgify** — avaliada
- Acesso direto a dispositivos via **VPN**, quando a API do fornecedor não é suficiente, isolado no serviço `deviceconnector`

### Front-ends

- **admin** (React) — painel para proprietários e administradores
- **portal** (React) — front-end para o hóspede final, permitindo atualizar dados e consultar reservas de forma simplificada
- **facial** (React) — front-end dedicado à captura facial do hóspede
- **mobile** (React Native) — versão mobile para administradores, com funcionalidades exclusivas do ambiente mobile, como acesso direto à câmera do dispositivo

### Escala atual e resultado

O sistema está em produção com **mais de 1.000 dispositivos conectados simultaneamente**, apresentando baixíssima incidência de chamados de suporte e alto grau de automação — reflexo direto do investimento em tratamento de erro, retry e monitoramento constante desde o início do projeto.

### Roadmap técnico planejado

O planejamento de evolução da plataforma inclui (parte dependente de liberação orçamentária ou de projetos de pesquisa):

- **Amazon SQS + Amazon EventBridge** para processamento assíncrono nativo em nuvem, transformando funcionalidades hoje síncronas (envio de e-mail, WhatsApp) em assíncronas
- **Kubernetes** para orquestração e escala automática dos serviços
- **Externalização do banco de dados** para garantir maior confiabilidade e permitir escala horizontal com múltiplos pods
- **API oficial do WhatsApp com pool de contas**, garantindo alta disponibilidade de comunicação com os usuários
- **Integração com Airbnb**, condicionada a definição contratual com a plataforma
- **Fechadura com chip próprio e ambiente de nuvem exclusivo do produto**, como projeto de pesquisa de médio/longo prazo, visando reduzir a dependência de fornecedores terceiros de hardware

### Visão de futuro

O projeto tem plano de negócio para se tornar uma **empresa independente**, com escala técnica e comercial totalmente planejada — indo além de uma plataforma interna para se consolidar como um produto próprio no mercado de controle de acesso.
