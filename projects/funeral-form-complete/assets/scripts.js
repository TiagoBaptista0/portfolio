
        // ===== DADOS DAS IMAGENS (IMPORTANTE: ATUALIZE AQUI) =====
        const images = [
            { src: 'assets/imagens/funeral-tela-1.png', title: 'Formulário de Entrada de Dados', description: 'Interface principal para a coleta de informações, dividida em seções claras e com campos obrigatórios.' },
            { src: 'assets/imagens/funeral-tela-2.png', title: 'Validação e Formatação', description: 'Exemplo da formatação automática de CPF e Telefone, além da validação de campos para evitar erros.' },
            { src: 'assets/imagens/funeral-tela-3.png', title: 'Relatório Final para Impressão', description: 'O documento gerado, com layout profissional e pronto para ser impresso ou salvo em PDF pelo navegador.' }
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
    