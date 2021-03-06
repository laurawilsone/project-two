getProducts = function () {
    return new Promise((resolve, reject) => {
        $.get("/api/products", (data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
};

getProduct = function(id) {
    return new Promise((resolve,reject) => {
        $.get("/api/products/" + id, (data) => {
            resolve(data);
        }).catch((err)=>{
            reject(err);
        });
    })
    
}
createProduct = function (product) {
    return new Promise((resolve, reject) => {
    $.post("/api/products", product,(data) =>{
        resolve(data);
    }).catch((err) => {
        reject(err);
    });
});
}

updateProduct = function (product) {
    return new Promise((resolve, reject) =>{
        $.ajax({
            method: "PUT",
            url:    "/api/products",
            data: product,
        })
        .then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
    };

getInvoices = function(){
    return new Promise((resolve,reject) => {
        $.get("/api/invoice", (data) =>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}

getInvoice = function(id){
    return new Promise((resolve,reject) => {
        $.get("/api/invoice/" + id, (data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
};

createInvoice = function(invoice){
    return new Promise((resolve,reject) => {
        $.post("/api/invoice",invoice,(data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
};

updateInvoice = function(invoice){
    return new Promise ((resolve, reject) => {
        $.ajax({
            method: "PUT",
            url: "/api/invoice",
            data: invoice,            
        }).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
};

getPieChart = function(){
    return new Promise ((resolve,reject) => {
        $.get("/api/charts/pie",(data) => {
            resolve(data);
        }).catch((err)=> {
            reject(err);
        });
    });
};

getBarChart = function(){
    return new Promise ((resolve,reject) => {
        $.get("/api/charts/bar",(data) => {
            resolve(data);
        }).catch((err)=> {
            reject(err);
        });
    });
};

getScatterChart = function(){
    return new Promise ((resolve,reject) => {
        $.get("/api/charts/scatter",(data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}

