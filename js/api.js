
const searchBook = () => {
    const searchField = document.getElementById('searchInput');
    const searchText = searchField.value;
    
    // spinner show
    Spinner('block')

    // Total Search Result 
        fetch(` https://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => document.getElementById('total-search-result').innerText=(data.numFound));

    // clear data
    searchField.value = '';
    // search text
    if (searchText === '') {
        console.log('please write something to display');
        inputEmpty('block');
        Spinner('none')

    }
    else {
        // load data
        const url =` https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs))
            inputEmpty('none');
    }
}

// desplay search result
const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    //  error-message message
    if (books.length === 0) {
        resultErrer('block')
    }else{
        resultErrer('none')
    }


    //  console.log(books.length);

    // forEach books
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`;

        div.innerHTML = `
            <div class="card-body h-25">
                <img src="${imgUrl}" class="card-img-top" alt="...">
                <h3 class="card-title">Book: ${book.title}</h3>
                <h4 class="card-title">Author: ${book.author_name}</h4>
                <h5 class="card-title">Publish: ${book.first_publish_year}</h5>
            </div>
        `;
        searchResult.appendChild(div);
        Spinner('none');
    });
    
};
// Input Empty
const inputEmpty = (inputDes)=>{
    document.getElementById('input-empty').style.display=inputDes;
}
// result search  error-message 
const resultErrer = dsplayStyle =>{
    document.getElementById('error-message').style.display =dsplayStyle;
}

// Spinner 
const Spinner = dsplay=>{
    document.getElementById('spinner').style.display =dsplay;
}