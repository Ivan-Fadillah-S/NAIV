const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
}

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

const hm = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search'); 

document.addEventListener('click', function (e) {
  
  if (!hm.contains(e.target) && !searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});

const productCards = document.querySelectorAll('.produk .card');

searchBox.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    productCards.forEach(card => {
        const titleElement = card.querySelector('.title');
        const title1Element = card.querySelector('.title1'); 
        let titleText = '';

        if (titleElement) {
            titleText = titleElement.textContent.toLowerCase();
        } else if (title1Element) {
            titleText = title1Element.textContent.toLowerCase();
        }

        if (titleText.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

const contactForm = document.querySelector('.contact form');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Kosongkan semua input
    const inputs = contactForm.querySelectorAll('input');
    inputs.forEach(input => input.value = '');

    // Hapus pesan sebelumnya jika ada
    const oldMsg = contactForm.querySelector('.success-message');
    if (oldMsg) oldMsg.remove();

    // Buat pesan sukses
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Pesan terkirim!';
    successMessage.classList.add('success-message');
    successMessage.style.color = 'var(--primary)';
    successMessage.style.marginTop = '1rem';
    successMessage.style.fontWeight = 'bold';
    successMessage.style.transition = 'opacity 0.3s ease';

    // Tambahkan ke form
    contactForm.appendChild(successMessage);

    // Hilangkan setelah 5 detik
    setTimeout(() => {
      successMessage.style.opacity = '0';
      // Hapus dari DOM setelah transisi selesai (0.3s)
      setTimeout(() => successMessage.remove(), 300);
    }, 3000);
  });