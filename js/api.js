
const searchBook = () => {
    const searchField = document.getElementById('searchInput');
    const searchText = searchField.value;
    // spinner show
    // Spinner('block')

    // clear data
    searchField.value = '';
    // search text
    if (searchText === '') {
        console.log('please write something to display');
        inputEmpty('block')
    }
    else {
        // load data
        const url =` https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs))
    }
}

// desplay search result
const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    //  error message
    if (books.length === 0) {
        resultErrer('block')
    }else{
        resultErrer('none')
    }
    // forEach books
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`
        const imgDefolt = 'http://www.friendlyautosale.net/application/modules/themes/views/default/assets/images/image-placeholder.png' 
        div.innerHTML = `
            <div class="card-body h-25">
                <img src="${imgUrl}" class="card-img-top" alt="...">
                <h3 class="card-title">Book: ${book.title}</h3>
                <h4 class="card-title">Author: ${book.author_name[0]}</h4>
                <h5 class="card-title">Publish: ${book.first_publish_year}</h5>
            </div>
        `;
        searchResult.appendChild(div);
    });
    
}
// Input Empty
const inputEmpty = (inputDes)=>{
    document.getElementById('input-empty').style.display=inputDes;
}
// result search  error 
const resultErrer = dsplayStyle =>{
    document.getElementById('error').style.display =dsplayStyle;
}

// // Spinner 
// const Spinner = dsplay=>{
//     document.getElementById('spinner').style.display =dsplay;
// }