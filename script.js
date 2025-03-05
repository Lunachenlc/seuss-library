function createElement (type, props, ...children) {
  const $el = document.createElement(type)
  Object.keys(props).forEach(prop => $el[prop] = props[prop])
  $el.append(...children)
  return $el
}

// HTML Elements
const $library = document.getElementById('library')
const $pages = document.getElementById('pages')

/* <div class="book">
<img class="img-fluid" src="https://seussology.info/images/book-covers/1.jpg" alt="And to Think That I Saw It on Mulberry Street">
</div> */

/*const html = []
for (const book of books) {
  html.push(createElement('div', {className: 'book'}, book.title))
}

console.log(html)*/

/*const html = books.map(book =>
  createElement('div', {className: 'book'}, book.title)
)

console.log(html)*/


/*const filteredBooks = books.filter(book =>
  book.title.toLowerCase().includes('cat')
)

console.log(filteredBooks) */

/*
*filterBooks
*check each book's title and description for the provided query
*@param{array} books
*@param {string} query
*@return {array} array of books
if (true || false)
const isAdmin = fales || true*/
function filterBooks (books,query) {}

/*
* createBooks
* create a book element for each book in the provided array
* @param {array} books
*@return {array} array of elements
*/

function createBooks (books) {
  return books.map(book => 
    createElement('div',{className: 'book'},
      createElement('img', {
        className: 'img-fluid',
        src: book.image,
        alt: book.title
      })
    )
  )
}



const createdBooks = createBooks(books)
createdBooks.forEach(book => $library.append(book))