let bucketList = JSON.parse(localStorage.getItem('bucketList')) || [];
let filterCategory = "All";
let editIndex = null;

function addItem(){
    const description =document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const targetDate = document.getElementById("target-date").value;

    if(description && category && targetDate){

        if(editIndex != null) {
            bucketList[editIndex] = {description,category,targetDate,completd: bucketList[editIndex].completed,};
            editIndex=null;
        } else{
           // Add a new item to the list
        bucketList.push({description,category,targetDate,completd: false});
        }
 
        localStorage.setItem("bucketList",JSON.stringify(bucketList));
        clearInputField();
        updateUI();
    }
}


function clearInputField(){
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("target-date").value = "";
}


function updateUI(){
    const bucketListContainer = document.getElementById("bucket-list");
    bucketListContainer.innerHTML = "";
    let completdCount = 0;

    const filteredList = filterCategory == "All" 
    ? bucketList 
    : bucketList.filter(function(item) {
        return item.category == filterCategory;

    });

    
    bucketList.forEach(function (item,index) {
        const itemElement = document.createElement("li");
        itemElement.classList = "p-4 border border-gray-200 rounded-lg flex justify-between item-center bg-gradient-to-r from-blue-50 to-indigo-50";
        itemElement.innerHTML = 
            "<div> <p class='font-semibold'>" +
            item.description + 
            "</p>" + 
            "<p class='text-sm text-gray-600'>" + 
            item.category + 
            "- Target: " + 
            item.targetDate +
            "</p></div><div>" +
            "<button onclick='editItem(" + index +")' class='px-2 py-1 bg-yellow-500 text-white rounded'" +
            ">Edit</button>" +
            
            "<button onclick='toggleCompletion(" + 
            index +")'class='mr-2 px-2 py-1 rounded' " + 
            (item.completd ? "bg-green-500 text-white" + "'>": "bg-red-500 text-white" + "'>" )+
            ">"+
            (item.completed 
            ? "Achieved" + "</button>" 
            : "Pending"+"</button>") +

            "<button onclick='deleteItem(" + index +")' class='px-2 py-1 bg-red-500 text-white rounded'" +
            ">Delete</button></div>";

            console.log(itemElement);


            if(item.completed) {
               completedCount++;
            }

        bucketListContainer.appendChild(itemElement);
    });
 

    // update progress
    const progressPercentage = (completdCount / bucketList.length) * 100 || 0;
    document.getElementById("progress-bar").style.width = 
      progressPercentage + "%";
      document.getElementById("completed-count").innerText = completdCount;
      document.getElementById("total-count").innerText = bucketList.length;
}


function toggleCompletion(index){
    bucketList[index].completd = !bucketList[index].completd;
    localStorage.setItem("bucketList",JSON.stringify(bucketList));
    updateUI();
}


function deleteItem(index){
    bucketList.splice(index,1);
    localStorage.setItem("bucketList",JSON.stringify(bucketList));
    updateUI();

}


function filterItems(category){
    filterCategory = category;
    updateUI();
}


function editItem(index){
    document.getElementById("description").value = bucketList[index].description;
    document.getElementById("category").value = bucketList[index].category;
    document.getElementById("target-date").value = bucketList[index].target-date;
   
}

updateUI();
