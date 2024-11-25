// Initialize a variable to track the selected row
let selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        const formData = readFormData();
        if (selectedRow === null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }
        resetForm();
    }
}

function readFormData() {
    const formData = {};
    formData.fullName = document.getElementById("fullName").value;
    formData.email = document.getElementById("email").value;
    formData.salary = document.getElementById("salary").value;
    formData.city = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    const table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.length);
    newRow.innerHTML = `
        <td>${data.fullName}</td>
        <td>${data.email}</td>
        <td>${data.salary}</td>
        <td>${data.city}</td>
        <td>
            <a onClick="onEdit(this)">Edit</a>
            <a onClick="onDelete(this)">Delete</a>
        </td>
    `;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

// Other functions (onEdit, updateRecord, onDelete, validate) go here...

// Remember to add event listeners for form submission and other actions!
