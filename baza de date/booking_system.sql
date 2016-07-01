-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 25 Apr 2016 la 19:17
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `booking_system`
--

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `booking`
--

CREATE TABLE IF NOT EXISTS `booking` (
  `ID` int(5) NOT NULL,
  `Nume` text NOT NULL,
  `data` date NOT NULL,
  `start` text NOT NULL,
  `stop` text NOT NULL,
  `car` text NOT NULL,
  `price` int(5) NOT NULL,
  UNIQUE KEY `ID` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Salvarea datelor din tabel `booking`
--

INSERT INTO `booking` (`ID`, `Nume`, `data`, `start`, `stop`, `car`, `price`) VALUES
(1, 'elvis', '2016-04-26', 'iasi', 'suceava', 'vip', 25),
(2, 'popescu', '2016-04-26', 'iasi', 'pascani', 'vip', 35),
(3, 'elvis', '2016-04-14', 'bacau', 'roman', 'salon', 23),
(4, 'andei', '2016-04-22', 'suceava', 'iasi', 'salon', 35),
(5, 'radu', '2016-04-28', 'iasi', 'roman', '8-seater', 29);

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `qoutes`
--

CREATE TABLE IF NOT EXISTS `qoutes` (
  `ID` int(5) DEFAULT NULL,
  `start` text,
  `stop` text NOT NULL,
  `car` text NOT NULL,
  `price` int(5) NOT NULL,
  UNIQUE KEY `ID` (`ID`),
  FULLTEXT KEY `start` (`start`,`stop`,`car`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Salvarea datelor din tabel `qoutes`
--

INSERT INTO `qoutes` (`ID`, `start`, `stop`, `car`, `price`) VALUES
(1, 'iasi', 'iasi', 'vip', 0),
(2, 'iasi', 'bacau', 'vip', 50),
(3, 'iasi', 'suceava', 'vip', 45),
(4, 'iasi', 'pascani', 'vip', 48),
(5, 'iasi', 'roman', 'vip', 44),
(6, 'iasi', 'suceava', 'salon', 38),
(7, 'iasi', 'bacau', 'salon', 57),
(9, 'iasi', 'roman', 'salon', 34),
(10, 'iasi', 'pascani', 'salon', 38),
(11, 'iasi', 'iasi', 'salon', 0),
(12, 'iasi', 'iasi', '8-seater', 0),
(13, 'iasi', 'bacau', '8-seater', 35),
(14, 'iasi', 'suceava', '8-seater', 30),
(15, 'iasi', 'pascani', '8-seater', 33),
(16, 'iasi', 'roman', '8-seater', 29),
(17, 'bacau', 'bacau', 'vip', 0),
(18, 'bacau', 'iasi', 'vip', 50),
(19, 'bacau', 'suceava', 'vip', 55),
(20, 'bacau', 'roman', 'vip', 33),
(21, 'bacau', 'pascani', 'vip', 38),
(22, 'bacau', 'bacau', 'salon', 0),
(23, 'bacau', 'iasi', 'salon', 40),
(24, 'bacau', 'suceava', 'salon', 45),
(25, 'bacau', 'roman', 'salon', 23),
(26, 'bacau', 'pascani', 'salon', 28),
(27, 'bacau', 'bacau', '8-seater', 0),
(28, 'bacau', 'iasi', '8-seater', 35),
(29, 'bacau', 'suceava', '8-seater', 40),
(30, 'bacau', 'roman', '8-seater', 18),
(31, 'bacau', 'pascani', '8-seater', 23),
(33, 'suceava', 'suceava', 'vip', 0),
(34, 'suceava', 'bacau', 'vip', 55),
(32, 'suceava', 'iasi', 'vip', 45),
(35, 'suceava', 'roman', 'vip', 48),
(36, 'suceava', 'pascani', 'vip', 47),
(37, 'suceava', 'suceava', 'salon', 0),
(38, 'suceava', 'bacau', 'salon', 45),
(39, 'suceava', 'iasi', 'salon', 35),
(40, 'suceava', 'roman', 'salon', 38),
(41, 'suceava', 'pascani', 'salon', 37),
(42, 'suceava', 'suceava', '8-seater', 0),
(43, 'suceava', 'bacau', '8-seater', 40),
(44, 'suceava', 'iasi', '8-seater', 30),
(45, 'suceava', 'roman', '8-seater', 33),
(46, 'suceava', 'pascani', '8-seater', 32);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
