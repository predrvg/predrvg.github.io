let openContainer = null;

function openEquipmentContainer(container) {
    // Zatvori prethodno otvorene prozore
    if (openContainer) {
        openContainer.style.display = 'none';
    }

    // Prikazi prozor kliknutog heroja
    container.style.display = 'block';
    openContainer = container; // Azuriraj openContainer
}

function createXsign(container) {
    const xsign = document.createElement('div');
    xsign.classList.add('xsign-look');
    container.appendChild(xsign);
    xsign.addEventListener('click', function () {
        container.style.display = 'none';
        openContainer = null;
        royalChampionBox.className = 'default-hero-box';
        grandWardenBox.className = 'default-hero-box';
        archerQueenBox.className = 'default-hero-box';
        barbarianKingBox.className = 'default-hero-box';
        barbarianKingBox.style.border = '5px solid #ac8f0e';
        archerQueenBox.style.border = '5px solid #ac8f0e';
        grandWardenBox.style.border = '5px solid #ac8f0e';
        royalChampionBox.style.border = '5px solid #ac8f0e';
    });
}

function createInputLabel(container, maxLevel) {

    var labelFromLevel = document.createElement('label');
    labelFromLevel.setAttribute('for', 'numberInputFrom');
    labelFromLevel.textContent = 'From level ';
    labelFromLevel.classList.add('from-level-label');
    container.appendChild(labelFromLevel);

    var inputFrom = document.createElement('input');
    inputFrom.setAttribute('type', 'number');
    inputFrom.setAttribute('id', 'numberInputFrom');
    inputFrom.setAttribute('name', 'numberInputFrom');
    inputFrom.setAttribute('placeHolder', '1');
    inputFrom.setAttribute('step', '1');
    inputFrom.setAttribute('min', '1');
    inputFrom.setAttribute('max', maxLevel);
    inputFrom.className = 'input-box-from';
    container.appendChild(inputFrom);

    var labelToLevel = document.createElement('label');
    labelToLevel.setAttribute('for', 'numberInputTo');
    labelToLevel.textContent = 'to level';
    labelToLevel.classList.add('to-level-label');
    container.appendChild(labelToLevel);

    var inputTo = document.createElement('input');
    inputTo.setAttribute('type', 'number');
    inputTo.setAttribute('id', 'numberInputTo');
    inputTo.setAttribute('name', 'numberInputTo');
    inputTo.setAttribute('placeHolder', maxLevel);
    inputTo.setAttribute('step', '1');
    inputTo.setAttribute('min', '1');
    inputTo.setAttribute('max', maxLevel);
    inputTo.className = 'input-box-to';
    container.appendChild(inputTo);

}

function createUpgradeButton(container) {
    var upgrade = document.createElement('div');
    upgrade.classList.add('upgrade-button');
    upgrade.id = 'upgButton';
    container.appendChild(upgrade);

}

function createShinyOre(container) {
    var shinyOre = document.createElement('div');
    container.appendChild(shinyOre);
    shinyOre.className = 'ore-box';
    shinyOre.style.backgroundImage = 'url("images/shiny_ore.jpg")';
}

function createGlowyOre(container) {
    var glowyOre = document.createElement('div');
    container.appendChild(glowyOre);
    glowyOre.className = 'ore-box';
    glowyOre.style.backgroundImage = 'url("images/glowy_ore.jpg")';
    glowyOre.style.left = '17vw';
}

function createStarryOre(container) {
    var starryOre = document.createElement('div');
    container.appendChild(starryOre);
    starryOre.className = 'ore-box';
    starryOre.style.backgroundImage = 'url("images/starry_ore.jpg")';
    starryOre.style.left = '32vw';
}

function upgradeClicked(fromLevel, toLevel, color, shinyOreValue, glowyOreValue, starryOreValue) {
    fetch('ore.json')
        .then(response => response.json())
        .then(data => {
            // Parse the input values as integers
            const fromLevelInt = parseInt(fromLevel, 10);
            const toLevelInt = parseInt(toLevel, 10);

            // Initialize variables to store total values
            let totalShinyValue = 0;
            let totalGlowyValue = 0;
            let totalStarryValue = 0;

            // Loop through the levels between fromLevel and toLevel
            for (let i = fromLevelInt + 1; i <= toLevelInt; i++) {
                if (color == '#2685f0') {
                    // Construct property names based on the current level
                    const shinyPropertyName = 'cShinyOre' + i;
                    const glowyPropertyName = 'cGlowyOre' + i;

                    // Retrieve the values from the data object and parse them as integers
                    const shinyValue = parseInt(data[shinyPropertyName], 10);
                    const glowyValue = parseInt(data[glowyPropertyName], 10);

                    // Check if the properties exist and have valid numeric values
                    if (!isNaN(shinyValue)) {
                        totalShinyValue += shinyValue;
                    }
                    if (!isNaN(glowyValue)) {
                        totalGlowyValue += glowyValue;
                    }
                } else if (color == '#a942e5') {
                    const shinyPropertyName = 'eShinyOre' + i;
                    const glowyPropertyName = 'eGlowyOre' + i;
                    const starryPropertyName = 'eStarryOre' + i;

                    // Retrieve the values from the data object and parse them as integers
                    const shinyValue = parseInt(data[shinyPropertyName], 10);
                    const glowyValue = parseInt(data[glowyPropertyName], 10);
                    const starryValue = parseInt(data[starryPropertyName], 10);

                    // Check if the properties exist and have valid numeric values
                    if (!isNaN(shinyValue)) {
                        totalShinyValue += shinyValue;
                    }
                    if (!isNaN(glowyValue)) {
                        totalGlowyValue += glowyValue;
                    }
                    if (!isNaN(starryValue)) {
                        totalStarryValue += starryValue;
                    }
                }
            }

            shinyOreValue.textContent = totalShinyValue;
            glowyOreValue.textContent = totalGlowyValue;
            starryOreValue.textContent = totalStarryValue;
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

function validateInput(inputElement) {
    var value = parseInt(inputElement.value);
    var min = parseInt(inputElement.min);
    var max = parseInt(inputElement.max);

    if (isNaN(value) || value < min || value > max) {
        alert("Please enter a value between " + min + " and " + max + ".");
        return false;
    } else {
        return true;
    }
}

function validateInput2(inputElement) {
    var value = parseInt(inputElement.value);
    var min = parseInt(inputElement.min);
    var max = parseInt(inputElement.max);

    if (isNaN(value) || value < min || value > max) {
        alert("Please enter a value between " + min + " and " + max + ".");
        return false;
    } else {
        return true;
    }
}

function validateinputs(inputFrom, inputTo) {
    var min = parseInt(inputFrom.value);
    var max = parseInt(inputTo.value);

    if (min > max) {
        alert("The starting equipment level can't be higher than the ending one.");
        return false;
    } else {
        return true;
    }
}

function createEquipmentMenu(equipmentName, picture, maxLevel, color) {

    if (openContainer) {
        openContainer.style.display = 'none';
    }

    const container = document.createElement('div');
    container.classList.add('main-content-container');

    openContainer = container;

    var equipmentImage = document.createElement('img');
    equipmentImage.src = picture;

    var equipmentMenu = document.createElement('div');
    equipmentMenu.classList.add('equipment-box');
    container.appendChild(equipmentMenu);
    equipmentMenu.appendChild(equipmentImage);
    equipmentMenu.style.marginLeft = '2vw';
    equipmentMenu.style.border = '5px solid' + color;

    createXsign(container);

    const equipmentsName = document.createElement('label');
    equipmentsName.innerHTML = equipmentName;
    equipmentsName.classList.add('equipment-name');
    equipmentsName.style.marginTop = '4vh';
    container.appendChild(equipmentsName);
    document.body.appendChild(container);

    createInputLabel(container, maxLevel);


    var upgrade = document.createElement('div');
    upgrade.classList.add('upgrade-button');
    upgrade.id = 'upgButton';
    container.appendChild(upgrade);

    createShinyOre(container);
    createGlowyOre(container);
    createStarryOre(container);

    var shinyOreValue = document.createElement('label');
    shinyOreValue.classList.add('ore-value-label');
    shinyOreValue.id = 'shinyOreValue';
    shinyOreValue.style.left = '10vw';
    shinyOreValue.textContent = 0;
    container.appendChild(shinyOreValue);

    var glowyOreValue = document.createElement('label');
    glowyOreValue.classList.add('ore-value-label');
    glowyOreValue.id = 'glowyOreValue';
    glowyOreValue.style.left = '26.5vw';
    glowyOreValue.textContent = 0;
    container.appendChild(glowyOreValue);

    var starryOreValue = document.createElement('label');
    starryOreValue.id = 'starryOreValue';
    starryOreValue.classList.add('ore-value-label');
    starryOreValue.style.left = '41.5vw';
    starryOreValue.textContent = 0;
    container.appendChild(starryOreValue);

    var progress = document.createElement('label');
    progress.textContent = "Stats coming soon...";
    progress.classList.add('hero-name');
    progress.style.position = 'absolute';
    progress.style.marginLeft = '17vw';
    progress.style.marginTop = '22vh';
    progress.style.fontSize = '1.5vw';
    container.appendChild(progress);



    upgrade.addEventListener('click', function () {
        var inputFrom = container.querySelector('#numberInputFrom'); // Retrieve inputFrom within the container
        var inputTo = container.querySelector('#numberInputTo');
        if (validateInput(inputFrom) && validateInput2(inputTo) && validateinputs(inputFrom, inputTo)) {
            upgradeClicked(inputFrom.value, inputTo.value, color, shinyOreValue, glowyOreValue, starryOreValue);
        }
    });

}

// povezujemo sa bkBox div elementom u HTMLu
const barbarianKingBox = document.getElementById('bkBox');

// Dodajemo event za klik
barbarianKingBox.addEventListener('click', function () {
    // Kod koji se izvrsava kad kliknemo na bkBox

    if (openContainer) {
        openContainer.style.display = 'none';
    }

    barbarianKingBox.className = 'default-hero-box';
    barbarianKingBox.style.border = '5px solid #e5be0f';
    archerQueenBox.className = 'gray-hero-box';
    archerQueenBox.style.border = '5px solid #ac8f0e';
    grandWardenBox.className = 'gray-hero-box';
    grandWardenBox.style.border = '5px solid #ac8f0e';
    royalChampionBox.className = 'gray-hero-box';
    royalChampionBox.style.border = '5px solid #ac8f0e';

    const bkContainer = document.createElement('div'); //pravimo novi div elemen
    bkContainer.classList.add('main-content-container'); //dodajemo CSS klasu
    createXsign(bkContainer); //pravimo x znak za izlazenje

    const kingName = document.createElement('label'); //pravimo Label za text
    kingName.innerHTML = "<p class='hero-name'>Barbarian King's Equipment</p>"; //text
    bkContainer.appendChild(kingName); //dodajemo text containeru

    openEquipmentContainer(bkContainer);

    var spacerElement = document.createElement('div'); //da prebacim elemente u novi red
    bkContainer.appendChild(spacerElement);

    //BARBARIAN PUPPET IKONICA
    var barbarianPuppet = document.createElement('div');
    barbarianPuppet.classList.add('equipment-box');
    bkContainer.appendChild(barbarianPuppet);
    var barbarianPuppetImage = document.createElement('img');
    barbarianPuppetImage.src = 'images/barbarian_puppet.jpg';
    barbarianPuppet.appendChild(barbarianPuppetImage);

    barbarianPuppet.addEventListener('click', function () {
        createEquipmentMenu('Barbarian Puppet', 'images/barbarian_puppet.jpg', 18, '#2685f0');
    });

    //RAGE VIAL IKONICA
    var rageVial = document.createElement('div');
    rageVial.classList.add('equipment-box');
    bkContainer.appendChild(rageVial);
    var rageVialImage = document.createElement('img');
    rageVialImage.src = 'images/rage_vial.jpg';
    rageVial.appendChild(rageVialImage);

    rageVial.addEventListener('click', function () {
        createEquipmentMenu('Rage Vial', 'images/rage_vial.jpg', 18, '#2685f0');
    });

    //EARTHQUAKE BOOTS IKONICA
    var earthquakeBoots = document.createElement('div');
    earthquakeBoots.classList.add('equipment-box');
    bkContainer.appendChild(earthquakeBoots);
    var earthquakeBootsImage = document.createElement('img');
    earthquakeBootsImage.src = 'images/earthquake_boots.jpg';
    earthquakeBoots.appendChild(earthquakeBootsImage);

    earthquakeBoots.addEventListener('click', function () {
        createEquipmentMenu('Earthquake Boots', 'images/earthquake_boots.jpg', 18, '#2685f0');
    });


    //VAMPSTACHE IKONICA
    var vampstache = document.createElement('div');
    vampstache.classList.add('equipment-box');
    bkContainer.appendChild(vampstache);
    var vampstacheImage = document.createElement('img');
    vampstacheImage.src = 'images/vampstache.jpg';
    vampstache.appendChild(vampstacheImage);

    vampstache.addEventListener('click', function () {
        createEquipmentMenu('Vampstache', 'images/vampstache.jpg', 18, '#2685f0');
    });

    //GIANT GAUNTLET IKONICA
    var giantGauntlet = document.createElement('div');
    giantGauntlet.classList.add('equipment-box');
    bkContainer.appendChild(giantGauntlet);
    var giantGauntletImage = document.createElement('img');
    giantGauntletImage.src = 'images/giant_gauntlet.png';
    giantGauntlet.style.border = '5px solid #a942e5';
    giantGauntlet.appendChild(giantGauntletImage);


    giantGauntlet.addEventListener('click', function () {
        createEquipmentMenu('Giant Gauntlet', 'images/giant_gauntlet.png', 27, '#a942e5');
    });

    // dodajemo novi Container dokumentu
    document.body.appendChild(bkContainer);
});

// povezujemo sa aqBox div elementom u HTMLu
const archerQueenBox = document.getElementById('aqBox');

// Dodajemo event za klik
archerQueenBox.addEventListener('click', function () {
    // Kod koji se izvrsava kad kliknemo na aqBox

    if (openContainer) {
        openContainer.style.display = 'none';
    }

    archerQueenBox.className = 'default-hero-box';
    archerQueenBox.style.border = '5px solid #e5be0f';
    barbarianKingBox.className = 'gray-hero-box';
    barbarianKingBox.style.border = '5px solid #ac8f0e';
    grandWardenBox.className = 'gray-hero-box';
    grandWardenBox.style.border = '5px solid #ac8f0e';
    royalChampionBox.className = 'gray-hero-box';
    royalChampionBox.style.border = '5px solid #ac8f0e';

    const aqContainer = document.createElement('div'); //pravimo novi div element
    aqContainer.classList.add('main-content-container'); //dodajemo CSS klasu
    createXsign(aqContainer); //pravimo x znak za izlazenje

    const queenName = document.createElement('label'); //pravimo Label za text
    queenName.innerHTML = "<p class='hero-name'>Archer Queen's Equipment</p>"; //text
    aqContainer.appendChild(queenName); //dodajemo text containeru

    openEquipmentContainer(aqContainer);

    var spacerElement = document.createElement('div'); //da prebacim elemente u novi red
    aqContainer.appendChild(spacerElement);

    // Archer Puppet
    var archerPuppet = document.createElement('div');
    archerPuppet.classList.add('equipment-box');
    aqContainer.appendChild(archerPuppet);
    var archerPuppetImage = document.createElement('img');
    archerPuppetImage.src = 'images/archer_puppet.jpg';
    archerPuppet.appendChild(archerPuppetImage);

    archerPuppet.addEventListener('click', function () {
        createEquipmentMenu('Archer Puppet', 'images/archer_puppet.jpg', 18, '#2685f0');
    });

    // Invisibility Vial
    var invisibilityVial = document.createElement('div');
    invisibilityVial.classList.add('equipment-box');
    aqContainer.appendChild(invisibilityVial);
    var invisibilityVialImage = document.createElement('img');
    invisibilityVialImage.src = 'images/invisibility_vial.jpg';
    invisibilityVial.appendChild(invisibilityVialImage);

    invisibilityVial.addEventListener('click', function () {
        createEquipmentMenu('Invisibility Vial', 'images/invisibility_vial.jpg', 18, '#2685f0');
    });

    // Giant Arrow
    var giantArrow = document.createElement('div');
    giantArrow.classList.add('equipment-box');
    aqContainer.appendChild(giantArrow);
    var giantArrowImage = document.createElement('img');
    giantArrowImage.src = 'images/giant_arrow.jpg';
    giantArrow.appendChild(giantArrowImage);

    giantArrow.addEventListener('click', function () {
        createEquipmentMenu('Giant Arrow', 'images/giant_arrow.jpg', 18, '#2685f0');
    });

    // Healer Puppet
    var healerPuppet = document.createElement('div');
    healerPuppet.classList.add('equipment-box');
    aqContainer.appendChild(healerPuppet);
    var healerPuppetImage = document.createElement('img');
    healerPuppetImage.src = 'images/healer_puppet.jpg';
    healerPuppet.appendChild(healerPuppetImage);

    healerPuppet.addEventListener('click', function () {
        createEquipmentMenu('Healer Puppet', 'images/healer_puppet.jpg', 18, '#2685f0');
    });

    // Frozen Arrow
    var frozenArrow = document.createElement('div');
    frozenArrow.classList.add('equipment-box');
    aqContainer.appendChild(frozenArrow);
    var frozenArrowImage = document.createElement('img');
    frozenArrowImage.src = 'images/frozen_arrow.png';
    frozenArrow.appendChild(frozenArrowImage);
    frozenArrow.style.border = '5px solid #a942e5';

    frozenArrow.addEventListener('click', function () {
        createEquipmentMenu('Frozen Arrow', 'images/frozen_arrow.png', 27, '#a942e5');
    });


    // dodajemo novi Container dokumentu
    document.body.appendChild(aqContainer);
});

// povezujemo sa gwBox div elementom u HTMLu
const grandWardenBox = document.getElementById('gwBox');

// Dodajemo event za klik
grandWardenBox.addEventListener('click', function () {
    // Kod koji se izvrsava kad kliknemo na gwBox

    if (openContainer) {
        openContainer.style.display = 'none';
    }

    grandWardenBox.className = 'default-hero-box';
    grandWardenBox.style.border = '5px solid #e5be0f';
    archerQueenBox.className = 'gray-hero-box';
    archerQueenBox.style.border = '5px solid #ac8f0e';
    barbarianKingBox.className = 'gray-hero-box';
    barbarianKingBox.style.border = '5px solid #ac8f0e';
    royalChampionBox.className = 'gray-hero-box';
    royalChampionBox.style.border = '5px solid #ac8f0e';

    const gwContainer = document.createElement('div'); //pravimo novi div element
    gwContainer.classList.add('main-content-container'); //dodajemo CSS klasu
    createXsign(gwContainer); //pravimo x znak za izlazenje

    const wardenName = document.createElement('label'); //pravimo Label za text
    wardenName.innerHTML = "<p class='hero-name'>Grand Warden's Equipment</p>"; //text
    gwContainer.appendChild(wardenName); //dodajemo text containeru

    openEquipmentContainer(gwContainer);

    var spacerElement = document.createElement('div'); //da prebacim elemente u novi red
    gwContainer.appendChild(spacerElement);

    // Eternal Tome
    var eternalTome = document.createElement('div');
    eternalTome.classList.add('equipment-box');
    gwContainer.appendChild(eternalTome);
    var eternalTomeImage = document.createElement('img');
    eternalTomeImage.src = 'images/eternal_tome.jpg';
    eternalTome.appendChild(eternalTomeImage);

    eternalTome.addEventListener('click', function () {
        createEquipmentMenu('Eternal Tome', 'images/eternal_tome.jpg', 18, '#2685f0');
    });

    // Life Gem
    var lifeGem = document.createElement('div');
    lifeGem.classList.add('equipment-box');
    gwContainer.appendChild(lifeGem);
    var lifeGemImage = document.createElement('img');
    lifeGemImage.src = 'images/life_gem.jpg';
    lifeGem.appendChild(lifeGemImage);

    lifeGem.addEventListener('click', function () {
        createEquipmentMenu('Life Gem', 'images/life_gem.jpg', 18, '#2685f0');
    });

    // Rage Gem
    var rageGem = document.createElement('div');
    rageGem.classList.add('equipment-box');
    gwContainer.appendChild(rageGem);
    var rageGemImage = document.createElement('img');
    rageGemImage.src = 'images/rage_gem.jpg';
    rageGem.appendChild(rageGemImage);

    rageGem.addEventListener('click', function () {
        createEquipmentMenu('Rage Gem', 'images/rage_gem.jpg', 18, '#2685f0');
    });

    // Healing Tome
    var healingTome = document.createElement('div');
    healingTome.classList.add('equipment-box');
    gwContainer.appendChild(healingTome);
    var healingTomeImage = document.createElement('img');
    healingTomeImage.src = 'images/healing_tome.jpg';
    healingTome.appendChild(healingTomeImage);

    healingTome.addEventListener('click', function () {
        createEquipmentMenu('Healing Tome', 'images/healing_tome.jpg', 18, '#2685f0');
    });


    // dodajemo novi Container dokumentu
    document.body.appendChild(gwContainer);
});

// povezujemo sa rcBox div elementom u HTMLu
const royalChampionBox = document.getElementById('rcBox');

// Dodajemo event za klik
royalChampionBox.addEventListener('click', function () {
    // Kod koji se izvrsava kad kliknemo na rcBox

    if (openContainer) {
        openContainer.style.display = 'none';
    }

    royalChampionBox.className = 'default-hero-box';
    royalChampionBox.style.border = '5px solid #e5be0f';
    grandWardenBox.className = 'gray-hero-box';
    grandWardenBox.style.border = '5px solid #ac8f0e';
    archerQueenBox.className = 'gray-hero-box';
    archerQueenBox.style.border = '5px solid #ac8f0e';
    barbarianKingBox.className = 'gray-hero-box';
    barbarianKingBox.style.border = '5px solid #ac8f0e';

    const rcContainer = document.createElement('div'); //pravimo novi div element
    rcContainer.classList.add('main-content-container'); //dodajemo CSS klasu
    createXsign(rcContainer); //pravimo x znak za izlazenje

    const championName = document.createElement('label'); //pravimo Label za text
    championName.innerHTML = "<p class='hero-name'>Royal Champion's Equipment</p>"; //text
    rcContainer.appendChild(championName); //dodajemo text containeru

    openEquipmentContainer(rcContainer);

    var spacerElement = document.createElement('div'); //da prebacim elemente u novi red
    rcContainer.appendChild(spacerElement);

    // Seeking Shield
    var seekingShield = document.createElement('div');
    seekingShield.classList.add('equipment-box');
    rcContainer.appendChild(seekingShield);
    var seekingShieldImage = document.createElement('img');
    seekingShieldImage.src = 'images/seeking_shield.jpg';
    seekingShield.appendChild(seekingShieldImage);

    seekingShield.addEventListener('click', function () {
        createEquipmentMenu('Seeking Shield', 'images/seeking_shield.jpg', 18, '#2685f0');
    });

    // Royal Gem
    var royalGem = document.createElement('div');
    royalGem.classList.add('equipment-box');
    rcContainer.appendChild(royalGem);
    var royalGemImage = document.createElement('img');
    royalGemImage.src = 'images/royal_gem.jpg';
    royalGem.appendChild(royalGemImage);

    royalGem.addEventListener('click', function () {
        createEquipmentMenu('Royal Gem', 'images/royal_gem.jpg', 18, '#2685f0');
    });


    // dodajemo novi Container dokumentu
    document.body.appendChild(rcContainer);
});