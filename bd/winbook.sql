-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 23 avr. 2019 à 09:14
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `winbook`
--

-- --------------------------------------------------------

--
-- Structure de la table `appreciation`
--

DROP TABLE IF EXISTS `appreciation`;
CREATE TABLE IF NOT EXISTS `appreciation` (
  `matriculescolaire` varchar(20) NOT NULL,
  `matriculewin` varchar(30) NOT NULL,
  `amathematiques` varchar(150) DEFAULT NULL,
  `aphysique` varchar(150) DEFAULT NULL,
  `asvt` varchar(150) DEFAULT NULL,
  `afrancais` varchar(150) DEFAULT NULL,
  `ahg` varchar(150) DEFAULT NULL,
  `aeps` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`matriculescolaire`,`matriculewin`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `appreciation`
--

INSERT INTO `appreciation` (`matriculescolaire`, `matriculewin`, `amathematiques`, `aphysique`, `asvt`, `afrancais`, `ahg`, `aeps`) VALUES
('CI20191', 'CI20191K', 'Bon eleve', 'Bon eleve', 'Bon eleve', 'Bon eleve', 'Bon eleve', 'Bon eleve'),
('CI20192', 'CI20192K', NULL, NULL, NULL, NULL, NULL, NULL),
('CI20193', 'CI20193A', 'BIEN', 'ASSEZ BIEN', 'ASSEZ BIEN', 'BIEN', 'PASSABLE', 'ASSEZ BIEN'),
('CI20194', 'CI20194A', NULL, NULL, NULL, NULL, NULL, NULL),
('CI20195', 'CI20195A', NULL, NULL, NULL, NULL, NULL, NULL),
('CI20196', 'CI20196A', NULL, NULL, NULL, NULL, NULL, NULL),
('CI20197', 'CI20197K', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `liste`
--

DROP TABLE IF EXISTS `liste`;
CREATE TABLE IF NOT EXISTS `liste` (
  `matriculescolaire` varchar(20) NOT NULL,
  `matriculewin` varchar(30) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(150) NOT NULL,
  `photo` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`matriculescolaire`,`matriculewin`),
  UNIQUE KEY `u_photo_liste` (`photo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `liste`
--

INSERT INTO `liste` (`matriculescolaire`, `matriculewin`, `nom`, `prenom`, `photo`) VALUES
('CI20191', 'CI20191K', 'kouadio', 'Pehi', NULL),
('CI20192', 'CI20192K', 'kouadio', 'patrice', NULL),
('CI20193', 'CI20193A', 'Akissi', 'Geradine', NULL),
('CI20194', 'CI20194A', 'Agoua', 'Marcel', NULL),
('CI20195', 'CI20195A', 'Agoua', 'Konan', NULL),
('CI20196', 'CI20196A', 'Armani', 'Josue', NULL),
('CI20197', 'CI20197K', 'Kouadio', 'Romaric', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

DROP TABLE IF EXISTS `notes`;
CREATE TABLE IF NOT EXISTS `notes` (
  `matriculescolaire` varchar(20) NOT NULL,
  `matriculewin` varchar(30) NOT NULL,
  `mathematiques` int(20) NOT NULL DEFAULT '0',
  `physique` int(20) NOT NULL DEFAULT '0',
  `svt` int(20) NOT NULL DEFAULT '0',
  `francais` int(20) NOT NULL DEFAULT '0',
  `hg` int(20) NOT NULL DEFAULT '0',
  `eps` int(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`matriculescolaire`,`matriculewin`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `notes`
--

INSERT INTO `notes` (`matriculescolaire`, `matriculewin`, `mathematiques`, `physique`, `svt`, `francais`, `hg`, `eps`) VALUES
('CI20191', 'CI20191K', 12, 10, 14, 10, 14, 18),
('CI20192', 'CI20192K', 0, 0, 0, 0, 0, 0),
('CI20193', 'CI20193A', 15, 12, 12, 14, 10, 12),
('CI20194', 'CI20194A', 0, 0, 0, 0, 0, 0),
('CI20195', 'CI20195A', 0, 0, 0, 0, 0, 0),
('CI20196', 'CI20196A', 0, 0, 0, 0, 0, 0),
('CI20197', 'CI20197K', 0, 0, 0, 0, 0, 0);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `appreciation`
--
ALTER TABLE `appreciation`
  ADD CONSTRAINT `fk_matricule_appreciation_notes` FOREIGN KEY (`matriculescolaire`,`matriculewin`) REFERENCES `notes` (`matriculescolaire`, `matriculewin`);

--
-- Contraintes pour la table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `fk_matricule_notes_liste` FOREIGN KEY (`matriculescolaire`,`matriculewin`) REFERENCES `liste` (`matriculescolaire`, `matriculewin`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
