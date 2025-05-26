// script.js

document.addEventListener('DOMContentLoaded', () => {
  console.log("School Finder website loaded");

  // Example future functionality
  // document.querySelector('.btn-primary').addEventListener('click', () => {
  //   alert("Search functionality coming soon!");
  // });
});

// Image slider
const sliderImages = [
  "https://images.pexels.com/photos/3042432/pexels-photo-3042432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/31690910/pexels-photo-31690910/free-photo-of-aerial-view-of-urban-school-sports-field.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/8926848/pexels-photo-8926848.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8617516/pexels-photo-8617516.jpeg?auto=compress&cs=tinysrgb&w=600"
];
let currentImage = 0;
const slider = document.getElementById('slider-image');

setInterval(() => {
  currentImage = (currentImage + 1) % sliderImages.length;
  slider.src = sliderImages[currentImage];
}, 5000);

<script>
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('span').textContent = '+';
      });
      if (!isActive) {
        item.classList.add('active');
        item.querySelector('span').textContent = '-';
      }
    });
  });
</script>

