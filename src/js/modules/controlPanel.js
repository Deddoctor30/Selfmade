const controlPanel = () => {
   const cpTitle = document.querySelector('.control-panel__title');
   const cpItems = document.querySelectorAll('.control-panel__item');
   const cpOut = document.querySelector('.control-panel__out');

   cpTitle.addEventListener('click', () => {
      removeActive();
      cpTitle.classList.add('active');
   });

   cpItems.forEach(item => {
      item.addEventListener('click', () => {
         removeActive();
         item.classList.add('active');
      })
   })

   cpOut.addEventListener('click', () => {
      removeActive();
      cpOut.classList.add('active');
   })

   const removeActive = () => {
      cpTitle.classList.remove('active');
      cpItems.forEach(i => {
         i.classList.remove('active');
      })
      cpOut.classList.remove('active');
   }
}

export default controlPanel;