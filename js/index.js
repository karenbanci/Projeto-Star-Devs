// const persons =document.getElementById('persons');
// const starships = document.getElementById('starships');
// const planets = document.getElementById('planets');
let peopleList = [];


fillCounters();

// Função principal
function fillCounters() {
    Promise.all([
      getData('people/'),
      getData('starships/'),
      getData('planets')
    ])
    .then(data => {      //aqui vou ter todos os dados
        persons.style.fontSize = '5em';   //para as três linhas vai mudar os estilos
        starships.style.fontSize = '5em'; 
        planets.style.fontSize = '5em'; 

        peopleList=data[0].results;


        persons.innerHTML = data[0].count;      //mostrar na tela
        starships.innerHTML = data[1].count;
        planets.innerHTML = data[2].count;
    })
    .catch(err => console.log('Erro:', err))  // aqui mostar que teve um erro e mostra qual erro foi
};

// função que vai receber um parâmetro , o fetch retorna uma promessa . Aqui adicionei o link do API
function getData(param) {
    return fetch(`https://swapi.dev/api/${param}`)
            .then(res => res.json())
  };

  function loadPerson() {
    // const phrase = document.getElementById('phrase');

    const person = peopleList[Math.floor(Math.random() * peopleList.length)]; //Math.random(peopleList.length -1)]


    phrase.innerHTML = person.name + "<br> age: " + person.birth_year;

    
    phrase.animate([
      { transform: 'translateY(-70px)'},
      { transform: 'translateY(0px)'}
    ], {
      duration: 500
    });
  }




// //função para carregar uma frase
// function loadPhrase() {
//     const btn = document.getElementById('btn-phrases');
//     const phrase = document.getElementById('phrase');
  
//     return fetch('https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
//           .then(data => data.json())
//           .then(json => {
//             btn.innerHTML = 'Ver mais uma frase!';
//             phrase.innerHTML = `"${json.content}"`;
  
//             phrase.animate([
//               { transform: 'translateY(-70px)'},
//               { transform: 'translateY(0px)'}
//             ], {
//               duration: 500
//             })
//           })
//           .catch(err => console.log('Erro: ', err))
//   };