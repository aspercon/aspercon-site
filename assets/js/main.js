(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Fake form submit (replace with your backend / form service)
  window.Aspercon = window.Aspercon || {};
  window.Aspercon.sendContact = function (e) {
    e.preventDefault();
    const msg = document.getElementById("formMsg");
    if (msg) msg.textContent = "Mensagem pronta! (Falta integrar um envio real — posso configurar com Formspree/Google Forms).";
    return false;
  };
})();
// ===== WhatsApp floating: texto premium + por página + aparecer após scroll =====
(function () {
  const wa = document.querySelector(".whatsapp");
  if (!wa) return;

  // Texto padrão premium
  const defaultLabel = "Falar com especialista";

  // Mapeamento por página (nome do arquivo -> texto)
  const labelByPage = {
    "index.html": "Falar com especialista",
    "sobre.html": "Falar com especialista",
    "servicos-hub.html": "Verificar melhor caminho",
    "contabilidade-empresarial.html": "Solicitar orientação contábil",
    "abertura-de-empresa.html": "Quero abrir empresa",
    "auditoria.html": "Solicitar auditoria",
    "pericia-contabil.html": "Solicitar análise técnica",
    "contato.html": "Iniciar atendimento"
  };

  // Descobre a página atual
  const path = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  // Aplica texto
  wa.textContent = labelByPage[path] || defaultLabel;

  // Aparecer após scroll
  const showAfter = 180; // px
  const onScroll = () => {
    if (window.scrollY > showAfter) wa.classList.add("is-visible");
    else wa.classList.remove("is-visible");
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // aplica já no load
})();