// Procurar o botão --- Quando clicar no botão --- 
document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField() {
    //Duplicar os campos
    const newField = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos
    const fields = newField.querySelectorAll('input') //pega todos(all) os input

    //limpar os campos
    fields.forEach((field) => {
        //pega o field do 'momento' e limpa ele
        field.value = ""
    })

    //Colocar onde na página??
    document.querySelector('#schedule-items').appendChild(newField)
}