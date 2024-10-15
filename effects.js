fetch('effects.json')
  .then(response => response.json())
  .then(data => {
    if (data.cursor) {
      document.body.style.cursor = `url(${data.cursor}), auto`;
    }
    if (data.scrollSpeed) {
      document.documentElement.style.scrollBehavior = data.scrollSpeed;
    }
    if (data.bounceAnimation === false) {
      const arrow = document.querySelector('.scroll-arrow');
      arrow.style.animation = 'none'; // Disable bounce if set to false
    }
  });
