let attackPlayer
let attackEnemy
let lifesPlayer = 3
let lifesEnemy = 3

function startGame() {
    let attackSection = document.getElementById("select-attack")
    attackSection.style.display = 'none'

    let restartSection = document.getElementById("restart-section")
    restartSection.style.display = 'none'

    let btnCharacter = document.getElementById('btn-select-character')
    btnCharacter.addEventListener('click', selectCharacter)

    let btnFire = document.getElementById("btn-attack-fire")
    btnFire.addEventListener('click', attackFire)
    let btnEarth = document.getElementById("btn-attack-earth")
    btnEarth.addEventListener('click', attackEarth)
    let btnWater = document.getElementById("btn-attack-water")
    btnWater.addEventListener('click', attackWater)

    let btnRestart = document.getElementById("btn-restart")
    btnRestart.addEventListener("click", restartGame)

}

function selectCharacter(){
    let chacacterSection = document.getElementById("select-character")
    chacacterSection.style.display = 'none'

    let attackSection = document.getElementById("select-attack")
    attackSection.style.display = 'flex'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanCharacterPlayer = document.getElementById('character-player')

    if (inputHipodoge.checked) {
        spanCharacterPlayer.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanCharacterPlayer.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanCharacterPlayer.innerHTML = 'Ratigueya'
    } else {
        alert("Please choose a character")
    }
    selectEnemyCharacter()
}

function fight() {
    let spanLifePlayer = document.getElementById('life-player')
    let spanLifeEnemy = document.getElementById('life-enemy')

    if (attackPlayer == attackEnemy) {
        createMessage('Tie')
    } else if (attackPlayer == 'Fire' && attackEnemy == 'Earth') {
        createMessage('Win')
        lifesEnemy--
        spanLifeEnemy.innerHTML = lifesEnemy
    } else if (attackPlayer == 'Earth' && attackEnemy == 'Water') {
        createMessage('Win')
        lifesEnemy--
        spanLifeEnemy.innerHTML = lifesEnemy
    } else if (attackPlayer == 'Water' && attackEnemy == 'Fire') {
        createMessage('Win')
        lifesEnemy--
        spanLifeEnemy.innerHTML = lifesEnemy
    } else {
        createMessage('Lost')
        lifesPlayer--
        spanLifePlayer.innerHTML = lifesPlayer
    }

    checkLifes()
}

function checkLifes() {
    if (lifesEnemy == 0) {
        resultMessage('You win 🥳')
    } else if (lifesPlayer == 0) {
        resultMessage('You lost 😓')
    }
}


function selectEnemyCharacter() {
    let randomSelectEnemy = randomEnemy(3,1)
    let spanCharacterEnemy = document.getElementById('character-enemy')

    if (randomSelectEnemy == 1) {
        spanCharacterEnemy.innerHTML = 'Hipodoge'
    } else if (randomSelectEnemy == 2) {
        spanCharacterEnemy.innerHTML = 'Capipepo'
    } else  {
        spanCharacterEnemy.innerHTML = 'Ratigueya'
    }
    
    
}



function attackFire() {
    attackPlayer = "Fire"
    attackRandomEnemy()
}

function attackEarth() {
    attackPlayer = "Earth"
    attackRandomEnemy()
}

function attackWater() {
    attackPlayer = "Water"
    attackRandomEnemy()
}

function createMessage(result) {
    let sectionMessages = document.getElementById('result-battle')
    let yourAttackMessage = document.getElementById('your-attack')
    let enemyAttackMessage = document.getElementById('enemy-attack')

    // let notification = document.createElement('p')
    let newPlayerAttack = document.createElement('p')
    let newEnemyAttack = document.createElement('p')

    sectionMessages.innerHTML = result
    newPlayerAttack.innerHTML = attackPlayer
    newEnemyAttack.innerHTML = attackEnemy

    // let paragraph = document.createElement('p')
    // paragraph.innerHTML = 'You used ' + attackPlayer + ' attack, and your enemy used ' + attackEnemy + ' attack. YOU ' + result
    
    // sectionMessages.appendChild(notification)
    yourAttackMessage.appendChild(newPlayerAttack)
    enemyAttackMessage.appendChild(newEnemyAttack)
}

function resultMessage(resultFinalMessage) {
    let sectionMessages = document.getElementById('result-battle')

    // let paragraph = document.createElement('p')
    sectionMessages.innerHTML = resultFinalMessage
    
    // sectionMessages.appendChild(paragraph)

    let btnFire = document.getElementById("btn-attack-fire")
    btnFire.disabled = true
    let btnEarth = document.getElementById("btn-attack-earth")
    btnEarth.disabled = true
    let btnWater = document.getElementById("btn-attack-water")
    btnWater.disabled = true

    let restartSection = document.getElementById("restart-section")
    restartSection.style.display = 'block'
}


function attackRandomEnemy() {
    attackRandom = randomEnemy(3,1)

    if (attackRandom == 1) {
        attackEnemy= "Fire"
    } else if (attackRandom == 2) {
        attackEnemy = "Earth"
    } else {
        attackEnemy = "Water"
    }

    fight()

}

function restartGame() {
    location.reload()
}

function randomEnemy (max, min) {
    return Math.floor(Math.random()* (max - min + 1) + min)
}

window.addEventListener('load', startGame)

