export const PermissionsData = [
  {
    permission: "MyFinances view",
    content: "MyFinances view",
    expect_text: ["my_finance.view", "my_finance.edit", "contacts.view"],
  },
  {
    permission: "MyFinance edit",
    element: "#menu- > .MuiPaper-root > .MuiList-root > [tabindex='0']",
    content: "MyFinance edit",
    expect_text: ["my_finance.view", "my_finance.edit", "contacts.view"],
  },
  {
    permission: "MyFinance edit/add",
    element: "#menu- > .MuiPaper-root > .MuiList-root > :nth-child(2)",
    content: "MyFinance edit/add",
    expect_text: [
      "my_finance.view",
      "my_finance.edit",
      "my_finance.add",
      "contacts.view",
    ],
  },
  {
    permission: "MyFinance edit/delete",
    element: "#menu- > .MuiPaper-root > .MuiList-root > :nth-child(3)",
    content: "MyFinance edit/delete",
    expect_text: [
      "my_finance.view",
      "my_finance.edit",
      "my_finance.delete",
      "contacts.view",
    ],
  },
  {
    permission: "MyFinance full with property",
    element: "#menu- > .MuiPaper-root > .MuiList-root > :nth-child(4)",
    content: "MyFinance full with property",
    expect_text: [
      "my_finance.view",
      "my_finance.edit",
      "my_finance.delete",
      "contacts.view",
      "my_finance.add",
      "property.view",
    ],
  },
  {
    permission: "Property view",
    element: "#menu- > .MuiPaper-root > .MuiList-root > :nth-child(5)",
    content: "Property view",
    expect_text: ["property.view"],
  },
  {
    permission: "Property edit",
    element: "#menu- > .MuiPaper-root > .MuiList-root > :nth-child(6)",
    contnet: "Property edit",
    expect_text: ["property.view", "property.edit", "contacts.view"],
  },
  {
    permission: "Property edit/add",
    element: "#menu- > .MuiPaper-root > .MuiList-root > :nth-child(7)",
    content: "Property edit/add",
    expect_text: [
      "property.view",
      "property.edit",
      "property.add",
      "contacts.view",
    ],
  },
  {
    permission: "Property edit/delete",
    element: ".MuiList-root > :nth-child(8)",
    content: "Property edit/delete",
    expect_text: [
      "property.view",
      "property.edit",
      "property.delete",
      "contacts.view",
    ],
  },
  {
    permission: "Property full",
    element: ".MuiList-root > :nth-child(9)",
    content: "Property full",
    expect_text: [
      "property.add",
      "property.delete",
      "property.edit",
      "property.view",
      "contacts.view",
    ],
  },
  {
    permission: "MyCollectables view",
    element: ".MuiList-root > :nth-child(10)",
    content: "MyCollectables view",
    expect_text: ["my_collectables.view"],
  },
  {
    permission: "MyCollectables edit",
    element: ".MuiList-root > :nth-child(11)",
    content: "MyCollectables edit",
    expect_text: [
      "my_collectables.view",
      "my_collectables.edit",
      "contacts.view",
    ],
  },
  {
    permission: "MyCollectables edit/add",
    element: ".MuiList-root > :nth-child(12)",
    content: "MyCollectables edit/add",
    expect_text: [
      "my_collectables.view",
      "my_collectables.edit",
      "my_collectables.add",
      "contacts.view",
    ],
  },
  {
    permission: "MyCollectables edit/delete",
    element: ".MuiList-root > :nth-child(13)",
    content: "MyCollectables edit/delete",
    expect_text: [
      "my_collectables.view",
      "my_collectables.edit",
      "my_collectables.delete",
    ],
  },
  {
    permission: "MyCollectables full with property",
    element: ".MuiList-root > :nth-child(14)",
    content: "MyCollectables full with property",
    expect_text: [
      "my_collectables.add",
      "my_collectables.delete",
      "my_collectables.edit",
      "my_collectables.view",
      "contacts.view",
      "property.view",
    ],
  },
  {
    permission: "MyBelongings view",
    element: ".MuiList-root > :nth-child(15)",
    content: "MyBelongings view",
    expect_text: ["belongings.view"],
  },
  {
    permission: "MyBelongings edit",
    element: ".MuiList-root > :nth-child(16)",
    content: "MyBelongings edit",
    expect_text: ["belongings.view", "belongings.edit", "contacts.view"],
  },
  {
    permission: "MyBelongings edit/add",
    element: ".MuiList-root > :nth-child(17)",
    content: "MyBelongings edit/add",
    expect_text: [
      "belongings.view",
      "belongings.edit",
      "belongings.add",
      "contacts.view",
    ],
  },
  {
    permission: "MyBelongings edit/delete",
    element: ".MuiList-root :nth-child(18)",
    content: "MyBelongings edit/delete",
    expect_text: [
      "belongings.view",
      "belongings.edit",
      "belongings.delete",
      "contacts.view",
    ],
  },
  {
    permission: "Viewer",
    element: ".MuiList-root > :nth-child(19)",
    content: "Viewer",
    expect_text: [
      "portfolio.view",
      "cash_account.view",
      "insurance.view",
      "crypto.view",
      "other_investments.view",
      "belongings.view",
      "groups.view",
      "valut.view",
      "delegates.view",
    ],
  },
];

export const test = [
  "#menu- > .MuiPaper-root > .MuiList-root > [tabindex='0']",

  "#menu- > .MuiPaper-root > .MuiList-root > :nth-child(2)",

  "#menu- > .MuiPaper-root > .MuiList-root > :nth-child(3)",

  "#menu- > .MuiPaper-root > .MuiList-root > :nth-child(4)",

  "#menu- > .MuiPaper-root > .MuiList-root > :nth-child(5)",

  "#menu- > .MuiPaper-root > .MuiList-root > :nth-child(6)",

  "#menu- > .MuiPaper-root > .MuiList-root > :nth-child(7)",

  ".MuiList-root > :nth-child(8)",

  ".MuiList-root > :nth-child(9)",

  ".MuiList-root > :nth-child(10)",

  ".MuiList-root > :nth-child(11)",

  ".MuiList-root > :nth-child(12)",

  ".MuiList-root > :nth-child(13)",

  ".MuiList-root > :nth-child(14)",

  ".MuiList-root > :nth-child(15)",
  ".MuiList-root > :nth-child(16)",
  ".MuiList-root > :nth-child(17)",
  ".MuiList-root :nth-child(18)",

  ".MuiList-root > :nth-child(19)",
];

export const options = [
  "MyFinances view",

  "MyFinance edit",
  "MyFinance edit/add",

  "MyFinance edit/delete",

  "MyFinance full with property",
  "Property view",

  "Property edit",

  "Property edit/add",

  "Property edit/delete",

  "Property full",

  "MyCollectables view",

  "MyCollectables edit",

  "MyCollectables edit/add",

  "MyCollectables edit/delete",
  "MyCollectables full with property",
  "MyBelongings view",

  "MyBelongings edit",

  "MyBelongings edit/add",

  "MyBelongings edit/delete",
  "Viewer",
];
PermissionsData.forEach((item, index, arr) => {
  if (item.permission === "Viewer") {
    console.log("this is permissions element", item.element);
  }
});
