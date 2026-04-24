# AstroPhonia — Resumo do Projeto
**Desenvolvido por:** LiVRe Web Studium  
**Data:** Abril 2025  
**Site:** astrophonia.carrd.co → migração para GitHub Pages

---

## 📁 Estrutura de Ficheiros

```
astrophonia/
├── index.html          ← Página principal (todas as seções)
├── privacy.html        ← Política de Privacidade (3 línguas)
├── cookies.html        ← Política de Cookies (3 línguas)
├── style.css           ← Toda a estética visual
├── i18n.js             ← Sistema de traduções EN / IT / PT
├── main.js             ← Starfield, navbar, modal, reveal, cookies
└── images/
    ├── logo.png              ← Logo principal
    ├── logo-transparent.png  ← Logo sem fundo (usada no site)
    └── favicon.png           ← Ícone do browser
```

---

## 🌐 Como Publicar no GitHub Pages

### Passo 1 — Criar repositório no GitHub
1. Acessa github.com → New Repository
2. Nome sugerido: `astrophonia` (ou `livrewebstudio.github.io`)
3. Deixa **público**
4. Faz upload de todos os ficheiros acima

### Passo 2 — Ativar GitHub Pages
1. Vai em Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main` → pasta `/root`
4. Salva → aguarda ~2 minutos
5. Teu site estará em: `https://[teu-usuario].github.io/astrophonia`

### Passo 3 — Domínio Personalizado (se tiveres)
1. No GitHub Pages → Custom domain → digita `astrophonia.com` (ou o teu domínio)
2. No teu registrador de domínio, cria um registro CNAME:
   - Nome: `www`
   - Valor: `[teu-usuario].github.io`
3. Ou um A record apontando para os IPs do GitHub Pages

---

## 🎵 Plataforma de Venda — Bandcamp

### Por que Bandcamp?
| Critério | Bandcamp |
|----------|----------|
| Custo inicial | **Gratuito** |
| Comissão | ~15% por venda (reduz com o volume) |
| Formatos aceitos | MP3, FLAC, WAV, OGG, AIFF |
| Preview gratuito | ✅ Sim (streaming parcial) |
| Sem assinatura | ✅ Só paga quando vende |
| GDPR/LGPD | Responsabilidade deles |
| Dados do cliente | Ficam no Bandcamp, não em ti |

### Como usar
1. Cria conta em **bandcamp.com/signup**
2. Cria a tua página artista: `astrophonia.bandcamp.com`
3. Faz upload dos áudios com descrição e preço
4. O site AstroPhonia linka direto para lá (com modal de transição)

### Alternativas ao Bandcamp
| Plataforma | Comissão | Notas |
|------------|----------|-------|
| **Gumroad** | 10% | Simples, ótima UX, download digital |
| **Payhip** | 5% | Bom para downloads, sem mensalidade |
| **Ko-fi** | 0% (básico) | Permite doações + venda de ficheiros |

> 💡 **Recomendação:** Começa pelo Bandcamp. É o mais reconhecido para música independente e oferece preview de áudio nativo.

---

## 🎨 Identidade Visual

### Paleta de Cores
| Nome | Hex | Uso |
|------|-----|-----|
| Azul-noite | `#050813` | Fundo base |
| Azul-marinho | `#121E3D` | Cards, gradiente |
| Ametista | `#2C1E3D` | Acentos de fundo |
| Ouro Nobre | `#C5A069` | Títulos, botões, ícones |
| Ouro Escuro | `#9A7A4A` | Bordas, hover |
| Branco-gelo | `#E8E8E8` | Texto principal |
| Cinza-dim | `#A8A8BC` | Texto secundário |

### Fontes
| Fonte | Uso |
|-------|-----|
| **Cinzel** | Logotipo, botões, eyebrows (display serif clássico) |
| **Cormorant Garamond** | Corpo editorial longo (elegante, legível) |
| **Raleway** | UI geral (navbar, labels, cookie banner) |

---

## 🔊 Frequências Produzidas e Sugeridas

### Já existentes
| Faixa | Frequência | Tema |
|-------|-----------|------|
| Beyond the Silence | 528Hz | Perda & Luto |
| The Uncharted Self | 432Hz | Recomeçar |

### Sugestões para próximas produções
| Frequência | Nome Sugerido | Tema |
|-----------|---------------|------|
| **963Hz** | The Awakened Gate | Despertar Pineal / Conexão Divina |
| **741Hz** | Voice of the Void | Detox & Verdade Pessoal |
| **639Hz** | The Bridge Between | Relacionamentos & Reconexão |
| **852Hz** | Return to Clarity | Clareza Espiritual & Intuição |
| **174Hz** | Foundation | Alívio de Dor Física & Segurança |
| **285Hz** | Cellular Memory | Cura de Tecidos & Regeneração |

> 💡 Cada nova faixa deve ter uma história real como âncora narrativa — isso é o coração da AstroPhonia.

---

## 🍪 Privacidade & Cookies (GDPR / LGPD)

### O que o site faz
- **Não** coleta dados pessoais dos visitantes
- **Não** usa Google Analytics, Meta Pixel, ou qualquer tracker
- Usa apenas `localStorage` para:
  - `ap_lang` → idioma escolhido
  - `ap_cookies` → aceite do banner

### Páginas criadas
- `/privacy.html` → Política de Privacidade (EN/IT/PT)
- `/cookies.html` → Política de Cookies (EN/IT/PT)

### Vendas (Bandcamp)
- Toda a responsabilidade de dados de pagamento e pessoais é do Bandcamp
- O site AstroPhonia exibe modal de aviso antes do redirecionamento
- Nenhum dado de compra passa pelo site

---

## 📞 Dados de Contato no Site
| Canal | Valor |
|-------|-------|
| WhatsApp | +55 11 97164-0775 |
| Email | contato@astrophonia.com |
| Instagram | @astrophonia |
| Bandcamp | astrophonia.bandcamp.com |

---

## ✅ Checklist antes de publicar

- [ ] Criar conta no Bandcamp em **astrophonia.bandcamp.com**
- [ ] Atualizar os links dos cards (substituir `https://astrophonia.bandcamp.com` pelos links reais de cada faixa)
- [ ] Criar repositório no GitHub e fazer upload dos ficheiros
- [ ] Ativar GitHub Pages
- [ ] Apontar domínio (se tiver um próprio)
- [ ] Testar em mobile e desktop
- [ ] Testar seleção de idioma (EN, IT, PT)
- [ ] Verificar que o modal de redirecionamento funciona antes do Bandcamp
- [ ] Atualizar datas nas políticas quando necessário

---

*Desenvolvido com ✨ por LiVRe Web Studium para AstroPhonia — 2025*
