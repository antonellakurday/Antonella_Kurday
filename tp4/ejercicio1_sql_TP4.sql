CREATE TABLE PROFESOR
(
  Prof_ID VARCHAR(30) NOT NULL,
  Nombre VARCHAR(30) NOT NULL,
  Especialidad VARCHAR(80) NOT NULL,
  Email VARCHAR(40) NOT NULL,
  PRIMARY KEY (Prof_ID)
);

CREATE TABLE ALUMNO
(
cod_matrícula VARCHAR(80) NOT NULL,
  DNI VARCHAR(80) NOT NULL,
  Email VARCHAR(80) NOT NULL,
  nombre VARCHAR(80) NOT NULL,
  fecha_nacimiento date NOT NULL,
  PRIMARY KEY (cod_matrícula),
  UNIQUE (DNI)
  );
  CREATE TABLE curso
(
  cod_curso VARCHAR(40) NOT NULL,
  Nombre VARCHAR(40) NOT NULL,
  PRIMARY KEY (cod_curso)
);

  
CREATE TABLE INSCRIPCION
(
  cod_matrícula VARCHAR(30) NOT NULL,
  cod_curso VARCHAR(20) NOT NULL,
  PRIMARY KEY (cod_matrícula, cod_curso),
  FOREIGN KEY (cod_matrícula) REFERENCES Alumno(cod_matrícula),
  FOREIGN KEY (cod_curso) REFERENCES curso(cod_curso)
);

CREATE TABLE FOLIO
(
  cod_curso VARCHAR(40) NOT NULL,
  Prof_ID VARCHAR(30) NOT NULL,
  PRIMARY KEY (cod_curso, Prof_ID),
  FOREIGN KEY (cod_curso) REFERENCES curso(cod_curso),
  FOREIGN KEY (Prof_ID) REFERENCES Profesor(Prof_ID)
);



