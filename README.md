# TrainingApp

This project has been developed with Angular 8 with bootstrap and ASP.Net Web API

The API project has got the UI app which is named as TrainingUI

The following items are implemented:
  1. The API has one endpoint which takes the Training object and saves it to the database
  2. The database included is a SQL Server database file which is included in the App_Data folder
  3. Used entity framework, generated model from the database file
  4. Added dependency injection for dbContext in order to support test Web Api
  5. Tests projects has been added and added a unit test case for saving method using Moq framework
  6. Added UI project with Angular 8 and this folder is placed inside Training API
  7. Added necessary validations and Confirm button is enabled only when all fields are filled
  8. When saved, it shows a successfull message with number of days difference between the days.
  
 
