// Aguarda o formulário ser enviado
document.getElementById('agendamento-form').addEventListener('submit', function(event) {
    // Impede o comportamento padrão do formulário (que seria recarregar a página)
    event.preventDefault();

    // 1. PEGAR OS DADOS DOS CAMPOS
    const nome = document.getElementById('nome').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    // Formatar a data para o padrão brasileiro (DD/MM/AAAA) para ficar mais legível
    const dataFormatada = new Date(data).toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    // 2. MONTAR A MENSAGEM
    // O "\n" cria uma quebra de linha na mensagem do WhatsApp
    const mensagem = `Olá! Gostaria de agendar um horário.\n\n*Nome:* ${nome}\n*Serviço:* ${servico}\n*Data:* ${dataFormatada}\n*Hora:* ${hora}`;

    // 3. CRIAR O LINK PARA O WHATSAPP
    // Substitua '5500999998888' pelo seu número de telefone
    const numeroWhatsapp = '5598985700659';
    
    // O encodeURIComponent garante que caracteres especiais (como espaços e quebras de linha) funcionem no link
    const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;

    // 4. REDIRECIONAR O USUÁRIO
    // Abre o link do WhatsApp em uma nova aba
    window.open(linkWhatsapp, '_blank');
});