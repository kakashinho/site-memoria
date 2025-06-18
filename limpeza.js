const fs = require('fs');
const path = require('path');

function encontrarArquivosUsados() {
    const arquivosUsados = new Set();
    const todosArquivos = [];
    
    // Função para ler todos os arquivos
    function lerDiretorio(dir) {
        const arquivos = fs.readdirSync(dir);
        
        arquivos.forEach(arquivo => {
            const caminhoCompleto = path.join(dir, arquivo);
            const stats = fs.statSync(caminhoCompleto);
            
            if (stats.isDirectory() && !arquivo.startsWith('.')) {
                lerDiretorio(caminhoCompleto);
            } else if (arquivo.endsWith('.html') || arquivo.endsWith('.css') || arquivo.endsWith('.js')) {
                todosArquivos.push(caminhoCompleto);
                
                // Se for HTML, procurar referências
                if (arquivo.endsWith('.html')) {
                    const conteudo = fs.readFileSync(caminhoCompleto, 'utf8');
                    
                    // Procurar por CSS
                    const cssMatches = conteudo.match(/href=["']([^"']+\.css)[^"']*/g);
                    if (cssMatches) {
                        cssMatches.forEach(match => {
                            const arquivo = match.replace(/href=["']/, '').replace(/["'].*/, '');
                            arquivosUsados.add(arquivo);
                        });
                    }
                    
                    // Procurar por JS
                    const jsMatches = conteudo.match(/src=["']([^"']+\.js)[^"']*/g);
                    if (jsMatches) {
                        jsMatches.forEach(match => {
                            const arquivo = match.replace(/src=["']/, '').replace(/["'].*/, '');
                            arquivosUsados.add(arquivo);
                        });
                    }
                    
                    // Procurar por imagens
                    const imgMatches = conteudo.match(/src=["']([^"']+\.(png|jpg|jpeg|gif|svg))[^"']*/g);
                    if (imgMatches) {
                        imgMatches.forEach(match => {
                            const arquivo = match.replace(/src=["']/, '').replace(/["'].*/, '');
                            arquivosUsados.add(arquivo);
                        });
                    }
                }
            } else if (arquivo.match(/\.(png|jpg|jpeg|gif|svg)$/)) {
                todosArquivos.push(caminhoCompleto);
            }
        });
    }
    
    lerDiretorio('.');
    
    console.log('=== ARQUIVOS USADOS ===');
    arquivosUsados.forEach(arquivo => console.log('✅', arquivo));
    
    console.log('\n=== POSSÍVEIS ARQUIVOS NÃO USADOS ===');
    todosArquivos.forEach(arquivo => {
        const nomeArquivo = path.basename(arquivo);
        const caminhoRelativo = arquivo.replace('./', '');
        
        let usado = false;
        arquivosUsados.forEach(arquivoUsado => {
            if (arquivoUsado.includes(nomeArquivo) || caminhoRelativo.includes(arquivoUsado)) {
                usado = true;
            }
        });
        
        if (!usado && !arquivo.endsWith('.html')) {
            console.log('❌', arquivo);
        }
    });
}

encontrarArquivosUsados();