create database projeto_individual;

use projeto_individual;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
email varchar(45),
tel char(11),
senha varchar(45),
fkSensei int,
constraint fkSen foreign key (fkSensei) references usuario (idUsuario));
select * from usuario;
drop table login;
drop table usuario;

create table login(
idLogin int primary key auto_increment,
email varchar(45),
senha varchar(45),
fkUsuario int,
constraint fkUsu foreign key (fkUsuario) references usuario (idUsuario)) 
auto_increment = 100;

