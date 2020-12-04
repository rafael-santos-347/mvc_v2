<?php

require('Conexao.php');

class Estudante 
{
    public $id;
    public $nome;
    public $telefone;

    public static function getALL()
    {
        $con = Conexao::getDb();
        $stmt = $con->query("select * from estudantes;");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);          
    }

    public static function getCount()
    {
        $con = Conexao::getDb();
        $stmt = $con->query("select count(*) as contador from estudantes;");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}
