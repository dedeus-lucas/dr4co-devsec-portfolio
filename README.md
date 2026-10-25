# ⚡ SHIELD PROTOCOL // CYBERSECURITY ARCHITECTURE (SYS.v2)

![Status](https://img.shields.io/badge/STATUS-OPERATIONAL-00f0ff?style=for-the-badge&logo=cloudflare)
![License](https://img.shields.io/badge/LICENSE-MIT-purple?style=for-the-badge)
![DevSecOps](https://img.shields.io/badge/DEVSECOPS-ENFORCED-00ff88?style=for-the-badge&logo=githubactions&logoColor=white)
![Build](https://img.shields.io/badge/BUILD-VITE-646CFF?style=for-the-badge&logo=vite)
![Focus](https://img.shields.io/badge/FOCUS-SECURITY%20ENGINEERING%20%7C%20DEVSECOPS%20%7C%20RED%20TEAM-green?style=for-the-badge)

[ 🌐 Language Selection / Seleção de Idioma ]
* English: [Jump to English Documentation](#english-documentation)
* Português: [Ir para a Documentação em Português](#documentação-em-português)

---

## ENGLISH DOCUMENTATION

### Overview
Shield Protocol is a specialized, production-ready technical portfolio and interface engineered for cybersecurity operations, offensive adversary emulation, and defensive system architecture. Built upon a Tactical Military Retro-Cyberpunk design system (HUD telemetry, isolation barriers, and volatile memory buffers), it is optimized for sub-millisecond responsiveness, zero-overhead asset delivery, and resilient critical infrastructure patterns.

### Core Security Capabilities
- Cybersecurity Engineering: Resilient distributed systems architecture, enterprise threat modeling, RESTful API hardening, and defense-in-depth enforcement.
- DevSecOps & Pipeline Hardening: Automated CI/CD security gates integrating SAST (Semgrep), SCA (Snyk), Secret Scanning (TruffleHog), and container image vulnerability audits.
- Active Security & Cryptography: Applied cryptographic controls in transit and at rest (AES-256-GCM / BCrypt), in-memory RAM payload isolation, and zero-disk data persistence.
- Offensive Security & Red Team: Penetration testing fundamentals, OWASP Top 10 vulnerability mitigation, adversary emulation, and tactical automation via Python and Linux internals.

### Technical Architecture
- DevSecOps & Security Enforcement: Automated GitHub Actions pipeline running SAST (Semgrep), Secret Scanning (TruffleHog), SCA/Dependency Audits (`npm audit`), and code quality enforcement.
- Build Tooling: Vite for instant Hot Module Replacement (HMR) and tree-shaken static compilation.
- Kinetic & Animation Engine: GSAP ScrollTrigger for pinned horizontal inspection galleries and Lenis for 60 FPS inertial smooth scrolling.
- HUD & Telemetry Overlay: Dynamic offensive Java/Security code stream illuminated by a pure CSS3 spotlight sweep mask.
- Decoupled i18n Architecture: Custom zero-overhead JavaScript engine for instant runtime switching between pt-BR and en-US dictionaries.
- Tactical Design System: Matte glassmorphism, deep obsidian background (#07090e), neon cyan accents (#00f0ff), HUD coordinate brackets, and strict mobile-first viewport scaling.

### Repository Structure

```text
Shield-Protocol/
├── .github/
│   └── workflows/
│       └── devsecops-ci.yml
├── public/
│   ├── assets/
│   │   └── images/
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   └── optimize-images.mjs
├── src/
│   ├── scripts/
│   │   ├── cursor.js
│   │   ├── footer-year.js
│   │   ├── hud-background.js
│   │   ├── i18n.js
│   │   ├── lenis.js
│   │   ├── manifesto.js
│   │   ├── navbar.js
│   │   └── projects.js
│   ├── styles/
│   │   ├── contact.css
│   │   ├── cursor.css
│   │   ├── hero.css
│   │   ├── journey.css
│   │   ├── manifesto.css
│   │   ├── navbar.css
│   │   ├── projects.css
│   │   ├── reset.css
│   │   ├── services.css
│   │   └── variables.css
│   └── main.js
├── .prettierrc
├── .prettierignore
├── index.html
├── vite.config.js
├── package.json
├── LICENSE
└── README.md
```

### Local Development & Setup
1. Clone the repository:

```bash
git clone https://github.com/dedeus-lucas/shield-protocol.git
cd shield-protocol
```

2. Install project dependencies:

```bash
npm install
```

3. Launch local development server:

```bash
npm run dev
```

4. Access local instance:

```bash
http://localhost:3000
```

### Production Build & Deployment
To generate the production-ready distribution package:
npm run build

The compiled artifacts will be output to the /dist directory.

### License
Distributed under the MIT License. See LICENSE for full terms and conditions.

---

## DOCUMENTAÇÃO EM PORTUGUÊS

### Visão Geral
O Shield Protocol é uma interface e portfólio técnico de alto nível, desenvolvido para demonstrar competências práticas em engenharia de segurança cibernética, operações de Red Team e arquitetura defensiva de sistemas. Construído sob uma direção visual Retro-Cyberpunk Tática Militar (telemetria em HUD, malhas de contenção e buffers voláteis), a aplicação prioriza zero overhead de execução, renderização veloz e princípios de resiliência aplicados a infraestruturas críticas.

### Pilares de Atuação em Segurança
- Engenharia de Cibersegurança: Arquitetura de sistemas resilientes, modelagem de ameaças corporativas, proteção ativa de APIs RESTful e aplicação de defesa em profundidade.
- DevSecOps & Blindagem de Pipelines: Automação de esteiras CI/CD seguras com análise estática de código (SAST via Semgrep), análise de composição de software (SCA via Snyk), detecção de segredos (TruffleHog) e auditoria de contêineres Docker.
- Segurança Ativa & Criptografia: Implementação de algoritmos criptográficos robustos (AES-256-GCM / BCrypt), injeção segura de segredos em memória RAM volátil e mitigação de persistência não autorizada em disco.
- Segurança Ofensiva & Red Team: Fundamentos de testes de intrusão (Pentest), mitigação dos vetores do OWASP Top 10, simulação de adversários e automação de scripts táticos em Python e ambiente Linux.

### Arquitetura & Engenharia Técnica
- Esteira DevSecOps Ativa: Pipeline automatizado no GitHub Actions com SAST (Semgrep), detecção de segredos (TruffleHog), auditoria de dependências (`npm audit`) e validação de qualidade de código.
- Ferramental de Build: Vite com compilação estática otimizada, bundling enxuto e Hot Module Replacement (HMR) instantâneo.
- Camada Cinética & Animações: GSAP ScrollTrigger para pinning e rolagem horizontal na galeria de projetos e motor Lenis para rolagem inercial suave a 60 FPS.
- Telemetria & HUD Dinâmico: Overlay com fluxo de código Java/Offensive iluminado por feixe de varredura tático utilizando CSS3 puro (Spotlight Masking).
- Internacionalização Nativa (i18n): Motor nativo e desacoplado em JavaScript para comutação dinâmica de dicionário (pt-BR / en-US) sem impacto no desempenho.
- Sistema Visual (Design System): Glassmorphism fosco, paleta Obsidian Charcoal com realces em Neon Cyan (#00f0ff), cantoneiras táticas em HUD e responsividade mobile-first rigorosa.

### Estrutura do Repositório

```text
Shield-Protocol/
├── .github/
│   └── workflows/
│       └── devsecops-ci.yml
├── public/
│   ├── assets/
│   │   └── images/
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   └── optimize-images.mjs
├── src/
│   ├── scripts/
│   │   ├── cursor.js
│   │   ├── footer-year.js
│   │   ├── hud-background.js
│   │   ├── i18n.js
│   │   ├── lenis.js
│   │   ├── manifesto.js
│   │   ├── navbar.js
│   │   └── projects.js
│   ├── styles/
│   │   ├── contact.css
│   │   ├── cursor.css
│   │   ├── hero.css
│   │   ├── journey.css
│   │   ├── manifesto.css
│   │   ├── navbar.css
│   │   ├── projects.css
│   │   ├── reset.css
│   │   ├── services.css
│   │   └── variables.css
│   └── main.js
├── .prettierrc
├── .prettierignore
├── index.html
├── vite.config.js
├── package.json
├── LICENSE
└── README.md
```

### Execução Local & Configuração
1. Clonar o repositório oficial:

```bash
git clone https://github.com/dedeus-lucas/shield-protocol.git
cd shield-protocol
```

2. Instalar as dependências do projeto:

```bash
npm install
```

3. Iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acessar a aplicação no navegador:

```bash
http://localhost:3000
```

### Compilação para Produção (Build)
Para gerar o pacote estático otimizado para deploy:
npm run build

Os arquivos finais compilados serão gerados no diretório /dist.

### Licença
Este projeto é distribuído sob os termos da licença MIT. Consulte o arquivo LICENSE para obter os termos integrais.

---

<p align="center">
  <b>SHIELD PROTOCOL &copy; 2024 - 2026 // CYBERSECURITY ARCHITECTURE & RED OPS</b>
</p>