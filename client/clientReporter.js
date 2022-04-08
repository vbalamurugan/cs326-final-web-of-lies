import * as crud from "./crud.js";

document.getElementById("addItem").addEventListener("click", async(e) => {
    const category = document.getElementById("category").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const contact = document.getElementById("contact").value;
    const image = document.getElementById("image").value;
    const id = document.getElementById("id").value;
    const newItem = await crud.createItem(category, location, contact, time, image, id);
});

document.getElementById("updateButton").addEventListener("click", async(e) => {
    const category = document.getElementById("category").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const contact = document.getElementById("contact").value;
    const image = document.getElementById("image").value;
    const id = document.getElementById("id2").value;
    console.log(id);
    const newItem = await crud.updateItem(category, location, contact, time, image, id);
});

document.getElementById("deleteButton").addEventListener("click", async(e) => {
    const id = document.getElementById("id2").value;
    const newItem = await crud.deleteItem(id);
});

// const jsonob1 = { category: "electronics", location: "library", contact: "Sid", time: "7:20pm", image: "image1", id: "1" };
// const jsonob2 = { category: "mobile", location: "lgrc", contact: "Me", time: "5:40pm", image: "image2", id: "2" };
// const jsonob3 = { category: "wallet", location: "office", contact: "Ghost", time: "9:40pm", image: "image3", id: "3" };

// let arr = [];
// arr.push(jsonob1, jsonob2, jsonob3);

// function render(element) {
//     element.innerHTML = "";

//     // for (let i = 1; i <= 3; ++i) {
//     //     const div = document.createElement("div");
//     //     div.classList.add("grid-item");
//     //     div.innerText = arr[i];
//     //     element.appendChild(div);
//     // }
//     //     for (let item of arr) {
//     //         row = document.getElementById("tabledata").insertRow(-1);
//     //         for (let key in item) {
//     //             var cell = row.insertCell(-1);
//     //             cell.innerHTML = item[key];
//     //         }
//     //     }

//     for (var i = 0; i < arr.length; i++) {

//         tr = document.getElementById("tabledata").insertRow(-1);

//         for (var j = 0; j < col.length; j++) {
//             var tabCell = tr.insertCell(-1);
//             tabCell.innerHTML = myBooks[i][col[j]];
//         }
//     }

// }
// render();



function CreateTableFromJSON() {
    const jsonob1 = { category: "electronics", location: "library", contact: "Sid", time: "7:20pm", image: "image1", id: "1" };
    const jsonob2 = { category: "mobile", location: "lgrc", contact: "Me", time: "5:40pm", image: "image2", id: "2" };
    const jsonob3 = { category: "wallet", location: "office", contact: "Ghost", time: "9:40pm", image: "image3", id: "3" };

    let myBooks = [];
    myBooks.push(jsonob1, jsonob2, jsonob3);
    // let id = document.getElementById("id2").value;
    // let itemthing = await crud.readItem(id);
    // console.log("itemthing", itemthing);
    // let myBooks = [];
    // for (val of itemthing) {
    //     myBooks.push(val);
    // }
    // let myBooks = [{
    //         "Book ID": "1",
    //         "Book Name": "Computer Architecture",
    //         "Category": "Computers",
    //         "Price": "125.60"
    //     },
    //     {
    //         "Book ID": "2",
    //         "Book Name": "Asp.Net 4 Blue Book",
    //         "Category": "Programming",
    //         "Price": "56.00"
    //     },
    //     {
    //         "Book ID": "3",
    //         "Book Name": "Popular Science",
    //         "Category": "Science",
    //         "Price": "210.40"
    //     }
    // ]

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < myBooks.length; i++) {
        for (var key in myBooks[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    // var table = document.createElement("table");
    let table = document.getElementById("tabledata")

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    var tr = table.insertRow(-1); // TABLE ROW.
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.

        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < myBooks.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = myBooks[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("span");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

CreateTableFromJSON();