$(document).ready(function() {
    var array = [];
    var empArray = [];
    var totalSalary = 0;
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        values[element.name] = element.value;
      });

      empArray.push(values);
      console.log(values);

      for (var i = 0; i < empArray.length; i++) {
        totalSalary += empArray[i].employeeSalary;
      }
      var monthlySalary = totalSalary / 12;
      $('#monthlySalary').text(monthlySalary);
      console.log(monthlySalary);
      // clear out inputs
      $('#employeeinfo').find('input[type=text] input[type=number]').val('');

      // append to DOM
      appendDom(values);
    });

    function appendDom(empInfo) {
      $('#empBody').append('<tr class="person"><td>' +
      empInfo.employeeFirstName + '</td><td>' +
      empInfo.employeeLastName + '</td><td>' +
      empInfo.employeeID + '</td><td>' +
      empInfo.employeeTitle + '</td><td>' +
      empInfo.employeeSalary + '</td>' +
      '<td><button class="deleteButton">Delete</button></td>' +
      '</tr>');
    }

    $('#container').on('click', '.deleteButton', function(event) {
      event.preventDefault();
      $(this).parent().parent().remove();
    });
});
