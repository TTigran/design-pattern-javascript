function Factory() {
    this.selectBook = function (subject) {
        let book;

        if(subject === "Matematics"){
            book = new Matematics();
        } else if (subject === "Physics") {
            book = new Physics();
        } else if (subject === "Chemistry") {
            book = new Chemistry();
        } else if (subject === "Biology") {
            book = new Biology();
        }

        book.subject = subject
        return book;
    }
}

const  Matematics = function () {
    this.page = 60;
    this.getPage =function () {
        console.log(this.page);
    }
}

const  Physics = function () {
    this.page = 50;
    this.getPage =function () {
        console.log(this.page);
    }
}

const Chemistry = function () {
    this.page = 40;
    this.getPage =function () {
        console.log(this.page);
    }
}

const Biology = function () {
    this.page = 30;
    this.getPage =function () {
        console.log(this.page);

    }
}

const factory = new Factory();

factory.selectBook("Matematics").getPage();
factory.selectBook("Physics").getPage();
factory.selectBook("Chemistry").getPage();
factory.selectBook("Biology").getPage();

