let MenuCarros = document.getElementById('carros')
const acao = [...document.getElementsByClassName('acao')]


const veiculos =[{
    vei0:{
        nome:'Hyundai HB20',
        imagem:''
    },
    vei1:{
        nome:'Chevrolet Onix',
        imagem:''
    },
    vei2:{
        nome:'Chevrolet Onix Plus',
        imagem:''
        
    },
    vei3:{
        nome:'Fiat Mobi',
        imagem:''
        
    },
    vei4:{
        nome:'Volkswagen Gol',
        imagem:''
        
    },
    vei5:{
        nome:'Fiat Argo',
        imagem:''
        
    },
    vei6:{
        nome:'Renault Kwid',
        imagem:''
        
    },
    vei7:{
        nome:'Fiat Cronos',
        imagem:''
        
    },
    vei8:{
        nome:'Volkswagen Voyage',
        imagem:''
        
    }
}]

for(el of veiculos){
    console.log(el)
}



function GeradorOptions(qtd){
    for(c=0 ; c <= qtd ;c++){
        let option = document.createElement('option')
        //  atributos
        option.setAttribute('id','carro'+c)
        option.setAttribute('class','ListaDeCarros')

        
        // finalizando
        MenuCarros.appendChild(option)
    }
}
GeradorOptions(10)

acao.map((el,i,a)=>{
    if(i == 0){
        // ver automovel

    }else{
        // selecionar automovel
        el.addEventListener('click',()=>{
            const carros = document.getElementById('carros')
            
            
        })
    }


})








/* CARROS

"Hyundai HB20",
"Chevrolet Onix",
"Chevrolet Onix Plus",
"Fiat Mobi",
"Volkswagen Gol",
"Fiat Argo",
"Renault Kwid",
"Fiat Cronos",
"Volkswagen Voyage 1.0",
" Renault Sandero S Edition 1.0",
"Volkswagen Voyage;"



*/