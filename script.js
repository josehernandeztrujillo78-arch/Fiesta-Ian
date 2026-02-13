// === COUNTDOWN ===
    var targetDate = new Date("2026-09-06T14:00:00").getTime();

    function updateCountdown() {
      var now = new Date().getTime();
      var diff = targetDate - now;

      if (diff <= 0) {
        document.getElementById("cd-days").textContent = "00";
        document.getElementById("cd-hours").textContent = "00";
        document.getElementById("cd-minutes").textContent = "00";
        document.getElementById("cd-seconds").textContent = "00";
        return;
      }

      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      var minutes = Math.floor((diff / (1000 * 60)) % 60);
      var seconds = Math.floor((diff / 1000) % 60);

      document.getElementById("cd-days").textContent = String(days).padStart(2, "0");
      document.getElementById("cd-hours").textContent = String(hours).padStart(2, "0");
      document.getElementById("cd-minutes").textContent = String(minutes).padStart(2, "0");
      document.getElementById("cd-seconds").textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // === INTERSECTION OBSERVER for scroll animations ===
    function observeElements(selector, visibleClass) {
      var elements = document.querySelectorAll(selector);
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var delay = parseInt(entry.target.getAttribute("data-delay")) || 0;
            setTimeout(function() {
              entry.target.classList.add(visibleClass);
            }, delay);
          }
        });
      }, { threshold: 0.2 });

      elements.forEach(function(el) {
        observer.observe(el);
      });
    }

    // Observe detail cards
    observeElements(".detail-card", "visible");

    // Observe pool note
    observeElements(".pool-note", "visible");

    // Observe action buttons section
    observeElements(".actions-content", "visible");