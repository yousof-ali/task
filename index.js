// document.querySelectorAll('.accordion').forEach(item => {
//   const title = item.querySelector('.accordion-title');

//   title.addEventListener('click', () => {
//     document.querySelectorAll('.accordion').forEach(acc => {
//       if (acc !== item) acc.classList.remove('active');
//     });

//     item.classList.toggle('active');
//   });
// });

// function toggleFAQ(faqItem) {
//   faqItem.classList.toggle("active");
// }

function toggleAccordion(clickedAccordion) {
  const wasActive = clickedAccordion.classList.contains('active');
  const allAccordions = document.querySelectorAll('.accordion');
  
  // Close all accordions first
  allAccordions.forEach(acc => {
    acc.classList.remove('active');
    acc.querySelector('.accordion-content').style.maxHeight = null;
  });
  
  // If the clicked one wasn't active, open it
  if (!wasActive) {
    clickedAccordion.classList.add('active');
    const content = clickedAccordion.querySelector('.accordion-content');
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}