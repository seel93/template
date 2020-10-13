CREATE TABLE IF NOT EXISTS Order_Type (
    Id INT NOT NULL PRIMARY KEY ,
    Label VARCHAR(45),
    Description VARCHAR(128)
);

CREATE TABLE IF NOT EXISTS Customer(
    Id INT NOT NULL PRIMARY KEY,
    First_Name VARCHAR(45) NOT NULL,
    Last_Name VARCHAR(45) NOT NULL,
    Email VARCHAR(45) NOT NULL,
    Phone_Number VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS Order_Address(
    Id INT NOT NULL PRIMARY KEY,
    Street VARCHAR(45) NOT NULL,
    Zip VARCHAR(4) NOT NULL,
    City VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS Customer_Order(
  Id INT NOT NULL PRIMARY KEY,
  Customer_Id INT NOT NULL,
  Order_Type_Id INT NOT NULL,
  Address_Moving_From INT NOT NULL,
  Address_Moving_To INT NOT NULL,
  Completion_Date DATE NOT NULL,
  Comment VARCHAR(128),
  CONSTRAINT FK_Customer_Id FOREIGN KEY (Customer_Id) REFERENCES Customer(Id),
  CONSTRAINT FK_Order_Type_Id FOREIGN KEY (Order_Type_Id) REFERENCES Order_Type(Id),
  CONSTRAINT FK_Address_Moving_From FOREIGN KEY (Address_Moving_From) REFERENCES Order_Address(Id),
  CONSTRAINT FK_Address_Moving_To FOREIGN KEY (Address_Moving_To) REFERENCES Order_Address(Id)
);
