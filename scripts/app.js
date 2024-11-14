let VenusaurDefault = document.getElementById('venusaur-default');
let Venusaurite = document.getElementById('venusaurite');
let VenusaurCard = document.getElementById('VenusaurCard');
let VenusaurGmax = document.getElementById('gigantamax-venusaur');
let VenusaurAbility = document.getElementById('Ability-V');
let VenusaurMove = document.getElementById('MoveNameV');
let VenusaurMoveDesc = document.getElementById('MoveDescV');
let VenusaurZ = document.getElementById('GrassZ');
let VenusaurTera = document.getElementById('TeraGround');
let vGen1 = document.getElementById('gen1V');
let vGen2 = document.getElementById('gen2V');
let vGen3 = document.getElementById('gen3V');
let vGen4 = document.getElementById('gen4V');
let vGen5 = document.getElementById('gen5V');
let vGen6 = document.getElementById('gen6V');
let vGen7 = document.getElementById('gen7V');
let vGen8 = document.getElementById('gen8V');
let vGen9 = document.getElementById('gen9V');

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
let cGen1 = document.getElementById('gen1C');
let cGen2 = document.getElementById('gen2C');
let cGen3 = document.getElementById('gen3C');
let cGen4 = document.getElementById('gen4C');
let cGen5 = document.getElementById('gen5C');
let cGen6 = document.getElementById('gen6C');
let cGen7 = document.getElementById('gen7C');
let cGen8 = document.getElementById('gen8C');
let cGen9 = document.getElementById('gen9C');

let BlastoiseDefault = document.getElementById('blastoise-default');
let Blastoisinite = document.getElementById('blastoisinite');
let BlastoiseCard = document.getElementById('BlastoiseCard');
let BlastoiseGmax = document.getElementById('gigantamax-blastoise');
let BlastoiseAbility = document.getElementById('Ability-B');
let BlastoiseMove = document.getElementById('MoveNameB');
let BlastoiseMoveDesc = document.getElementById('MoveDescB');
let BlastoiseZ = document.getElementById('WaterZ');
let BlastoiseTera = document.getElementById('TeraSteel');
let bGen1 = document.getElementById('gen1B');
let bGen2 = document.getElementById('gen2B');
let bGen3 = document.getElementById('gen3B');
let bGen4 = document.getElementById('gen4B');
let bGen5 = document.getElementById('gen5B');
let bGen6 = document.getElementById('gen6B');
let bGen7 = document.getElementById('gen7B');
let bGen8 = document.getElementById('gen8B');
let bGen9 = document.getElementById('gen9B');

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

// - Sprites -
vGen1.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen1.png";
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen2.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen2.png";
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen3.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen3.png";
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen4.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen4.png";
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen5.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen5.png";
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen6.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen6.png";
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen7.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen7.png";
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen8.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen8.png";
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen9.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen9.png";
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
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
// - Sprites -
cGen1.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen1.png";
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen2.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen2.png";
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen3.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen3.png";
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen4.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen4.png";
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen5.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen5.png";
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen6.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen6.png";
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen7.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen7.png";
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen8.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen8.png";
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen9.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen9.png";
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
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
// - Sprites -
bGen1.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen1.png";
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen2.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen2.png";
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen3.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen3.png";
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen4.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen4.png";
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen5.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen5.png";
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen6.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen6.png";
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen7.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen7.png";
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen8.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen8.png";
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen9.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen9.png";
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});