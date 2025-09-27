// Aguarda o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', function() {

    // 1. LISTA DE IMAGENS
    // Coloque aqui o nome de todas as fotos que você separou.
    const images = [
        'assets/images/tra1.jpeg',
        'assets/images/tra2.jpeg',
        'assets/images/tra3.jpeg'
        // Adicione mais fotos aqui, se quiser. Ex: 'assets/images/trabalho-4.jpg',
    ];

    // 2. SELECIONAR O ELEMENTO DA IMAGEM NO HTML
    const carouselImage = document.getElementById('carousel-image');

    // 3. VARIÁVEL PARA CONTROLAR QUAL IMAGEM ESTÁ SENDO MOSTRADA
    let currentIndex = 0;

    // 4. FUNÇÃO QUE TROCA A IMAGEM
    function changeImage() {
        // Incrementa o índice para passar para a próxima imagem
        // O operador '%' faz com que o contador volte a 0 quando chega ao final da lista
        currentIndex = (currentIndex + 1) % images.length;
        
        // Aplica um efeito de fade out (tornando a imagem transparente)
        carouselImage.style.opacity = 0;

        // Aguarda a transição de fade out terminar (700ms, o mesmo tempo do CSS)
        setTimeout(() => {
            // Troca a fonte da imagem para a próxima da lista
            carouselImage.src = images[currentIndex];
            // Aplica um efeito de fade in (removendo a transparência)
            carouselImage.style.opacity = 1;
        }, 700);
    }

    // 5. INICIAR O CARROSSEL AUTOMÁTICO
    // A cada 4 segundos (4000 milissegundos), a função changeImage será chamada
    setInterval(changeImage, 2000);

});