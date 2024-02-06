/* Acortadores */
const $d = {
    qS: e => document.querySelector(e),
    qA: e => document.querySelectorAll(e)
  };

// https://github.com/isai-ismael/reloj-digital
function reloj(){
    let hora = $d.qS("#hora");
    let amPm = $d.qS("#am-pm");
  
    let date = new Date();
    
    let diaNuevo;
    let estado;
  
    /* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */
    date.getHours() >= 12 ? estado = "PM" : estado = "AM";
    date.getDate() < 10 ? diaNuevo = `0${date.getDate()}` : diaNuevo = `${date.getDate()}`;
    
    hora.textContent = `${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    amPm.textContent = `${estado}`;
}
    
reloj();
setInterval(reloj,1000);