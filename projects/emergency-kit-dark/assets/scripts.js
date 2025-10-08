
        // Array com todas as 21 imagens
        const images = [
    {
        src: 'assets/imagens/Captura de tela 2025-09-17 202446.png',
        title: 'Dashboard Principal e Inventário Inteligente',
        description: 'Visão completa do inventário com itens organizados, alertas visuais de status (vencido, em falta) e acesso rápido aos detalhes de cada produto.'
    },
    {
        src: 'assets/imagens/Captura de tela 2025-09-17 202531.png',
        title: 'Análise de Preparação por Cenário',
        description: 'Painel que avalia o nível de prontidão do kit para emergências (Desastres Naturais, Falha de Energia, etc.), com barras de progresso e estatísticas claras.'
    },
    {
        src: 'assets/imagens/Captura de tela 2025-09-17 202711.png',
        title: 'Adição Inteligente com Sugestões',
        description: 'O sistema oferece sugestões de itens essenciais, categorizados por necessidade (crianças, idosos, animais), para facilitar a montagem de um kit completo.'
    },
    {
        src: 'assets/imagens/Captura de tela 2025-09-17 202841.png',
        title: 'Detalhes e Gestão de Itens',
        description: 'Tela de visualização com todas as informações de um item, incluindo quantidade, preço, validade, localização e prioridade, com acesso rápido à função de edição.'
    },
    {
        src: 'assets/imagens/Captura de tela 2025-09-17 202858.png',
        title: 'Formulário de Edição Completo',
        description: 'Interface modal para editar todas as informações de um item existente, incluindo um botão de exclusão com confirmação para evitar perdas acidentais.'
    },
    {
        src: 'assets/imagens/Captura de tela 2025-09-17 202605.png',
        title: 'Configurações Abrangentes',
        description: 'Painel de controle para personalizar a aparência (temas, fontes), gerenciar dados (importar, exportar, backup) e configurar o planejador de kit inteligente.'
    },
    {
        src: 'assets/imagens/Captura de tela 2025-09-17 202944.png',
        title: 'Interface Adaptável com Tema Claro',
        description: 'Além do modo escuro, o sistema oferece um tema claro, limpo e de alto contraste, garantindo excelente legibilidade em qualquer ambiente.'
    }
];

        let currentImageIndex = 0;

        function openModal(index) {
            currentImageIndex = index;
            const modal = document.getElementById('imageModal');
            updateModalContent();
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Previne scroll da página
        }

        function closeModal() {
            const modal = document.getElementById('imageModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaura scroll da página
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateModalContent();
        }

        function previousImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateModalContent();
        }

        function updateModalContent() {
            const img = images[currentImageIndex];
            document.getElementById('modalImage').src = img.src;
            document.getElementById('modalTitle').textContent = img.title;
            document.getElementById('modalDescription').textContent = img.description;
            document.getElementById('modalCounter').textContent = `${currentImageIndex + 1} / ${images.length}`;
        }

        // Navegação por teclado
        document.addEventListener('keydown', function(event) {
            const modal = document.getElementById('imageModal');
            if (modal.style.display === 'flex') {
                switch(event.key) {
                    case 'Escape':
                        closeModal();
                        break;
                    case 'ArrowRight':
                        nextImage();
                        break;
                    case 'ArrowLeft':
                        previousImage();
                        break;
                }
            }
        });

        // Fechar modal clicando fora da imagem
        window.onclick = function(event) {
            const modal = document.getElementById('imageModal');
            if (event.target == modal) {
                closeModal();
            }
        }

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    