let result=document.getElementById('result');
function appendValue(value)
{
result.value+=value;
}
function clearResult()
{
    result.value='';
}
function calculate()
{
    try{
        const expression=result.value;
        const answer=eval(expression);
        result.value=answer;
    }
    catch (error){
        result.value='Error';
    }
}
window.addEventListener('keydown',handleKeyDown)
function handleKeyDown(){
    const key=event.key;
    if(/[\d\/\*\-\+\.]/.test(key))
    {
        result.value +=key;

    }
    else if(key==='Enter')
    {
        calculate();
    }
    else if(key === 'Escape')
    {
        clearResult();
    }
    else if(key==='Backspace')
    {
        result.value=result.value.slice(0,-1);
    }
}