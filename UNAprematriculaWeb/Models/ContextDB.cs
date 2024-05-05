using System.Data.Entity;

public class TuDbContext : DbContext
{
    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Prematricula> Prematriculas { get; set; }
    public DbSet<Curso> Cursos { get; set; }
    public DbSet<Estudiante> Estudiantes { get; set; }
    public DbSet<Periodo> Periodos { get; set; }

    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configurar relación uno a uno entre Prematricula y Usuario
        modelBuilder.Entity<Prematricula>()
            .HasKey(p => p.UserID);

        modelBuilder.Entity<Prematricula>()
            .HasRequired(p => p.Usuario)
            .WithOptional();

        // Configurar relación uno a muchos entre Estudiante y Curso
        modelBuilder.Entity<Estudiante>()
            .HasRequired(e => e.Curso)
            .WithMany()
            .HasForeignKey(e => e.CursoID)
            .WillCascadeOnDelete(true); // Cascade delete si se elimina un curso

        // Configurar relación uno a uno entre Prematricula y Periodo
        modelBuilder.Entity<Prematricula>()
            .HasRequired(p => p.Periodo)
            .WithMany()
            .HasForeignKey(p => p.PeriodoID)
            .WillCascadeOnDelete(true); // Cascade delete si se elimina un periodo

        // Configurar relación uno a uno entre Prematricula y Estudiante
        modelBuilder.Entity<Prematricula>()
            .HasRequired(p => p.Estudiante)
            .WithMany()
            .HasForeignKey(p => p.EstudianteID)
            .WillCascadeOnDelete(true); // Cascade delete si se elimina un estudiante
    }
}
