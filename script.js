// 1. Obsługa Dark Mode
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleButton.querySelector('.material-icons');

// Sprawdź, czy użytkownik miał wcześniej ustawiony tryb ciemny
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.textContent = 'light_mode';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Zmień ikonę i zapisz wybór w pamięci przeglądarki
    if (body.classList.contains('dark-mode')) {
        icon.textContent = 'light_mode';
        localStorage.setItem('theme', 'dark');
    } else {
        icon.textContent = 'dark_mode';
        localStorage.setItem('theme', 'light');
    }
});

// 2. Obsługa formularza (Naprawa błędu 405)
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // ZATRZYMUJE standardowe wysyłanie (to naprawia błąd 405!)
    
    // Symulacja wysyłania
    const button = form.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Wysyłanie...';
    button.disabled = true;

    setTimeout(() => {
        alert('Dzięki za wiadomość, Dawid! (To tylko symulacja)');
        form.reset(); // Wyczyść pola
        button.textContent = originalText;
        button.disabled = false;
    }, 1500);
});