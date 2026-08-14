/**
 * IN 87/2025 – Vinculação de Pagamento Eletrônico
 * Script principal – FAQ accordion + navegação suave
 * Código limpo, sem dependências externas
 */

(function () {
  'use strict';

  // FAQ Accordion
  function initFaq() {
    const items = document.querySelectorAll('.faq-item');

    items.forEach(function (item) {
      const button = item.querySelector('.faq-question');
      if (!button) return;

      button.addEventListener('click', function () {
        const isActive = item.classList.contains('active');

        // Fecha todos
        items.forEach(function (el) {
          el.classList.remove('active');
          const btn = el.querySelector('.faq-question');
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

  // Navegação suave (fallback para navegadores sem scroll-behavior)
  function initSmoothNav() {
    const links = document.querySelectorAll('.main-nav a[href^="#"]');

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Atualiza URL sem pular
          history.pushState(null, '', targetId);
        }
      });
    });
  }

  // Inicialização quando o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', function () {
    initFaq();
    initSmoothNav();
  });
})();
