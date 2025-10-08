
        // ===== DADOS DAS IMAGENS (IMPORTANTE: ATUALIZE AQUI) =====
        const images = [
            { src: '../../assets/Em_espera.png', title: 'Página Inicial', description: 'Apresentação principal do serviço para usuários e empresas, com design limpo e moderno.' },
            { src: '../../assets/Em_espera.png', title: 'Seleção de Planos', description: 'Tela onde os clientes (B2B e B2C) escolhem o plano de assinatura que melhor se adapta às suas necessidades.' },
            { src: '../../assets/Em_espera.png', title: 'Confirmação de Pagamento', description: 'Resumo detalhado do plano selecionado antes de o usuário prosseguir para a tela de pagamento seguro.' },
            { src: '../../assets/Em_espera.png', title: 'Pagamento via PIX', description: 'Geração dinâmica de QR Code e código "copia e cola" via API do Mercado Pago para uma experiência de pagamento fluida.' },
            { src: '../../assets/Em_espera.png', title: 'Login e Cadastro', description: 'Área de acesso segura para clientes gerenciarem suas coletas, assinaturas e certificados.' },
            { src: '../../assets/Em_espera.png', title: 'Dashboard da Empresa', description: 'Painel administrativo para empresas parceiras acompanharem o volume de descarte, agendar coletas e acessar certificados.' }
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
    