-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2024 at 09:40 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cao_pets_meds`
--

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `log_id` int(11) UNSIGNED NOT NULL,
  `pet_id` int(11) UNSIGNED NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`log_id`, `pet_id`, `description`, `status`) VALUES
(1, 1, 'has high temperature', 'sick'),
(2, 2, 'has a broken leg', 'sick'),
(3, 1, 'temparature normal', 'healthy'),
(4, 2, 'leg healed', 'healthy'),
(5, 4, 'bacteria found', 'sick'),
(6, 5, 'has a broken leg', 'sick');

-- --------------------------------------------------------

--
-- Table structure for table `medications`
--

CREATE TABLE `medications` (
  `medication_id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medications`
--

INSERT INTO `medications` (`medication_id`, `name`, `description`) VALUES
(1, 'Vitamin C', 'Vitamin C is an essential nutrient involved in the repair of tissue and the enzymatic production of certain neurotransmitters.'),
(2, 'Vitamin D', 'Vitamin D is a group of fat-soluble secosteroids responsible for increasing intestinal absorption of calcium, magnesium, and phosphate, and multiple other biological effects.'),
(3, 'Vitamin E', 'Vitamin E is a group of eight fat soluble compounds that include four tocopherols and four tocotrienols.'),
(4, 'Vitamin K', 'Vitamin K is a group of structurally similar, fat-soluble vitamins that the human body requires for complete synthesis of certain proteins that are prerequisites for blood coagulation (K from Koagulation, German for \"coagulation\") and which the body also needs for controlling binding of calcium in bones and other tissues.'),
(5, 'Xanax', 'Helps you relax and be calm');

-- --------------------------------------------------------

--
-- Table structure for table `pets`
--

CREATE TABLE `pets` (
  `pet_id` int(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `client_email` varchar(255) NOT NULL,
  `isArchived` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pets`
--

INSERT INTO `pets` (`pet_id`, `name`, `dob`, `client_email`, `isArchived`) VALUES
(1, 'Rex', '2018-01-01', 'rexowner@gmail.com', 0),
(2, 'Garfield', '2016-05-01', 'garfieldwner@gmail.com', 0),
(3, 'Scooby', '2017-04-20', 'Scooby@gmail.com', 0),
(4, 'Snoopy', '2015-12-12', 'Snoopy@gmail.com', 0),
(5, 'Lassie', '2019-08-13', 'lassie@gmail.com', 0),
(6, 'Buddy', '2019-01-01', 'buddy@buddy.com', 0);

-- --------------------------------------------------------

--
-- Table structure for table `prescriptions`
--

CREATE TABLE `prescriptions` (
  `prescription_id` int(11) UNSIGNED NOT NULL,
  `medication_id` int(11) UNSIGNED NOT NULL,
  `pet_id` int(11) UNSIGNED NOT NULL,
  `comment` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prescriptions`
--

INSERT INTO `prescriptions` (`prescription_id`, `medication_id`, `pet_id`, `comment`, `timestamp`) VALUES
(1, 1, 2, 'Take some vitamins to heal', '2024-01-04 08:29:26'),
(2, 2, 2, 'Take some vitamins for better bones', '2024-01-04 08:30:05'),
(3, 3, 1, 'Take 2 pill per day. for 2 weeks', '2024-01-04 08:39:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `medications`
--
ALTER TABLE `medications`
  ADD PRIMARY KEY (`medication_id`);

--
-- Indexes for table `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`pet_id`);

--
-- Indexes for table `prescriptions`
--
ALTER TABLE `prescriptions`
  ADD PRIMARY KEY (`prescription_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `log_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `medications`
--
ALTER TABLE `medications`
  MODIFY `medication_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pets`
--
ALTER TABLE `pets`
  MODIFY `pet_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `prescriptions`
--
ALTER TABLE `prescriptions`
  MODIFY `prescription_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
