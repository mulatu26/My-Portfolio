(() => {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const year = document.getElementById('year');
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const toast = document.getElementById('toastMessage');

  year.textContent = new Date().getFullYear();

  // Theme toggle remembers the choice for this browser.
  const savedTheme = localStorage.getItem('mulatu-portfolio-theme');
  if (savedTheme === 'light') body.classList.add('light-theme');
  updateThemeButton();
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    localStorage.setItem('mulatu-portfolio-theme', body.classList.contains('light-theme') ? 'light' : 'dark');
    updateThemeButton();
  });
  function updateThemeButton() {
    const light = body.classList.contains('light-theme');
    themeToggle.textContent = light ? '☾' : '☼';
    themeToggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    themeToggle.title = light ? 'Switch to dark theme' : 'Switch to light theme';
  }

  // Close the mobile menu after selecting a section.
  document.querySelectorAll('#mainNav .nav-link, #mainNav .nav-contact').forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('mainNav');
      if (nav.classList.contains('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // Contact form validates locally, then prepares an email in the visitor's mail app.
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.classList.add('was-validated');
    if (!form.checkValidity()) {
      formStatus.textContent = 'Please check the highlighted fields and try again.';
      formStatus.style.color = '#ff9b9b';
      return;
    }
    const data = new FormData(form);
    const name = String(data.get('name')).trim();
    const email = String(data.get('email')).trim();
    const subject = String(data.get('subject')).trim();
    const message = String(data.get('message')).trim();
    const recipient = 'your.email@example.com'; // Replace with your real email address.
    const bodyText = `Hello Mulatu,\n\n${message}\n\nRegards,\n${name}\nReply to: ${email}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    formStatus.style.color = '';
    formStatus.textContent = 'Opening your email app. Replace the sample recipient email before publishing.';
    window.location.href = mailto;
  });

  // Project links with placeholders explain what needs to be added.
  document.querySelectorAll('.placeholder-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      showToast(`Replace this placeholder with your real ${link.dataset.placeholder}.`);
    });
  });
  document.querySelectorAll('[data-project]').forEach(link => {
    link.addEventListener('click', () => {
      // The contact section is the intentional fallback until a real repository/demo exists.
      showToast(`Add a real repository or demo URL for: ${link.dataset.project}.`);
    });
  });
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 3500);
  }
})();
const nameText = "Mulatu Sakuma.";

const titles = [
    "FrontEnd Developer",
    "Computer Engineer",
    "Internet And Mobile Banking Officer"
];

const nameElement = document.getElementById("typing-name");
const titleElement = document.getElementById("typing-title");

let nameIndex = 0;
let titleIndex = 0;
let charIndex = 0;

function typeName() {
    if (nameIndex < nameText.length) {
        nameElement.textContent += nameText.charAt(nameIndex);
        nameIndex++;
        setTimeout(typeName, 120);
    } else {
        setTimeout(typeTitle, 1000);
    }
}

function typeTitle() {
    const title = titles[titleIndex];

    if (charIndex < title.length) {
        titleElement.textContent += title.charAt(charIndex);
        charIndex++;
        setTimeout(typeTitle, 80);
    } else {
        setTimeout(deleteTitle, 1800);
    }
}

function deleteTitle() {
    if (charIndex > 0) {
        titleElement.textContent = titleElement.textContent.slice(0, -1);
        charIndex--;
        setTimeout(deleteTitle, 35);
    } else {
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(typeTitle, 400);
    }
}

typeName();
