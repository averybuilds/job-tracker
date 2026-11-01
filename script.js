// Sample job applications for the Introduction to Programming course.
// Every company here is invented. Your own applications go in as company and role only.
// Fields: company, role, daysAgo (days since you applied), status, replied (true or false).

const applications = [
  { company: "Lakeshore Logistics", role: "Office Systems Assistant", daysAgo: 18, status: "rejected", replied: true },
  { company: "Ridgeview Health", role: "Operations Analyst", daysAgo: 1, status: "interview", replied: true },
  { company: "Maple Street Credit Union", role: "Junior Data Analyst", daysAgo: 9, status: "applied", replied: false },
  { company: "Northcoast Analytics", role: "Junior Web Developer", daysAgo: 21, status: "applied", replied: false },
  { company: "Brightwater Utilities", role: "Technical Support Specialist", daysAgo: 15, status: "applied", replied: false },
  { company: "Harbor Light Insurance", role: "Junior Web Developer", daysAgo: 30, status: "applied", replied: false },
  { company: "Cuyahoga Data Co.", role: "Office Systems Assistant", daysAgo: 6, status: "rejected", replied: true },
  { company: "Ironbridge Manufacturing", role: "Customer Success Associate", daysAgo: 17, status: "rejected", replied: true },
  { company: "Summit Pediatric Group", role: "Junior Data Analyst", daysAgo: 18, status: "rejected", replied: true },
  { company: "Greenfield Grocers", role: "Office Systems Assistant", daysAgo: 1, status: "applied", replied: false },
  { company: "Old Mill Software", role: "Junior Data Analyst", daysAgo: 22, status: "applied", replied: false },
  { company: "Bluestone Bank", role: "QA Tester", daysAgo: 19, status: "applied", replied: false },
  { company: "Riverbend Schools", role: "Junior Web Developer", daysAgo: 21, status: "interview", replied: true },
  { company: "Keystone Freight", role: "QA Tester", daysAgo: 20, status: "applied", replied: false },
  { company: "Lantern Media", role: "QA Tester", daysAgo: 5, status: "rejected", replied: true },
  { company: "Silverline Pharmacy", role: "IT Help Desk Technician", daysAgo: 9, status: "applied", replied: false },
  { company: "Oakhurst Property", role: "Junior Web Developer", daysAgo: 8, status: "interview", replied: true },
  { company: "Cedar Point Hospitality", role: "Technical Support Specialist", daysAgo: 25, status: "applied", replied: false },
  { company: "Union Square Legal", role: "IT Help Desk Technician", daysAgo: 10, status: "applied", replied: false },
  { company: "Westgate Retail", role: "Technical Support Specialist", daysAgo: 16, status: "interview", replied: true },
  { company: "Copperleaf Energy", role: "Customer Success Associate", daysAgo: 15, status: "rejected", replied: true },
  { company: "Foundry Robotics", role: "Data Support Specialist", daysAgo: 17, status: "applied", replied: false },
  { company: "Pinecrest Senior Living", role: "Junior Web Developer", daysAgo: 30, status: "interview", replied: true },
  { company: "Harborview Port Authority", role: "QA Tester", daysAgo: 16, status: "rejected", replied: true },
  { company: "Clearwater Labs", role: "Office Systems Assistant", daysAgo: 30, status: "applied", replied: false },
  { company: "Granite State Mutual", role: "IT Help Desk Technician", daysAgo: 9, status: "rejected", replied: true },
  { company: "Meadowbrook Dental", role: "IT Help Desk Technician", daysAgo: 22, status: "applied", replied: false },
  { company: "Ember Coffee Roasters", role: "Operations Analyst", daysAgo: 17, status: "applied", replied: false },
  { company: "Northfield Library", role: "Customer Success Associate", daysAgo: 30, status: "applied", replied: false },
  { company: "Tidewater Shipping", role: "Office Systems Assistant", daysAgo: 30, status: "applied", replied: false },
  { company: "Starling Marketing", role: "Junior Data Analyst", daysAgo: 10, status: "applied", replied: false },
  { company: "Quarry Hill Construction", role: "Junior Data Analyst", daysAgo: 22, status: "interview", replied: true },
  { company: "Bayside Clinic", role: "Web Content Coordinator", daysAgo: 10, status: "rejected", replied: true },
  { company: "Fairmont Hotels Group", role: "IT Help Desk Technician", daysAgo: 12, status: "applied", replied: false },
  { company: "Elmwood Engineering", role: "QA Tester", daysAgo: 24, status: "applied", replied: false },
  { company: "Prairie Wind Farms", role: "Data Support Specialist", daysAgo: 17, status: "offer", replied: true },
  { company: "Kingsbury Auto Parts", role: "Customer Success Associate", daysAgo: 23, status: "applied", replied: false },
  { company: "Lighthouse Nonprofit Network", role: "Technical Support Specialist", daysAgo: 18, status: "applied", replied: false },
  { company: "Redwood Payroll", role: "Junior Data Analyst", daysAgo: 30, status: "applied", replied: false },
  { company: "Sunrise Home Care", role: "Technical Support Specialist", daysAgo: 24, status: "rejected", replied: true },
];

function isActive(application) {
  return application.status === "applied" || application.status === "interview";
}

function toLine(application) {
  return `${application.daysAgo} days: ${application.company}, ${application.role} (${application.status})`;
}

const report = document.querySelector("#report");
const summary = document.querySelector("#summary");

function drawReport() {
  const active = applications.filter(isActive);
  active.sort((first, second) => second.daysAgo - first.daysAgo);
  const interviews = active.filter((application) => application.status === "interview").length;

  report.textContent = "";
  for (const application of active) {
    const item = document.createElement("li");
    item.textContent = toLine(application);
    report.append(item);
  }

  summary.textContent = `${active.length} active applications: ${active.length - interviews} applied, ${interviews} interview`;
}

drawReport();

const addForm = document.querySelector("#add-form");
const companyInput = document.querySelector("#company");
const roleInput = document.querySelector("#role");

addForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const company = companyInput.value.trim();
  if (company === "") {
    return;
  }
  applications.push({ company: company, role: roleInput.value.trim(), daysAgo: 0, status: "applied", replied: false });
  drawReport();
  addForm.reset();
});
