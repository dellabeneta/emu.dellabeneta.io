```
██████╗ ███████╗████████╗██████╗  ██████╗ ██╗   ██╗ █████╗ ██╗   ██╗██╗  ████████╗
██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔═══██╗██║   ██║██╔══██╗██║   ██║██║  ╚══██╔══╝
██████╔╝█████╗     ██║   ██████╔╝██║   ██║██║   ██║███████║██║   ██║██║     ██║   
██╔══██╗██╔══╝     ██║   ██╔══██╗██║   ██║╚██╗ ██╔╝██╔══██║██║   ██║██║     ██║   
██║  ██║███████╗   ██║   ██║  ██║╚██████╔╝ ╚████╔╝ ██║  ██║╚██████╔╝███████╗██║   
╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═══╝  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝   
```

> **Emulação retro no browser. Sem instalação. Sem cadastro. Só jogar.**

[![Site](https://img.shields.io/badge/SITE-emu.dellabeneta.io-2d6e4e?style=for-the-badge&logo=googlechrome&logoColor=white)](https://emu.dellabeneta.io)
[![CI/CD](https://github.com/dellabeneta/emu.dellabeneta.io/actions/workflows/deploy-emu.yml/badge.svg)](https://github.com/dellabeneta/emu.dellabeneta.io/actions/workflows/deploy-emu.yml)
[![CDN](https://img.shields.io/badge/CDN-Cloudflare-b05a10?style=for-the-badge&logo=cloudflare&logoColor=white)](https://cloudflare.com)
[![Host](https://img.shields.io/badge/HOST-Amazon_S3-aa6600?style=for-the-badge&logo=amazons3&logoColor=white)](https://aws.amazon.com/s3/)

---

## O que é isso?

**RetroVault** é um catálogo interativo de jogos clássicos com emulação direto no browser. Interface estilo terminal CRT com efeito scanlines, tema cyberpunk verde/âmbar, suporte a 13 plataformas e centenas de títulos selecionados a dedo.

Acessa, escolhe uma plataforma, escolhe o jogo e começa a jogar. É isso.

---

## Plataformas disponíveis

| Plataforma | Lançamento | Era | Emulador |
|---|---|---|---|
| Nintendo Entertainment System | 1983 | 80s | fceumm |
| Super Nintendo Entertainment System | 1990 | 90s | snes9x |
| Sega Master System | 1985 | 80s | genesis_plus_gx |
| Sega Mega Drive / Genesis | 1988 | 80s | genesis_plus_gx |
| Nintendo Game Boy | 1989 | 80s | gambatte |
| Nintendo Game Boy Color | 1998 | 90s | gambatte |
| Nintendo Game Boy Advance | 2001 | 00s | mgba |
| Sony PlayStation 1 | 1994 | 90s | pcsx_rearmed |
| Nintendo 64 | 1996 | 90s | mupen64plus |
| Arcade Classics (FBNeo) | — | 80s/90s | fbneo |
| Capcom Play System 1 | 1988 | 80s | fbneo |
| Capcom Play System 2 | 1993 | 90s | fbneo |
| Capcom Play System 3 | 1996 | 90s | fbneo |
| SNK Neo Geo MVS | 1990 | 90s | fbneo |

> Cerca de **290 jogos** catalogados, filtráveis por década e plataforma.

---

## Como usar

**Mouse / Touch**
- Navegue pelo carousel de plataformas com as setas
- Clique numa plataforma para ver os jogos
- Clique num jogo para iniciar

**Teclado**
| Tecla | Ação |
|---|---|
| `← →` | Navegar entre plataformas |
| `↑ ↓` | Navegar entre jogos |
| `Enter` | Iniciar jogo |
| `P` | Focar busca de plataforma |
| `J` | Focar busca de jogo |

**Idiomas:** PT-BR / EN — botão no canto superior direito.

---

## Stack técnica

```
Frontend       → HTML + CSS + JavaScript (sem frameworks, sem build)
Emulação       → EmulatorJS via CDN (cdn.emulatorjs.org)
Hospedagem     → AWS S3 (static website hosting)
CDN / HTTPS    → Cloudflare (proxy + cache + certificado)
CI/CD          → GitHub Actions (test → deploy → smoke)
Segurança      → Bucket policy + WAF + SRI + Security Headers
```

### Arquitetura

```
                    ┌─────────────┐
    usuário ──────► │  Cloudflare │ ◄── cache + HTTPS + WAF + headers
                    └──────┬──────┘
                           │ apenas IPs Cloudflare
                    ┌──────▼──────┐
                    │   AWS S3    │ ← bucket restrito
                    │             │   index.html / script.js / style.css
                    │  assets/    │   imagens das plataformas
                    │  roms/      │   arquivos de jogo
                    └─────────────┘

    GitHub ──push──► Actions: test ──► deploy ──► smoke
```

### CI/CD

O workflow `.github/workflows/deploy-emu.yml` executa 3 jobs em sequência:

| Job | O que faz | Condição |
|---|---|---|
| `test` | Roda todos os testes | Sempre ao push em `main` |
| `deploy` | Envia os 4 arquivos ao S3 + purge seletivo Cloudflare | Só se `test` passar |
| `smoke` | Valida a infra ao vivo | Só após `deploy` |

O purge de cache é **seletivo** — invalida apenas `index.html`, `script.js`, `style.css` e `favicon.ico`, preservando o cache de ROMs e assets na Cloudflare.

As credenciais AWS e Cloudflare são gerenciadas via GitHub Secrets, sem nenhuma informação sensível no código.

---

## Testes

```
tests/
├── infra/
│   ├── security.sh     # segurança Cloudflare (headers, hotlink protection)
│   └── catalog.js      # todas as ROMs referenciadas existem no disco
└── unit/
    ├── i18n.js         # traduções PT/EN sincronizadas
    └── platforms.js    # estrutura obrigatória do PLATFORMS[]
```

Para rodar localmente:

```bash
bash tests/infra/security.sh
node tests/infra/catalog.js
node tests/unit/i18n.js
node tests/unit/platforms.js
```

---

## Estrutura do projeto

```
emu.dellabeneta.io/
├── index.html              # estrutura da interface
├── style.css               # tema CRT cyberpunk (verde #00ff88 + âmbar #ffaa00)
├── script.js               # catálogo PLATFORMS[], lógica, integração EmulatorJS
├── favicon.ico
├── sync-s3.sh              # utilitário: sincroniza roms/ e assets/ com o S3
├── assets/                 # imagens das plataformas (S3, fora do git)
├── roms/                   # arquivos de jogo (S3, fora do git)
├── tests/
│   ├── infra/
│   │   ├── security.sh
│   │   └── catalog.js
│   └── unit/
│       ├── i18n.js
│       └── platforms.js
└── .github/
    └── workflows/
        └── deploy-emu.yml
```

---

## Rodando localmente

Não precisa de build. Só precisa servir os arquivos estáticos — qualquer servidor HTTP funciona.

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .

# VS Code
# extensão Live Server → botão "Go Live"
```

> As ROMs precisam estar na pasta `roms/` localmente para o emulador funcionar.

---

## Sincronizando ROMs e assets com o S3

ROMs e assets não são versionados no git — vivem diretamente no S3. Para sincronizar após adicionar novos arquivos:

```bash
bash sync-s3.sh
```

Requer AWS CLI configurado localmente com as credenciais corretas.

---

## Segurança

| Camada | Implementação |
|---|---|
| Acesso ao S3 | Bucket policy restrito aos IPs da Cloudflare — requisições diretas ao endpoint S3 retornam **403 Forbidden** |
| Hotlink protection | WAF Custom Rule na Cloudflare bloqueia qualquer asset servido com `Referer` fora de `dellabeneta.io` — impede que outros sites consumam ROMs, imagens e demais arquivos |
| Integridade do EmulatorJS | SRI (Subresource Integrity) com hash SHA-256 na tag de carregamento — o browser recusa executar o script se o arquivo do CDN externo for adulterado |
| Security headers | Response Header Transform Rule na Cloudflare adiciona em todas as respostas: `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` |

---

*[RetroVault] — feito por [@dellabeneta](https://github.com/dellabeneta)*
