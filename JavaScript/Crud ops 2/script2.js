var selectedRow=null

function onFormSubmit(){
    if(validate()){
        if(selectedRow==null){ 
            formData=readFormData();
            insertNewRecord(formData);
        }
        else{
            formData=readFormData()
            updateRecord(formData)
        }
    }
}

// 1. To retrieve data
function readFormData(){
    var formData={}
    formData["productCode"]=document.getElementById('productCode').value
    formData["productName"]=document.getElementById('productName').value
    formData["qty"]=document.getElementById('qty').value
    formData["price"]=document.getElementById('price').value
    
    return formData;
}

// 2. To insert new record
function insertNewRecord(data){
    var table=document.getElementById('data-table').getElementsByTagName('tbody')[0]
    var newRow=table.insertRow(table.length)
    var cell1=newRow.insertCell(0)
        cell1.innerHTML=data.productCode
    var cell2=newRow.insertCell(1)
        cell2.innerHTML=data.productName
    var cell3=newRow.insertCell(2)
        cell3.innerHTML=data.qty
    var cell4=newRow.insertCell(3)
        cell4.innerHTML=data.price
    var cell5=newRow.insertCell(4)
        cell5.innerHTML=`<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`

    resetForm()
}

function onEdit(data){
    selectedRow=data.parentElement.parentElement
    document.getElementById('productCode').value=selectedRow.cell[0].innerHTML
    document.getElementById('productName').value=selectedRow.cell[1].innerHTML
    document.getElementById('qty').value=selectedRow.cell[2].innerHTML
    document.getElementById('price').value=selectedRow.cell[3].innerHTML

}

function onDelete(td){
    if(confirm("Are you sure to delete this data ?")){
        var row=td.parentElement.parentElement
        document.getElementById('data-table').deleteRow(row.rowIndex)
        resetForm()
    }
}


// 3. to reset the form
function resetForm(){
    document.getElementById('productCode').value=""
    document.getElementById('productName').value=""
    document.getElementById('qty').value=""
    document.getElementById('price').value=""

    selectedRow=null
}

// 4. to update the record
function updateRecord(data){
    // selectedRow=data.parentElement.parentElement
    selectedRow.cells[0].innerHTML=data.productCode
    selectedRow.cells[1].innerHTML=data.productName
    selectedRow.cells[2].innerHTML=data.qty
    selectedRow.cells[3].innerHTML=data.price

    resetForm()
}

// 5. to check if the input has value or not
function validate(){
    
    if(!document.getElementById('productCode').value==""){
        isValid=true
        
    }
    else{
        isValid=false
        
    }
    return isValid
}
 

