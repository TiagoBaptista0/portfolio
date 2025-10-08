
        const images = [
            { src: 'assets/imagens/cognito-01.png', title: 'Interface Principal', description: 'Sidebar elegante com chat inteligente e seletor de modos de operação.' },
            { src: 'assets/imagens/cognito-02.png', title: 'Chat com IA', description: 'Conversação natural com Gemini AI. Respostas contextualizadas em tempo real.' },
            { src: 'assets/imagens/cognito-03.png', title: 'Planejamento de Projeto', description: 'Fluxo guiado que coleta informações do projeto e gera plano automaticamente.' },
            
        ];

        let currentImageIndex = 0;

        function generateGalleryGrid() {
            const container = document.getElementById('gallery-grid-container');
            if (!container) return;
            let gridHTML = '';
            images.forEach((img, index) => {
                gridHTML += `
                    <div class="gallery-item" onclick="openModal(${index})">
                        <img src="${img.src}" alt="${img.title}" loading="lazy">
                        <div class="gallery-overlay"><h3>${img.title}</h3></div>
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
            if (event.target == document.getElementById('imageModal')) closeModal();
        }

        document.addEventListener('DOMContentLoaded', generateGalleryGrid);
    