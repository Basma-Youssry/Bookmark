var siteNameInput = document.getElementById("siteNameInput");
var siteURLInput = document.getElementById("siteURLInput");


var sites = [];

//Follow (Local storage)(2)
if(localStorage.getItem("sites") != null){
    sites = JSON.parse(localStorage.getItem("sites")) ;

    displaySites();
}


//First Step(Create)

// (1)
function addSite(){
    
    var site = {
        name: siteNameInput.value,
        url: siteURLInput.value
    }
    
    sites.push(site);

//Fourth step (Local storage)(1)
    localStorage.setItem("sites",  JSON.stringify(sites) );

    displaySites();
    clearInputValues();

}

//(2)
function clearInputValues(){

    siteNameInput.value = "";
    siteURLInput.value = "";

}

//Second Step (Display)

function displaySites(){
    
    contain = "";
    for(var i = 0; i < sites.length; i++){

        contain += `
                    <tr>
                    <td>${i + 1}</td>
                    <td>${sites[i].name}</td>
                    <td>
                        <button class="btn btn-visit">
                            <i class="fa-solid fa-eye"></i>
                            <a href = "${sites[i].url}"> 
                             Visit
                            </a> 
                        </button>
                    </td> 
                    <td>
                        <button class="btn btn-danger" onclick= "deleteSite(${i})">
                            <i class="fa-solid fa-trash-can"></i>
                            Delete
                        </button>
                    </td>  
                    </tr> `
    }

    document.getElementById("table-body").innerHTML = contain;
}

//Third Step (Delete)

function deleteSite(index){
    
    sites.splice(index, 1);

    //Follow (Local storage)(3)
    localStorage.setItem("sites",  JSON.stringify(sites));
    
    displaySites();
}



