function handleWhatsAppClick() {
  const sharedURL = window.location.href;
  console.log(sharedURL);
  window.open(
    `https://api.whatsapp.com/send/?phone&text=${encodeURIComponent(sharedURL)}%0A%0A${encodeURIComponent(`${document.title}`)}`,
    '_blank',
  );
}