function trocarimg(filename, animalname){
    document.querySelector('.img').setAttribute('src','img/'+filename);
    document.querySelector('.img').setAttribute('data-animal',animalname);

}
function pegarAnimal(){
    let animal=document.querySelector('.img').getAttribute('data-animal');
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'O animal é um GATO' + animal,
        showConfirmButton: false,
        timer: 1500
      } + animal)
    //swal(" O animal é um GATO", "error");
    //alert('O animal é: '+animal);
}