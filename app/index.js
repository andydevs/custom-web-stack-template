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
let app = document.getElementById('app')
let img = document.createElement('img')
img.src = car
img.classList.add('car')
app.appendChild(img)