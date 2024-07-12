//ERRORS
/// importar CommonModule per error ngif
/// en el app-modal afegir un #modalComponent i modificar el nom de la variable a viewchild, el que hi havia era poc concret

// NETEJA DE CODI
// eliminar test modal que no serveix per res
// un sol open modal i enviar-ne els valor des del boto
// a change backgroundmodal cridar a la funció propia del component enlloc de la del fill
// trec l' oninit del modal perque no s' hi crida cap funció
// trec l' afterviewinit del app perque no s' hi crida cap funció
// treure comentaris a funcions amb noms ben definits
// elimino console.logs per a producció
// inicialitzo title i modal_title al constructor

// trec l' argument body del openModal perque no es fa servir
// moc el modal a una carpeta de components
// en el modal inicialitzo backgroundcolor en el constructor

//coses fetes per consultar
//valorar relació entre canvi de color i suma per entendre si s' haurien d' implementar en la crida inicial o una crida l' altra...



