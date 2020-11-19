//Book class


class Book {
    constructor(title, author, isbn) {
         this.title = title;
         this.author = author;
         this.isbn = isbn;
    }
}



// UI class


class UI {
    static displayBooks(){
          const StoredBooks = [
              {
                  title: 'Book One',
                  author:'John Doe',
                  isbn:  '215321452'
              }, 
              {
                  title: 'Book two', 
                  author: 'Jane Doe', 
                  isbn: '452114712'
              }
          ];

          
          const Books = StoredBooks;
        // const Books = Store.addBook();
         

          Books.forEach((book) => UI.addBookToList(book));
}
          
          


    static addBookToList(book){
        const list = document.querySelector('#bookList');


        const row = document.createElement('tr');

        row.innerHTML = `<td>${book.title}</td>
                         <td>${book.author}</td>
                         <td>${book.isbn}</td>
                         <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;
    
        list.appendChild(row);
}


       static clearFields(){
             document.querySelector('#title').value = '';
             document.querySelector('#author').value = '';
             document.querySelector('#isbn').value = '';
}

       static deleteBook(el){
             if(el.classList.contains('delete')){
                 el.parentElement.parentElement.remove();
             }
}


       static showAlerts(message, className){
           const div = document.createElement('div');
           div.className = `alert alert-${className}`;
                        //ajouter un text dans le div 
           div.appendChild(document.createTextNode(message));
           const container = document.querySelector('.container');
           const form = document.querySelector('#book-form');
                        //inserer notre div avant form
           container.insertBefore(div, form);

           //supprimer les alerts apres 3 seconds 

           setTimeout(() => document.querySelector('.alert').remove(), 3000);

}
     
}



//Store class: la class pour povoir sauvegarder nos données dans la localstorage 


class Store{
     static getBooks(){
                let books;
                if(localStorage.getItem('books') === null){
                    books = [];
                }else{
                    books =  JSON.parse(localStorage.getItem('books'));
                    return books;
                }
        }


     static addBook(book){
                const books = Store.getBooks();

                books.push(book);
                localStorage.setItem('books',JSON.stringify(books));


        }

     static removeBook(){
                const books = Store.getBooks();
                books.forEach((book, index)=>{
                    if(books.isbn === isbn){
                        books.splice(index, 1);
                    }
                })
                localStorage.setItem('books', JSON.stringify(books));
    }
}


//Event: Display book


document.addEventListener('DOMContentLoaded', UI.displayBooks);


//Event AddBook


document.querySelector('#book-form').addEventListener('submit', (e) =>{

               e.preventDefault();
               //recuperer les données du formulaire 

        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn =   document.querySelector('#isbn').value;
        

        //validate   afficher un message d'error avec cette method dans la class UI

       if(title === '' || author === '' || isbn === ''){
            UI.showAlerts('Please fill in all fields!', 'danger')
       }else{
        
           
         //initialisation de la classe book


         const book = new Book(title, author, isbn);

         console.log(book);
 
 
         //add book to list
 
         UI.addBookToList(book);


         //add the book to local storage 


          Store.addBook(book);

 
          //show success message   - afficher le message de succes ...

          UI.showAlerts('Book succefully aded', 'success');
 
 
         //clearFields   method permetant de clear tout les champs apres avoit  ajouter un livre
 
 
         UI.clearFields();



       }

})


//RemoveBook 


document.querySelector('#bookList').addEventListener('click', (e)=>{
    console.log(e.target);


    UI.deleteBook(e.target);


    //afficher un message apres avoir supprimer le livre de la list

    
    UI.showAlerts('Book Removed', 'success');
 
 
})