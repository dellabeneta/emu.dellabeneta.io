```
██████╗ ███████╗████████╗██████╗  ██████╗ ██╗   ██╗ █████╗ ██╗   ██╗██╗  ████████╗
██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔═══██╗██║   ██║██╔══██╗██║   ██║██║  ╚══██╔══╝
██████╔╝█████╗     ██║   ██████╔╝██║   ██║██║   ██║███████║██║   ██║██║     ██║   
██╔══██╗██╔══╝     ██║   ██╔══██╗██║   ██║╚██╗ ██╔╝██╔══██║██║   ██║██║     ██║   
██║  ██║███████╗   ██║   ██║  ██║╚██████╔╝ ╚████╔╝ ██║  ██║╚██████╔╝███████╗██║   
╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═══╝  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝   
```

> **Emulação retro no browser. Sem instalação. Sem cadastro. Só jogar.**

[![Site](https://img.shields.io/badge/SITE-emu.dellabeneta.io-00ff88?style=for-the-badge&logo=googlechrome&logoColor=black)](https://emu.dellabeneta.io)
[![Deploy](https://img.shields.io/badge/DEPLOY-GitHub_Actions-ffaa00?style=for-the-badge&logo=githubactions&logoColor=black)](https://github.com/dellabeneta/emu.dellabeneta.io/actions)
[![CDN](https://img.shields.io/badge/CDN-Cloudflare-f38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://cloudflare.com)
[![Host](https://img.shields.io/badge/HOST-Amazon_S3-ff9900?style=for-the-badge&logo=amazons3&logoColor=white)](https://aws.amazon.com/s3/)

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
| Arcade Classics (FBNeo) | — | 80s/90s | fbneo |
| Capcom Play System 1 | 1988 | 80s | fbneo |
| Capcom Play System 2 | 1993 | 90s | fbneo |
| Capcom Play System 3 | 1996 | 90s | fbneo |
| SNK Neo Geo MVS | 1990 | 90s | fbneo |

> Mais de **400 jogos** catalogados, filtráveis por década e plataforma.

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
CI/CD          → GitHub Actions → sync automático para o S3 no push para main
Segurança      → Bucket policy restrito aos IPs da Cloudflare (sem acesso direto ao S3)
```

### Arquitetura

```
                    ┌─────────────┐
    usuário ──────► │  Cloudflare │ ◄── cache + HTTPS + proteção
                    └──────┬──────┘
                           │ apenas IPs Cloudflare
                    ┌──────▼──────┐
                    │   AWS S3    │ ← bucket público restrito
                    │             │   index.html / script.js / style.css
                    │  assets/    │   imagens das plataformas
                    │  roms/      │   arquivos de jogo
                    └─────────────┘

    GitHub ──push──► Actions ──sync──► S3 ──► Cloudflare purge cache
```

### CI/CD

O workflow `.github/workflows/deploy-s3.yml` faz:
1. Checkout do repositório
2. Configura credenciais AWS via secrets
3. `aws s3 sync` dos arquivos de código para o bucket (excluindo ROMs e assets)
4. Purge automático do cache da Cloudflare

As credenciais AWS e Cloudflare são gerenciadas via GitHub Secrets, sem nenhuma informação sensível no código.

---

## Estrutura do projeto

```
emu.dellabeneta.io/
├── index.html          # estrutura da interface
├── style.css           # tema CRT cyberpunk (verde #00ff88 + âmbar #ffaa00)
├── script.js           # catálogo PLATFORMS[], lógica, integração EmulatorJS
├── validate.js         # validação local dos arquivos de ROM
├── assets/             # imagens das plataformas (hospedado no S3, fora do git)
├── roms/               # arquivos de jogo (hospedado no S3, fora do git)
└── .github/
    └── workflows/
        └── deploy-s3.yml
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

## Segurança

O bucket S3 é público mas com acesso restrito aos IPs da Cloudflare via bucket policy. Requisições diretas ao endpoint do S3 retornam **403 Forbidden** — todo tráfego passa obrigatoriamente pela Cloudflare.

---

*[RetroVault] — feito por [@dellabeneta](https://github.com/dellabeneta)*
