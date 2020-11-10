/**
 * Custom stack template stuff
 * 
 * Author:  Anshul Kharbanda
 * Created: [Creation Date]
 */
import './style/main.scss'
import car from './assets/images/lincoln-navigator.jpg';

// Bundle script
console.log('yoyoyoyoyo')

// Add image
let putImage = document.getElementById('put-image')
let image = document.createElement('img')
image.src = car
image.classList.add('car')
putImage.appendChild(image)

let form = document.getElementById('feedback')
form.addEventListener('submit', function(event) {
    event.preventDefault()

    // Get data
    let name = form.querySelector('input[name="name"]').value
    let thoughts = form.querySelector('textarea[name="thoughts"]').value
    let like = form.querySelector('input[name="like"]').checked

    // Put data in element
    let entry = document.createElement('tr')
    entry.innerHTML = `<td>${name}</td><td>${thoughts}</td><td>${like}</td>`
    document.getElementById('submissions-entry').appendChild(entry)
})