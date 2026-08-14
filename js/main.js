/**
 * IN 87/2025 – Vinculação de Pagamento Eletrônico
 * Script principal – FAQ, navegação suave e proteção básica do código-fonte
 * Conteúdo visível permanece selecionável e copiável
 */

(function () {
  'use strict';

  // FAQ Accordion
  function initFaq() {
    var items = document.querySelectorAll('.faq-item');

    items.forEach(function (item) {
      var button = item.querySelector('.faq-question');
      if (!button) return;

      button.addEventListener('click', function () {
        var isActive = item.classList.contains('active');

        // Fecha todos
        items.forEach(function (el) {
          el.classList.remove('active');
          var btn = el.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        // Abre o clicado se estava fechado
        if (!isActive) {
          item.classList.add('active');
          button.setAttribute('aria-expanded', 'true');
        }
      });

      // Acessibilidade inicial
      button.setAttribute('aria-expanded', 'false');
    });
  }

  // Navegação suave
  function initSmoothNav() {
    var links = document.querySelectorAll('.main-nav a[href^="#"]');

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = link.getAttribute('href');
        var target = document.querySelector(targetId);

        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (history.pushState) {
            history.pushState(null, '', targetId);
          }
        }
      });
    });
  }

  // Proteção básica do código-fonte (conteúdo da página continua copiável)
  function initCodeProtection() {
    // Desabilita menu de contexto (clique direito)
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });

    // Bloqueia atalhos comuns de visualização de código
    document.addEventListener('keydown', function (e) {
      // Ctrl+U (view source), Ctrl+S (save), Ctrl+P (print), F12
      if (
        (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
      }

      // Ctrl+Shift+I / Ctrl+Shift+J (DevTools)
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
      }
    });
  }

  // Inicialização
  document.addEventListener('DOMContentLoaded', function () {
    initFaq();
    initSmoothNav();
    initCodeProtection();
  });
})();
