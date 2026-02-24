'use strict'

const cursosDisponiveis = document.getElementById('button-conteiner')

async function buscarCursos() {
    const url = `https://lion-school-phbo.onrender.com/cursos`
    const response = await fetch(url)
    const cursos = await response.json()

    console.log(cursos)
    return cursos
}

async function exibirCursos() {

    const courseList = await buscarCursos()

    courseList.forEach(course => {

        const img = document.createElement('img')
        img.src = `./img/${course.sigla}-icon.svg`
        img.alt = course.sigla

        const buttonText = document.createElement('p')
        buttonText.textContent = course.sigla

        const courseButton = document.createElement('button')
       
        
        courseButton.appendChild(img)
        courseButton.appendChild(buttonText)
        cursosDisponiveis.appendChild(courseButton)
    })


    function exibirPerfis () {
    
        cancelar.addEventListener('click', () => {
           const main = document.querySelector('main')
           main.className = 'card-show'
        })
    }

    
}

exibirCursos()
