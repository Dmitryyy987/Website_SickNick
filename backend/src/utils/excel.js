const path = require('path');
const fs = require('fs');
const ExcelJS = require('exceljs');

const dataDir = path.join(__dirname, '..', '..', 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const filePath = path.join(dataDir, 'contacts.xlsx');

async function appendContactToExcel(rowObj) {
  const workbook = new ExcelJS.Workbook();
  let sheet;

  // If file exists, read it; otherwise create new workbook & header
  if (fs.existsSync(filePath)) {
    await workbook.xlsx.readFile(filePath);
    sheet = workbook.getWorksheet('Contacts') || workbook.addWorksheet('Contacts');
  } else {
    sheet = workbook.addWorksheet('Contacts');

    // header row
    sheet.columns = [
      { header: 'Timestamp', key: 'timestamp', width: 25 },
      { header: 'Name', key: 'name', width: 25 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Company', key: 'company', width: 25 },
      { header: 'Project Type', key: 'projectType', width: 20 },
      { header: 'Budget', key: 'budget', width: 15 },
      { header: 'Message', key: 'message', width: 60 },
    ];
  }

  // append the row
  sheet.addRow({
    timestamp: rowObj.timestamp,
    name: rowObj.name,
    email: rowObj.email,
    company: rowObj.company,
    projectType: rowObj.projectType,
    budget: rowObj.budget,
    message: rowObj.message,
  });

  // Optionally style last row (skip for speed)
  await workbook.xlsx.writeFile(filePath);
  return;
}

module.exports = { appendContactToExcel };
