let venusaurDex = [
    // Gen 1
    "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    // Gen 2
    "As it warms itself and absorbs the sunlight, its flower petals release a pleasant fragrance.",
    // Gen 3
    "A bewitching aroma wafts from its flower. The fragrance becalms those engaged in a battle.",
    // Gen 4
    "It is able to convert sunlight into energy. As a result, it is more powerful in the summertime.",
    // Gen 5
    "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.",
    // Gen 6
    "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    //Gen 7
    "The flower on its back catches the sun's rays. The sunlight is then absorbed and used for energy.",
    //Gen 8
    "A bewitching aroma wafts from its flower. The fragrance becalms those engaged in a battle.",
    //Gen 9
    "By spreading the broad petals of its flower and catching the sun’s rays, it fills its body with power.",
    //Mega Evolution
    "	In order to support its flower, which has grown larger due to Mega Evolution, its back and legs have become stronger.",
    //Gmax
    "Huge amounts of pollen burst from it with the force of a volcanic eruption. Breathing in too much of the pollen can cause fainting."];
let charizardDex = [
    // Gen 1
    "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
    // Gen 2
    "It uses its wings to fly high. The temperature of its fire increases as it gains experience in battle.",
    // Gen 3
    "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    // Gen 4
    "Breathing intense, hot flames, it can melt almost anything. Its breath inflicts terrible pain on enemies.",
    // Gen 5
    "It is said that Charizard's fire burns hotter if it has experienced harsh battles.",
    // Gen 6
    "Its wings can carry this Pokémon close to an altitude of 4,600 feet. It blows out fire at very high temperatures",
    //Gen 7
    "When this Pokémon expels a blast of superhot fire, the red flame at the tip of its tail burns more intensely.",
    //Gen 8
    "Its wings can carry this Pokémon close to an altitude of 4,600 feet. It blows out fire at very high temperatures.",
    //Gen 9
    "It uses its wings to fly sky-high. The more experience it gains in battle, the greater the temperature at which its flames burn.",
    //Mega Evolution X
    "The overwhelming power that fills its entire body causes it to turn black and creates intense blue flames.",
    //Mega Evolution Y
    "Its bond with its Trainer is the source of its power. It boasts speed and maneuverability greater than that of a jet fighter.",
    //Gmax
    "The flame inside its body burns hotter than 3,600 degrees Fahrenheit. When Charizard roars, that temperature climbs even higher."
];
let blastoiseDex = [
    // Gen 1
    "A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles.",
    // Gen 2
    "It firmly plants its feet on the ground before shooting water from the jets on its back.",
    // Gen 3
    "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    // Gen 4
    "It deliberately makes itself heavy so it can withstand the recoil of the water jets it fires.",
    // Gen 5
    "The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.",
    // Gen 6
    "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
    //Gen 7
    "Once it takes aim at its enemy, it blasts out water with even more force than a fire hose.",
    //Gen 8
    "The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.",
    //Gen 9
    "It has jet nozzles on its shell. This impressive Pokémon uses these jets to charge toward foes with all the force of a rocket.",
    //Mega Evolution
    "The cannon on its back is as powerful as a tank gun. Its tough legs and back enable it to withstand the recoil from firing the cannon.",
    //Gmax
    "Water fired from this Pokémon's central main cannon has enough power to blast a hole into a mountain."
];



let VenusaurDefault = document.getElementById('venusaur-default');
let Venusaurite = document.getElementById('venusaurite');
let VenusaurCard = document.getElementById('VenusaurCard');
let VenusaurGmax = document.getElementById('gigantamax-venusaur');
let VenusaurAbility = document.getElementById('Ability-V');
let VenusaurMove = document.getElementById('MoveNameV');
let VenusaurMoveDesc = document.getElementById('MoveDescV');
let VenusaurDex = document.getElementById('venusaurDex');
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
let CharizardDex = document.getElementById('charizardDex');
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
let BlastoiseDex = document.getElementById('blastoiseDex');
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
VenusaurDefault.addEventListener('mouseover', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur.png";
    VenusaurDex.innerText = venusaurDex[8];
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
Venusaurite.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    Venusaurite.className = "spinner";
    document.getElementById('VenusaurCard').src="../assets/Venusaur-Mega.png";
    VenusaurDex.innerText = venusaurDex[9];
    VenusaurAbility.innerText = "Ability: Thick Fat";
    VenusaurMove.innerText = "Frenzy Plant"
    VenusaurMoveDesc.innerText = "The user slams the target with the roots of an enormous tree. The user can't move on the next turn."
});

VenusaurGmax.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "heartbeat";
    VenusaurGmax.className = "shake";
    document.getElementById('VenusaurCard').src="../assets/Venusaur-GMax.png";
    VenusaurDex.innerText = venusaurDex[10];
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = "G-Max Vine Lash";
    VenusaurMoveDesc.innerText = "A Grass-type attack that Gigantamax Venusaur use. This move continues to deal damage to opponents for four turns.";
});
VenusaurZ.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    VenusaurZ.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur.png";
    VenusaurDex.innerText = venusaurDex[6];
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = "Bloom Doom";
    VenusaurMoveDesc.innerText = "The user collects energy from plants using its Z-Power and attacks the target with full force.";
});

VenusaurTera.addEventListener('click', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    VenusaurTera.className = "wiggle";
    document.getElementById('VenusaurCard').src="../assets/VenusaurTera.png";
    VenusaurDex.innerText = venusaurDex[8];
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = "Earth Power"
    VenusaurMoveDesc.innerText = "The user makes the ground under the target erupt with power. This may also lower the target's Sp. Def stat."
});

// - Sprites -
vGen1.addEventListener('mouseover', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen1.png";
    VenusaurDex.innerText = venusaurDex[0];
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen2.addEventListener('mouseover', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen2.png";
    VenusaurDex.innerText = venusaurDex[1];
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen3.addEventListener('mouseover', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen3.png";
    VenusaurDex.innerText = venusaurDex[2];
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen4.addEventListener('mouseover', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen4.png";
    VenusaurDex.innerText = venusaurDex[3];
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen5.addEventListener('mouseover', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen5.png";
    VenusaurDex.innerText = venusaurDex[4];
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen6.addEventListener('mouseover', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen6.png";
    VenusaurDex.innerText = venusaurDex[5];
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen7.addEventListener('mouseover', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen7.png";
    VenusaurDex.innerText = venusaurDex[6];
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen8.addEventListener('mouseover', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen8.png";
    VenusaurDex.innerText = venusaurDex[7];
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});
vGen9.addEventListener('mouseover', function(e){
    document.getElementById('VenusaurCard');
    VenusaurCard.className = "pulse";
    document.getElementById('VenusaurCard').src="../assets/Venusaur/VenusaurGen9.png";
    VenusaurDex.innerText = venusaurDex[8];
    VenusaurAbility.innerText = "Ability: Chlorophyll";
    VenusaurMove.innerText = ""
    VenusaurMoveDesc.innerText = ""
});

// -- Charizard --
CharizardDefault.addEventListener('mouseover', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard.png";
    CharizardDex.innerText = charizardDex[8];
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
CharizarditeX.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    CharizarditeX.className = "spinner";
    document.getElementById('CharizardCard').src="../assets/Charizard-MegaX.png";
    CharizardDex.innerText = charizardDex[9];
    CharizardAbility.innerText = "Ability: Tough Claws";
    CharizardMove.innerText = "Blast Burn";
    CharizardMoveDesc.innerText = "The target is razed by a fiery explosion. The user can't move on the next turn.";
});
CharizarditeY.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    CharizarditeY.className = "spinner";
    document.getElementById('CharizardCard').src="../assets/Charizard-MegaY.png";
    CharizardDex.innerText = charizardDex[10];
    CharizardAbility.innerText = "Ability: Drought";
    CharizardMove.innerText = "Overheat";
    CharizardMoveDesc.innerText = "The user attacks the target with all its might. The recoil from this move harshly lowers the user's Sp. Atk stat.";
});

CharizardGmax.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "heartbeat";
    CharizardGmax.className = "shake";
    document.getElementById('CharizardCard').src="../assets/Charizard-GMax.png";
    CharizardDex.innerText = charizardDex[11];
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = "G-Max Wildfire";
    CharizardMoveDesc.innerText = "A Fire-type attack that Gigantamax Charizard use. This move continues to deal damage to opponents for four turns.";
});
CharizardZ.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    CharizardZ.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard.png";
    CharizardDex.innerText = charizardDex[6];
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = "Inferno Overdrive";
    CharizardMoveDesc.innerText = "The user breathes a stream of intense fire toward the target with the full force of its Z-Power";
});
CharizardTera.addEventListener('click', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    CharizardTera.className = "wiggle";
    document.getElementById('CharizardCard').src="../assets/CharizardTera.png";
    CharizardDex.innerText = charizardDex[8];
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = "Dragon Pulse"
    CharizardMoveDesc.innerText = "The target is attacked with a shock wave generated by the user's gaping mouth."
});
// - Sprites -
cGen1.addEventListener('mouseover', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen1.png";
    CharizardDex.innerText = charizardDex[0];
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen2.addEventListener('mouseover', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen2.png";
    CharizardDex.innerText = charizardDex[1];
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen3.addEventListener('mouseover', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen3.png";
    CharizardDex.innerText = charizardDex[2];
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen4.addEventListener('mouseover', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen4.png";
    CharizardDex.innerText = charizardDex[3];
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen5.addEventListener('mouseover', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen5.png";
    CharizardDex.innerText = charizardDex[4];
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen6.addEventListener('mouseover', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen6.png";
    CharizardDex.innerText = charizardDex[5];
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen7.addEventListener('mouseover', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen7.png";
    CharizardDex.innerText = charizardDex[6];
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen8.addEventListener('mouseover', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen8.png";
    CharizardDex.innerText = charizardDex[7];
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});
cGen9.addEventListener('mouseover', function(e){
    document.getElementById('CharizardCard');
    CharizardCard.className = "pulse";
    document.getElementById('CharizardCard').src="../assets/Charizard/CharizardGen9.png";
    CharizardDex.innerText = charizardDex[8];
    CharizardAbility.innerText = "Ability: Solar Power";
    CharizardMove.innerText = ""
    CharizardMoveDesc.innerText = ""
});



// - Blastoise -
BlastoiseDefault.addEventListener('mouseover', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise.png";
    BlastoiseDex.innerText = blastoiseDex[8];
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
Blastoisinite.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    Blastoisinite.className = "spinner";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise-Mega.png";
    BlastoiseDex.innerText = blastoiseDex[9];
    BlastoiseAbility.innerText = "Ability: Mega Launcher";
    BlastoiseMove.innerText = "Hydro Cannon";
    BlastoiseMoveDesc.innerText = "The target is hit with a watery blast. The user can't move on the next turn.";
});

BlastoiseGmax.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "heartbeat";
    BlastoiseGmax.className = "shake";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise-GMax.png";
    BlastoiseDex.innerText = blastoiseDex[10];
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = "G-Max Cannonade";
    BlastoiseMoveDesc.innerText = "A Water-type attack that Gigantamax Blastoise use. This move continues to deal damage to opponents for four turns.";
});
BlastoiseZ.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    BlastoiseZ.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise.png";
    BlastoiseDex.innerText = blastoiseDex[6];
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = "Hydro Vortex";
    BlastoiseMoveDesc.innerText = "The user creates a huge whirling current using its Z-Power to swallow the target with full force.";
});
BlastoiseTera.addEventListener('click', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    BlastoiseTera.className = "wiggle";
    document.getElementById('BlastoiseCard').src="../assets/BlastoiseTera.png";
    BlastoiseDex.innerText = blastoiseDex[8];
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = "Flash Cannon"
    BlastoiseMoveDesc.innerText = "The user gathers all its light energy and releases it at once. This may also lower the target's Sp. Def stat."
});
// - Sprites -
bGen1.addEventListener('mouseover', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen1.png";
    BlastoiseDex.innerText = blastoiseDex[0];
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen2.addEventListener('mouseover', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen2.png";
    BlastoiseDex.innerText = blastoiseDex[1];
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen3.addEventListener('mouseover', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen3.png";
    BlastoiseDex.innerText = blastoiseDex[2];
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen4.addEventListener('mouseover', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen4.png";
    BlastoiseDex.innerText = blastoiseDex[3];
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen5.addEventListener('mouseover', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen5.png";
    BlastoiseDex.innerText = blastoiseDex[4];
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen6.addEventListener('mouseover', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen6.png";
    BlastoiseDex.innerText = blastoiseDex[5];
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen7.addEventListener('mouseover', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen7.png";
    BlastoiseDex.innerText = blastoiseDex[6];
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen8.addEventListener('mouseover', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen8.png";
    BlastoiseDex.innerText = blastoiseDex[7];
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});
bGen9.addEventListener('mouseover', function(e){
    document.getElementById('BlastoiseCard');
    BlastoiseCard.className = "pulse";
    document.getElementById('BlastoiseCard').src="../assets/Blastoise/BlastoiseGen9.png";
    BlastoiseDex.innerText = blastoiseDex[8];
    BlastoiseAbility.innerText = "Ability: Rain Dish";
    BlastoiseMove.innerText = ""
    BlastoiseMoveDesc.innerText = ""
});