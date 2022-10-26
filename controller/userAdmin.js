const Service = require("../service");
const ExcelJS =require("exceljs")

module.exports = {
  Add: async (data) => {
    let userdata = {
      name: data.name,
      age: data.age,
      gender: data.gender,
      address: data.address,
    };
    let user = await Service.userService.addUser(userdata);
    if (user) {
      return {
        status: "Success",
        message: "Add user successfull",
        user: user,
      };
    } else {
      return {
        status: "unSuccess",
        message: " unable to Add user ",
        user: user,
      };
    }
  },
  gets: async (req,res) => {
    let user = await Service.userService.gets();
    if(user){
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("My User");
      worksheet.columns = [
        { header: "userId", key: "userId", width: "10" },
        { header: "Name", key: "name", width: "10" },
        { header: "Age", key: "age", width: "10" },
        { header: "Gender", key: "gender", width: "10" },
        { header: "Address", key: "address", width: "10" },
      ];
      user.rows.forEach((element) => {
        worksheet.addRow(element);
      }); 
  
      worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true };
      });
      const data = await workbook.xlsx.writeFile("user.xlsx");
      return {
        status:"Done"
      }
    }
    else{ 
      return{
        status:"No"
      }
    }
  },
};
