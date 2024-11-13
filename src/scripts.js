document.addEventListener("DOMContentLoaded", () => {
    // Script to handle menu toggle
    const menuButton = document.getElementById("menu-toggle");
    const menu = document.getElementById("dropdown-menu");
  
    if (menuButton && menu) {
      menuButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the event from bubbling up to the document
        menu.classList.toggle("hidden"); // Toggle the menu visibility
      });
  
      document.addEventListener("click", () => {
        menu.classList.add("hidden"); // Close menu when clicking outside
      });
  
      // Prevent the menu itself from closing when clicking inside it
      menu.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    }
  
    // Script to handle toggle switches
    document.querySelectorAll('[role="switch"]').forEach(button => {
      button.addEventListener('click', () => {
        const isChecked = button.getAttribute('aria-checked') === 'true';
        button.setAttribute('aria-checked', !isChecked);
  
        const toggle = button.querySelector('span');
  
        // Toggle between enabled and disabled colors
        button.classList.toggle('bg-primary', !isChecked);
        button.classList.toggle('bg-gray-200', isChecked);
  
        // Toggle between translate-x-0 and translate-x-5
        toggle.classList.toggle('translate-x-0', isChecked);
        toggle.classList.toggle('translate-x-5', !isChecked);
      });
    });
  });