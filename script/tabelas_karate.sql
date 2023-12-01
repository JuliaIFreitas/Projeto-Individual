create database projeto_karate;

use projeto_karate;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
email varchar(45),
tel char(11),
senha varchar(45));

create table treinos(
idTreino int primary key auto_increment,
diaTreino date,
horaTreino varchar (40),
fkUsuarioTreino int,
constraint fkUsuTreino foreign key (fkUsuarioTreino) references usuario(idUsuario))
auto_increment = 100;

create table melhorar(
idMelhorar int primary key auto_increment,
nomeDificuldade varchar(45),
nivelDificuldade int,
nomeFacilidade varchar(45),
nivelFacilidade int,
fkUsuarioMel int,
constraint fkUsuMel foreign key(fkUsuarioMel) references usuario(idUsuario))
auto_increment = 200;

SET GLOBAL log_bin_trust_function_creators = 1;
DELIMITER //

CREATE FUNCTION traduz_dia(diaTreino varchar(40)) RETURNS varchar(40)

BEGIN
    CASE diaTreino
		WHEN 'Sunday' THEN RETURN 'Domingo';
        WHEN 'Monday' THEN RETURN 'Segunda';
        WHEN 'Tuesday' THEN RETURN 'Terça';
        WHEN 'Wednesday' THEN RETURN 'Quarta';
        WHEN 'Thursday' THEN RETURN 'Quinta';
        WHEN 'Friday' THEN RETURN 'Sexta';
        WHEN 'Saturday' THEN RETURN 'Sábado';

        ELSE RETURN dia_semana;

    END CASE;

END //

DELIMITER ;

select * from usuario;
 
select traduz_dia(dayname(diaTreino)) from treinos;

select count(idTreino) as qtdTreino from treinos 
	inner join usuario 
		on fkUsuarioTreino = idUsuario
			where idUsuario = 1;
            
select count(idTreino) as qtdTreino, traduz_dia(dayname(diaTreino)) as dia_semana from treinos
    where fkUsuarioTreino = 1
    group by dia_semana;
    
SELECT idTreino, diaTreino, horaTreino
        FROM treinos
        ORDER BY idTreino DESC;
        
 select nomeDificuldade, nivelDificuldade, nomeFacilidade, nivelFacilidade from melhorar 
	inner join usuario 
		on fkUsuarioMel = idUsuario
			where idUsuario = 5;