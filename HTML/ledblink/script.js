const led=document.getElementById('led');
const music=document.getElementById('music');
function startBlinking()
{
    led.style.animationPlayState='running';
}
function stopBlinking()
{
    led.style.animationPlayState='paused';

}
music.addEventListener('play',startBlinking);
music.addEventListener('pause',stopBlinking);