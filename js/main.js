const secoes = [...document.getElementsByClassName('veiculo')];
const container = document.getElementsByClassName('aluguel')[0];
const veiculos =[{
        nome:'Hyundai HB20',
        imagem:'https://s2-autoesporte.glbimg.com/d3hiCh4P4j4DASPx5v25-66y26k=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/H/D/jWlqOMSDOqFt2jYw4BPg/2018-05-10-hyundai-hb20-2019-1.jpg',
        descricao:'O novo HB20 foi desenvolvido para oferecer o alto desempenho e segurança de carro premium em um dos carros mais vendidos do Brasil. Opção com bloco e cabeçote de alumínio, 3 cilindros, 12 válvulas e 80 cv de potência, ele oferece performance de um motor maior com consumo de um motor menor.'
    },
    {
        nome:'Chevrolet Onix',
        imagem:'https://s2.glbimg.com/IZfbh2zjtwVvKEO5gLBHSd8VuOjbglZfv61xgTw3jKlIoz-HdGixxa_8qOZvMp3w/e.glbimg.com/og/ed/f/original/2012/10/15/chevroletonix_01.jpg',
        descricao:'O modelo queridinho da Chevrolet possui 3.930 mm de comprimento, 1.474 mm de altura, 1.705 mm de largura e 2.538 mm entre os eixos. Já o vão livre do solo tem 117 mm. O veículo tem um peso final de 1.011 kg e suporta 375 kg de carga útil. O Onix Joy 2019 tem capacidade para 5 ocupantes.'
    },
    {
        nome:'Chevrolet Onix Plus',
        imagem:'https://s2-autoesporte.glbimg.com/PP0xm7qIIBaYU9CiN8NPL0yBa-0=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/0/XfbVibQ1emTTQYBlt12A/2019-11-04-onixrfrente.jpg',
        descricao:'O motor do Onix Plus 2024 foi projetado para entregar o melhor de dois mundos: altíssimo desempenho combinado com economia de combustível. Além do motor turbo de 116 CV e 16,8 kgfm de torque, você conta com transmissão automática de 6 velocidades e direção elétrica progressiva.'
    
    },
    {
        nome:'Fiat Mobi',
        imagem:'https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/fiat-mobi-drive-2017-1.jpg?quality=70&strip=info',
        descricao:'O Mobi Like 2023 está equipado com motor 1.0 Evo Flex, de quatro cilindros em linha e com transmissão manual de cinco marchas. O propulsor desenvolve 71 cv de potência com gasolina e 74 cv com etanol a 6.000 rpm, e torque máximo de 9,3 kgfm com gasolina e 9,7 kgfm com etanol a 3.250 rpm'
        
    },
    {
        nome:'Volkswagen Gol',
        imagem:'https://s2-autoesporte.glbimg.com/UWiWKJtlidgBWLaV7H-oeLuik7A=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/s/k/6GMdJXSQqXVLy4BiL50g/2016-02-22-goldianteira.jpg',
        descricao:'O Gol MPI 2019 tem motor 1.0 e TotalFlex com 3 cilindros em linha e 4 válvulas por cilindro, alcançando uma potência de 75 CV com gasolina e 82 com etanol e uma velocidade de 167 km. Esse motor também tem a capacidade de ir 0 a 100 km em 13,1 segundos. Quando o assunto é consumo, o modelo é bem econômico'
        
    },
    {
        nome:'Fiat Argo',
        imagem:'https://www.autoo.com.br/fotos/2023/1/1280_960/fiat_argo_2023_1_18012023_72902_1280_960.jpg',
        descricao:'Pontos positivos: macio, direção leve, consumo bom, sem ruídos pelo menos para um fiat, rende bem. Pontos negativos: muito caro, acabamento to com rebarbas, multimidia de enfeite, poderia ter mais cores, banco poderia ser matéria sintético estilo couro. Comentários: melhorar acabamento'
        
    },
    {
        nome:'Renault Kwid',
        imagem:'https://s2-autoesporte.glbimg.com/Op6SxKviaiJybQ1NLe4XsUBKe7M=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/g/A/g5LVXYTYA6AMoXp1VmhQ/2017-06-07-renault-kwid-dianteira.jpg',
        descricao:'Se o Kwid é bom para o dia a dia, a resposta é sim. Ele é uma boa opção de compra, ainda mais se você quiser mesmo um zero quilômetro. Ele é espaçoso para a categoria, e ele tem Isofix e quatro airbags desde a versão de entrada. O único problema é a vibração e o barulho do motor três cilindros.'
        
    },
    {
        nome:'Fiat Cronos',
        imagem:'https://quatrorodas.abril.com.br/wp-content/uploads/2021/07/Fiat-Cronos-169.jpg?quality=70&strip=info',
        descricao:"Carro confortável, com excelente dirigibilidade, conforto e segurança. Ótimo consumo, mesmo se tratando de um carro com câmbio automático. Visual belíssimo, moderno. Ótima mecânica, sem apresentar defeitos."
        
    },
    {
        nome:'Volkswagen Voyage',
        imagem:'https://img.favcars.com/volkswagen/voyage/wallpapers_volkswagen_voyage_2012_4_b.jpg',
        descricao:"Um carro muito bonito por dentro e por fora dessa versão limitada, com muita potência no motor MSI, consumo ok, ótimo câmbio [o mais macio de todos], porta-malas muito grande e som original de fábrica bem satisfatório"
        
}]
secoes.map((el,i,a)=>{
    if(i == 0){
        // Seleção de veiculos (Variaveis "Globais")
            const span = document.createElement('span')
            const section = document.createElement('section')
            const selecionar = document.createElement('div')
            const fundo = document.createElement('div')
            el.appendChild(span)

        for(c = 0;c<veiculos.length;c++){

            // Varievis locais
                const p = document.createElement('p');
                const div = document.createElement('div')
                const div01 = document.createElement('div')
                const  input = document.createElement('input')
            
            // Configurações
                // Sessão mãe
                    section.setAttribute('class','carros') 
                // Span
                    span.setAttribute('class','material-symbols-outlined expandir')
                
                    span.innerHTML='expand_more'
                //Div
                    div.setAttribute('class','ipn_radio')
                // input
                    input.setAttribute('type','radio')
                    input.setAttribute('name','carros')
                // Selecionar
                    selecionar.innerHTML='Ver selecionado '
                    selecionar.style.textAlign='center'
                    selecionar.setAttribute('class','selecionar')
                    
                // fundo
                    fundo.setAttribute('class','fundo_carros')
                    fundo.innerHTML='Veículos:'
            // Estilo parágrafo
                p.style.display='flex'
                p.style.alignItems='center'
                p.style.justifyContent='center'
                p.style.margin='2px'
                p.style.lineHeight='27px'
                p.style.border='1px solid white'
                p.style.width='100%'
                p.style.color='white'
                p.style.background='#4141ad'
            
            // Estilo Div01
                div01.style.width='50%'
                div.style.margin='10px'
            
            // Estilo section 
                section.style.width='99%'
                section.style.padding='0px'
                section.style.background='beige'
                section.style.margin='auto' 
                

            // Estilo span
                span.style.width='100%'
                span.style.height='60px'
                span.style.display='flex'
                span.style.alignItems='center'
                span.style.justifyContent='center'
                span.style.marginTop='0px'
                span.style.margin='auto'
                span.style.padding='0px'
                span.style.color='white'
                span.style.cursor='pointer'
                span.style.border='1ps solid #5151ffd5'
                span.style.background='#d42626'
                

            // Estilo selecionar
                selecionar.style.cursor='pointer'
                selecionar.style.display='flex'
                selecionar.style.alignItems='center'
                selecionar.style.justifyContent='center'
                selecionar.style.width='100%'
                selecionar.style.height='60px'
                selecionar.style.color='white'
                selecionar.style.padding='0px'
                selecionar.style.background='#d42626'
            // Estilo fundo 
                fundo.style.background='beige'
                fundo.style.width='100%'
                fundo.style.height='60px'
                fundo.style.margin='auto'
            // Appends
                p.appendChild(div01)
                div.appendChild(input)
                p.appendChild(div)  
                section.appendChild(p)
                el.appendChild(fundo)
                div01.innerHTML=veiculos[c].nome;
                container.firstElementChild.appendChild(section)
                el.appendChild(selecionar)
                
                const inputs = document.getElementsByName('carros')[0]
                inputs.checked = 'checked'
        }    
    }else if(i == 1){
        // imagem do veiculo
    }else{
        // descrição do veiculo
    }    
})   

const expandir = [...document.getElementsByClassName('expandir')];

expandir.map((el,i,a)=>{
    const td_veiculos = document.getElementsByClassName('carros')[0]
    const fundo_carros = document.getElementsByClassName('fundo_carros')[0]

    el.addEventListener('click',()=>{
        if(td_veiculos.style.display=='none'){
            td_veiculos.style.display='flex'
            fundo_carros.style.display='none'
        }else{
            td_veiculos.style.display='none'
            fundo_carros.style.display='flex'
        }
        
    })
});


const p = document.createElement('p');
const h3 = document.createElement('h3');
const s2 = document.getElementsByClassName('s2')[0]
const s3 = document.getElementsByClassName('s3')[0]
const sh = [...document.getElementsByClassName('sh')];
const inputs = [...document.getElementsByName('carros')];
const carros = document.getElementsByClassName('carros')[0]
const selecionado = document.getElementsByClassName('selecionar')[0];
const fundo_carros = document.getElementsByClassName('fundo_carros')[0]

selecionado.addEventListener('click',()=>{
    s2.style.display='flex'
    h3.innerHTML=''
    p.innerHTML=''
    p.value=''
    h3.value=''
    carros.style.display='none'
    fundo_carros.style.display='flex'
    sh.map((el)=>{
        el.style.display='block'
    })
    inputs.filter((el,i,a)=>{
        if(el.checked){
            const carro = el.parentNode.previousSibling.textContent;
            const busca = veiculos.filter((el,i,a)=>{
                if(el.nome == carro){
                    const nome = el.nome
                    const imagem = el.imagem;
                    const descricao = el.descricao;
                    
                    s2.style.backgroundImage=`url("${imagem}")`
                    h3.innerHTML=nome
                    p.innerHTML=descricao
                    
                    s3.appendChild(h3)
                    s3.appendChild(p)
                    
                    
                    
                    
                }
                
            });
            


          
        }
    })


})
















































