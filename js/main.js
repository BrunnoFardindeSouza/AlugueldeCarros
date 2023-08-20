const secoes = [...document.getElementsByClassName('veiculo')];
const container = document.getElementsByClassName('aluguel')[0];
const veiculos =[{
        nome:'Hyundai HB20',
        imagem:''
    },
    {
        nome:'Chevrolet Onix',
        imagem:''
    },
    {
        nome:'Chevrolet Onix Plus',
        imagem:''
    
    },
    {
        nome:'Fiat Mobi',
        imagem:''
        
    },
    {
        nome:'Volkswagen Gol',
        imagem:''
        
    },
    {
        nome:'Fiat Argo',
        imagem:''
        
    },
    {
        nome:'Renault Kwid',
        imagem:''
        
    },
    {
        nome:'Fiat Cronos',
        imagem:''
        
    },
    {
        nome:'Volkswagen Voyage',
        imagem:''
        
}];
secoes.map((el,i,a)=>{
    if(i == 0){
        // Seleção de veiculos (Variaveis "Globais")
            const span = document.createElement('span')
            const section = document.createElement('section')
            const selecionar = document.createElement('div')

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
                    selecionar.innerHTML='Ver veículo '
                    selecionar.style.textAlign='center'
                    selecionar.setAttribute('class','selecionar')
            
            // Estilo parágrafo
                p.style.display='flex'
                p.style.alignItems='center'
                p.style.justifyContent='center'
                p.style.margin='2px'
                p.style.lineHeight='27px'
                p.style.border='1px solid white'
                p.style.width='100%'
                p.style.color='white'
                p.style.background='blue'
            
            // Estilo Div01
                div01.style.width='50%'
                div.style.margin='10px'
            
            // Estilo section 
                section.style.width='90%'
                section.style.padding='10px'
                section.style.background='beige'
                section.style.margin='auto' 

            // Estilo span
                span.style.marginTop='10px'

            // Estilo selecionar
                selecionar.style.cursor='pointer'
                selecionar.style.width='90%'
                selecionar.style.padding='10px'
                selecionar.style.height='30px'
                selecionar.style.background='red'
                selecionar.style.color='white'
                selecionar.style.margin='auto auto 10px auto'

            // Appends
                p.appendChild(div01)
                div.appendChild(input)
                p.appendChild(div)  
                section.appendChild(p)
                div01.innerHTML=veiculos[c].nome;
                container.firstElementChild.appendChild(section)
                el.appendChild(selecionar)
        }    
    }else if(i == 1){
        // imagem do veiculo
    }else{
        // descrição do veiculo
    }    
})   

const expandir = [...document.getElementsByClassName('expandir')]
const td_veiculos = document.getElementsByClassName('carros')[0]
expandir.map((el,i,a)=>{
    el.addEventListener('click',()=>{
        if(td_veiculos.style.display=='none'){
            td_veiculos.style.display='flex'
            el.style.marginBottom='0px'
        }else{
            el.style.marginBottom='40px'
            td_veiculos.style.display='none'
        }
        
    })
})















































