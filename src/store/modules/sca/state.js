export default {
  p1: [
    {
      Level: 1,
      Description: "ป.1",
      TotalArrived: 50,
      Total: 500,
      Detail: [
        {
          Level: 1,
          Room: 1,
          Description: "ป.1/1",
          Arrived: 10,
          Total: 100,
        },
        { divider: true, inset: true },
        {
          Level: 1,
          Room: 2,
          Description: "ป.1/2",
          Arrived: 20,
          Total: 100,
        },
        { divider: true, inset: true },
        {
          Level: 1,
          Room: 3,
          Description: "ป.1/3",
          Arrived: 30,
          Total: 100,
        },
        { divider: true, inset: true },
        {
          Level: 1,
          Room: 4,
          Description: "ป.1/4",
          Arrived: 40,
          Total: 100,
        },
        { divider: true, inset: true },
        {
          Level: 1,
          Room: 5,
          Description: "ป.1/5",
          Arrived: 50,
          Total: 100,
        },
      ]
    }
  ],


  p2: [
    {
      Level: 2,
      Description: "ป.2",
      TotalArrived: 50,
      Total: 500,
      Detail: [
        {
          Level: 2,
          Room: 1,
          Description: "ป. 2/1",
          Arrived: 20,
          Total: 100,
        },
        {
          Level: 2,
          Room: 2,
          Description: "ป. 2/2",
          Arrived: 20,
          Total: 100,
        }
      ]
    }
  ],

  p3: [{
    Level: 3,
    Description: "ป.3",
    TotalArrived: 50,
    Total: 500,
    Detail: [
      {
        Level: 3,
        Room: 1,
        Description: "ป. 3/1",
        Arrived: 20,
        Total: 100,
      },
      {
        Level: 3,
        Room: 2,
        Description: "ป. 3/2",
        Arrived: 20,
        Total: 100,
      }
    ]
  }

  ],

  p4: [
    {
      Level: null,
      Description: null,
      TotalArrived: null,
      Total: null,
      Detail: []
    }
  ],

  p5: [
    {
      Level: null,
      Description: null,
      TotalArrived: null,
      Total: null,
      Detail: []
    }
  ],

  p6: [
    {
      Level: null,
      Description: null,
      TotalArrived: null,
      Total: null,
      Detail: []
    }
  ],

  m1: [
    {
      Level: 7,
      Description: "ม.1",
      TotalArrived: 40,
      Total: 100,
      Detail: [
        {
          Level: 7,
          Room: 1,
          Description: "ม. 1/1",
          Arrived: 20,
          Total: 50,
        },
        {
          Level: 7,
          Room: 2,
          Description: "ม. 1/2",
          Arrived: 20,
          Total: 50,
        }]
    }
  ],

  m2: [{
    Level: 8,
    Description: "ม.2",
    TotalArrived: 50,
    Total: 100,
    Detail: [
      {
        Level: 8,
        Room: 1,
        Description: "ม. 2/1",
        Arrived: 25,
        Total: 50,
      },
      {
        Level: 8,
        Room: 2,
        Description: "ม. 2/2",
        Arrived: 25,
        Total: 50,
      }
    ]
  }
  ],

  m3: [{
    Level: 9,
    Description: "ม.3",
    TotalArrived: 70,
    Total: 100,
    Detail: [{
      Level: 9,
      Room: 1,
      Description: "ม. 3/1",
      Arrived: 30,
      Total: 50,
    },
    {
      Level: 9,
      Room: 2,
      Description: "ม. 3/2",
      Arrived: 40,
      Total: 50,
    }]
  }],

  m4: [{
    Level: null,
    Description: null,
    TotalArrived: null,
    Total: null,
    Detail: []
  }],

  m5: [{
    Level: null,
    Description: null,
    TotalArrived: null,
    Total: null,
    Detail: []
  }],

  m6: [{
    Level: null,
    Description: null,
    TotalArrived: null,
    Total: null,
    Detail: []
  }],


  currentStudent: [
    {
      StudentID: 5211092921,
      Level: 1,
      Room: 1,
      Description: "ป. 1/1",
      FirstName: "Suriyapong",
      LastName: "Sinyod",
      ImgUrl: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      TotalArrived: 20,
      Arrived:true,
      InTime:"07.00"
    },
    {
      StudentID: 5211092922,
      Level: 1,
      Room: 1,
      Description: "ป. 1/1",
      FirstName: "Suthin",
      LastName: "Chowwai",
      ImgUrl: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      TotalArrived: 20,
      Arrived:false,
      InTime:"07.15"
    },
    {
      StudentID: 5211092923,
      Level: 1,
      Room: 1,
      Description: "ป. 1/1",
      FirstName: "Somchai",
      LastName: "Sinyod",
      ImgUrl: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      TotalArrived: 20,
      Arrived:true,
      InTime:"07.30"
    },
    {
      StudentID: 5211092924,
      Level: 1,
      Room: 1,
      Description: "ป. 1/1",
      FirstName: "Somjing",
      LastName: "Sinyod",
      ImgUrl: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      TotalArrived: 20,
      Arrived:true,
      InTime:"07.45"
    },
    {
      StudentID: 5211092925,
      Level: 1,
      Room: 1,
      Description: "ป. 1/1",
      FirstName: "Somsee",
      LastName: "Sinyod",
      ImgUrl: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      TotalArrived: 20,
      Arrived:true,
      InTime:"07.59"
    }
  ],

  history: [
    {   
      Day: "จ. 1 เมษายน 2562",
      Come: 101,
      Late: 19,
      Cut:30,
    },
    {   
      Day: "อ. 2 เมษายน 2562",
      Come: 101,
      Late: 19,
      Cut:30,
    },
    {   
      Day: "พ. 3 เมษายน 2562",
      Come: 101,
      Late: 19,
      Cut:30,
    },
    {   
      Day: "พฤ. 4 เมษายน 2562",
      Come: 101,
      Late: 19,
      Cut:30,
    },
    {   
      Day: "ศ. 5 เมษายน 2562",
      Come: 101,
      Late: 19,
      Cut:30,
    },
    {   
      Day: "ส. 6 เมษายน 2562",
      Come: 101,
      Late: 19,
      Cut:30,
    }, {   
      Day: "อา. 7 เมษายน 2562",
      Come: 101,
      Late: 19,
      Cut:30,
    }
  ]
}
