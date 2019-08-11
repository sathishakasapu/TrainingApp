using System.Linq;
using TrainingApi.Models;

namespace TrainingApi.Tests
{
    class TestTrainingDbSet : TestDbSet<Training>
    {
        public override Training Find(params object[] keyValues)
        {
            return this.SingleOrDefault(training => training.Id == (int)keyValues.Single());
        }
    }
}
