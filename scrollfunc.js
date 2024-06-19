function scrollSection(id)
{
  const getId = document.getElementById(id);
  getId.scrollIntoView({ behavior:'smooth'});
  
  const dynamTxtElement = document.getElementById(`${id}-header`);
  dynamTxtElement.style.backgroundColor = 'rgb(219,234,210)';
  if(id == 'contacts')
  {
    dynamTxtElement.style.backgroundColor = 'rgb(77,93,83)';
  }

  setTimeout(() =>
  {
    dynamTxtElement.style.transition = 'background-color 1s ease';
    dynamTxtElement.style.backgroundColor='';
  },2000);
}