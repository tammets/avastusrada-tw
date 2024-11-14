document.addEventListener("DOMContentLoaded", () => {
    const template = document.getElementById("dropdown-menu-template");
    const buttons = document.querySelectorAll(".menu-toggle-btn");
  
    let currentOpenMenu = null; // Track the currently open menu
  
    buttons.forEach(button => {
      const menuClone = template.cloneNode(true);
      menuClone.classList.add("dropdown-menu", "hidden");
  
      button.parentElement.appendChild(menuClone);
  
      // Toggle visibility on button click
      button.addEventListener("click", (event) => {
        event.stopPropagation();
  
        // Close the previous menu if it's different from the current one
        if (currentOpenMenu && currentOpenMenu !== menuClone) {
          currentOpenMenu.classList.add("hidden");
        }
  
        // Toggle the current menu's visibility
        const wasHidden = menuClone.classList.contains("hidden");
        menuClone.classList.toggle("hidden", !wasHidden);
  
        // Update `currentOpenMenu` if the menu is now open
        currentOpenMenu = wasHidden ? menuClone : null;
      });
  
      // Close all menus when clicking outside
      document.addEventListener("click", () => {
        if (currentOpenMenu) {
          currentOpenMenu.classList.add("hidden");
          currentOpenMenu = null;
        }
      });
  
      // Prevent menu from closing when clicking inside
      menuClone.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });
  
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