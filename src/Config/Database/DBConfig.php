<?php
	namespace Config\Database;

	class DBConfig{
        //nazwa bazy danych
        public static $databaseName = 'cinema';
        //dane dostępowe do bazy danych
        public static $hostname = 'localhost';
        public static $databaseType = 'mysql';
        public static $port = '3306';
        public static $user = 'root';
        public static $password = '';

		public static $tableGenre = 'Genre';
	}
