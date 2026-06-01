function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function setup() {
  // 1. Desativa o canvas padrão do p5.js para focar na interface web pura
  noCanvas();

  // 2. IMPORTAÇÃO DE FONTES GOOGLE E CONFIGURAÇÃO CSS (Estilo Avançado, Colorido e Fundo Roxo)
  let estilos = createElement('style');
  estilos.html(`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

    * { 
      margin: 0; 
      padding: 0; 
      box-sizing: border-box; 
      font-family: 'Poppins', sans-serif; 
    }

    body { 
      background-color: #6a1b9a; /* Fundo Roxo Moderno e Vibrante */
      color: #1b261b; 
      line-height: 1.6; 
      padding-bottom: 3rem;
    }

    .site-container { 
      max-width: 1100px; 
      margin: 0 auto; 
      padding: 2rem 1.5rem; 
    }

    /* --- HERO BANNER DESIGN PREMIUM --- */
    .header-agro { 
      text-align: center; 
      padding: 6rem 2rem; 
      background: linear-gradient(rgba(0, 47, 11, 0.45), rgba(0, 33, 7, 0.55)), 
                  url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&auto=format&fit=crop&q=80') no-repeat center/cover; 
      border-radius: 20px; 
      margin-bottom: 2.5rem; 
      box-shadow: 0 10px 30px rgba(0,0,0,0.3); 
    }

    .header-agro h1 { 
      font-size: 3.2rem; 
      font-weight: 800;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.5rem; 
      text-shadow: 3px 3px 6px rgba(0,0,0,0.6);
    }

    .header-agro p { 
      font-size: 1.4rem; 
      font-weight: 600;
      color: #e8f5e9;
      text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
    }

    /* --- GRID DE 6 CARDS --- */
    .grid-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 2.5rem;
    }

    .card {
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 28px rgba(0,0,0,0.25);
    }

    .card-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }

    .card-body {
      padding: 1.8rem;
    }

    /* Cores vibrantes personalizadas nas bordas superiores dos 6 cards */
    .card-1 { border-top: 8px solid #2e7d32; } 
    .card-2 { border-top: 8px solid #0288d1; } 
    .card-3 { border-top: 8px solid #f57c00; } 
    .card-4 { border-top: 8px solid #e91e63; } 
    .card-5 { border-top: 8px solid #8e24aa; } 
    .card-6 { border-top: 8px solid #00aec4; } 

    .card h2 { 
      font-size: 1.3rem; 
      font-weight: 600;
      margin-bottom: 0.7rem; 
    }
    .card-1 h2 { color: #2e7d32; }
    .card-2 h2 { color: #0288d1; }
    .card-3 h2 { color: #f57c00; }
    .card-4 h2 { color: #e91e63; }
    .card-5 h2 { color: #8e24aa; }
    .card-6 h2 { color: #00aec4; }

    .card p {
      color: #444444;
      font-size: 0.95rem;
    }

    /* --- FORMULÁRIO DE CAPTAÇÃO MODERNO --- */
    .form-interativo { 
      background: #ffffff;
      padding: 3rem 2rem; 
      border-radius: 20px; 
      box-shadow: 0 10px 25px rgba(0,0,0,0.2); 
    }

    .form-interativo h3 { 
      color: #1b261b; 
      margin-bottom: 1.5rem; 
      font-size: 1.5rem;
      text-align: center;
      font-weight: 600;
    }

    .input-p5 { 
      width: 100%; 
      padding: 1.1rem; 
      margin-bottom: 1.2rem; 
      border: 2px solid #e0ebe0; 
      border-radius: 10px; 
      font-size: 1rem; 
      outline: none; 
      transition: border-color 0.3s;
    }

    .input-p5:focus { 
      border-color: #2e7d32; 
    }

    .btn-p5 { 
      background: linear-gradient(135deg, #2e7d32, #1b5e20); 
      color: white; 
      border: none; 
      padding: 1.1rem; 
      font-size: 1.1rem; 
      font-weight: 600; 
      border-radius: 10px; 
      cursor: pointer; 
      width: 100%; 
      box-shadow: 0 5px 15px rgba(46, 125, 50, 0.3);
      transition: opacity 0.2s;
    }

    .btn-p5:hover {
      opacity: 0.95;
    }

    .feedback-mensagem { 
      margin-top: 1.5rem; 
      padding: 1.2rem; 
      background-color: #e8f5e9; 
      border-left: 6px solid #2e7d32; 
      color: #1b5e20; 
      border-radius: 8px; 
      font-weight: 600; 
      text-align: center;
    }
  `);

  // 3. MONTAGEM DO CONTEXTO E ESTRUTURA HTML (via p5.js DOM)
  let containerPrincipal = createElement('div').addClass('site-container');

  // Banner Hero
  let header = createElement('header').addClass('header-agro').parent(containerPrincipal);
  createElement('h1', 'Agro Forte, Futuro Sustentável').parent(header);
  createElement('p', 'Equilíbrio entre Production e Meio Ambiente').parent(header);

  // Grade de Exibição (Grid com 6 blocos)
  let grid = createElement('div').addClass('grid-cards').parent(containerPrincipal);

  // Card 1 - Imagem Clara de Plantação Iluminada
  let card1 = createElement('div').addClass('card card-1').parent(grid);
  createImg('https://images.unsplash.com/photo-1535242208474-9a2793260ca8?w=500&auto=format&fit=crop&q=70', 'Produção').addClass('card-img').parent(card1);
  let b1 = createElement('div').addClass('card-body').parent(card1);
  createElement('h2', '1. Produção Consciente').parent(b1);
  createElement('p', 'Uso inteligente do solo através da rotação de culturas e plantio direto para manter a terra rica e produtiva.').parent(b1);

  // Card 2 - Imagem Clara de Rio e Natureza Viva
  let card2 = createElement('div').addClass('card card-2').parent(grid);
  createImg('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&auto=format&fit=crop&q=70', 'Água').addClass('card-img').parent(card2);
  let b2 = createElement('div').addClass('card-body').parent(card2);
  createElement('h2', '2. Ambiente Protegido').parent(b2);
  createElement('p', 'Preservação ativa de nascentes e matas nativas, garantindo a integridade e proteção da biodiversidade.').parent(b2);

  // Card 3 - Imagem Clara de Tecnologia de Monitoramento Agrícola
  let card3 = createElement('div').addClass('card card-3').parent(grid);
  createImg('https://images.unsplash.com/photo-1589923188900-85dae523342b?w=500&auto=format&fit=crop&q=70', 'Drones').addClass('card-img').parent(card3);
  let b3 = createElement('div').addClass('card-body').parent(card3);
  createElement('h2', '3. Tecnologia no Campo').parent(b3);
  createElement('p', 'Análise de dados em tempo real e sensores de precisão aplicados ao manejo inteligente das lavouras.').parent(b3);

  // Card 4 - Imagem Clara de Estufas Modernas e Sustentáveis
  let card4 = createElement('div').addClass('card card-4').parent(grid);
  createImg('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&auto=format&fit=crop&q=70', 'Energia').addClass('card-img').parent(card4);
  let b4 = createElement('div').addClass('card-body').parent(card4);
  createElement('h2', '4. Futuro Sustentável').parent(b4);
  createElement('p', 'Infraestrutura voltada à eficiência energética e à redução de impactos ambientais na produção de alimentos.').parent(b4);

  // Card 5 - Imagem Clara de Trator e Trabalho de Campo Limpo
  let card5 = createElement('div').addClass('card card-5').parent(grid);
  createImg('https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&auto=format&fit=crop&q=70', 'Trator').addClass('card-img').parent(card5);
  let b5 = createElement('div').addClass('card-body').parent(card5);
  createElement('h2', '5. Equilíbrio Real').parent(b5);
  createElement('p', 'A união prática entre inovação e técnicas regenerativas que fortalecem o ecossistema do agronegócio.').parent(b5);

  // Card 6 - Imagem Clara de Colheita de Alimentos de Alta Qualidade
  let card6 = createElement('div').addClass('card card-6').parent(grid);
  createImg('https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=70', 'Mercado').addClass('card-img').parent(card6);
  let b6 = createElement('div').addClass('card-body').parent(card6);
  createElement('h2', '6. Mercado Verde').parent(b6);
  createElement('p', 'Abastecimento transparente e de alta rastreabilidade que atende aos padrões de consumo sustentável.').parent(b6);

  // Seção do Formulário
  let secaoForm = createElement('section').addClass('form-interativo').parent(containerPrincipal);
  createElement('h3', 'Participe dessa evolução. Deixe seu contato:').parent(secaoForm);

  let inputNome = createInput('').attribute('placeholder', 'Digite seu nome').addClass('input-p5').parent(secaoForm);
  let inputEmail = createInput('', 'email').attribute('placeholder', 'Seu melhor e-mail').addClass('input-p5').parent(secaoForm);
  let botao = createButton('Enviar Mensagem').addClass('btn-p5').parent(secaoForm);
  
  let feedback = createElement('div').addClass('feedback-mensagem').style('display', 'none').parent(secaoForm);

  // 4. SISTEMA DE EVENTOS DO BOTÃO (Anti-Erros de carregamento)
  botao.mousePressed(function() {
    let nome = inputNome.value().trim();
    let email = inputEmail.value().trim();

    if (nome === '' || email === '') {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    feedback.html(`Obrigado pelo apoio, <strong>${nome}</strong>! Nosso compromisso com o Agro Sustentável está registrado.`);
    feedback.style('display', 'block');

    // Reseta as caixas de texto
    inputNome.value('');
    inputEmail.value('');
  });
}
