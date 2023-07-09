var selectedRow=null

function onFormSubmit(){
    if(validate()){
        if(selectedRow==null){
        formData=readFormData()
        insertNewRow(formData)
        }
        else{
            formData=readFormData()
            updateRecord(formData)
        }
    }
}

function readFormData(){
    var formData={}
    formData["productCode"]=document.getElementById('productCode').value
    formData["productName"]=document.getElementById('productName').value
    formData["Qty"]=document.getElementById('Qty').value
    formData["Price"]=document.getElementById("price").value
    return formData
}

function insertNewRow(data){
    var table=document.getElementById('dataTable').getElementsByTagName('tbody')[0]
    var newRow=table.insertRow(table.length)
    var cell1=newRow.insertCell(0)
        cell1.innerHTML=data.productCode
    var cell2=newRow.insertCell(1)
        cell2.innerHTML=data.productName
    var cell3=newRow.insertCell(2)
        cell3.innerHTML=data.Qty
    var cell4=newRow.insertCell(3)
        cell4.innerHTML=data.Price
    var cell5=newRow.insertCell(4)
        cell5.innerHTML=`<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`   
        
    resetForm()
}  

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById('productCode').value=selectedRow.cells[0].innerHTML;
    document.getElementById('productName').value=selectedRow.cells[1].innerHTML;
    document.getElementById('Qty').value=selectedRow.cells[2].innerHTML;
    document.getElementById('price').value=selectedRow.cells[3].innerHTML;

}
function updateRecord(formData){
    console.log('true')
    selectedRow.cells[0].innerHTML=formData.productCode
    selectedRow.cells[1].innerHTML=formData.productName
    selectedRow.cells[2].innerHTML=formData.Qty
    selectedRow.cells[3].innerHTML=formData.Price

    resetForm()
}

function resetForm(){
    document.getElementById('productCode').value=""
    document.getElementById('productName').value=""
    document.getElementById('Qty').value=""
    document.getElementById('price').value=""
    selectedRow=null
}

function onDelete(td){
    if(confirm('Are you sure delete this record?')){
        row=td.parentElement.parentElement;
        document.getElementById('dataTable').deleteRow(row.rowIndex)
        resetForm()
    }
}

function validate(){
    if(!document.getElementById('productCode').value==""){
        isValid=true;
      
    }
    else{
        isValid=false
    
    }
    return isValid;
}