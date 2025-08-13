// HOLIDEC SAC - basic interactivity
function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value || '';
  const message = document.getElementById('message').value;
  const subject = encodeURIComponent('Solicitud de cotización - ' + name);
  const body = encodeURIComponent('Nombre: '+name+'\nEmail: '+email+'\nTeléfono: '+phone+'\n\nMensaje:\n'+message);
  // opens the user's email client - instruct to configure form backend for production
  window.location.href = 'mailto:holidecsacpublicidad@gmail.com?subject='+subject+'&body='+body;
  return false;
}

function copyEmail(){
  navigator.clipboard && navigator.clipboard.writeText('holidecsacpublicidad@gmail.com');
  alert('Email copiado: holidecsacpublicidad@gmail.com');
}

// Simple entrance animations
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.service-card').forEach((el,i)=>{
    el.style.transform='translateY(12px)';
    el.style.opacity='0';
    setTimeout(()=>{el.style.transition='all .6s cubic-bezier(.2,.9,.3,1)';el.style.transform='translateY(0)';el.style.opacity='1'}, 120*i);
  });
});
