function mostrarFoto() {
    const modal = document.getElementById('modalImg1')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharFoto' || e.target.id == 'modalImg1') {
            modal.classList.remove('abrir')
        }
    })
}

function mostrarFoto2() {
    const modal2 = document.getElementById('modalImg2')
    modal2.classList.add('abrir2')

    modal2.addEventListener('click', (e) => {
        if (e.target.id == 'fecharFoto2' || e.target.id == 'modalImg2') {
            modal2.classList.remove('abrir2')
        }
    })
}

function mostrarFoto3() {
    const modal3 = document.getElementById('modalImg3')
    modal3.classList.add('abrir3')

    modal3.addEventListener('click', (e) => {
        if (e.target.id == 'fecharFoto3' || e.target.id == 'modalImg3') {
            modal3.classList.remove('abrir3')
        }
    })
}

function mostrarFoto4() {
    const modal4 = document.getElementById('modalImg4')
    modal4.classList.add('abrir4')

    modal4.addEventListener('click', (e) => {
        if (e.target.id == 'fecharFoto4' || e.target.id == 'modalImg4') {
            modal4.classList.remove('abrir4')
        }
    })
}

function mostrarFoto5() {
    const modal5 = document.getElementById('modalImg5')
    modal5.classList.add('abrir5')

    modal5.addEventListener('click', (e) => {
        if (e.target.id == 'fecharFoto5' || e.target.id == 'modalImg5') {
            modal5.classList.remove('abrir5')
        }
    })
}

function mostrarFoto6() {
    const modal6 = document.getElementById('modalImg6')
    modal6.classList.add('abrir6')

    modal6.addEventListener('click', (e) => {
        if (e.target.id == 'fecharFoto6' || e.target.id == 'modalImg6') {
            modal6.classList.remove('abrir6')
        }
    })
}