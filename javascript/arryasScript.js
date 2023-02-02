const arry = [85, 43, 1, 20, 34, 8, 80, 67, 23, 7];

function fetchAllElements() {
    let len = arry.length;
    document.getElementById('allelements').innerHTML = '<br><strong>' + arry + '</strong>';
    document.getElementById('arrayLength').innerHTML = 'Array Length = ' + len;
}

function iterateArray() {
    arry.forEach(e => console.log(e));
}

function sortArray(sort) {
    let temp = [];
    if (sort == 'ASC')
        temp = arry.sort((a, b) => a - b);
    else
        temp = arry.sort((a, b) => b - a);

    document.getElementById('allelements').innerHTML = '<br><strong>' + temp + '</strong>';

}
function filterArray(sort)
{
    let temp=[];
    let num=Number(document.getElementById('num').value);
    if(sort=='SMALL')
        temp=arry.filter(e=>e<num);
    else   
        temp=arry.filter(e=>e>num);
    document.getElementById('allelements').innerHTML = '<br><strong>' + temp + '</strong>';
    
}
function joinArray(){
    let temp=arry.join('-');
    console.log(temp);
}
function searchNum()
{
    let num=Number(document.getElementById('snum').value);
    if(arry.find(e=>e==num) == undefined)
        document.getElementById('searchResult').innerHTML='Element '+ num +' not found';
    else
    document.getElementById('searchResult').innerHTML='Element '+ num +' is  found!!';


}