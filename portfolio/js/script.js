function mostrarAlerta(tipo, titulo, mensagem) {
    let tipoAlerta = '';
    let cor = '';
    let icone = '';
    let cor_texto = '';
    switch (tipo) {
        case 'erro':
            tipoAlerta = 'error';                
            icone = 'error';
            cor_texto = '#fff';
            // background = '#e33f22ff'; 
            document.documentElement.style.setProperty('--border-left-swal-alert', '#e33f22ff');
            break;
        case 'sucesso':
            tipoAlerta = 'success';                
            icone = 'success';
            cor_texto = '#fff';
            // background = '#32CD32'; 
            document.documentElement.style.setProperty('--border-left-swal-alert', '#32CD32');
            break;
        case 'alerta':
            tipoAlerta = 'warning';
            icone = 'warning';
            cor_texto = '#000000';
            // background = '#ffd900ff'; 
            document.documentElement.style.setProperty('--border-left-swal-alert', '#ffd900ff');
            break;
        default:
            tipoAlerta = 'info';
            icone = 'info';
            cor_texto = '#fff';
            // background = '#1E90FF'; 
            document.documentElement.style.setProperty('--border-left-swal-alert', '#1E90FF');
            break;
    }

    // Usando SweetAlert2 para criar o toast
    Swal.fire({
        icon: icone,
        title: titulo,
        text: mensagem,
        toast: true,  
        position: 'bottom-end',  
        showConfirmButton: false,
        timer: 4500,  
        timerProgressBar: true,
        // background: background, 
        color: cor_texto, 

        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
            toast.addEventListener('click', () => Swal.close());
        }
    });
}
