document.addEventListener('DOMContentLoaded', () => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        const summaryContainer = document.getElementById('summary');
  
        data.forEach(item => {
          const summaryItem = document.createElement('div');
          summaryItem.classList.add('flex', 'justify-center', 'items-center', 'bg-gray-100', 'p-3', 'rounded-lg', 'gap-y-2');
  
          const icon = document.createElement('img');
          icon.src = item.icon;
          icon.alt = item.category;
          icon.classList.add('w-6', 'h-6', 'mr-3');
  
          const category = document.createElement('span');
          category.classList.add('font-semibold', 'mr-4');
          category.textContent = item.category;
          category.style.color = item.color; // Aplicar el color de texto dinámicamente
  
          const score = document.createElement('span');
          score.classList.add('font-bold');
          score.textContent = `${item.score} / 100`;
  
          summaryItem.appendChild(icon);
          summaryItem.appendChild(category);
          summaryItem.appendChild(score);
  
          summaryContainer.appendChild(summaryItem);
        });
      })
      .catch(error => console.error('Error loading the JSON data:', error));
  });
  