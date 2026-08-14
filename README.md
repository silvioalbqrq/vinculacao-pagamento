# IN 87/2025 – Vinculação de Pagamento Eletrônico | SEFAZ-CE

Site informativo e técnico sobre a **Instrução Normativa nº 87/2025** da Secretaria da Fazenda do Estado do Ceará (SEFAZ-CE), que trata da obrigatoriedade de integração e vinculação dos meios de pagamento eletrônicos (cartão de crédito/débito, PIX dinâmico etc.) à emissão de NF-e e NFC-e.

**Repositório:** [silvioalbqrq/vinculacao-pagamento](https://github.com/silvioalbqrq/vinculacao-pagamento)

---

## 🎯 Objetivo

Fornecer um guia claro, organizado e acessível para:

- Escritórios de contabilidade orientarem seus clientes
- Empresas do Ceará se adequarem à nova regra
- Desenvolvedores de sistemas de automação comercial (PDV) entenderem as exigências técnicas

---

## 📁 Estrutura do Projeto

```
vinculacao-pagamento/
├── index.html          # Página principal (self-contained: CSS + JS embutidos)
├── css/
│   └── styles.css      # Versão modular do CSS (para manutenção)
├── js/
│   └── main.js         # Versão modular do JS (para manutenção)
├── assets/             # Pasta reservada para imagens/ícones futuros
├── README.md           # Esta documentação
└── .gitignore
```

> **Importante:** O `index.html` contém o CSS e o JavaScript **embutidos** (inline).  
> Isso garante que o visual funcione corretamente no GitHub Pages mesmo se as pastas `css/` e `js/` não forem carregadas.  
> Os arquivos em `css/` e `js/` permanecem disponíveis para quem preferir a versão modular.

---

## 🚀 Como visualizar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/silvioalbqrq/vinculacao-pagamento.git
   cd vinculacao-pagamento
   ```

2. Abra o arquivo `index.html` diretamente no navegador  
   **ou** use um servidor local simples:

   ```bash
   # Com Python 3
   python -m http.server 8000

   # Com Node.js (npx)
   npx serve .
   ```

3. Acesse: [http://localhost:8000](http://localhost:8000)

---

## 🌐 Publicação no GitHub Pages

1. Vá em **Settings → Pages** do repositório.
2. Em **Source**, selecione a branch `main` (ou `master`) e a pasta `/ (root)`.
3. Salve. O site ficará disponível em:
   ```
   https://silvioalbqrq.github.io/vinculacao-pagamento/
   ```

---

## ✏️ Como atualizar o conteúdo

### Alterar textos e seções
- Edite o arquivo `index.html`.
- As seções principais estão identificadas por `id` (ex.: `#core`, `#pix`, `#faq`).
- Mantenha a estrutura semântica (`<section>`, `<article>`, `<header>`, etc.) para preservar acessibilidade e SEO.

### Alterar estilos (cores, espaçamentos, layout)
- Edite `css/styles.css`.
- As variáveis CSS estão no bloco `:root` no início do arquivo (fácil customização de cores).

### Alterar comportamento do FAQ ou navegação
- Edite `js/main.js`.
- O script usa apenas JavaScript puro (sem dependências).

### Adicionar novas perguntas no FAQ
1. Copie um bloco `.faq-item` existente.
2. Atualize o texto da pergunta e da resposta.
3. Ajuste os atributos `aria-controls` e `id` do painel de resposta para manter a acessibilidade.

---

## ♿ Acessibilidade e boas práticas

- HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`, `aside`)
- Skip link para pular ao conteúdo principal
- Atributos `aria-expanded`, `aria-controls` e `aria-labelledby` no FAQ
- Contraste adequado de cores
- Navegação por teclado funcional
- Tabelas com `<th scope="col">` e `<caption>`
- Fontes do Google com `preconnect` e `display=swap`

---

## ⚡ Desempenho

- CSS e JS separados e enxutos (sem bibliotecas pesadas)
- Script carregado com `defer`
- Sem imagens pesadas na versão atual
- Design totalmente responsivo (mobile-first)

---

## 📚 Fontes oficiais utilizadas

- Instrução Normativa nº 87, de 9 de julho de 2025 (SEFAZ-CE)
- Cartilha de Orientação ao Contribuinte – COAAD / CEDOT
- Nota Técnica 2024.002 (Evento de Conciliação Financeira – ECONF)
- Nota Técnica 2020.006 (tabela de meios de pagamento)
- Lei Estadual 18.665/2023

Canal de atendimento oficial da SEFAZ-CE (SAC):  
[https://portalservicos.sefaz.ce.gov.br/...](https://portalservicos.sefaz.ce.gov.br/servico-geral+servico-de-atendimento-ao-cidadao-sac+64adca7b48c5b8191406b1d9)

---

## 📄 Licença

Conteúdo informativo baseado em legislação pública.  
Uso livre para fins educacionais e de orientação profissional.

---

**Desenvolvido para apoiar a conformidade fiscal no Estado do Ceará.**
