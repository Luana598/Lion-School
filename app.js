'use strict'

const cursosDisponiveis = document.getElementById('button-conteiner')

async function buscarCursos() {
    const url = `https://lion-school-phbo.onrender.com/cursos`
    const response = await fetch(url)
    const cursos = await response.json()

    return cursos
}


async function exibirCursos() {

    const courseList = await buscarCursos()

    const courses = courseList.data;

    courses.forEach(course => {

        const button = document.createElement('button')
        button.textContent = course.sigla

    })

    cursosDisponiveis.appendChild(button)
}

exibirCursos()
