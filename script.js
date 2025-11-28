function toggleQA(el) {
  const qaItem = el.closest('.qa-item');
  const answer = qaItem.querySelector('.qa-a');
  const isOpen = answer.classList.contains('open');

  if (isOpen) {
    answer.style.height = answer.scrollHeight + "px";
    requestAnimationFrame(() => {
      answer.style.height = "0";
    });
    answer.classList.remove('open');
    return;
  }

  document.querySelectorAll('.qa-a.open').forEach(a => {
    a.style.height = a.scrollHeight + "px";
    requestAnimationFrame(() => {
      a.style.height = "0";
    });
    a.classList.remove('open');
  });

  answer.classList.add('open');
  answer.style.height = answer.scrollHeight + "px";

  answer.addEventListener('transitionend', function handler(e) {
    if (answer.classList.contains('open')) {
      answer.style.height = "auto";
    }
    answer.removeEventListener('transitionend', handler);
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
