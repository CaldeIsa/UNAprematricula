using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace UNAprematriculaWeb.Models;

public partial class PrematriculaUnaContext : DbContext
{
    public PrematriculaUnaContext()
    {
    }

    public PrematriculaUnaContext(DbContextOptions<PrematriculaUnaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Curso> Cursos { get; set; }

    public virtual DbSet<Estudiante> Estudiantes { get; set; }

    public virtual DbSet<Periodo> Periodos { get; set; }

    public virtual DbSet<Prematricula> Prematriculas { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(local);Database=prematricula_una;TrustServerCertificate=True;Trusted_Connection=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Curso>(entity =>
        {
            entity.HasKey(e => e.CursoId).HasName("PK__cursos__4DA87A66F1DC612C");

            entity.ToTable("cursos");

            entity.Property(e => e.CursoId).HasColumnName("cursoID");
            entity.Property(e => e.Codigo)
                .HasMaxLength(50)
                .HasColumnName("codigo");
            entity.Property(e => e.NombreCurso)
                .HasMaxLength(255)
                .HasColumnName("nombreCurso");
            entity.Property(e => e.Registros)
                .HasMaxLength(255)
                .HasColumnName("registros");
        });

        modelBuilder.Entity<Estudiante>(entity =>
        {
            entity.HasKey(e => e.EstudianteId).HasName("PK__estudian__31AA4B7DCD0D2CA7");

            entity.ToTable("estudiante");

            entity.Property(e => e.EstudianteId).HasColumnName("estudianteID");
            entity.Property(e => e.Carrera)
                .HasMaxLength(255)
                .HasColumnName("carrera");
        });

        modelBuilder.Entity<Periodo>(entity =>
        {
            entity.HasKey(e => e.PeriodoId).HasName("PK__periodo__162261F3C49AD4C2");

            entity.ToTable("periodo");

            entity.Property(e => e.PeriodoId).HasColumnName("periodoID");
            entity.Property(e => e.FechaFinal).HasColumnName("fechaFinal");
            entity.Property(e => e.FechaInicio).HasColumnName("fechaInicio");
        });

        modelBuilder.Entity<Prematricula>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__prematri__CB9A1CDF5D985E5A");

            entity.ToTable("prematricula");

            entity.Property(e => e.UserId)
                .ValueGeneratedNever()
                .HasColumnName("userID");
            entity.Property(e => e.CursosSeleccionados).HasColumnName("cursosSeleccionados");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__usuario__CB9A1CDF5502A952");

            entity.ToTable("usuario");

            entity.HasIndex(e => e.Email, "tab_user_email_key").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("userID");
            entity.Property(e => e.Apellido)
                .HasMaxLength(191)
                .HasColumnName("apellido");
            entity.Property(e => e.Contrasena)
                .HasMaxLength(255)
                .HasColumnName("contrasena");
            entity.Property(e => e.Email)
                .HasMaxLength(191)
                .HasColumnName("email");
            entity.Property(e => e.Nombre)
                .HasMaxLength(191)
                .HasColumnName("nombre");
            entity.Property(e => e.TipoUsuario)
                .HasMaxLength(191)
                .HasColumnName("tipoUsuario");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
