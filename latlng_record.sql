-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 25, 2016 at 07:29 PM
-- Server version: 5.7.16-0ubuntu0.16.04.1
-- PHP Version: 7.0.8-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gis`
--

-- --------------------------------------------------------

--
-- Table structure for table `latlng_record`
--

CREATE TABLE `latlng_record` (
  `id` int(11) NOT NULL,
  `latlng` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `latlng_record`
--

INSERT INTO `latlng_record` (`id`, `latlng`, `created_at`) VALUES
(1, '-7.877793060354759;112.52424716949463', '2016-12-21 02:45:28'),
(17, '-7.871969103164974;112.52381801605225', '2016-12-21 03:06:43'),
(38, '-7.871714037475155;112.51862525939941', '2016-12-21 03:13:02'),
(39, '-7.866782736620565;112.52566337585449', '2016-12-21 10:10:18'),
(40, '-7.867165339647852;112.53167152404785', '2016-12-21 10:10:19'),
(44, '-7.869864806529258;112.52774477005005', '2016-12-22 18:25:48'),
(46, '-7.870906328421712;112.53096342086792', '2016-12-22 18:25:52'),
(47, '-7.871182650117143;112.5299334526062', '2016-12-22 18:25:54'),
(48, '-7.8716927819939135;112.52933263778687', '2016-12-22 18:25:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `latlng_record`
--
ALTER TABLE `latlng_record`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `latlng_record`
--
ALTER TABLE `latlng_record`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
