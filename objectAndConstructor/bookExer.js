function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    let read = false;
    this.info = function(){
        if(read  === true){
            console.log("The " + this.title + " by " + this.author +" , "+ this.pages+" pages, not read yet");
        }
        else{
            console.log("The " + this.title + " by " + this.author +" , "+ this.pages+" pages, read");
        }
    };
}

const theHobbit = new Book('theHobbit', 'J.R.R. Tolkien', 295);
theHobbit.info();