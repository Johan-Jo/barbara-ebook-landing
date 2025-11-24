// E-book Website - Beautiful Design Implementation
class EbookApp {
    constructor() {
        this.currentPage = 0;
        this.pages = [];
        this.markdownContent = '';
        this.images = [];
        this.init();
    }

    init() {
        this.setupNavigation();
        this.loadImages();
        this.loadContent();
    }

    setupNavigation() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        prevBtn.addEventListener('click', () => this.prevPage());
        nextBtn.addEventListener('click', () => this.nextPage());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevPage();
            if (e.key === 'ArrowRight') this.nextPage();
        });
    }

    loadImages() {
        // List of available images
        this.images = [
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.55.03_9c67a121.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.55.04_1ac76134.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.55.04_1b414b24.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.55.04_23f95bc8.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.55.04_41a3edf7.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.11_4b405c08.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.11_56838c6c.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.11_62e2ec70.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.11_65775056.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.11_8100caeb.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.11_a1b59225.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.11_f3cd2d4c.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.12_47b25418.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.12_5aff0734.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.12_617ef81c.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.12_f3c343b2.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.50_14250ff3.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.50_6510186f.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.50_d389dc1b.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.50_d7af7542.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.50_f931750c.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.51_08ed15df.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.56.51_0ca253ad.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.57.24_551290f0.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.57.24_673698b3.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.57.24_ef1deb2e.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.57.25_4925c01c.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.57.25_6f746cf6.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.57.25_c431d6b5.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.57.25_c68ff720.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.57.26_dce83798.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.57.26_e964ccac.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.58.29_2afe2dff.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.58.29_4f89f968.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.58.29_a5f987b9.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.58.29_e52ce530.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.58.30_18357e2a.jpg',
            'Public/Images/WhatsApp Bild 2025-11-23 kl. 10.58.30_9bed854d.jpg'
        ];
    }

    async loadContent() {
        try {
            const response = await fetch('ebook-manuscrito-completo.md');
            this.markdownContent = await response.text();
            this.parseAndCreateAllPages();
            this.showPage(0);
        } catch (error) {
            console.error('Error loading content:', error);
            this.createBasicPages();
            this.showPage(0);
        }
    }

    parseAndCreateAllPages() {
        const container = document.querySelector('.pages-container');
        
        // Page 0: Cover (already exists)
        this.pages.push({ type: 'cover', title: 'Capa', index: 0 });
        
        // Page 1: Introduction
        this.pages.push({ type: 'introduction', title: 'Introdução', index: 1 });
        this.populateIntroduction();
        
        // Page 2: Author
        this.pages.push({ type: 'author', title: 'Sobre a Autora', index: 2 });
        this.populateAuthor();
        
        // Page 3: Table of Contents
        this.pages.push({ type: 'toc', title: 'Sumário', index: 3 });
        this.populateTOC();
        
        // Parse and create all chapter pages
        this.createChapterPages(container);
        
        // Create exercise pages
        this.createExercisePages(container);
        
        // Create checklist pages
        this.createChecklistPages(container);
        
        // Create timeline page
        this.createTimelinePage(container);
        
        // Create case study pages
        this.createCaseStudyPages(container);
        
        // Create conclusion page
        this.createConclusionPage(container);
        
        this.updateNavigation();
    }

    createChapterPages(container) {
        // Find all chapters using regex
        const chapterRegex = /## (Capítulo \d+: .+?)\n([\s\S]*?)(?=\n## Capítulo |\n## ESTUDO DE CASO |\n## Conclusão |\n## Cronograma |\n## Checklist |$)/g;
        let match;
        let pageIndex = 4;
        let chapterNum = 1;
        
        while ((match = chapterRegex.exec(this.markdownContent)) !== null) {
            const title = match[1].trim();
            let content = match[2].trim();
            
            // Determine which step this chapter belongs to
            let stepNumber = null;
            let stepTitle = null;
            
            if (chapterNum <= 4) {
                stepNumber = '1';
                stepTitle = 'OLHAR DE DECORADORA';
            } else if (chapterNum <= 10) {
                stepNumber = '2';
                stepTitle = 'PLANEJANDO E EXECUTANDO';
            }
            
            const pageDiv = document.createElement('div');
            pageDiv.className = 'page chapter-page';
            pageDiv.setAttribute('data-page', pageIndex);
            
            pageDiv.innerHTML = this.createChapterPageHTML(title, content, stepNumber, stepTitle, pageIndex);
            container.appendChild(pageDiv);
            
            const chapterTitle = title.replace(/^Capítulo \d+: /, '');
            this.pages.push({ 
                type: 'chapter', 
                title: chapterTitle, 
                index: pageIndex 
            });
            
            chapterNum++;
            pageIndex++;
        }
    }

    createChapterPageHTML(title, content, stepNumber, stepTitle, pageIndex) {
        // Remove exercise section (will be separate page)
        let cleanContent = content.split('### Exercício Prático')[0].trim();
        cleanContent = cleanContent.split('---')[0].trim();
        
        // Extract tip if present - look for "Dica" patterns
        const tipPatterns = [
            /### Dica da Bárbara\s*\n([\s\S]*?)(?=\n### |\n## |$)/,
            /Dica[^#]*\n([\s\S]*?)(?=\n### |\n## |$)/,
            /💡[^#]*\n([\s\S]*?)(?=\n### |\n## |$)/
        ];
        
        let tip = null;
        for (const pattern of tipPatterns) {
            const tipMatch = cleanContent.match(pattern);
            if (tipMatch) {
                tip = tipMatch[1].trim();
                cleanContent = cleanContent.replace(tipMatch[0], '').trim();
                break;
            }
        }
        
        // Convert markdown to HTML with better parsing
        const html = this.markdownToHTML(cleanContent);
        
        // Get chapter title
        const chapterTitle = title.replace(/^Capítulo \d+: /, '');
        
        return `
            <div class="page-content">
                ${stepNumber ? `
                    <div class="step-badge">
                        <div class="step-dot"></div>
                        <span>Passo ${stepNumber}</span>
                    </div>
                    ${stepTitle ? `<h3 class="step-title">${stepTitle}</h3>` : ''}
                ` : ''}
                <h1 class="page-title">${chapterTitle}</h1>
                <div class="title-divider"></div>
                <div class="page-body chapter-content">
                    ${html}
                </div>
                ${tip ? `
                    <div class="tip-box">
                        <div class="tip-box-header">
                            <div class="tip-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                                </svg>
                            </div>
                            <div class="tip-content">
                                <h4>Dica da Bárbara</h4>
                                <p>${this.markdownToHTML(tip)}</p>
                            </div>
                        </div>
                    </div>
                ` : ''}
                <div class="page-number">
                    <p>${String(pageIndex + 1).padStart(2, '0')}</p>
                </div>
            </div>
        `;
    }

    createExercisePages(container) {
        // Find all exercise sections
        const exerciseRegex = /### Exercício Prático[^#]*([\s\S]*?)(?=\n## |\n# |$)/g;
        let match;
        let exerciseIndex = 0;
        let pageIndex = this.pages.length;
        
        while ((match = exerciseRegex.exec(this.markdownContent)) !== null) {
            const exerciseContent = match[1].trim();
            
            const pageDiv = document.createElement('div');
            pageDiv.className = 'page workbook-page';
            pageDiv.setAttribute('data-page', pageIndex);
            
            pageDiv.innerHTML = this.createWorkbookPageHTML(exerciseContent, exerciseIndex + 1, pageIndex);
            container.appendChild(pageDiv);
            
            this.pages.push({ 
                type: 'workbook', 
                title: 'Exercício Prático', 
                index: pageIndex 
            });
            
            exerciseIndex++;
            pageIndex++;
        }
    }

    createWorkbookPageHTML(content, exerciseNum, pageIndex) {
        // Parse exercise content
        const exercises = [];
        const lines = content.split('\n');
        let currentExercise = null;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // Check for numbered exercise
            const numMatch = line.match(/^(\d+)\.\s*\*\*(.+?)\*\*/);
            if (numMatch) {
                if (currentExercise) exercises.push(currentExercise);
                currentExercise = {
                    number: numMatch[1],
                    title: numMatch[2],
                    description: '',
                    items: []
                };
                continue;
            }
            
            // Check for bullet points
            if (line.startsWith('-') && currentExercise) {
                currentExercise.items.push(line.replace(/^-\s*/, ''));
                continue;
            }
            
            // Regular text
            if (line && currentExercise && !line.startsWith('**')) {
                currentExercise.description += (currentExercise.description ? ' ' : '') + line;
            }
        }
        
        if (currentExercise) exercises.push(currentExercise);
        
        const exercisesHTML = exercises.map((ex, idx) => {
            const itemsHTML = ex.items.length > 0 
                ? `<ul class="exercise-list">${ex.items.map(item => `<li>${this.markdownToHTML(item)}</li>`).join('')}</ul>`
                : '';
            
            return `
                <div class="exercise-item">
                    <div class="exercise-item-header">
                        <div class="exercise-number">${ex.number}</div>
                        <div>
                            <h3 class="exercise-title">${ex.title}</h3>
                            ${ex.description ? `<p class="exercise-description">${this.markdownToHTML(ex.description)}</p>` : ''}
                        </div>
                    </div>
                    <div class="exercise-input-area">
                        ${itemsHTML || '<div class="exercise-input-line"></div><div class="exercise-input-line"></div>'}
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="page-content">
                <div class="page-header">
                    <div class="page-badge">
                        <span>✏️</span>
                        <span>Exercício Prático</span>
                    </div>
                    <h1 class="page-title">Agora é a Sua Vez</h1>
                    <div class="title-divider"></div>
                    <p class="text-center" style="max-width: 36rem; margin: 0 auto; color: var(--text-secondary);">
                        Use este espaço para aplicar o que você aprendeu. Responda as perguntas abaixo para desenvolver o conceito da sua primeira decoração.
                    </p>
                </div>
                <div class="page-body workbook-content">
                    ${exercisesHTML}
                </div>
                <div class="page-number">
                    <p>${String(pageIndex + 1).padStart(2, '0')}</p>
                </div>
            </div>
        `;
    }

    createChecklistPages(container) {
        // Find checklist sections
        const checklistRegex = /## Checklist[^#]*([\s\S]*?)(?=\n## |\n# |$)/gi;
        let match;
        let pageIndex = this.pages.length;
        
        while ((match = checklistRegex.exec(this.markdownContent)) !== null) {
            const checklistContent = match[1].trim();
            
            const pageDiv = document.createElement('div');
            pageDiv.className = 'page checklist-page';
            pageDiv.setAttribute('data-page', pageIndex);
            
            pageDiv.innerHTML = this.createChecklistPageHTML(checklistContent, pageIndex);
            container.appendChild(pageDiv);
            
            this.pages.push({ 
                type: 'checklist', 
                title: 'Checklist', 
                index: pageIndex 
            });
            
            pageIndex++;
        }
        
        // If no checklist found, create a default one
        if (pageIndex === this.pages.length) {
            const pageDiv = document.createElement('div');
            pageDiv.className = 'page checklist-page';
            pageDiv.setAttribute('data-page', pageIndex);
            pageDiv.innerHTML = this.createDefaultChecklistPage(pageIndex);
            container.appendChild(pageDiv);
            this.pages.push({ type: 'checklist', title: 'Checklist', index: pageIndex });
        }
    }

    createChecklistPageHTML(content, pageIndex) {
        // Parse checklist sections
        const sections = [];
        const lines = content.split('\n');
        let currentSection = null;
        
        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed) continue;
            
            // Section header (###)
            if (trimmed.startsWith('###')) {
                if (currentSection) sections.push(currentSection);
                currentSection = {
                    title: trimmed.replace(/^###\s*/, ''),
                    icon: this.getChecklistIcon(currentSection?.title || trimmed),
                    items: []
                };
                continue;
            }
            
            // Checklist item (-)
            if (trimmed.startsWith('-') && currentSection) {
                const item = trimmed.replace(/^-\s*/, '').replace(/\*\*/g, '');
                currentSection.items.push(item);
            }
        }
        
        if (currentSection) sections.push(currentSection);
        
        const sectionsHTML = sections.map(section => `
            <div class="checklist-section">
                <div class="checklist-section-header">
                    <div class="checklist-section-icon">
                        ${section.icon}
                    </div>
                    <h3 class="checklist-section-title">${section.title}</h3>
                </div>
                <div class="checklist-items">
                    ${section.items.map(item => `
                        <label class="checklist-item">
                            <input type="checkbox">
                            <span>${item}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');
        
        return `
            <div class="page-content">
                <div class="page-header">
                    <div class="page-badge">
                        <span>✅</span>
                        <span>Organização Profissional</span>
                    </div>
                    <h1 class="page-title">Checklist da Sua Decoração</h1>
                    <div class="title-divider"></div>
                    <p class="text-center" style="max-width: 36rem; margin: 0 auto; color: var(--text-secondary);">
                        Use esta checklist completa para garantir que nenhum detalhe seja esquecido no planejamento e execução da sua decoração.
                    </p>
                </div>
                <div class="page-body">
                    <div class="checklist-grid">
                        ${sectionsHTML}
                    </div>
                    <div style="margin-top: 3rem; padding: 1.5rem; background: var(--white); border: 1px solid var(--border); border-radius: 4px; text-align: center;">
                        <p style="font-size: 0.875rem; color: var(--text-tertiary); margin: 0;">
                            <span style="font-family: var(--font-serif); font-style: italic;">Dica:</span> Imprima esta checklist e mantenha-a com você durante todo o processo de planejamento.
                        </p>
                    </div>
                </div>
                <div class="page-number">
                    <p>${String(pageIndex + 1).padStart(2, '0')}</p>
                </div>
            </div>
        `;
    }

    createDefaultChecklistPage(pageIndex) {
        const checklistSections = [
            {
                title: 'Local',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
                items: [
                    'Visita técnica realizada',
                    'Medidas do espaço anotadas',
                    'Pontos de energia mapeados',
                    'Restrições identificadas',
                    'Planta baixa desenhada'
                ]
            },
            {
                title: 'Mesa Principal',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>',
                items: [
                    'Toalha e tecidos definidos',
                    'Louça e talheres confirmados',
                    'Centro de mesa planejado',
                    'Velas e iluminação',
                    'Elementos decorativos'
                ]
            },
            {
                title: 'Mesas de Convidados',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
                items: [
                    'Quantidade de mesas calculada',
                    'Disposição no espaço definida',
                    'Centros de mesa produzidos',
                    'Marcação de lugares',
                    'Números/nomes de mesa'
                ]
            },
            {
                title: 'Iluminação',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21h6M12 3a6 6 0 0 0-6 6c0 2.5 2 4.5 4.5 4.5h3c2.5 0 4.5-2 4.5-4.5a6 6 0 0 0-6-6z"/></svg>',
                items: [
                    'Iluminação ambiente planejada',
                    'Spots direcionais posicionados',
                    'Iluminação cênica definida',
                    'Velas contabilizadas',
                    'Teste de iluminação feito'
                ]
            },
            {
                title: 'Flores e Arranjos',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="4"/></svg>',
                items: [
                    'Flores encomendadas',
                    'Fornecedor confirmado',
                    'Arranjos produzidos',
                    'Teste de durabilidade',
                    'Backup preparado'
                ]
            },
            {
                title: 'Mobiliário',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>',
                items: [
                    'Cadeiras confirmadas',
                    'Mesas reservadas',
                    'Móveis de apoio definidos',
                    'Transporte organizado',
                    'Montagem planejada'
                ]
            },
            {
                title: 'Equipe',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
                items: [
                    'Equipe de montagem escalada',
                    'Horários definidos',
                    'Responsabilidades divididas',
                    'Plano B preparado',
                    'Contatos atualizados'
                ]
            }
        ];
        
        const sectionsHTML = checklistSections.map(section => `
            <div class="checklist-section">
                <div class="checklist-section-header">
                    <div class="checklist-section-icon">
                        ${section.icon}
                    </div>
                    <h3 class="checklist-section-title">${section.title}</h3>
                </div>
                <div class="checklist-items">
                    ${section.items.map(item => `
                        <label class="checklist-item">
                            <input type="checkbox">
                            <span>${item}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');
        
        return `
            <div class="page-content">
                <div class="page-header">
                    <div class="page-badge">
                        <span>✅</span>
                        <span>Organização Profissional</span>
                    </div>
                    <h1 class="page-title">Checklist da Sua Decoração</h1>
                    <div class="title-divider"></div>
                    <p class="text-center" style="max-width: 36rem; margin: 0 auto; color: var(--text-secondary);">
                        Use esta checklist completa para garantir que nenhum detalhe seja esquecido no planejamento e execução da sua decoração.
                    </p>
                </div>
                <div class="page-body">
                    <div class="checklist-grid">
                        ${sectionsHTML}
                    </div>
                    <div style="margin-top: 3rem; padding: 1.5rem; background: var(--white); border: 1px solid var(--border); border-radius: 4px; text-align: center;">
                        <p style="font-size: 0.875rem; color: var(--text-tertiary); margin: 0;">
                            <span style="font-family: var(--font-serif); font-style: italic;">Dica:</span> Imprima esta checklist e mantenha-a com você durante todo o processo de planejamento.
                        </p>
                    </div>
                </div>
                <div class="page-number">
                    <p>${String(pageIndex + 1).padStart(2, '0')}</p>
                </div>
            </div>
        `;
    }

    getChecklistIcon(title) {
        const icons = {
            'Local': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
            'Mesa': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>',
            'Iluminação': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21h6M12 3a6 6 0 0 0-6 6c0 2.5 2 4.5 4.5 4.5h3c2.5 0 4.5-2 4.5-4.5a6 6 0 0 0-6-6z"/></svg>',
            'Flores': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="4"/></svg>',
            'Mobiliário': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>',
            'Equipe': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
        };
        
        for (const [key, icon] of Object.entries(icons)) {
            if (title.includes(key)) return icon;
        }
        
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>';
    }

    createTimelinePage(container) {
        // Find timeline/cronograma section
        const timelineRegex = /## Cronograma[^#]*([\s\S]*?)(?=\n## |\n# |$)/gi;
        const match = timelineRegex.exec(this.markdownContent);
        
        const pageIndex = this.pages.length;
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page timeline-page';
        pageDiv.setAttribute('data-page', pageIndex);
        
        if (match) {
            pageDiv.innerHTML = this.createTimelinePageHTML(match[1], pageIndex);
        } else {
            pageDiv.innerHTML = this.createDefaultTimelinePage(pageIndex);
        }
        
        container.appendChild(pageDiv);
        
        this.pages.push({ 
            type: 'timeline', 
            title: 'Cronograma', 
            index: pageIndex 
        });
    }

    createTimelinePageHTML(content, pageIndex) {
        // Parse timeline phases
        const phases = [];
        const phaseRegex = /### (.+?)\n([\s\S]*?)(?=\n### |$)/g;
        let match;
        
        while ((match = phaseRegex.exec(content)) !== null) {
            const period = match[1].trim();
            const tasksText = match[2].trim();
            const tasks = tasksText.split('\n- ').filter(t => t.trim()).map(t => t.replace(/^-\s*/, '').trim());
            
            phases.push({ period, tasks });
        }
        
        const phasesHTML = phases.map((phase, idx) => {
            const phaseClass = phase.period.includes('30') ? 'phase-30' :
                              phase.period.includes('15') ? 'phase-15' :
                              phase.period.includes('7') ? 'phase-7' :
                              phase.period.includes('2') ? 'phase-2' : 'phase-0';
            
            return `
                <div class="timeline-phase">
                    <div class="timeline-phase-card">
                        <div class="timeline-phase-header ${phaseClass}">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                            </svg>
                            <h3>${phase.period}</h3>
                        </div>
                        <div class="timeline-phase-tasks">
                            <ul>
                                ${phase.tasks.map(task => `<li>${this.markdownToHTML(task)}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="page-content">
                <div class="page-header">
                    <div class="page-badge">
                        <span>📅</span>
                        <span>Planejamento Temporal</span>
                    </div>
                    <h1 class="page-title">Cronograma da Festa</h1>
                    <div class="title-divider"></div>
                    <p class="text-center" style="max-width: 36rem; margin: 0 auto; color: var(--text-secondary);">
                        Organize seu tempo de forma profissional. Este cronograma garante que você execute cada etapa no momento ideal.
                    </p>
                </div>
                <div class="page-body">
                    <div class="timeline-container">
                        <div class="timeline-line"></div>
                        ${phasesHTML}
                    </div>
                    <div style="margin-top: 3rem; display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
                        <div style="padding: 1.5rem; background: var(--white); border: 1px solid var(--border); border-radius: 4px;">
                            <h4 style="font-family: var(--font-serif); font-size: 1.125rem; color: var(--text-primary); margin-bottom: 0.5rem; font-weight: 600;">Dica de Ouro</h4>
                            <p style="font-size: 0.875rem; color: var(--text-tertiary); margin: 0;">Sempre chegue ao local com pelo menos 4 horas de antecedência. Imprevistos acontecem e você precisa de margem para ajustes.</p>
                        </div>
                        <div style="padding: 1.5rem; background: var(--white); border: 1px solid var(--border); border-radius: 4px;">
                            <h4 style="font-family: var(--font-serif); font-size: 1.125rem; color: var(--text-primary); margin-bottom: 0.5rem; font-weight: 600;">Flexibilidade</h4>
                            <p style="font-size: 0.875rem; color: var(--text-tertiary); margin: 0;">Adapte este cronograma à sua realidade. Eventos menores podem ter prazos mais curtos, mas nunca pule etapas importantes.</p>
                        </div>
                    </div>
                </div>
                <div class="page-number">
                    <p>${String(pageIndex + 1).padStart(2, '0')}</p>
                </div>
            </div>
        `;
    }

    createDefaultTimelinePage(pageIndex) {
        const phases = [
            {
                period: '30 Dias Antes',
                tasks: [
                    'Primeira reunião com cliente e definição de conceito',
                    'Visita técnica ao espaço do evento',
                    'Criação de mood board e apresentação ao cliente',
                    'Aprovação do orçamento e assinatura de contrato',
                    'Reserva de fornecedores (flores, móveis, iluminação)',
                    'Definição da paleta de cores e materiais'
                ]
            },
            {
                period: '15 Dias Antes',
                tasks: [
                    'Confirmação de todos os fornecedores',
                    'Compra de materiais decorativos',
                    'Produção de elementos personalizados',
                    'Confirmação final de quantidades (flores, velas, etc.)',
                    'Planejamento detalhado da montagem',
                    'Definição de equipe e horários'
                ]
            },
            {
                period: '7 Dias Antes',
                tasks: [
                    'Revisão completa do checklist',
                    'Confirmação de entrega com todos os fornecedores',
                    'Preparação de elementos que podem ser feitos com antecedência',
                    'Organização de materiais e ferramentas',
                    'Briefing final com equipe de montagem',
                    'Verificação de condições climáticas (eventos externos)'
                ]
            },
            {
                period: '2-3 Dias Antes',
                tasks: [
                    'Produção de arranjos florais (se aplicável)',
                    'Preparação de kits de montagem',
                    'Conferência de todo material',
                    'Última visita ao local (se possível)',
                    'Confirmação de transporte',
                    'Separação de backup de materiais essenciais'
                ]
            },
            {
                period: 'Dia da Festa',
                tasks: [
                    'Chegada ao local com antecedência mínima de 4 horas',
                    'Montagem de estruturas principais',
                    'Disposição de mobiliário',
                    'Montagem de decoração',
                    'Ajustes de iluminação',
                    'Retoques finais e fotos do resultado',
                    'Briefing com equipe de evento',
                    'Desmontagem no horário combinado'
                ]
            }
        ];
        
        const phasesHTML = phases.map((phase, idx) => {
            const phaseClass = phase.period.includes('30') ? 'phase-30' :
                              phase.period.includes('15') ? 'phase-15' :
                              phase.period.includes('7') ? 'phase-7' :
                              phase.period.includes('2') ? 'phase-2' : 'phase-0';
            
            return `
                <div class="timeline-phase">
                    <div class="timeline-phase-card">
                        <div class="timeline-phase-header ${phaseClass}">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                            </svg>
                            <h3>${phase.period}</h3>
                        </div>
                        <div class="timeline-phase-tasks">
                            <ul>
                                ${phase.tasks.map(task => `<li>${task}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        return `
            <div class="page-content">
                <div class="page-header">
                    <div class="page-badge">
                        <span>📅</span>
                        <span>Planejamento Temporal</span>
                    </div>
                    <h1 class="page-title">Cronograma da Festa</h1>
                    <div class="title-divider"></div>
                    <p class="text-center" style="max-width: 36rem; margin: 0 auto; color: var(--text-secondary);">
                        Organize seu tempo de forma profissional. Este cronograma garante que você execute cada etapa no momento ideal.
                    </p>
                </div>
                <div class="page-body">
                    <div class="timeline-container">
                        <div class="timeline-line"></div>
                        ${phasesHTML}
                    </div>
                    <div style="margin-top: 3rem; display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
                        <div style="padding: 1.5rem; background: var(--white); border: 1px solid var(--border); border-radius: 4px;">
                            <h4 style="font-family: var(--font-serif); font-size: 1.125rem; color: var(--text-primary); margin-bottom: 0.5rem; font-weight: 600;">Dica de Ouro</h4>
                            <p style="font-size: 0.875rem; color: var(--text-tertiary); margin: 0;">Sempre chegue ao local com pelo menos 4 horas de antecedência. Imprevistos acontecem e você precisa de margem para ajustes.</p>
                        </div>
                        <div style="padding: 1.5rem; background: var(--white); border: 1px solid var(--border); border-radius: 4px;">
                            <h4 style="font-family: var(--font-serif); font-size: 1.125rem; color: var(--text-primary); margin-bottom: 0.5rem; font-weight: 600;">Flexibilidade</h4>
                            <p style="font-size: 0.875rem; color: var(--text-tertiary); margin: 0;">Adapte este cronograma à sua realidade. Eventos menores podem ter prazos mais curtos, mas nunca pule etapas importantes.</p>
                        </div>
                    </div>
                </div>
                <div class="page-number">
                    <p>${String(pageIndex + 1).padStart(2, '0')}</p>
                </div>
            </div>
        `;
    }

    createCaseStudyPages(container) {
        // Find case studies
        const caseStudyRegex = /## ESTUDO DE CASO \d+[^#]*([\s\S]*?)(?=\n## |\n# |$)/gi;
        let match;
        let pageIndex = this.pages.length;
        let caseStudyNum = 1;
        
        while ((match = caseStudyRegex.exec(this.markdownContent)) !== null) {
            const caseContent = match[0];
            const titleMatch = caseContent.match(/## ESTUDO DE CASO \d+:\s*(.+?)\n/);
            const title = titleMatch ? titleMatch[1].trim() : `Estudo de Caso ${caseStudyNum}`;
            
            const pageDiv = document.createElement('div');
            pageDiv.className = 'page case-study-page';
            pageDiv.setAttribute('data-page', pageIndex);
            
            // Get a random image for this case study
            const imageIndex = (caseStudyNum - 1) % this.images.length;
            const imageUrl = this.images[imageIndex + 5] || this.images[0];
            
            pageDiv.innerHTML = this.createCaseStudyPageHTML(title, caseContent, imageUrl, pageIndex);
            container.appendChild(pageDiv);
            
            this.pages.push({ 
                type: 'case-study', 
                title: title, 
                index: pageIndex 
            });
            
            caseStudyNum++;
            pageIndex++;
        }
    }

    createCaseStudyPageHTML(title, content, imageUrl, pageIndex) {
        // Extract key information
        const conceptMatch = content.match(/### Conceito\s*\n(.+?)\n/);
        const concept = conceptMatch ? conceptMatch[1].trim() : '';
        
        const styleMatch = content.match(/### Estilo[^#]*\n(.+?)\n/);
        const style = styleMatch ? styleMatch[1].trim() : '';
        
        const paletteMatch = content.match(/### Paleta[^#]*\n([\s\S]*?)(?=\n### |$)/);
        let palette = [];
        if (paletteMatch) {
            const paletteText = paletteMatch[1];
            const colorMatches = paletteText.match(/- (.+?)\n/g);
            if (colorMatches) {
                palette = colorMatches.map(m => m.replace(/^-\s*/, '').trim());
            }
        }
        
        // Extract elements
        const elementsMatch = content.match(/### Elementos[^#]*\n([\s\S]*?)(?=\n### |$)/);
        let elements = [];
        if (elementsMatch) {
            const elementsText = elementsMatch[1];
            const elementMatches = elementsText.match(/- (.+?)\n/g);
            if (elementMatches) {
                elements = elementMatches.map(m => m.replace(/^-\s*/, '').trim());
            }
        }
        
        // Extract description
        const descMatch = content.match(/### Descrição[^#]*\n([\s\S]*?)(?=\n### |$)/);
        const description = descMatch ? descMatch[1].trim() : '';
        
        // Convert hex colors if needed
        const paletteColors = palette.map(color => {
            if (color.startsWith('#')) return color;
            // Try to extract hex from text
            const hexMatch = color.match(/#[0-9A-Fa-f]{6}/);
            return hexMatch ? hexMatch[0] : '#C9A96E';
        });
        
        return `
            <div class="page-content">
                <div class="page-header">
                    <p class="section-label">Estudo de Caso</p>
                    <h1 class="page-title">${title}</h1>
                    <div class="title-divider"></div>
                </div>
                <div class="page-body">
                    <div class="case-study-hero">
                        <img src="${imageUrl}" alt="${title}" class="case-study-image">
                    </div>
                    <div class="case-study-info-grid">
                        ${concept ? `
                            <div class="case-study-info-card">
                                <div class="case-study-info-header">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                                    </svg>
                                    <span class="case-study-info-label">Conceito</span>
                                </div>
                                <p class="case-study-info-value">${concept}</p>
                            </div>
                        ` : ''}
                        ${style ? `
                            <div class="case-study-info-card">
                                <div class="case-study-info-header">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/>
                                    </svg>
                                    <span class="case-study-info-label">Estilo</span>
                                </div>
                                <p class="case-study-info-value">${style}</p>
                            </div>
                        ` : ''}
                        ${paletteColors.length > 0 ? `
                            <div class="case-study-info-card">
                                <div class="case-study-info-header">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
                                    </svg>
                                    <span class="case-study-info-label">Paleta de Cores</span>
                                </div>
                                <div class="case-study-palette">
                                    ${paletteColors.map(color => `
                                        <div class="case-study-color" style="background-color: ${color};" title="${color}"></div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                    ${description ? `
                        <div class="case-study-description">
                            ${this.markdownToHTML(description)}
                        </div>
                    ` : ''}
                    ${elements.length > 0 ? `
                        <div class="case-study-elements">
                            <h3>Principais Elementos Utilizados</h3>
                            <div class="case-study-elements-grid">
                                ${elements.map(element => `
                                    <div class="case-study-element">${element}</div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    <div class="case-study-lesson">
                        <h4>Lição Aprendida</h4>
                        <p>O sucesso deste projeto veio da clareza do conceito e da coerência entre todos os elementos. Quando cada detalhe conversa com a ideia central, o resultado é sempre harmonioso e profissional.</p>
                    </div>
                </div>
                <div class="page-number">
                    <p>${String(pageIndex + 1).padStart(2, '0')}</p>
                </div>
            </div>
        `;
    }

    createConclusionPage(container) {
        // Find conclusion
        const conclusionRegex = /## Conclusão[^#]*([\s\S]*?)(?=\n## |$)/gi;
        const match = conclusionRegex.exec(this.markdownContent);
        
        const pageIndex = this.pages.length;
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page conclusion-page';
        pageDiv.setAttribute('data-page', pageIndex);
        
        // Get a background image
        const bgImage = this.images[0] || '';
        
        pageDiv.innerHTML = this.createConclusionPageHTML(match ? match[1] : '', bgImage, pageIndex);
        container.appendChild(pageDiv);
        
        this.pages.push({ 
            type: 'conclusion', 
            title: 'Conclusão', 
            index: pageIndex 
        });
    }

    createConclusionPageHTML(content, bgImage, pageIndex) {
        const conclusionHTML = content ? this.markdownToHTML(content) : `
            <p>Parabéns por chegar até aqui! Você acabou de dar os primeiros passos em direção a uma carreira transformadora no mundo da decoração de festas.</p>
            <p>Lembre-se: decorar não é um dom, é uma habilidade que se desenvolve com prática, dedicação e método. Você já aprendeu os fundamentos essenciais – agora é hora de colocar em prática.</p>
            <p>Comece pequeno. Ofereça-se para decorar uma festa de amigos ou familiares. Use o checklist e o cronograma que você aprendeu aqui. Cada projeto é uma oportunidade de aperfeiçoar seu olhar e sua técnica.</p>
        `;
        
        return `
            <div class="conclusion-background">
                <img src="${bgImage}" alt="Decoração elegante" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="conclusion-overlay"></div>
            </div>
            <div class="page-content">
                <div class="conclusion-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </div>
                <div class="conclusion-content">
                    <h1 class="page-title">Seus Próximos Passos</h1>
                    <div class="title-divider"></div>
                    <div class="page-body">
                        ${conclusionHTML}
                        <div class="conclusion-cta">
                            <h2>Continue Sua Jornada</h2>
                            <p style="color: var(--text-tertiary); margin-bottom: 1.5rem;">Quer se aprofundar ainda mais e transformar a decoração em seu negócio? Junte-se à nossa comunidade!</p>
                            <div class="conclusion-cta-buttons">
                                <a href="#" class="cta-button cta-button-primary">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                    Siga no Instagram
                                </a>
                                <a href="#" class="cta-button cta-button-secondary">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                    Receber Novidades
                                </a>
                            </div>
                            <div style="margin-top: 1.5rem; text-align: center;">
                                <p style="font-size: 0.875rem; color: var(--text-muted); margin: 0;">@barbaramarquesdecoracoes</p>
                            </div>
                        </div>
                        <div class="conclusion-steps">
                            <div class="conclusion-step">
                                <div class="conclusion-step-number">1</div>
                                <h3>Pratique</h3>
                                <p>Comece seu primeiro projeto usando o método aprendido</p>
                            </div>
                            <div class="conclusion-step">
                                <div class="conclusion-step-number">2</div>
                                <h3>Documente</h3>
                                <p>Fotografe seus trabalhos para criar seu portfólio</p>
                            </div>
                            <div class="conclusion-step">
                                <div class="conclusion-step-number">3</div>
                                <h3>Compartilhe</h3>
                                <p>Mostre seu trabalho nas redes sociais</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-number">
                    <p>${String(pageIndex + 1).padStart(2, '0')}</p>
                </div>
            </div>
        `;
    }

    markdownToHTML(text) {
        if (!text) return '';
        
        // Split into paragraphs first
        let paragraphs = text.split(/\n\n+/).filter(p => p.trim());
        let html = '';
        
        for (let para of paragraphs) {
            para = para.trim();
            
            // Skip if empty
            if (!para) continue;
            
            // Headings
            if (para.startsWith('### ')) {
                const heading = para.replace(/^###\s+/, '');
                html += `<h3>${this.processInlineMarkdown(heading)}</h3>`;
                continue;
            }
            
            if (para.startsWith('## ')) {
                const heading = para.replace(/^##\s+/, '');
                html += `<h2>${this.processInlineMarkdown(heading)}</h2>`;
                continue;
            }
            
            // Lists
            if (para.includes('\n- ') || para.startsWith('- ')) {
                const listItems = para.split(/\n- /).filter(item => item.trim());
                if (listItems.length > 0) {
                    // First item might not have the dash prefix
                    if (!listItems[0].startsWith('-')) {
                        listItems[0] = listItems[0].replace(/^-\s*/, '');
                    }
                    html += '<ul>';
                    for (const item of listItems) {
                        const cleanItem = item.replace(/^-\s*/, '').trim();
                        if (cleanItem) {
                            html += `<li>${this.processInlineMarkdown(cleanItem)}</li>`;
                        }
                    }
                    html += '</ul>';
                }
                continue;
            }
            
            // Regular paragraph
            html += `<p>${this.processInlineMarkdown(para)}</p>`;
        }
        
        return html;
    }
    
    processInlineMarkdown(text) {
        return text
            // Bold
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            // Italic
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            // Code (if any)
            .replace(/`(.+?)`/g, '<code>$1</code>');
    }

    populateIntroduction() {
        const introContent = document.getElementById('introductionContent');
        if (!introContent) return;
        
        const introMatch = this.markdownContent.match(/## Introdução\s*([\s\S]*?)(?=\n## |$)/);
        if (introMatch) {
            introContent.innerHTML = this.markdownToHTML(introMatch[1]);
        }
    }

    populateAuthor() {
        const authorContent = document.getElementById('authorContent');
        if (!authorContent) return;
        
        const authorMatch = this.markdownContent.match(/## Sobre a Autora\s*([\s\S]*?)(?=\n## |$)/);
        if (authorMatch) {
            const paragraphs = authorMatch[1].split('\n\n').filter(p => p.trim() && !p.startsWith('###'));
            authorContent.innerHTML = `
                <h2>Bárbara Marques</h2>
                ${paragraphs.slice(0, 3).map(p => `<p>${this.markdownToHTML(p)}</p>`).join('')}
            `;
        }
    }

    populateTOC() {
        const tocContent = document.getElementById('tocContent');
        if (!tocContent) return;
        
        // Build TOC from pages array (will be populated after all pages are created)
        // For now, create a basic structure
        setTimeout(() => {
            const passo1Pages = this.pages.filter(p => p.index >= 4 && p.index < 8);
            const passo2Pages = this.pages.filter(p => p.index >= 8 && p.index < 14);
            const caseStudyPages = this.pages.filter(p => p.type === 'case-study');
            
            let tocHTML = '<div class="toc-sections">';
            
            if (passo1Pages.length > 0) {
                tocHTML += `
                    <div class="toc-section">
                        <div class="toc-step-header">
                            <div class="toc-icon">✨</div>
                            <div>
                                <p class="toc-step-label">Passo 1</p>
                                <h2 class="toc-step-title">Olhar de Decoradora</h2>
                            </div>
                        </div>
                        <div class="toc-items">
                            ${passo1Pages.map(page => `
                                <button class="toc-item" onclick="app.goToPage(${page.index})">
                                    <span>${page.title}</span>
                                    <span class="toc-page-num">${String(page.index + 1).padStart(2, '0')}</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
            
            if (passo2Pages.length > 0) {
                tocHTML += `
                    <div class="toc-section">
                        <div class="toc-step-header">
                            <div class="toc-icon">🎨</div>
                            <div>
                                <p class="toc-step-label">Passo 2</p>
                                <h2 class="toc-step-title">Planejando e Executando</h2>
                            </div>
                        </div>
                        <div class="toc-items">
                            ${passo2Pages.map(page => `
                                <button class="toc-item" onclick="app.goToPage(${page.index})">
                                    <span>${page.title}</span>
                                    <span class="toc-page-num">${String(page.index + 1).padStart(2, '0')}</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
            
            if (caseStudyPages.length > 0) {
                tocHTML += `
                    <div class="toc-section">
                        <div class="toc-step-header">
                            <div class="toc-icon">💡</div>
                            <div>
                                <p class="toc-step-label">Estudos de Caso</p>
                                <h2 class="toc-step-title">Projetos Reais</h2>
                            </div>
                        </div>
                        <div class="toc-items">
                            ${caseStudyPages.map(page => `
                                <button class="toc-item" onclick="app.goToPage(${page.index})">
                                    <span>${page.title}</span>
                                    <span class="toc-page-num">${String(page.index + 1).padStart(2, '0')}</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
            
            tocHTML += '</div>';
            tocContent.innerHTML = tocHTML;
        }, 100);
    }

    createBasicPages() {
        this.pages = [
            { type: 'cover', title: 'Capa', index: 0 },
            { type: 'introduction', title: 'Introdução', index: 1 },
            { type: 'author', title: 'Sobre a Autora', index: 2 },
            { type: 'toc', title: 'Sumário', index: 3 }
        ];
    }

    showPage(index) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        const pages = document.querySelectorAll('.page');
        if (pages[index]) {
            pages[index].classList.add('active');
            pages[index].scrollTop = 0;
            window.scrollTo(0, 0);
        }

        this.currentPage = index;
        this.updateNavigation();
    }

    nextPage() {
        const totalPages = document.querySelectorAll('.page').length;
        if (this.currentPage < totalPages - 1) {
            this.showPage(this.currentPage + 1);
        }
    }

    prevPage() {
        if (this.currentPage > 0) {
            this.showPage(this.currentPage - 1);
        }
    }

    goToPage(index) {
        this.showPage(index);
    }

    updateNavigation() {
        const totalPages = document.querySelectorAll('.page').length;
        const currentPageEl = document.getElementById('currentPage');
        const totalPagesEl = document.getElementById('totalPages');
        const pageTitleEl = document.getElementById('pageTitle');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (currentPageEl) currentPageEl.textContent = this.currentPage + 1;
        if (totalPagesEl) totalPagesEl.textContent = totalPages;
        if (pageTitleEl) {
            const page = this.pages[this.currentPage];
            pageTitleEl.textContent = page ? page.title : 'Página';
        }

        if (prevBtn) prevBtn.disabled = this.currentPage === 0;
        if (nextBtn) nextBtn.disabled = this.currentPage >= totalPages - 1;
    }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new EbookApp();
});
