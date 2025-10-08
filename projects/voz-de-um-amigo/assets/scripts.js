
        // ===== DADOS DAS IMAGENS (IMPORTANTE: ATUALIZE AQUI) =====
        const images = [
            { src: '../../assets/Em_espera.png', title: 'Página Inicial da Plataforma', description: 'Visão geral da plataforma, apresentando os conteúdos e a proposta de valor para a comunidade.' },
            { src: '../../assets/Em_espera.png', title: 'Tela de Login Seguro', description: 'Interface de login com opções de acesso tradicional e login rápido com a conta Google (OAuth 2.0).' },
            { src: '../../assets/Em_espera.png', title: 'Hub de Conteúdo Exclusivo', description: 'Área de membros onde apenas usuários autenticados podem acessar vídeos, artigos e materiais premium.' },
            { src: '../../assets/Em_espera.png', title: 'Checkout com Mercado Pago', description: 'Tela de pagamento segura integrada com a API do Mercado Pago para processar assinaturas e compras.' },
            { src: '../../assets/Em_espera.png', title: 'Recuperação de Senha', description: 'Formulário para solicitar a redefinição de senha, que envia um link seguro para o e-mail do usuário.' },
            { src: '../../assets/Em_espera.png', title: 'Painel Administrativo', description: 'Dashboard de gestão (AdminLTE) para administrar usuários, permissões, conteúdos e visualizar relatórios.' }
        ];

        let currentImageIndex = 0;

        function generateGalleryGrid() {
            const container = document.getElementById('gallery-grid-container');
            if (!container) return;
            let gridHTML = '';
            images.forEach((img, index) => {
                gridHTML += `
                    <div class="gallery-item" onclick="openModal(${index})">
                        <img src="${img.src}" alt="${img.title}">
                        <div class="gallery-overlay">
                            <h3>${img.title}</h3>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = gridHTML;
        }
        
        function openModal(index) {
            currentImageIndex = index;
            const modal = document.getElementById('imageModal');
            updateModalContent();
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('imageModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
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
        
        document.addEventListener('keydown', function(event) {
            const modal = document.getElementById('imageModal');
            if (modal.style.display === 'flex') {
                if (event.key === "Escape") closeModal();
                if (event.key === "ArrowLeft") previousImage();
                if (event.key === "ArrowRight") nextImage();
            }
        });

        window.onclick = function(event) {
            if (event.target == document.getElementById('imageModal')) {
                closeModal();
            }
        }

        document.addEventListener('DOMContentLoaded', generateGalleryGrid);
    