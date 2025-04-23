from playwright.sync_api import sync_playwright
import os
import time
import json

def scrape_site_memoria():
    try:
        print("Iniciando script...")
        
        # Inicializa o Playwright
        with sync_playwright() as p:
            print("Playwright inicializado")
            
            # Inicia o navegador
            browser = p.chromium.launch(headless=False)
            print("Navegador iniciado")
            
            # Cria uma nova página/aba
            page = browser.new_page()
            print("Nova página criada")
            
            # Define o caminho para o arquivo HTML local
            html_path = os.path.abspath("../data/site_memoria.html")
            file_url = f"file://{html_path}"
            
            print(f"Tentando abrir: {file_url}")
            
            # Verifica se o arquivo existe
            if not os.path.exists(html_path):
                print(f"ERRO: O arquivo {html_path} não existe!")
                return
            
            # Navega para o arquivo local
            page.goto(file_url)
            print("Página carregada")
            
            # Espera o conteúdo carregar
            time.sleep(3)
            print("Aguardou carregamento")
            
            # Extrair dados estruturados do Centro de Memória
            memoria_data = {
                "titulo_principal": "",
                "secoes": [],
                "documentos": [],
                "entrevistas": [],
                "catalogos": []
            }
            
            # Extrair título principal
            titulo = page.query_selector("h2#centro_memoria")
            if titulo:
                memoria_data["titulo_principal"] = titulo.inner_text()
                print(f"Título principal: {memoria_data['titulo_principal']}")
            
            # Extrair seções principais
            secoes = page.query_selector_all("h3")
            for secao in secoes:
                id_secao = secao.get_attribute("id")
                texto_secao = secao.inner_text()
                if id_secao and texto_secao:
                    # Encontrar o parágrafo que segue o título da seção
                    next_p = secao.evaluate("node => node.nextElementSibling")
                    conteudo = ""
                    if next_p and next_p.tag_name.lower() == "p":
                        conteudo = next_p.inner_text()
                    
                    memoria_data["secoes"].append({
                        "id": id_secao,
                        "titulo": texto_secao,
                        "conteudo": conteudo
                    })
                    print(f"Seção encontrada: {texto_secao}")
            
            # Extrair links de documentos/entrevistas/catálogos
            links = page.query_selector_all("a")
            for link in links:
                href = link.get_attribute("href")
                texto = link.inner_text()
                
                if not href or not texto:
                    continue
                    
                if "drive.google.com" in str(href):
                    # Determinar categoria do link
                    texto_lower = texto.lower()
                    
                    if "entrevista" in texto_lower:
                        memoria_data["entrevistas"].append({
                            "titulo": texto,
                            "url": href
                        })
                        print(f"Entrevista encontrada: {texto}")
                    elif "catálogo" in texto_lower:
                        memoria_data["catalogos"].append({
                            "titulo": texto,
                            "url": href
                        })
                        print(f"Catálogo encontrado: {texto}")
                    else:
                        memoria_data["documentos"].append({
                            "titulo": texto,
                            "url": href
                        })
                        print(f"Documento encontrado: {texto}")
            
            # Salvar dados estruturados em JSON
            output_path = "../output/centro_memoria_dados.json"
            with open(output_path, "w", encoding="utf-8") as f:
                json.dump(memoria_data, f, ensure_ascii=False, indent=4)
            print(f"Dados estruturados salvos em {os.path.abspath(output_path)}")
            
            # Salvar HTML renderizado
            html_content = page.content()
            with open("../output/memoria_renderizado.html", "w", encoding="utf-8") as f:
                f.write(html_content)
            print("HTML renderizado salvo")
            
            # Capturar screenshot
            page.screenshot(path="../output/memoria_screenshot.png")
            print("Screenshot salvo")
            
            # Fechar o navegador
            browser.close()
            print("Navegador fechado")
            
            print("Extração concluída com sucesso!")
    
    except Exception as e:
        print(f"ERRO: {str(e)}")

if __name__ == "__main__":
    scrape_site_memoria()
    input("Pressione Enter para sair...")