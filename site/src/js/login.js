
function addDados() {
    const modal = document.getElementById('modalAsso')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'modalAsso') {
            modal.classList.remove('abrir')
        }
    })
}