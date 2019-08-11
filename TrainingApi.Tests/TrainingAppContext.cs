using System;
using System.Data.Entity;
using TrainingApi.Models;

namespace TrainingApi.Tests
{
    public class TrainingAppContext: ITrainingContext
    {
        public TrainingAppContext()
        {
            this.Trainings = new TestTrainingDbSet();
        }

        public DbSet<Training> Trainings { get; set; }

        public int SaveChanges()
        {
            return 0;
        }

        public void MarkAsModified(Training item) { }
        public void Dispose() { }
    }
}
