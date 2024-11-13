let VenusaurDefault = document.getElementById('venusaur-default');
let Venusaurite = document.getElementById('venusaurite');
let VenusaurCard = document.getElementById('VenusaurCard');
let VenusaurGmax = document.getElementById('gigantamax-venusaur');
let VenusaurAbility = document.getElementById('Ability-V');
let VenusaurMove = document.getElementById('MoveNameV');
let VenusaurMoveDesc = document.getElementById('MoveDescV');
let VenusaurZ = document.getElementById('GrassZ');
let VenusaurTera = document.getElementById('TeraGround');

let CharizardDefault = document.getElementById('charizard-default');
let CharizarditeX = document.getElementById('charizarditeX');
let CharizarditeY = document.getElementById('charizarditeY');
let CharizardCard = document.getElementById('CharizardCard');
let CharizardGmax = document.getElementById('gigantamax-charizard');
let CharizardAbility = document.getElementById('Ability-C');
let CharizardMove = document.getElementById('MoveNameC');
let CharizardMoveDesc = document.getElementById('MoveDescC');
let CharizardZ = document.getElementById('FireZ');
let CharizardTera = document.getElementById('TeraDragon');

let BlastoiseDefault = document.getElementById('blastoise-default');
let Blastoisinite = document.getElementById('blastoisinite');
let BlastoiseCard = document.getElementById('BlastoiseCard');
let BlastoiseGmax = document.getElementById('gigantamax-blastoise');
let BlastoiseAbility = document.getElementById('Ability-B');
let BlastoiseMove = document.getElementById('MoveNameB');
let BlastoiseMoveDesc = document.getElementById('MoveDescB');
let BlastoiseZ = document.getElementById('WaterZ');
let BlastoiseTera = document.getElementById('TeraSteel');

// -- Venusaur --

Venusaurite.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    Venusaurite.className = "spinner";
    document.getElementById('VenusaurCard').src="../assets/Venusaur-Mega.png";
    VenusaurAbility.innerText = "Ability: Thick Fat";
    VenusaurMove.innerText = "Frenzy Plant"
    VenusaurMoveDesc.innerText = "The user slams the target with the roots of an enormous tree. The user can't move on the next turn."
});

VenusaurGmax.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "heartbeat";
    VenusaurGmax.className = "shake";
    document.getElementById('VenusaurCard').src="../assets/Venusaur-GMax.png";
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = "G-Max Vine Lash";
    VenusaurMoveDesc.innerText = "A Grass-type attack that Gigantamax Venusaur use. This move continues to deal damage to opponents for four turns.";
});
VenusaurZ.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    VenusaurZ.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur.png";
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = "Bloom Doom";
    VenusaurMoveDesc.innerText = "The user collects energy from plants using its Z-Power and attacks the target with full force.";
});

VenusaurTera.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    VenusaurTera.className = "wiggle";
    document.getElementById('VenusaurCard').src="../assets/VenusaurTera.png";
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = "Earth Power"
    VenusaurMoveDesc.innerText = "The user makes the ground under the target erupt with power. This may also lower the target's Sp. Def stat."
});

// -- Charizard --
CharizarditeX.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    CharizarditeX.className = "spinner";
    document.getElementById('CharizardCard').src="../assets/Charizard-MegaX.png";
    CharizardAbility.innerText = "Ability: Tough Claws";
    CharizardMove.innerText = "Blast Burn";
    CharizardMoveDesc.innerText = "The target is razed by a fiery explosion. The user can't move on the next turn.";
});
CharizarditeY.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    CharizarditeY.className = "spinner";
    document.getElementById('CharizardCard').src="../assets/Charizard-MegaY.png";
    CharizardAbility.innerText = "Ability: Drought";
    CharizardMove.innerText = "Overheat";
    CharizardMoveDesc.innerText = "The user attacks the target with all its might. The recoil from this move harshly lowers the user's Sp. Atk stat.";
});

CharizardGmax.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "heartbeat";
    CharizardGmax.className = "shake";
    document.getElementById('CharizardCard').src="../assets/Charizard-GMax.png";
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = "G-Max Wildfire";
    CharizardMoveDesc.innerText = "A Fire-type attack that Gigantamax Charizard use. This move continues to deal damage to opponents for four turns.";
});
CharizardZ.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    CharizardZ.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard.png";
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = "Inferno Overdrive";
    CharizardMoveDesc.innerText = "The user breathes a stream of intense fire toward the target with the full force of its Z-Power";
});
CharizardTera.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    CharizardTera.className = "wiggle";
    document.getElementById('CharizardCard').src="../assets/CharizardTera.png";
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = "Dragon Pulse"
    CharizardMoveDesc.innerText = "The target is attacked with a shock wave generated by the user's gaping mouth."
});

// - Blastoise -
Blastoisinite.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    Blastoisinite.className = "spinner";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise-Mega.png";
    BlastoiseAbility.innerText = "Ability: Mega Launcher";
    BlastoiseMove.innerText = "Hydro Cannon";
    BlastoiseMoveDesc.innerText = "The target is hit with a watery blast. The user can't move on the next turn.";
});

BlastoiseGmax.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "heartbeat";
    BlastoiseGmax.className = "shake";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise-GMax.png";
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = "G-Max Cannonade";
    BlastoiseMoveDesc.innerText = "A Water-type attack that Gigantamax Blastoise use. This move continues to deal damage to opponents for four turns.";
});
BlastoiseZ.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    BlastoiseZ.className = "shake";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise.png";
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = "Hydro Vortex";
    BlastoiseMoveDesc.innerText = "The user creates a huge whirling current using its Z-Power to swallow the target with full force.";
});
BlastoiseTera.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    BlastoiseTera.className = "wiggle";
    document.getElementById('BlastoiseCard').src="../assets/BlastoiseTera.png";
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = "Flash Cannon"
    BlastoiseMoveDesc.innerText = "The user gathers all its light energy and releases it at once. This may also lower the target's Sp. Def stat."
});