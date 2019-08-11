using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Web.Http.Results;
using TrainingApi.Controllers;
using TrainingApi.Models;

namespace TrainingApi.Tests.Controllers
{
    [TestClass]
    public class TrainingControllerTest
    {
        [TestMethod]
        public void PostTraining_ShouldReturnSameTraining()
        {
            var controller = new TrainingController(new TrainingAppContext());

            var item = GetDemoTraining();

            var result =
                controller.Post(item) as CreatedAtRouteNegotiatedContentResult<Training>;

            Assert.IsNotNull(result);
            Assert.AreEqual(result.RouteName, "DefaultApi");
            Assert.AreEqual(result.RouteValues["id"], result.Content.Id);
            Assert.AreEqual(result.Content.Name, item.Name);
        }

        Training GetDemoTraining()
        {
            return new Training() { Id = 1, Name = "Demo name", StartDate = new DateTime(), EndDate = new DateTime() };
        }

    }
}
