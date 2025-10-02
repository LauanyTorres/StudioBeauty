document.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    
    // LINHA ADICIONADA: Pega o valor do rádio de pagamento que está selecionado
    const pagamento = document.querySelector('input[name="pagamento"]:checked').value;

    const dataFormatada = new Date(data).toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    // MENSAGEM ATUALIZADA para incluir a forma de pagamento
    const mensagem = `Olá! Gostaria de agendar um horário.\n\n*Nome:* ${nome}\n*Serviço:* ${servico}\n*Data:* ${dataFormatada}\n*Hora:* ${hora}\n*Forma de Pagamento:* ${pagamento}`;

    const numeroWhatsapp = '5598985700659';
    
    const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;

    window.open(linkWhatsapp, '_blank');
});
