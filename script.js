const scriptURL = 'https://script.google.com/macros/s/AKfycbyu7XT_hTjRi52edoeDnAGXw4UsrZB2hCizfZW8imLLCcm-mkpW-X1lgZKoXvGzoPk/exec';
const form = document.getElementById('formulario');
const msg = document.getElementById('mensagem');
const btn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', e => {
    e.preventDefault();

    btn.disabled = true;
    btn.innerHTML = 'Enviando <span class="spinner"></span>';
    msg.style.display = 'none';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'sucesso') {
                msg.textContent = '🎉 Presença confirmada com sucesso!';
                msg.className = 'success-message success';
                form.reset();
            } else {
                msg.textContent = `❌ Erro: ${data.message}`;
                msg.className = 'success-message error';
            }
            msg.style.display = 'block';
        })
        .catch(error => {
            msg.textContent = '❌ Erro ao enviar.';
            msg.className = 'success-message error';
            msg.style.display = 'block';
        })
        .finally(() => {
            btn.disabled = false;
            btn.textContent = 'Confirmar presença';
        });
});
