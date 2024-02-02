const student = {
    name: "John Doe",
    phoneNumber: "123-456-7890",
    marks: [80, 85, 90],
    averageMarks: function() {
      var sum = 0;
      this.marks.forEach(function(m) {
        sum += m;
      });
      return sum / this.marks.length;
    },
    printDetails: function() {
      console.log("Name: " + this.name);
      console.log("Phone Number: " + this.phoneNumber);
      console.log("Average Marks: " + this.averageMarks());
    }
  };