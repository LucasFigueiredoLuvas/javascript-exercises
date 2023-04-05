const getTheTitles = function(titles) {
    const names = [];
    const t = titles.filter((book) => names.push(book.title));
    return names;
};

// Do not edit below this line
module.exports = getTheTitles;

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.log(getTheTitles(books));
