// Configuração de caminhos base
(function() {
    // Detectar base URL automaticamente
    const getBasePath = () => {
        const path = window.location.pathname;
        // Se estiver em uma subpasta, detectar
        if (path.includes('/pages/')) {
            return path.substring(0, path.indexOf('/pages/') + 1);
        }
        // Se estiver na raiz
        if (path === '/' || path === '/index.html') {
            return '/';
        }
        // Caso contrário, usar a raiz
        return '/';
    };

    window.BASE_PATH = getBasePath();
    
    // Função helper para criar caminhos absolutos
    window.getAssetPath = (path) => {
        // Remove barra inicial se existir
        const cleanPath = path.replace(/^\//, '');
        return window.BASE_PATH + cleanPath;
    };
})();

