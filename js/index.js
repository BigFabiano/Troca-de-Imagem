function trocarimg(filename, animalname){
    document.querySelector('.img').setAttribute('src','img/'+filename);
    document.querySelector('.img').setAttribute('data-animal',animalname);

}
function pegarAnimal(){
    let animal=document.querySelector('.img').getAttribute('data-animal');
    //Swal("O animal é um GATO", 'success' + animal );
   swal(" O animal é um " + animal /*+ ' success' */);
    //alert('O animal é: '+animal);
}