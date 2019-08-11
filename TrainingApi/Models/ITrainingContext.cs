using System;
using System.Data.Entity;

namespace TrainingApi.Models
{
    public interface ITrainingContext
    {
        DbSet<Training> Trainings { get; }
        int SaveChanges();
        void MarkAsModified(Training item);
    }
}
