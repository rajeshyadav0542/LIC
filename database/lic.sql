-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 03, 2026 at 12:56 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lic`
--

-- --------------------------------------------------------

--
-- Table structure for table `activitylogins`
--

CREATE TABLE `activitylogins` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `ip_address` varchar(255) NOT NULL,
  `loginTime` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `activitylogins`
--

INSERT INTO `activitylogins` (`id`, `user_id`, `ip_address`, `loginTime`, `createdAt`, `updatedAt`) VALUES
(1, 1, '  ', '2025-02-03 12:23:16', '2025-02-03 06:53:16', '2025-02-03 06:53:16'),
(2, 1, '  ', '2025-02-03 12:30:57', '2025-02-03 07:00:57', '2025-02-03 07:00:57'),
(3, 1, '  ', '2025-02-03 14:59:20', '2025-02-03 09:29:20', '2025-02-03 09:29:20'),
(4, 1, '  ', '2025-02-03 15:03:49', '2025-02-03 09:33:49', '2025-02-03 09:33:49'),
(5, 1, '  ', '2025-02-04 18:14:46', '2025-02-04 12:44:46', '2025-02-04 12:44:46'),
(6, 1, '  ', '2025-02-12 16:17:04', '2025-02-12 10:47:04', '2025-02-12 10:47:04'),
(7, 1, '  ', '2025-02-13 12:11:36', '2025-02-13 06:41:36', '2025-02-13 06:41:36'),
(8, 1, '  ', '2025-02-13 12:56:31', '2025-02-13 07:26:31', '2025-02-13 07:26:31'),
(9, 1, '  ', '2025-02-14 10:24:12', '2025-02-14 04:54:12', '2025-02-14 04:54:12'),
(10, 1, '  ', '2025-02-14 10:33:55', '2025-02-14 05:03:55', '2025-02-14 05:03:55'),
(11, 1, '  ', '2025-02-17 10:46:23', '2025-02-17 05:16:23', '2025-02-17 05:16:23'),
(12, 1, '  ', '2025-02-17 10:49:50', '2025-02-17 05:19:50', '2025-02-17 05:19:50'),
(13, 1, '  ', '2025-02-17 15:19:46', '2025-02-17 09:49:46', '2025-02-17 09:49:46'),
(14, 1, '  ', '2025-02-17 15:21:14', '2025-02-17 09:51:14', '2025-02-17 09:51:14'),
(15, 1, '  ', '2025-02-17 15:31:32', '2025-02-17 10:01:32', '2025-02-17 10:01:32'),
(16, 1, '  ', '2025-02-17 15:54:54', '2025-02-17 10:24:54', '2025-02-17 10:24:54'),
(17, 1, '  ', '2025-02-17 17:31:47', '2025-02-17 12:01:47', '2025-02-17 12:01:47'),
(18, 1, '  ', '2025-02-17 19:06:27', '2025-02-17 13:36:27', '2025-02-17 13:36:27'),
(19, 1, '  ', '2025-02-18 12:20:57', '2025-02-18 06:50:58', '2025-02-18 06:50:58'),
(20, 1, '  ', '2025-02-18 12:46:03', '2025-02-18 07:16:03', '2025-02-18 07:16:03'),
(21, 1, '  ', '2025-02-18 12:51:01', '2025-02-18 07:21:01', '2025-02-18 07:21:01'),
(22, 6, '  ', '2025-02-18 12:51:25', '2025-02-18 07:21:25', '2025-02-18 07:21:25'),
(23, 1, '  ', '2025-02-18 13:04:54', '2025-02-18 07:34:54', '2025-02-18 07:34:54'),
(24, 1, '  ', '2025-02-19 18:54:02', '2025-02-19 13:24:02', '2025-02-19 13:24:02'),
(25, 1, '  ', '2025-02-20 15:51:30', '2025-02-20 10:21:30', '2025-02-20 10:21:30'),
(26, 1, '  ', '2025-02-26 15:26:37', '2025-02-26 09:56:37', '2025-02-26 09:56:37'),
(27, 1, '  ', '2025-02-26 15:27:29', '2025-02-26 09:57:29', '2025-02-26 09:57:29'),
(28, 1, '  ', '2025-02-26 15:29:09', '2025-02-26 09:59:09', '2025-02-26 09:59:09'),
(29, 1, '  ', '2025-02-26 16:05:55', '2025-02-26 10:35:55', '2025-02-26 10:35:55'),
(30, 1, '  ', '2025-03-10 18:46:09', '2025-03-10 13:16:09', '2025-03-10 13:16:09'),
(31, 1, '  ', '2025-03-10 18:46:29', '2025-03-10 13:16:29', '2025-03-10 13:16:29'),
(32, 1, '  ', '2025-03-10 18:46:43', '2025-03-10 13:16:43', '2025-03-10 13:16:43'),
(33, 1, '  ', '2025-03-10 18:48:48', '2025-03-10 13:18:48', '2025-03-10 13:18:48'),
(34, 1, '  ', '2025-03-11 11:26:01', '2025-03-11 05:56:01', '2025-03-11 05:56:01'),
(35, 1, '  ', '2025-03-12 10:37:35', '2025-03-12 05:07:35', '2025-03-12 05:07:35'),
(36, 1, '  ', '2025-03-12 11:47:45', '2025-03-12 06:17:45', '2025-03-12 06:17:45'),
(37, 1, '  ', '2025-03-13 12:22:35', '2025-03-13 06:52:35', '2025-03-13 06:52:35'),
(38, 1, '  ', '2025-03-13 12:49:22', '2025-03-13 07:19:22', '2025-03-13 07:19:22'),
(39, 1, '  ', '2025-03-16 09:11:48', '2025-03-16 03:41:48', '2025-03-16 03:41:48'),
(40, 1, '  ', '2025-03-17 10:42:32', '2025-03-17 05:12:32', '2025-03-17 05:12:32'),
(41, 1, '  ', '2025-03-17 11:00:31', '2025-03-17 05:30:31', '2025-03-17 05:30:31'),
(42, 1, '  ', '2025-03-17 15:24:16', '2025-03-17 09:54:16', '2025-03-17 09:54:16'),
(43, 1, '  ', '2025-03-17 17:42:29', '2025-03-17 12:12:29', '2025-03-17 12:12:29'),
(44, 1, '  ', '2025-03-17 18:03:05', '2025-03-17 12:33:05', '2025-03-17 12:33:05'),
(45, 1, '  ', '2025-03-18 16:44:06', '2025-03-18 11:14:06', '2025-03-18 11:14:06'),
(46, 1, '  ', '2025-03-19 12:20:55', '2025-03-19 06:50:55', '2025-03-19 06:50:55'),
(47, 1, '  ', '2025-03-19 17:56:51', '2025-03-19 12:26:51', '2025-03-19 12:26:51'),
(48, 1, '  ', '2025-03-20 10:56:54', '2025-03-20 05:26:54', '2025-03-20 05:26:54'),
(49, 1, '  ', '2025-03-22 12:03:23', '2025-03-22 06:33:23', '2025-03-22 06:33:23'),
(50, 1, '  ', '2025-03-24 10:45:29', '2025-03-24 05:15:29', '2025-03-24 05:15:29'),
(51, 1, '  ', '2025-03-24 14:02:18', '2025-03-24 08:32:18', '2025-03-24 08:32:18'),
(52, 1, '  ', '2025-03-24 14:14:34', '2025-03-24 08:44:34', '2025-03-24 08:44:34'),
(53, 13, ' ', '2025-03-24 14:17:12', '2025-03-24 08:47:12', '2025-03-24 08:47:12'),
(54, 13, '  ', '2025-03-24 14:17:37', '2025-03-24 08:47:37', '2025-03-24 08:47:37'),
(55, 13, '  ', '2025-03-24 14:18:25', '2025-03-24 08:48:25', '2025-03-24 08:48:25'),
(56, 1, '  ', '2025-03-25 17:58:47', '2025-03-25 12:28:47', '2025-03-25 12:28:47'),
(57, 1, '  ', '2025-04-21 11:59:37', '2025-04-21 06:29:37', '2025-04-21 06:29:37'),
(58, 1, '  ', '2025-04-21 12:00:18', '2025-04-21 06:30:18', '2025-04-21 06:30:18'),
(59, 1, '  ', '2025-04-21 12:02:24', '2025-04-21 06:32:24', '2025-04-21 06:32:24'),
(60, 1, '  ', '2025-04-21 12:05:00', '2025-04-21 06:35:00', '2025-04-21 06:35:00'),
(61, 1, '  ', '2025-05-09 11:08:00', '2025-05-09 05:38:00', '2025-05-09 05:38:00'),
(62, 1, '  ', '2025-05-09 11:21:41', '2025-05-09 05:51:41', '2025-05-09 05:51:41'),
(63, 1, '  ', '2025-05-27 12:37:55', '2025-05-27 07:07:55', '2025-05-27 07:07:55'),
(64, 1, '  ', '2025-05-27 12:39:12', '2025-05-27 07:09:12', '2025-05-27 07:09:12'),
(65, 1, '  ', '2025-05-27 12:39:12', '2025-05-27 07:09:12', '2025-05-27 07:09:12'),
(66, 1, '  ', '2025-10-13 09:35:57', '2025-10-13 09:35:57', '2025-10-13 09:35:57'),
(67, 1, '  ', '2025-10-13 09:38:07', '2025-10-13 09:38:07', '2025-10-13 09:38:07'),
(68, 1, '  ', '2025-10-13 09:38:31', '2025-10-13 09:38:31', '2025-10-13 09:38:31'),
(69, 1, '  ', '2025-10-13 09:43:18', '2025-10-13 09:43:18', '2025-10-13 09:43:18'),
(70, 1, '  ', '2025-10-13 09:49:08', '2025-10-13 09:49:08', '2025-10-13 09:49:08'),
(71, 1, '  ', '2025-10-13 09:51:02', '2025-10-13 09:51:02', '2025-10-13 09:51:02'),
(72, 1, '  ', '2025-10-13 09:52:43', '2025-10-13 09:52:43', '2025-10-13 09:52:43'),
(73, 1, '  ', '2025-10-13 09:54:46', '2025-10-13 09:54:47', '2025-10-13 09:54:47'),
(74, 1, '  ', '2025-10-13 09:58:22', '2025-10-13 09:58:23', '2025-10-13 09:58:23'),
(75, 1, '  ', '2025-10-13 10:01:05', '2025-10-13 10:01:05', '2025-10-13 10:01:05'),
(76, 1, '  ', '2025-10-13 10:01:09', '2025-10-13 10:01:09', '2025-10-13 10:01:09'),
(77, 1, '  ', '2025-10-13 10:02:15', '2025-10-13 10:02:15', '2025-10-13 10:02:15'),
(78, 1, '  ', '2025-10-13 10:06:30', '2025-10-13 10:06:30', '2025-10-13 10:06:30'),
(79, 1, '  ', '2025-10-13 10:13:22', '2025-10-13 10:13:23', '2025-10-13 10:13:23'),
(80, 1, '  ', '2025-10-13 10:14:38', '2025-10-13 10:14:38', '2025-10-13 10:14:38'),
(81, 1, '  ', '2025-10-13 10:18:18', '2025-10-13 10:18:18', '2025-10-13 10:18:18'),
(82, 1, '  ', '2025-10-13 10:19:43', '2025-10-13 10:19:43', '2025-10-13 10:19:43'),
(83, 1, '  ', '2025-10-13 10:20:07', '2025-10-13 10:20:07', '2025-10-13 10:20:07'),
(84, 1, '  ', '2025-10-13 10:21:28', '2025-10-13 10:21:28', '2025-10-13 10:21:28'),
(85, 1, '  ', '2025-10-13 10:22:30', '2025-10-13 10:22:30', '2025-10-13 10:22:30'),
(86, 1, '  ', '2025-12-29 12:30:11', '2025-12-29 12:30:11', '2025-12-29 12:30:11'),
(87, 2, '  ', '2025-12-29 14:44:40', '2025-12-29 14:44:40', '2025-12-29 14:44:40'),
(88, 2, ' ', '2026-01-22 18:18:23', '2026-01-22 18:18:23', '2026-01-22 18:18:23'),
(89, 2, '  ', '2026-01-22 18:19:29', '2026-01-22 18:19:29', '2026-01-22 18:19:29'),
(90, 3, ' ', '2026-01-22 18:31:08', '2026-01-22 18:31:08', '2026-01-22 18:31:08'),
(91, 3, '  ', '2026-01-22 18:31:45', '2026-01-22 18:31:45', '2026-01-22 18:31:45');

-- --------------------------------------------------------

--
-- Table structure for table `agents`
--

CREATE TABLE `agents` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bank` varchar(100) DEFAULT NULL,
  `account` varchar(100) DEFAULT NULL,
  `ifsc` varchar(100) DEFAULT NULL,
  `pancard` varchar(100) DEFAULT NULL,
  `uid` varchar(100) DEFAULT NULL,
  `age` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `status` int(11) DEFAULT 1,
  `profile_img` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `resetPasswordExpires` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `agents`
--

INSERT INTO `agents` (`id`, `name`, `email`, `phone`, `password`, `bank`, `account`, `ifsc`, `pancard`, `uid`, `age`, `gender`, `status`, `profile_img`, `createdAt`, `updatedAt`, `resetPasswordToken`, `resetPasswordExpires`) VALUES
(1, 'test', 'rajesh@gmail.com', '8884384836', 'fsdfsd', 'fsdf', 'fsdfsd', 'fsdfdfsd', 'fsdf', 'fsdf', '2', 'M', 1, '', '2026-01-22 19:00:42', '2026-01-22 19:00:42', NULL, NULL),
(2, 'John Doe', 'john@example.com', '7900000000', '$2b$10$d0Hq9vwC9cMOD.B9Q7.PF.zWOCEirNoTb/qZ37YMOvbeG8IDHyREq', 'HDFC Bank', '1234567890', 'HDFC0001234', 'ABCDE1234F', '123456789012', '', '', 1, '', '2026-01-22 18:18:23', '2026-01-22 18:18:23', NULL, NULL),
(3, 'John Doe', 'john@example2.com', '7900000005', '$2b$10$51/XCU1GX0d/1kCz0FbWY.KEiIrYSMPfarLWGga46CMu22zXN8LQq', 'Bank of World', '1234567890', 'IFSC0001234', 'ABCDE1234F', 'A1B2C3D4E5', '', '', 1, '', '2026-01-22 18:31:08', '2026-01-22 18:31:08', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `appointmentpaymentdetails`
--

CREATE TABLE `appointmentpaymentdetails` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `appointment_id` int(11) NOT NULL,
  `receipt` varchar(255) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `payment_id` varchar(255) DEFAULT NULL,
  `signature` varchar(255) DEFAULT NULL,
  `amount` double NOT NULL,
  `appointmentToken` text DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointmentpaymentdetails`
--

INSERT INTO `appointmentpaymentdetails` (`id`, `user_id`, `appointment_id`, `receipt`, `order_id`, `payment_id`, `signature`, `amount`, `appointmentToken`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'receipt_1739431753148', 'order_Pv72hBnWjIeRK8', NULL, NULL, 149900, '$2b$10$Z/NMOeXX.3xlMscIdLbHFOsYaguQHrdTCQUoGcZVIFTxXbQcJuM.S', 'created', '2025-02-13 07:29:14', '2025-02-13 07:29:14'),
(2, 1, 1, 'receipt_1739431854326', 'order_Pv74SeTt1KS3i0', 'pay_Pv74qdDIjCAtXT', '3cb7048505f844c47f5e6b172c863db195f3768d430ee6ac554d66f610d7375b', 149900, '$2b$10$Z/NMOeXX.3xlMscIdLbHFOsYaguQHrdTCQUoGcZVIFTxXbQcJuM.S', 'success', '2025-02-13 07:30:54', '2025-02-13 07:31:34'),
(3, 2, 31, 'receipt_1739786276336', 'order_PwjiHJTfc43VpO', 'pay_PwjjHAZMzJ6up4', '55a72563468e89e21a6c3af56466d41538a45f1e8795ea99650262113149c981', 149900, '$2b$10$GGYzC0YrygHreO2W6Vd5Q.IT0SfLmvlZeIJ4eVHSUXZARwKlPoyGy', 'success', '2025-02-17 09:57:57', '2025-02-17 09:59:22'),
(4, 6, 32, 'receipt_1739787714450', 'order_Pwk7ai7GfRften', NULL, NULL, 149900, '$2b$10$P2l35.3DHIVAgWvA9wpduOX1bOf1T2Mpc.Pt/p0uG7kRUOeW2ZY6e', 'created', '2025-02-17 10:21:55', '2025-02-17 10:21:55'),
(5, 6, 32, 'receipt_1739787919948', 'order_PwkBCFAJHpc8Fw', 'pay_PwkBgmxQdfQS8l', '047afeadf61b436c37f1bb8ed5a966391f7be4fb98314e678537dbd79a007b79', 149900, '$2b$10$P2l35.3DHIVAgWvA9wpduOX1bOf1T2Mpc.Pt/p0uG7kRUOeW2ZY6e', 'success', '2025-02-17 10:25:20', '2025-02-17 10:26:13'),
(6, 8, 39, 'receipt_1739887870584', 'order_PxCYtYiFNV5GvB', 'pay_PxCZJUi5KdUmI9', '7d7b19a14026b379ac360bb6a198fa42bda126a4472cdb2a246b4969e43f26c0', 149900, '$2b$10$ZOjvZ.vxGQrBvajvgjma8u3OIf4wDF5W7BvV0UZeq4bsYnDRM1uW2', 'success', '2025-02-18 14:11:11', '2025-02-18 14:11:53'),
(7, 9, 40, 'receipt_1740047012605', 'order_PxvkgKy4rjYmkc', 'pay_Pxvl1Ny4HlhmWk', '53cb50d45be8c92f8b14bc65f115cb9ce3dad1ad7bb3aefed7d4644e7fd7a561', 149900, '$2b$10$Gm9z5HMLZkPUHbgJjX6rc.PyB31j1.Q3fGatmWwlLLI2vbQx1cGlS', 'success', '2025-02-20 10:23:33', '2025-02-20 10:24:10'),
(8, 2, 33, 'receipt_1741612772035', 'order_Q56MkkWesTQBdd', NULL, NULL, 149900, '$2b$10$dJno6YequzkNITa2WxdyA.2RSqNs1k28AXKCg80JK0SQC6Mbyxk5u', 'created', '2025-03-10 13:19:32', '2025-03-10 13:19:32'),
(9, 2, 33, 'receipt_1741613180667', 'order_Q56TvxMhlngYwy', 'pay_Q56UUn0Wvsx86f', '5375d510876feacb8a32b94af4c6acae69747a35c93accc22c805a7c18f30ed1', 149900, '$2b$10$dJno6YequzkNITa2WxdyA.2RSqNs1k28AXKCg80JK0SQC6Mbyxk5u', 'success', '2025-03-10 13:26:20', '2025-03-10 13:27:08'),
(10, 7, 46, 'receipt_1742793245529', 'order_QAVZeWDsLCv25h', NULL, NULL, 149900, '$2b$10$Hu0zzfVQMy0IOkvGIDun/O.JBqrotw1fS.7DdxJVR3Nso2iYOs18a', 'created', '2025-03-24 05:14:06', '2025-03-24 05:14:06'),
(11, 7, 47, 'receipt_1742793875984', 'order_QAVkjwCQp3aYRF', NULL, NULL, 149900, '$2b$10$Cv.8cdSPZRrNZ.TcWcv9EeEsKGo8B.vryWDr7iKDzGu1Tpr7qbtHu', 'created', '2025-03-24 05:24:36', '2025-03-24 05:24:36'),
(12, 14, 69, 'receipt_1742879984466', 'order_QAuCjraXDhLn3x', NULL, NULL, 149900, '$2b$10$UwKBwy5zC9GxRo7R3clKpucDTmBL4nu/E0acbSmqZ9tcAbxlUwS.K', 'created', '2025-03-25 05:19:45', '2025-03-25 05:19:45'),
(13, 14, 69, 'receipt_1742879995972', 'order_QAuCviClgZXW2T', NULL, NULL, 149900, '$2b$10$UwKBwy5zC9GxRo7R3clKpucDTmBL4nu/E0acbSmqZ9tcAbxlUwS.K', 'created', '2025-03-25 05:19:56', '2025-03-25 05:19:56'),
(14, 14, 69, 'receipt_1742880064707', 'order_QAuE8cNFWSLPBS', NULL, NULL, 149900, '$2b$10$UwKBwy5zC9GxRo7R3clKpucDTmBL4nu/E0acbSmqZ9tcAbxlUwS.K', 'created', '2025-03-25 05:21:04', '2025-03-25 05:21:04'),
(15, 14, 69, 'receipt_1742880190837', 'order_QAuGMKNW9rqmAp', NULL, NULL, 149900, '$2b$10$UwKBwy5zC9GxRo7R3clKpucDTmBL4nu/E0acbSmqZ9tcAbxlUwS.K', 'created', '2025-03-25 05:23:10', '2025-03-25 05:23:10'),
(16, 14, 69, 'receipt_1742880274000', 'order_QAuHpGG5JMB1cD', NULL, NULL, 149900, '$2b$10$UwKBwy5zC9GxRo7R3clKpucDTmBL4nu/E0acbSmqZ9tcAbxlUwS.K', 'created', '2025-03-25 05:24:34', '2025-03-25 05:24:34'),
(17, 14, 69, 'receipt_1742880275839', 'order_QAuHr2E6JdvrB5', NULL, NULL, 149900, '$2b$10$UwKBwy5zC9GxRo7R3clKpucDTmBL4nu/E0acbSmqZ9tcAbxlUwS.K', 'created', '2025-03-25 05:24:35', '2025-03-25 05:24:35'),
(18, 14, 69, 'receipt_1742880325132', 'order_QAuIiuHp52NN9N', NULL, NULL, 149900, '$2b$10$UwKBwy5zC9GxRo7R3clKpucDTmBL4nu/E0acbSmqZ9tcAbxlUwS.K', 'created', '2025-03-25 05:25:25', '2025-03-25 05:25:25');

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `mode_consultation` varchar(255) NOT NULL,
  `purpose` varchar(255) NOT NULL,
  `age` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `appointment_date` varchar(255) NOT NULL,
  `appointment_time` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `comments` text NOT NULL,
  `status` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `followup_status` varchar(255) DEFAULT 'pending',
  `payment_status` varchar(255) DEFAULT 'pending',
  `payment_id` varchar(255) DEFAULT NULL,
  `appointmentToken` text DEFAULT NULL,
  `type` varchar(255) DEFAULT 'Default'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `user_id`, `name`, `mode_consultation`, `purpose`, `age`, `gender`, `appointment_date`, `appointment_time`, `email`, `phone`, `comments`, `status`, `createdAt`, `updatedAt`, `followup_status`, `payment_status`, `payment_id`, `appointmentToken`, `type`) VALUES
(1, 1, 'John Doe', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'john@example.com', '7900000000', 'comments', 0, '2025-02-13 07:28:44', '2025-02-13 07:31:34', 'pending', 'success', 'pay_Pv74qdDIjCAtXT', '$2b$10$Z/NMOeXX.3xlMscIdLbHFOsYaguQHrdTCQUoGcZVIFTxXbQcJuM.S', 'Default'),
(2, 1, 'John Doe', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'john@example.com', '7900000000', 'comments', 0, '2025-02-15 06:14:07', '2025-02-15 06:14:07', 'pending', 'pending', NULL, '$2b$10$vySp/eUBGX6kGH6tS/bIGu1QMjOK5xz2HW6hI4Ve69ph03TLU74W6', 'Default'),
(3, 1, 'John Doe', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'john@example.com', '7900000000', 'comments', 0, '2025-02-15 06:14:26', '2025-02-15 06:14:26', 'pending', 'pending', NULL, '$2b$10$fP8dVfNljuTq//PLAouf4.phIzCzd1emRNY/ddMKuJPKqbCYsVlH.', 'Default'),
(4, 1, 'John Doe', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'john@example.com', '7900000000', 'comments', 0, '2025-02-15 06:30:17', '2025-02-15 06:30:17', 'pending', 'pending', NULL, '$2b$10$UZVnFUoER1aUVvc9CZ4xZuNtGwA8wvLw9EK4Z/JlZgT2f2WUsfMl6', 'Default'),
(5, 1, 'John Doe', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'john@example.com', '7900000000', 'comments', 0, '2025-02-15 06:42:58', '2025-02-15 06:42:58', 'pending', 'pending', NULL, '$2b$10$Eq/O8ypJFgoViQCztz0EUuvb4PDCPolupr8O3pLtrXzQKWQwS149i', 'Default'),
(6, 1, 'John Doe', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'john@example.com', '7900000000', 'comments', 0, '2025-02-15 07:31:42', '2025-02-15 07:31:42', 'pending', 'pending', NULL, '$2b$10$bcIVCyRGc5lkBfK8M/qZY.KRTdkibOL81BixA30BlZsXik6A25i3W', 'Default'),
(7, 1, 'John Doe', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'john@example.com', '7900000000', 'comments', 0, '2025-02-17 04:48:31', '2025-02-17 04:48:31', 'pending', 'pending', NULL, '$2b$10$SCm5HIlBfslePIf6QhRsb.9mzmTO8c1ChBWNVKiGs/P4zWGfVmmI6', 'Default'),
(8, 2, 'test1', 'video', 'test', '31', 'male', '2025-02-20T18:30:00.000Z', '10:30 AM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 05:01:27', '2025-02-17 05:01:27', 'pending', 'pending', NULL, '$2b$10$o2wRVVcOKxgFyYc68mk2l.j618F3XfpeozZscfmbhr7jtBjSeHknO', 'Default'),
(9, 2, 'test1', 'video', 'test', '20', 'male', '2025-02-19T18:30:00.000Z', '11:00 AM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 05:03:15', '2025-02-17 05:03:15', 'pending', 'pending', NULL, '$2b$10$VvN/gyQVX0kWCAWfXiDNNuUY2dvOQXCUjfQP8YeqCmAizzSTtw1Fi', 'Default'),
(10, 2, 'test1', 'video', 'test', '20', 'male', '2025-02-19T18:30:00.000Z', '1:00 PM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 05:05:38', '2025-02-17 05:05:38', 'pending', 'pending', NULL, '$2b$10$0dRBDliUBaTtQ6i1TfnW3.c5CyUE46Y/oFzNuKYdxkvvKartJFLLW', 'Default'),
(11, 2, 'test1', 'video', 'test', '20', 'male', '2025-02-19T18:30:00.000Z', '10:30 AM', 'nivi@gmail.com', '2323232323', '', 0, '2025-02-17 05:07:31', '2025-02-17 05:07:31', 'pending', 'pending', NULL, '$2b$10$25fM4H31K2.dI5Mdb4qWL.30iPr.xxi3uOtc.79zFmfjJkKBORKiG', 'Default'),
(12, 2, 'test1', 'video', 'test', '20', 'male', '2025-02-19T18:30:00.000Z', '10:30 AM', 'nivi@gmail.com', '2323232323', '', 0, '2025-02-17 05:09:55', '2025-02-17 05:09:55', 'pending', 'pending', NULL, '$2b$10$ikWIMDXxYx7gw3boLTEg4ODmTPJvlUjkiPkfG1eFPkrbzwGggU/M6', 'Default'),
(13, 2, 'test1', 'video', 'test', '20', 'male', '2025-02-19T18:30:00.000Z', '10:30 AM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 05:12:28', '2025-02-17 05:12:28', 'pending', 'pending', NULL, '$2b$10$rQwaZkHrx7bmak9kfHCJeOakYxdGpfsOZb496RHLcpzPXM.r6h8cC', 'Default'),
(14, 2, 'test1', 'video', 'test', '20', 'female', '2025-02-19T18:30:00.000Z', '10:30 AM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 05:15:11', '2025-02-17 05:15:11', 'pending', 'pending', NULL, '$2b$10$G.LnO7XR.b2LdCWXOCBRluArry6O3CTFDKHdMckjZ2IKK4z4ngRAO', 'Default'),
(15, 2, 'test 2', 'audio', 'test 2', '31', 'female', '2025-02-18T18:30:00.000Z', '11:00 AM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 05:16:33', '2025-02-17 05:16:33', 'pending', 'pending', NULL, '$2b$10$UXrF0cU9cQdKoWCCoTvi7.7qG5633TF5fSRf0jWNMShOe3e6h8IFC', 'Default'),
(16, 3, 'Test10', 'video', 'Test10', '30', 'female', '2025-02-19T18:30:00.000Z', '1:00 PM', 'test10@gmail.com', '9787878767', '', 0, '2025-02-17 05:27:36', '2025-02-17 05:27:36', 'pending', 'pending', NULL, '$2b$10$iz6JIdrETLPvSK6qI32LbO.BsMoiCvtMdNzZd33dvhmKXE4sZSMPi', 'Default'),
(17, 2, 'test1', 'video', 'test 2', '31', 'male', '2025-02-20T18:30:00.000Z', '1:00 PM', 'nivi@gmail.com', '2323232323', '', 0, '2025-02-17 05:38:53', '2025-02-17 05:38:53', 'pending', 'pending', NULL, '$2b$10$4zJ1b9gUcEdRtH7PPXwUqOHHhoGXxFluBux3UKMHGJxOrcC9QgegW', 'Default'),
(18, 2, 'test1', 'video', 'test', '4', 'male', '2025-02-18T18:30:00.000Z', '11:30 AM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 05:45:21', '2025-02-17 05:45:21', 'pending', 'pending', NULL, '$2b$10$2r4E9vN3JIZS2G43z/8qx.Itg1oWJXrk67VmmBu3jDVFdvKMm35cO', 'Default'),
(19, 4, 'test1', 'video', 'test 2', '4', 'female', '2025-02-20T18:30:00.000Z', '11:00 AM', 'zsdm@gmail.com', '6878654343', '', 0, '2025-02-17 05:47:18', '2025-02-17 05:47:18', 'pending', 'pending', NULL, '$2b$10$pUwLi6.NcdVDUpVdHuzpWOesevHbdUaFGIcsmN7fWhrTYfCzWxNaG', 'Default'),
(20, 2, 'test1', 'video', 'test 2', '4', 'male', '2025-02-20T18:30:00.000Z', '11:00 AM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 05:48:52', '2025-02-17 05:48:52', 'pending', 'pending', NULL, '$2b$10$9GjYXmoDg52WgVLCZoxSFO00ZhQotPK5MRV4NI9N5kn28ru68lAWC', 'Default'),
(21, 2, 'test1', 'video', 'test 2', '4', 'male', '2025-02-20T18:30:00.000Z', '11:00 AM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 05:49:01', '2025-02-17 05:49:01', 'pending', 'pending', NULL, '$2b$10$PNC8han4CsV1KHF7tC/kNetfzWz8ttXP.zVD/uRhNMhu.B8fnoBXK', 'Default'),
(22, 2, 'test1', 'video', 'test 2', '4', 'male', '2025-02-20T18:30:00.000Z', '11:00 AM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 05:50:09', '2025-02-17 05:50:09', 'pending', 'pending', NULL, '$2b$10$Kyf1qJOMM0LTyI18s/hyDuHhTmJqqni2lDbU1CEQNfZU2DPy0LqwC', 'Default'),
(23, 2, 'test1', 'video', 'Test10', '4', 'female', '2025-02-19T18:30:00.000Z', '12:00 PM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 05:53:07', '2025-02-17 05:53:07', 'pending', 'pending', NULL, '$2b$10$Ep1YXA2rhjWYlLoAhTEYDOlImMQ/7UKEZ7crfXVDRW9nsMoa2KQcu', 'Default'),
(24, 4, 'test1', 'audio', 'Test10', '31', 'male', '2025-02-19T18:30:00.000Z', '10:30 AM', 'zsdm@gmail.com', '6878654343', '', 0, '2025-02-17 06:00:20', '2025-02-17 06:00:20', 'pending', 'pending', NULL, '$2b$10$c7i/Qw2AWnQVL8TxUXbbq.k2gVexvM56q6TnW/sz70LXu3IbhxYCq', 'Default'),
(25, 2, 'test1', 'audio', 'test 2', '30', 'male', '2025-02-20T18:30:00.000Z', '1:00 PM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 06:01:30', '2025-02-17 06:01:30', 'pending', 'pending', NULL, '$2b$10$gURNh85xOGZpRZpCXZ6Pn.5hhdytfXXyhnuGGUdrXielXnn9ndFPi', 'Default'),
(26, 3, 'eerrr', 'video', 'ee', '30', 'male', '2025-02-19T18:30:00.000Z', '11:00 AM', 'test1@gmail.com', '9787878767', '', 0, '2025-02-17 06:02:26', '2025-02-17 06:02:26', 'pending', 'pending', NULL, '$2b$10$89mdV.gVrn/l7looYyDIueSF7EYVWTPWZ/LgtKSpPdq/RA0t83/kG', 'Default'),
(27, 2, 'test1', 'video', 'test', '30', 'male', '2025-02-20T18:30:00.000Z', '11:00 AM', 'admin@admin.com', '2323232323', '', 0, '2025-02-17 06:03:07', '2025-02-17 06:03:07', 'pending', 'pending', NULL, '$2b$10$VJqn1NUEazdLHTudabV.MujikPhvhYjay0rbLhVUPyBPtmuaA/Iiq', 'Default'),
(28, 3, 'test1', 'video', 'test2', '40', 'female', '2025-02-19T18:30:00.000Z', '11:00 AM', 'niveditasingh7394@gmail.com', '9787878767', '', 0, '2025-02-17 09:49:57', '2025-02-17 09:49:57', 'pending', 'pending', NULL, '$2b$10$A5SofTR.xsWF0SsJ9xeK/OwNhyyjv92kQfvby7cdokrSzGGub4NVW', 'Default'),
(29, 2, 'test1', 'video', 'Test10', '40', 'female', '2025-02-18T18:30:00.000Z', '12:30 PM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 09:51:24', '2025-02-17 09:51:24', 'pending', 'pending', NULL, '$2b$10$TsHfK3gUwx0sgzAszEBZDeB0yUNwfF71a9GKE9R0JmU/skkVyxn7u', 'Default'),
(30, 5, 'ankur', 'video', 'blood test', '21', 'male', '2025-02-19T18:30:00.000Z', '11:00 AM', 'test1@gmail.com', '9738747473', '', 0, '2025-02-17 09:52:55', '2025-02-17 09:52:55', 'pending', 'pending', NULL, '$2b$10$q4XeZ1c5af5g1SqX7I1jxe6ijUXblcbh706vkR0Lb36zs7wzlm/6O', 'Default'),
(31, 2, 'test1', 'video', 'Test10', '30', 'male', '2025-02-20T18:30:00.000Z', '11:00 AM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 09:57:32', '2025-02-17 09:59:22', 'pending', 'success', 'pay_PwjjHAZMzJ6up4', '$2b$10$GGYzC0YrygHreO2W6Vd5Q.IT0SfLmvlZeIJ4eVHSUXZARwKlPoyGy', 'Default'),
(32, 6, 'test A1', 'audio', 'blood test', '45', 'female', '2025-02-17T18:30:00.000Z', '10:00 AM', 'niveditasingh7394@gmail.com', '7394958059', '', 0, '2025-02-17 10:21:44', '2025-02-17 10:26:13', 'pending', 'success', 'pay_PwkBgmxQdfQS8l', '$2b$10$P2l35.3DHIVAgWvA9wpduOX1bOf1T2Mpc.Pt/p0uG7kRUOeW2ZY6e', 'Default'),
(33, 2, 'test1', 'video', 'ff', '30', 'male', '2025-02-20', '10:30 AM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 10:31:56', '2025-03-10 13:27:08', 'pending', 'success', 'pay_Q56UUn0Wvsx86f', '$2b$10$dJno6YequzkNITa2WxdyA.2RSqNs1k28AXKCg80JK0SQC6Mbyxk5u', 'Default'),
(34, 1, 'John Doe', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'john@example.com', '7900000000', 'comments', 0, '2025-02-17 10:39:50', '2025-02-17 10:39:50', 'pending', 'pending', NULL, '$2b$10$Ovpv.cf.fjZulPJc.MckZOB5Pv9xwlULoh70Lv1ScGrbOMAT1thri', 'Default'),
(35, 2, 'eeffff', 'video', 'eee', '20', 'male', '2025-02-19', '10:30 AM', 'test1@gmail.com', '2323232323', '', 0, '2025-02-17 11:05:37', '2025-02-17 12:07:12', 'confirmed', 'pending', NULL, '$2b$10$JHixP8f1sMLn1eE.kYHBEOhA5Sj.JCjvmo26dCHIVJLxiggnUOE2G', 'Default'),
(36, 7, 'Siddharth Dubey', 'video', 'Demo', '27', 'male', '2025-02-19', '2:30 PM', 'siddharthdubey@stimulusservices.com', '8059231532', '', 0, '2025-02-18 13:31:39', '2025-02-18 13:31:39', 'pending', 'pending', NULL, '$2b$10$ize2KRsmxJX8oe.ePIm1xuaW7iks4tzJxDQy0Zrdq/CxsqIGEYYO2', 'Default'),
(37, 7, 'Siddharth Dubey', 'video', 'Demo', '27', 'male', '2025-02-19', '2:30 PM', 'siddharthdubey@stimulusservices.com', '8059231532', '', 0, '2025-02-18 13:31:40', '2025-02-18 13:31:40', 'pending', 'pending', NULL, '$2b$10$pxNIxfR72Akc04iQO.9/O.AZx5VgpnJsLfqD3MwId6p6HrmOQGeJq', 'Default'),
(38, 7, 'Siddharth Dubey', 'video', 'Demo', '27', 'male', '2025-02-19', '2:30 PM', 'siddharthdubey@stimulusservices.com', '8059231532', '', 0, '2025-02-18 13:31:40', '2025-02-18 13:31:40', 'pending', 'pending', NULL, '$2b$10$IVOeLcr83wfq.ay4CP8Sj.bFqPA7WISl.FkTKs5/UKHXXqp2S5AyO', 'Default'),
(39, 8, 'Jonah Clark', 'audio', 'Rerum praesentium ut', '75', 'male', '2025-02-18', '12:30 PM', 'qabyq@mailinator.com', '1604273885', '', 0, '2025-02-18 14:10:51', '2025-02-18 14:11:53', 'pending', 'success', 'pay_PxCZJUi5KdUmI9', '$2b$10$ZOjvZ.vxGQrBvajvgjma8u3OIf4wDF5W7BvV0UZeq4bsYnDRM1uW2', 'Default'),
(40, 9, 'Ankur', 'video', 'Demo', '25', 'male', '2025-02-20', '10:30 AM', 'pankur820@gmail.com', '7985852725', '', 0, '2025-02-20 10:23:26', '2025-03-17 06:09:49', 'pending', 'success', 'pay_Pxvl1Ny4HlhmWk', '$2b$10$Gm9z5HMLZkPUHbgJjX6rc.PyB31j1.Q3fGatmWwlLLI2vbQx1cGlS', 'Default'),
(41, 1, 'John Doe', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'john@example.com', '7900000000', 'comments', 0, '2025-03-17 10:00:01', '2025-03-17 10:00:01', 'pending', 'pending', NULL, '$2b$10$eP8m1UAukBQtlCGcPliaHOh8kMFdBVMHxujOCI8sHQazf79THOLhq', 'Home Page'),
(42, 1, 'John Doe', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'john@example.com', '7900000000', 'comments', 0, '2025-03-17 10:29:20', '2025-03-17 10:29:20', 'pending', 'pending', NULL, '$2b$10$gkkiMlVf0mD3pSjT7a5yt.nw5uIZ0cUDu7n21NVyEiEcL7HTYGCc6', 'Home Page'),
(43, 10, 'test 2', 'video', 'test2', '34', 'male', '2025-03-19', '10:30 AM', 'fff@gmail.com', '8789933445', '', 0, '2025-03-17 10:32:43', '2025-03-17 10:32:43', 'pending', 'pending', NULL, '$2b$10$7QqeksyWiY/FbJCHjSsxvum/yvSmX28y1X91Sx0pLH.am9SdOHMs2', 'Default'),
(44, 1, 'John Doe', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'john@example.com', '7900000000', 'comments', 0, '2025-03-17 12:18:35', '2025-03-17 12:18:35', 'pending', 'pending', NULL, '$2b$10$DzOfsu3ebJm4t.3RS8TslevFBvxPEiRZNpQH3AatgJBMc1ZMQAQ3.', 'Home Page'),
(45, 1, 'John Doe', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'john@example.com', '7900000000', 'comments', 0, '2025-03-17 12:25:51', '2025-03-17 12:25:51', 'pending', 'pending', NULL, '$2b$10$ouWCYb5AP/e7Sd0YaDlRDe0kgWN9bsXmlwGcMIyRGyd5PWrE/YpBq', 'Home Page'),
(46, 7, 'Siddharth Dubey', 'video', 'Demo', '27', 'male', '2025-03-24', '2:30 PM', 'admin@mail.com', '8059231532', '', 0, '2025-03-24 05:12:29', '2025-03-24 05:12:29', 'pending', 'pending', NULL, '$2b$10$Hu0zzfVQMy0IOkvGIDun/O.JBqrotw1fS.7DdxJVR3Nso2iYOs18a', 'Default'),
(47, 7, 'Siddharth Dubey', 'video', 'Demo', '27', 'male', '2025-03-25', '1:00 PM', 'admin@mail.com', '8059231532', '', 0, '2025-03-24 05:22:14', '2025-03-24 05:22:14', 'pending', 'pending', NULL, '$2b$10$Cv.8cdSPZRrNZ.TcWcv9EeEsKGo8B.vryWDr7iKDzGu1Tpr7qbtHu', 'Default'),
(48, 11, 'test 2', 'video', 'test2', '30', 'male', '2025-03-26', '10:00 AM', 'fff@gmai.outlook.com', '8789934344', '', 0, '2025-03-24 05:29:45', '2025-03-24 05:29:45', 'pending', 'pending', NULL, '$2b$10$RQy.nPjljxvfxgP9M5LwDumgLQl77UC8qZwZOiJEnrvypPg59Q5SK', 'Default'),
(49, 11, 'test 2', 'video', 'test2', '30', 'male', '2025-03-26', '10:00 AM', 'fff@gmai.outlook.com', '8789934344', '', 0, '2025-03-24 05:29:45', '2025-03-24 05:29:45', 'pending', 'pending', NULL, '$2b$10$q4XmLprrvWPe22lq0y1/COL.Y0yAPC5LFxbJ4YXZdo1M7Yt8piiUK', 'Default'),
(50, 10, 'test 2', 'video', 'test2', '44', 'male', '2025-03-26', '12:30 PM', 'fff@gmail.com', '8789933445', '', 0, '2025-03-24 05:34:26', '2025-03-24 05:34:26', 'pending', 'pending', NULL, '$2b$10$1YZZtPdv2v9HVzlbqCCprOX0SSqdIZKbOnKZq31w4RAodcLeoq6ly', 'Default'),
(51, 12, 'ankur', 'video', 'test2', '31', 'female', '2025-03-23', '12:30 PM', 'fff@outlook.com', '8789924454', '', 0, '2025-03-24 05:43:36', '2025-03-24 05:43:36', 'pending', 'pending', NULL, '$2b$10$MDG5ljcsX0DDpRNDQR5deON5RW6gUW5xX1goM/Wgv.Qv5vS4r9pxy', 'Default'),
(52, 11, 'kjdkl', 'video', 'df', '20', 'male', '2025-03-23', '12:30 PM', 'fff@gmai.outlook.com', '8789934344', '', 0, '2025-03-24 05:45:16', '2025-03-24 05:45:16', 'pending', 'pending', NULL, '$2b$10$knctTiMeC39k926G/TIk1.tp18QRKOZCONIcUF4gVUE4EK5Z5Vm.K', 'Default'),
(53, 10, 'hhwww', 'video', 'test2', '20', 'male', '2025-03-24', '12:30 PM', 'fff@gmai.outlook.com', '8789933445', '', 0, '2025-03-24 05:46:41', '2025-03-24 05:46:41', 'pending', 'pending', NULL, '$2b$10$DhYZUdRGp7m5fffUI0A56.8an/rUuveKRZy8VTPiN5VmgFLRcyAaC', 'Default'),
(54, 10, 'test 2', 'video', 'test2', '20', 'female', '2025-03-26', '12:30 PM', 'fff@outlook.com', '8789933445', '', 0, '2025-03-24 05:51:20', '2025-03-24 05:51:20', 'pending', 'pending', NULL, '$2b$10$u/ApUvgC9tFggJIUX7QInekC6T4v4IhLTJRYmqImwZWaB8QzZ8euC', 'Default'),
(55, 1, 'John Doe', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'john@example.com', '7900000000', 'comments', 0, '2025-03-24 05:52:49', '2025-03-24 05:52:49', 'pending', 'pending', NULL, '$2b$10$SPF8cxJfOtaxj43yDmUKm.xT1pgLbggwDYhkEdi6Rwxcl7IcLhBE2', 'Home Page'),
(56, 12, 'test 2', 'video', 'test2', '50', 'male', '2025-03-26', '10:30 AM', 'fff@outlook.com', '8949488473', '', 0, '2025-03-24 05:54:16', '2025-03-24 05:54:16', 'pending', 'pending', NULL, '$2b$10$UXmeVg2/3ahnhZqkjUtHIeKyCss.bUVGHvayEXklmMxc5RP4BMHwC', 'Default'),
(57, 10, 'test 2', 'video', 'ee', '50', 'male', '2025-03-27', '1:00 PM', 'fff@outlook.com', '8789933445', '', 0, '2025-03-24 05:58:34', '2025-03-24 05:58:34', 'pending', 'pending', NULL, '$2b$10$UVW5csFcy5eM7Tw9e/5lIevj3c2vVP334nL8YJF6wiJbUH/NvB4pS', 'Default'),
(58, 11, 'test 2', 'video', 'test2', '65', 'female', '2025-03-26', '12:30 PM', 'fff@outlook.com', '8789934344', '', 0, '2025-03-24 05:59:37', '2025-03-24 05:59:37', 'pending', 'pending', NULL, '$2b$10$.P8UrAVGIo3zbsbl3.oT6OgsT5DjO4wNJuxtcjSRlDWDZQ/PBHqcS', 'Default'),
(59, 12, 'etere', 'video', 'dfrr', '40', 'male', '2025-03-25', '1:00 PM', 'fff@outlook.com', '8789924454', '', 0, '2025-03-24 06:00:48', '2025-03-24 06:00:48', 'pending', 'pending', NULL, '$2b$10$3mSyVjqbS/0.mUDl3cIw.e6vgB3pow3Q9kIXd91WwmdhD4VD6yRHy', 'Default'),
(60, 10, 'test 2', 'video', 'ee', '30', 'male', '2025-03-27', '10:30 AM', 'fff@gmai.outlook.com', '8789933445', '', 0, '2025-03-24 06:08:44', '2025-03-24 06:08:44', 'pending', 'pending', NULL, '$2b$10$8PelJBvQ6usoNQ6B5u0X5uxyGxG.yMEWfgLNz3gJoqNLga9VSTMxC', 'Default'),
(61, 11, 'test 2', 'video', 'test2', '60', 'male', '2025-03-26', '10:30 AM', 'f@gmai.outlook.com', '8789934344', '', 0, '2025-03-24 06:09:21', '2025-03-24 06:09:21', 'pending', 'pending', NULL, '$2b$10$SEiDs.AMHVxXmO2ftMSoH.TrxG4jXEEqKWCoBfoWymTCWE92xN.tq', 'Default'),
(62, 10, 'test 2', 'video', 'test2', '30', 'male', '2025-03-26', '10:30 AM', 'fff@gmai.outlook.com', '8789933445', '', 0, '2025-03-24 06:09:55', '2025-03-24 06:09:55', 'pending', 'pending', NULL, '$2b$10$NlH7jneGwDK5C/BD28emp.tCQ7kjwb9y7jKccgV8XEKViVea9.NmK', 'Default'),
(63, 12, 'test 2', 'video', 'test2', '30', 'male', '2025-03-26', '10:30 AM', 'fff@outlook.com', '8789924454', '', 0, '2025-03-24 06:11:11', '2025-03-24 06:11:11', 'pending', 'pending', NULL, '$2b$10$tvZ5lphLSZR1nE5XcxBcHe8uNtblTwEGWz9HoSXEfiE66JRrmEPwO', 'Default'),
(64, 10, 'test 2', 'audio', 'test2', '30', 'male', '2025-03-27', '1:00 PM', 'fff@gmail.com', '8789924454', '', 0, '2025-03-24 06:14:22', '2025-03-24 06:14:22', 'pending', 'pending', NULL, '$2b$10$QtF0xr3z3l.33HVK/5od0OJYS1aXl3JZRxd3hHQGrtLAxr/lmx.wa', 'Default'),
(65, 10, 'test 2', 'audio', 'test2', '30', 'male', '2025-03-27', '1:00 PM', 'fff@gmail.com', '8789924454', '', 0, '2025-03-24 06:14:22', '2025-03-24 06:14:22', 'pending', 'pending', NULL, '$2b$10$n1Vinewi3kFh9qGH9CuSC.jlnp24rNdQVh6YWPSKj3wkKYeSli41S', 'Default'),
(66, 12, 'test 2', 'video', 'test2', '31', 'male', '2025-03-26', '12:30 PM', 'f@gmail.com', '8789924454', '', 0, '2025-03-24 06:25:20', '2025-03-24 06:25:20', 'pending', 'pending', NULL, '$2b$10$dTq1ADgwX3aHKWsg2zoN7.L0CDKLOw4bKU7A0CrEPj.7CqwDFxuEG', 'Default'),
(67, 10, 'tess', 'audio', 'test2', '20', 'male', '2025-03-27', '10:30 AM', 'fff@gmail.com', '8789924454', '', 0, '2025-03-24 06:34:30', '2025-03-24 06:34:30', 'pending', 'pending', NULL, '$2b$10$knbs8TCnChjeTtrVf8Aoq..a/Nl4TVxndAf4JhS6zmIalm7KBosrG', 'Default'),
(68, 11, 'tes', 'video', 'test2', '30', 'male', '2025-03-26', '10:30 AM', 'fff@gmai.outlook.com', '8789933333', '', 0, '2025-03-24 06:36:11', '2025-03-24 06:36:11', 'pending', 'pending', NULL, '$2b$10$86TfrRq/Vzl0tcn5ZOVj0OPLZDFxWMXaidCESFRR04nGe6JcmpzUu', 'Default'),
(69, 14, 'Brenna Sawyer', 'audio', 'Qui id quo quasi ex', '28', 'male', '2025-03-24', '12:30 PM', 'tifal@mailinator.com', '1227474143', '', 0, '2025-03-25 05:15:21', '2025-03-25 05:15:21', 'pending', 'pending', NULL, '$2b$10$UwKBwy5zC9GxRo7R3clKpucDTmBL4nu/E0acbSmqZ9tcAbxlUwS.K', 'Default');

-- --------------------------------------------------------

--
-- Table structure for table `appointmentstatuses`
--

CREATE TABLE `appointmentstatuses` (
  `id` int(11) NOT NULL,
  `appointment_id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `notes` text DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointmentstatuses`
--

INSERT INTO `appointmentstatuses` (`id`, `appointment_id`, `status`, `notes`, `user_id`, `createdAt`, `updatedAt`) VALUES
(1, 35, 'confirmed', 'Test\r\n', 1, '2025-02-17 12:07:12', '2025-02-17 12:07:12'),
(2, 40, 'confirmed', 'done', 1, '2025-02-20 10:25:35', '2025-02-20 10:25:35'),
(3, 40, 'pending', 'test', 1, '2025-03-17 06:09:49', '2025-03-17 06:09:49');

-- --------------------------------------------------------

--
-- Table structure for table `attributes`
--

CREATE TABLE `attributes` (
  `id` int(11) NOT NULL,
  `attribute_name` varchar(255) NOT NULL,
  `status` int(11) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `attributevalues`
--

CREATE TABLE `attributevalues` (
  `id` int(11) NOT NULL,
  `attribute_id` int(11) NOT NULL,
  `attribute_value` varchar(255) NOT NULL,
  `status` int(11) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` int(11) DEFAULT 1,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `certifications`
--

CREATE TABLE `certifications` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` int(11) DEFAULT 1,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `certifications`
--

INSERT INTO `certifications` (`id`, `title`, `description`, `status`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Certificate of Recognition', '', 1, '/uploads/certification/1739509753010certifications.webp', '2025-02-14 05:09:13', '2025-02-14 05:09:13'),
(2, 'ISO Certificate', '', 1, '/uploads/certification/1739509776880certifications.png', '2025-02-14 05:09:36', '2025-02-14 05:09:36'),
(3, 'MSME Certificate', '', 1, '/uploads/certification/1739509792913certifications.webp', '2025-02-14 05:09:52', '2025-02-14 05:09:52');

-- --------------------------------------------------------

--
-- Table structure for table `collections`
--

CREATE TABLE `collections` (
  `id` int(11) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` int(11) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `day_meals`
--

CREATE TABLE `day_meals` (
  `id` int(11) NOT NULL,
  `package_day_id` int(11) NOT NULL,
  `timing_id` int(11) NOT NULL,
  `meals` text DEFAULT NULL,
  `portion_size` text DEFAULT NULL,
  `alternative_options` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `dietpackages`
--

CREATE TABLE `dietpackages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` float NOT NULL,
  `duration_days` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `diet_packages`
--

CREATE TABLE `diet_packages` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `duration_days` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` int(11) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `title`, `description`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Explore', '<p>Your journey begins with understanding who you are. With a few simple steps, we gather insights about your health, lifestyle, and preferences to paint a complete picture of you.</p>', 1, '2025-03-17 10:11:21', '2025-03-17 10:11:21'),
(2, 'Personalize', '<p>With the help of recent scientific advancements, we offer a nutrition plan tailored to your unique genetic profile.</p>', 1, '2025-03-17 10:11:37', '2025-03-17 10:11:37'),
(3, 'Counselling', '<p>Comprehensive health assessment to understand your health history, medical conditions &amp; livestyle.</p>', 1, '2025-03-17 10:11:50', '2025-03-17 10:11:50'),
(4, 'Ongoing Support', '<p>Genetic counselling sessions to provide deep insights that influences your nutritional need for sustainable health benefits.</p>', 1, '2025-03-17 10:12:05', '2025-03-17 10:12:05');

-- --------------------------------------------------------

--
-- Table structure for table `meal_templates`
--

CREATE TABLE `meal_templates` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `template_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`template_data`)),
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `meal_timings`
--

CREATE TABLE `meal_timings` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `is_custom` tinyint(1) DEFAULT 0,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meal_timings`
--

INSERT INTO `meal_timings` (`id`, `name`, `is_custom`, `created_at`) VALUES
(1, 'Early morning metabolic drink', 0, '0000-00-00 00:00:00'),
(2, 'After 30 min', 0, '0000-00-00 00:00:00'),
(3, 'Pre breakfast (15 min before)', 0, '0000-00-00 00:00:00'),
(4, 'Breakfast', 0, '0000-00-00 00:00:00'),
(5, 'Post breakfast (15 min after)', 0, '0000-00-00 00:00:00'),
(6, 'Mid-morning', 0, '0000-00-00 00:00:00'),
(7, 'After mid-morning (15 min after)', 0, '0000-00-00 00:00:00'),
(8, 'Pre-lunch (15 min before)', 0, '0000-00-00 00:00:00'),
(9, 'Lunch', 0, '0000-00-00 00:00:00'),
(10, 'Post lunch (15 min after)', 0, '0000-00-00 00:00:00'),
(11, '30-45 min before snacks', 0, '0000-00-00 00:00:00'),
(12, 'Evening Snacks', 0, '0000-00-00 00:00:00'),
(13, 'Pre- workout(15 min before)', 0, '0000-00-00 00:00:00'),
(14, 'Workout', 0, '0000-00-00 00:00:00'),
(15, 'Post- workout (15 min after)', 0, '0000-00-00 00:00:00'),
(16, 'Pre-dinner (15 min before)', 0, '0000-00-00 00:00:00'),
(17, 'Dinner', 0, '0000-00-00 00:00:00'),
(18, 'Post dinner (15 min after)', 0, '0000-00-00 00:00:00'),
(19, 'Late night', 0, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `title`, `description`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Appointment Booked', 'John Doe a new appointment has been booked', 1, '2025-03-17 12:18:35', '2025-03-17 12:18:44'),
(2, 'Appointment Booked', 'John Doe a new appointment has been booked', 1, '2025-03-17 12:25:51', '2025-03-17 12:26:13'),
(3, 'Appointment Booked', 'Siddharth Dubey a new appointment has been booked', 1, '2025-03-24 05:12:29', '2025-03-24 05:15:50'),
(4, 'Appointment Booked', 'Siddharth Dubey a new appointment has been booked', 1, '2025-03-24 05:22:14', '2025-03-24 05:36:38'),
(5, 'Appointment Booked', 'test 2 a new appointment has been booked', 1, '2025-03-24 05:29:45', '2025-03-24 05:36:38'),
(6, 'Appointment Booked', 'test 2 a new appointment has been booked', 1, '2025-03-24 05:29:45', '2025-03-24 05:36:38'),
(7, 'Appointment Booked', 'test 2 a new appointment has been booked', 1, '2025-03-24 05:34:26', '2025-03-24 05:36:38'),
(8, 'Appointment Booked', 'ankur a new appointment has been booked', 1, '2025-03-24 05:43:36', '2025-03-24 08:32:39'),
(9, 'Appointment Booked', 'kjdkl a new appointment has been booked', 1, '2025-03-24 05:45:16', '2025-03-24 08:32:39'),
(10, 'Appointment Booked', 'hhwww a new appointment has been booked', 1, '2025-03-24 05:46:41', '2025-03-24 08:32:39'),
(11, 'Appointment Booked', 'test 2 a new appointment has been booked', 1, '2025-03-24 05:51:20', '2025-03-24 08:32:39'),
(12, 'Appointment Booked', 'John Doe a new appointment has been booked', 1, '2025-03-24 05:52:49', '2025-03-24 08:32:39'),
(13, 'Appointment Booked', 'test 2 a new appointment has been booked', 1, '2025-03-24 05:54:16', '2025-03-24 08:32:39'),
(14, 'Appointment Booked', 'test 2 a new appointment has been booked', 1, '2025-03-24 05:58:34', '2025-03-24 08:32:39'),
(15, 'Appointment Booked', 'test 2 a new appointment has been booked', 1, '2025-03-24 05:59:37', '2025-03-24 08:32:39'),
(16, 'Appointment Booked', 'etere a new appointment has been booked', 1, '2025-03-24 06:00:48', '2025-03-24 08:32:39'),
(17, 'Appointment Booked', 'test 2 a new appointment has been booked', 1, '2025-03-24 06:08:44', '2025-03-24 08:32:39'),
(18, 'Appointment Booked', 'test 2 a new appointment has been booked', 1, '2025-03-24 06:09:21', '2025-03-24 08:32:39'),
(19, 'Appointment Booked', 'test 2 a new appointment has been booked', 1, '2025-03-24 06:09:55', '2025-03-24 08:32:39'),
(20, 'Appointment Booked', 'test 2 a new appointment has been booked', 1, '2025-03-24 06:11:11', '2025-03-24 08:32:39'),
(21, 'Appointment Booked', 'test 2 a new appointment has been booked', 1, '2025-03-24 06:14:22', '2025-03-24 08:32:39'),
(22, 'Appointment Booked', 'test 2 a new appointment has been booked', 1, '2025-03-24 06:14:22', '2025-03-24 08:32:39'),
(23, 'Appointment Booked', 'test 2 a new appointment has been booked', 1, '2025-03-24 06:25:20', '2025-03-24 08:32:39'),
(24, 'Appointment Booked', 'tess a new appointment has been booked', 1, '2025-03-24 06:34:31', '2025-03-24 08:32:39'),
(25, 'Appointment Booked', 'tes a new appointment has been booked', 1, '2025-03-24 06:36:11', '2025-03-24 08:32:39'),
(26, 'Appointment Booked', 'Brenna Sawyer a new appointment has been booked', 1, '2025-03-25 05:15:21', '2025-03-25 12:29:09');

-- --------------------------------------------------------

--
-- Table structure for table `package_days`
--

CREATE TABLE `package_days` (
  `id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `day_number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `name` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`name`)),
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, '[\"appointment-read\", \"certification-read\", \"certification-create\", \"certification-edit\", \"certification-delete\", \"slider-read\", \"slider-create\", \"slider-edit\", \"slider-delete\", \"blog-read\", \"blog-create\", \"blog-edit\", \"blog-delete\", \"team-read\", \"team-create\", \"team-edit\", \"team-delete\", \"testimonial-read\", \"testimonial-create\", \"testimonial-edit\", \"testimonial-delete\", \"faq-read\", \"faq-create\", \"faq-edit\", \"faq-delete\", \"setting-read\", \"setting-create\", \"setting-edit\", \"setting-delete\", \"role-read\", \"role-create\", \"role-edit\", \"role-delete\", \"user-read\", \"user-create\", \"user-edit\", \"user-delete\", \"dietpackage-read\", \"dietpackage-create\", \"dietpackage-edit\", \"dietpackage-delete\", \"serviceprogram-read\", \"serviceprogram-create\", \"serviceprogram-edit\", \"serviceprogram-delete\", \"login-activity-read\"]', NULL, '2025-01-28 07:30:36', '2025-03-24 08:48:02'),
(3, '[\"appointment-read\", \"certification-read\", \"certification-create\", \"certification-edit\", \"certification-delete\", \"slider-read\", \"slider-create\", \"slider-edit\", \"slider-delete\", \"brand-read\", \"brand-create\", \"brand-edit\", \"brand-delete\", \"blog-read\", \"blog-create\", \"blog-edit\", \"blog-delete\", \"team-read\", \"team-create\", \"team-edit\", \"team-delete\", \"testimonial-read\", \"testimonial-create\", \"testimonial-edit\", \"testimonial-delete\", \"faq-read\", \"faq-create\", \"faq-edit\", \"faq-delete\", \"setting-read\", \"setting-create\", \"setting-edit\", \"setting-delete\", \"role-read\", \"role-create\", \"role-edit\", \"role-delete\", \"user-read\", \"user-create\", \"user-edit\", \"user-delete\", \"login-activity-read\"]', NULL, '2025-01-28 07:30:36', '2025-02-03 07:19:50'),
(4, '[\"slider-read\", \"slider-create\", \"slider-edit\", \"slider-delete\", \"brand-read\", \"brand-create\", \"brand-edit\", \"brand-delete\", \"testimonial-read\", \"testimonial-create\", \"testimonial-edit\", \"testimonial-delete\", \"blog-read\", \"blog-create\", \"blog-edit\", \"blog-delete\", \"category-read\", \"category-create\", \"category-edit\", \"category-delete\", \"attribute-read\", \"attribute-create\", \"attribute-edit\", \"attribute-delete\", \"attribute-value-read\", \"attribute-value-create\", \"attribute-value-edit\", \"attribute-value-delete\", \"product-read\", \"product-create\", \"product-edit\", \"product-delete\", \"faq-read\", \"faq-create\", \"faq-edit\", \"faq-delete\", \"team-read\", \"team-create\", \"team-edit\", \"team-delete\", \"collection-read\", \"collection-create\", \"collection-edit\", \"collection-delete\", \"setting-read\"]', NULL, '2025-03-17 05:59:59', '2025-03-17 05:59:59'),
(5, '[\"slider-read\", \"slider-create\", \"slider-edit\", \"slider-delete\", \"brand-read\", \"brand-create\", \"brand-edit\", \"brand-delete\", \"testimonial-read\", \"testimonial-create\", \"testimonial-edit\", \"testimonial-delete\", \"blog-read\", \"blog-create\", \"blog-edit\", \"blog-delete\", \"category-read\", \"category-create\", \"category-edit\", \"category-delete\", \"attribute-read\", \"attribute-create\", \"attribute-edit\", \"attribute-delete\", \"attribute-value-read\", \"attribute-value-create\", \"attribute-value-edit\", \"attribute-value-delete\", \"product-read\", \"product-create\", \"product-edit\", \"product-delete\", \"faq-read\", \"faq-create\", \"faq-edit\", \"faq-delete\", \"team-read\", \"team-create\", \"team-edit\", \"team-delete\", \"collection-read\", \"collection-create\", \"collection-edit\", \"collection-delete\", \"setting-read\"]', NULL, '2025-03-17 06:00:20', '2025-03-17 06:00:20');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT 1,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` int(11) DEFAULT 1,
  `image` varchar(255) NOT NULL,
  `banner_image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'blog',
  `sub_title` varchar(255) NOT NULL DEFAULT '',
  `other` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`other`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `slug`, `user_id`, `title`, `description`, `status`, `image`, `banner_image`, `createdAt`, `updatedAt`, `type`, `sub_title`, `other`) VALUES
(1, 'what-role-microbiome-plays-for-the-gut', 1, 'What Role Microbiome Plays  For The Gut?', '<p>What Role Microbiome Plays &nbsp;For The Gut?</p>', 1, '/uploads/blog/1741759689810_image.png', '/uploads/blog/1742367529186_banner_image.png', '2025-03-12 06:08:09', '2025-03-19 08:36:03', 'blog', '', '[{\"image\": \"\", \"title\": \"Did You Know Your Microbiome Can Predict Your Health Future?\", \"description\": \"<p dir=\\\"ltr\\\">Did You Know Your Microbiome Can Predict Your Health Future?</p>\\r\\n<p dir=\\\"ltr\\\">Your gut microbiome is not just about digestion&mdash;it&rsquo;s like a crystal ball for your health. Studies have shown that imbalances in the gut can be linked to conditions like obesity, Type 2 diabetes, and even autoimmune diseases. For example, certain bacterial strains can influence how your body processes sugar, potentially increasing your risk of diabetes. By understanding your microbiome through advanced testing, you can take proactive steps to prevent these issues.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"What is the Gut Microbiome, and Why Should You Care?\", \"description\": \"<p dir=\\\"ltr\\\">Your gut microbiome is like a tiny universe living inside you, made up of trillions of bacteria, fungi, and other microbes. These tiny creatures play a big role in how your body works&mdash; so the personalised diet plan helps to make sure to digest food with utmost seriousness which helps in boosting your immune system. Think of them as your gut&rsquo;s little helpers. When they&rsquo;re happy and balanced, you feel good. But if they&rsquo;re out of whack, you might face bloating, fatigue, or even mood swings.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"/uploads/blog/1742367785017_otherImages.png\", \"title\": \"Can Your Gut Really Affect Your Mood?\", \"description\": \"<p dir=\\\"ltr\\\">Yes, it can! Have you ever felt butterflies in your stomach when nervous? That&rsquo;s your gut and brain chatting with each other. The gut is often called the &ldquo;second brain&rdquo; because it produces mood-regulating chemicals like serotonin. When we look at gut microbiome analysis, it basically makes you know whether you are healthy or unhealthy. It can mess with this connection, possibly leading to anxiety or depression. For example, eating too many processed foods can make the &ldquo;bad&rdquo; bacteria grow, which can throw your mood off balance.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"Why Do Some Foods Make You Bloated?\", \"description\": \"<p dir=\\\"ltr\\\">Ever eaten something and felt like a balloon afterward? This could be because certain foods are harder for your gut to digest. For instance, beans and lentils are healthy but can cause gas because of the natural sugars they contain. If your gut microbiome isn&rsquo;t balanced, it might struggle to handle these foods, leading to bloating.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"What Happens to Your Gut When You Take Antibiotics?\", \"description\": \"<p dir=\\\"ltr\\\">Antibiotics are like a double-edged sword. They&rsquo;re great for fighting infections, but they also wipe out good bacteria in your gut. Imagine your gut as a garden. Antibiotics don&rsquo;t just pull out the weeds (bad bacteria); they also uproot the flowers (good bacteria). This can lead to gut issues like diarrhea or yeast infections. To help your gut recover, eat fermented foods like yogurt or kimchi, which can replenish good bacteria.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"Are Probiotics Really Necessary?\", \"description\": \"<p dir=\\\"ltr\\\">Probiotics are live bacteria found in foods or supplements that can help restore balance in your gut. But do you need them? It depends. If you&rsquo;ve been sick or taken antibiotics, probiotics can be helpful. Foods like yogurt, kefir, and fermented pickles are natural sources of probiotics. For example, if you&rsquo;ve had an upset stomach after a round of antibiotics, a daily serving of probiotic yogurt might help you feel better.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"/uploads/blog/1742367785127_otherImages.png\", \"title\": \"How Does Stress Impact Your Gut?\", \"description\": \"<p dir=\\\"ltr\\\">Stress doesn&rsquo;t just mess with your mind; it can upset your stomach too. When you&rsquo;re stressed, your body produces hormones that can disturb your gut microbiome. This might show up as cramps, nausea, or even changes in your bathroom habits. For example, before a big presentation, you might feel your stomach churn. One of the types of personalised nutrition plans is practice. The relaxation techniques like deep breathing or yoga can help keep your gut happy.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"What Are Easy Ways to Improve Gut Health?\", \"description\": \"<p dir=\\\"ltr\\\">Here are some of the personalised meal plans which help in improving gut health. It includes:</p>\\r\\n<ol>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Eat More Fiber: Fruits, vegetables, and whole grains feed the good bacteria in your gut. For example, bananas and oats are great choices.</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Stay Hydrated: Water helps your digestive system run smoothly.</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Limit Processed Foods: Too much sugar or junk food can fuel bad bacteria.</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Try Fermented Foods: Yogurt, kimchi, and sauerkraut are packed with probiotics.</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Manage Stress: Meditation, exercise, or even a relaxing hobby can do wonders for your gut.</p>\\r\\n</li>\\r\\n</ol>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"How Are Genes Related to Gut Issues?\", \"description\": \"<p dir=\\\"ltr\\\">Nutrigenomics simply means how your food affects the genes and it impacts the way the body responds, especially in the gut and how prone you are to certain gut-related issues. For instance, some people have genetic variations that affect how they digest certain foods, leading to conditions like lactose intolerance or celiac disease. Your genes also impact your gut microbiome&mdash;some people might naturally have more of certain types of bacteria, which can affect digestion, immunity, and even weight management.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"The Microbiome’s Role in Immunity: Your Body’s Personal Defense Team\", \"description\": \"<p dir=\\\"ltr\\\">Did you know that about 70% of your immune system resides in your gut? Your microbiome acts like a personal army, training immune cells to differentiate between friend and foe. The nutrigenomics testing includes when the microbiome is disrupted, it&rsquo;s like your defense team goes on strike, leaving you vulnerable to infections and illnesses. Eating foods rich in fiber, like apples and oats, can help strengthen your gut&rsquo;s immunity.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"Gut-Brain Axis: Can the Microbiome Influence How You Think?\", \"description\": \"<p dir=\\\"ltr\\\">Emerging research shows that your gut bacteria can even affect cognitive functions like memory and focus. For instance, some gut microbes produce short-chain fatty acids (SCFAs) that influence brain health. Think of SCFAs as messengers that carry good news to your brain, helping it function optimally. A diet rich in whole foods and fermented products can enhance these beneficial bacteria, sharpening your mind.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"/uploads/blog/1742373361462_otherImages.png\", \"title\": \"How Can Nutrillion Help You?\", \"description\": \"<p dir=\\\"ltr\\\">Nutrillion offers personalized nutrition solutions that take your unique genetic makeup into account. By analyzing your genetic profile, Nutrillion can identify potential triggers for gut issues and recommend personalised meal plans, which involve changes or supplements tailored to your needs. For example, if your genes show a tendency toward gluten sensitivity, Nutrillion can help you plan a balanced gluten-free diet. This approach ensures that your gut health is supported in a way that&rsquo;s specific to you, helping you feel your best.</p>\\r\\n<p>&nbsp;</p>\"}]'),
(2, 'how-genes-shape-athletic-abilities', 1, 'How Genes Shape Athletic  Abilities?', '<div>How Genes Shape Athletic</div>\r\n<div>Abilities?</div>', 1, '/uploads/blog/1741759765205_image.png', '/uploads/blog/1741759765206_banner_image.png', '2025-03-12 06:09:25', '2025-03-19 12:31:10', 'blog', '', '[{\"image\": \"\", \"title\": \"Are you planning to be an athlete?\", \"description\": \"<p>When we watch athletes like Usain Bolt, Simone Biles, or Michael Phelps, they dominate their respective sports, which often marvel at extraordinary capabilities. Are these abilities purely a result of rigorous training, or do their genes play a significant role? For ordinary individuals aspiring to athleticism, understanding the interplay between genetics and training, which can be both enlightening and empowering.</p>\"}, {\"image\": \"\", \"title\": \"What are genes?\", \"description\": \"<p dir=\\\"ltr\\\">Genes are the fundamental units of heredity, made up of DNA. They carry the instructions for building and maintaining the body, influencing everything from physical traits like eye color to physiological processes such as muscle development and oxygen utilization. Each person inherits a unique combination of genes from their parents, which contributes to their individual characteristics and abilities. To know which bacteria is presented, a gut microbiome analysis is performed.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"/uploads/blog/1742387469782_otherImages.png\", \"title\": \"How do genes help in sports?\", \"description\": \"<p dir=\\\"ltr\\\">Genes contribute to athletic success by providing a foundation upon factors such as training and environmental build. Here are some specific ways genes can be assisted in sports:</p>\\r\\n<ol>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Enhanced Physical Traits: Genetic predispositions can result in favorable body structures for certain sports. For example, swimmers often have long torsos, and basketball players benefit from greater height.</p>\\r\\n</li>\\r\\n</ol>\\r\\n<ol start=\\\"2\\\">\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Increased Efficiency: Variations in genes like PPARGC1A can enhance mitochondrial efficiency, providing athletes with more energy to deliver sustainable performance.</p>\\r\\n</li>\\r\\n</ol>\\r\\n<ol start=\\\"3\\\">\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Quick Recovery: Genes related to inflammation and tissue repair, such as IL6, generally influence recovery times. Athletes with favorable variations may recover faster, providing a more intensive training throughout the process.</p>\\r\\n</li>\\r\\n</ol>\\r\\n<ol start=\\\"4\\\">\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Mental Edge: Psychological traits, such as focus and resilience, can also have a genetic component. For instance, genes like COMT are linked to stress response, which can affect performance under pressure.</p>\\r\\n</li>\\r\\n</ol>\\r\\n<p dir=\\\"ltr\\\">With the thorough knowledge about how genes helped in sports, nutrigenomics have a direct impact on the components of dietary. To have better health, nutrigenomics testing will cater towards the personalised health.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"How can an ordinary person be an athlete?\", \"description\": \"<p dir=\\\"ltr\\\">To be an athlete, muscular strength plays an important role. Muscular strength simply means how much force your muscles can produce, such as lifting a heavy weight. It\'s usually measured by the maximum weight you can lift in one go (called a \\\"one-rep max\\\"). Muscle power is about using that strength quickly, such as in explosive actions like jumping or sprinting. Both strength and power are super important for sports like sprinting, jumping, or lifting weights.</p>\\r\\n<p dir=\\\"ltr\\\">But being great at sports isn&rsquo;t just about muscles. Your mental abilities (like focus and quick thinking) and how prone you are to injuries also matter. Things like training, diet, and overall lifestyle (your \\\"environment\\\") play a huge role too.</p>\\r\\n<p dir=\\\"ltr\\\">Some people naturally function better in training because of their genes. For example, there might be a sprinter who has genes that help them build powerful muscles. Whereas for a gymnast, the vital aspects which take place include flexibility and balancing.</p>\\r\\n<p dir=\\\"ltr\\\">So, becoming an elite athlete is about having the right mix of good genes, mental toughness, and a supportive environment with proper training and nutrition. Different sports rely on these factors in different ways, so for which personalised meal plan is suggested.</p>\\r\\n<p dir=\\\"ltr\\\">It is a big yes that an ordinary person can become an athlete, if they have dedication, proper training, and a supportive environment. While genetics play a role in factors like muscle composition, endurance, and injury resistance, they are not the only factors that determine athletic success.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"How can nutrillion help you ?\", \"description\": \"<p dir=\\\"ltr\\\">Nutrillion supports your athletic journey by offering personalized nutrition plans tailored to your goals, fitness level, and dietary needs. These plans optimize energy, enhance recovery, and ensure you get the right nutrients to fuel workouts and improve performance. With a focus on long-term progress, Nutrillion helps you achieve peak athletic potential while addressing specific health concerns or preferences. All this could be possible when you have a personalised diet plan in your schedule.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"Connect With Us!\", \"description\": \"<p dir=\\\"ltr\\\">Thank you for reading our blog! We hope you found the information helpful and insightful. If you have any questions, thoughts, or would like to learn more about how we can help you achieve your health goals and provide with personalised nutrition plans, don&rsquo;t hesitate to reach out.</p>\\r\\n<p dir=\\\"ltr\\\">Contact no:&nbsp; 9557439399</p>\\r\\n<p dir=\\\"ltr\\\">Email id: info@nutrillion.one</p>\\r\\n<p>&nbsp;</p>\"}]'),
(3, 'connection-between-genes-and-hormonal-imbalance-in-women', 1, 'Connection Between Genes  And hormonal imbalance in Women', '<p>test</p>', 1, '/uploads/blog/1741759811138_image.png', '/uploads/blog/1741759811139_banner_image.png', '2025-03-12 06:10:11', '2025-03-20 06:24:00', 'blog', '', '[{\"image\": \"\", \"title\": \"Inroduction\", \"description\": \"<p dir=\\\"ltr\\\">Hormones are the unsung heroes of our bodies, as they quietly orchestrate everything from mood swings to metabolism. But when delicate chemical messengers fall out of balance, they can create a domino effect, impacting almost every aspect of a woman’s health. From irregular periods to unexplained fatigue, weight gain, and mood disorders, hormonal imbalances are more common than you think. Fortunately, science is now uncovering ways to restore balance naturally – and nutrigenomics is leading the charge.</p>\\r\\n<p dir=\\\"ltr\\\">Let’s break down how hormonal imbalances affect women’s health and how a personalized approach using nutrigenomics can prevent or manage these issues.</p>\\r\\n<p> </p>\"}, {\"image\": \"\", \"title\": \"What Causes Hormonal Imbalance in Women?\", \"description\": \"<p dir=\\\"ltr\\\">Hormonal imbalance occurs when there is too much or little of a specific hormone in your bloodstream. Especially for women, hormones like estrogen, progesterone, testosterone, and cortisol play an integral role in maintaining overall health. A few of the factors can throw these hormones off balance, such as:</p>\"}, {\"image\": \"/uploads/blog/1742448636630_otherImages.png\", \"title\": \"\", \"description\": \"<ul>\\r\\n<li>\\r\\n<ul>\\r\\n<li>\\r\\n\\r\\n</li>\\r\\n<li><strong>Stress:</strong> Chronic stress increases cortisol levels, which can disrupt the balance of other hormones.</li>\\r\\n<li><strong>Dietary Choices:</strong> High sugar intake, nutrient deficiencies, and processed foods can lead to hormonal shifts. <strong>Personalised diet plans</strong> make sure the body functions smoothly and efficiently.</li>\\r\\n<li><strong>Sleep Deprivation:</strong> Poor sleep affects the release of hormones like melatonin and insulin.</li>\\r\\n<li><strong>Medications and Birth Control:</strong> These can sometimes lead to hormone fluctuations.</li>\\r\\n<li><strong>Underlying Health Conditions:</strong> Disorders like polycystic ovary syndrome (PCOS), thyroid dysfunction, or insulin resistance are common culprits.</li>\\r\\n<li><strong>Aging and Menopause:</strong> Natural changes in hormone levels occur as women age.</li>\\r\\n</ul>\\r\\n</li>\\r\\n</ul>\"}, {\"image\": \"\", \"title\": \"\", \"description\": \"<p dir=\\\"ltr\\\">Understanding the root cause is the first step toward finding a solution, and that’s how nutrigenomics testing can make a significant impact.</p>\"}, {\"image\": \"\", \"title\": \"The Domino Effect of Hormonal Imbalance on Women’s Health\", \"description\": \"<p dir=\\\"ltr\\\">When hormones are out of sync, the effects can be felt far and wide. Here are some of the most common health issues linked to hormonal imbalance:</p>\\r\\n<p dir=\\\"ltr\\\"><strong>1. Irregular Menstrual Cycles</strong></p>\\r\\n<p dir=\\\"ltr\\\">Hormonal imbalance can lead to irregular periods, heavy bleeding, or even skipped cycles. High levels of stress hormones or conditions like PCOS are often to blame.</p>\\r\\n<p dir=\\\"ltr\\\"><strong>2. Weight Gain and Metabolism Issues</strong></p>\\r\\n<p dir=\\\"ltr\\\">An imbalance in hormones like insulin and thyroid hormones can slow metabolism, making it harder to lose weight. Elevated cortisol levels can also lead to weight gain, especially around the abdomen.</p>\\r\\n<p dir=\\\"ltr\\\"><strong>3. Skin Problems</strong></p>\\r\\n<p dir=\\\"ltr\\\">Acne, dry skin, or hair thinning can often be traced back to hormonal imbalances. For example, high androgen levels can trigger acne, while thyroid dysfunction may cause dry skin.</p>\\r\\n<p dir=\\\"ltr\\\"><strong>4. Mood Swings and Mental Health</strong></p>\\r\\n<p dir=\\\"ltr\\\">Fluctuations in estrogen and progesterone can significantly impact mood. Women with hormonal imbalances may experience anxiety, depression, or irritability.</p>\\r\\n<p dir=\\\"ltr\\\"><strong>5. Fatigue and Low Energy</strong></p>\\r\\n<p dir=\\\"ltr\\\">Imbalanced cortisol levels can lead to chronic fatigue, making it hard to get through the day.</p>\\r\\n<p dir=\\\"ltr\\\"><strong>6. Digestive Problems</strong></p>\\r\\n<p dir=\\\"ltr\\\">Hormones like estrogen and progesterone influence gut health. Imbalances can lead to bloating, constipation, or other digestive issues.</p>\\r\\n<p dir=\\\"ltr\\\">With the rightly personalised nutrition plans it becomes easier to resolve the problem of hormonal imbalances.</p>\\r\\n<p dir=\\\"ltr\\\"> </p>\"}, {\"image\": \"\", \"title\": \"How Nutrigenomics Can Help Prevent Hormonal Imbalance\", \"description\": \"<p dir=\\\"ltr\\\">Nutrigenomics is the science of understanding how your genes interact with the nutrients you consume. It takes the guesswork out of dieting and wellness by providing personalized recommendations based on your unique genetic makeup. Here’s how it can help address hormonal imbalances and for which making a personalised meal plan is important.</p>\\r\\n<p> </p>\"}, {\"image\": \"/uploads/blog/1742448636756_otherImages.png\", \"title\": \"\", \"description\": \"<p dir=\\\"ltr\\\"><strong>1. Precision Nutrition for Hormonal Health</strong></p>\\r\\n<p dir=\\\"ltr\\\">Your genes determine how your body processes nutrients and regulates hormones. For instance, some people may have genetic variations that make it harder to metabolize fats or balance blood sugar levels. Nutrigenomics can identify these variations and guide dietary choices to promote hormonal balance.</p>\\r\\n<p dir=\\\"ltr\\\"><strong>2. Balancing Blood Sugar Levels</strong></p>\\r\\n<p dir=\\\"ltr\\\">Genes like TCF7L2 and FTO influence how your body responds to sugar. Nutrigenomic testing can help you choose the right carbohydrates and portion sizes to prevent insulin spikes, a key factor in maintaining balanced hormones. Taking care of the blood sugar level is a part of personalised diet plan.</p>\\r\\n<p dir=\\\"ltr\\\"><strong>3. Supporting Estrogen Metabolism</strong></p>\\r\\n<p dir=\\\"ltr\\\">Estrogen dominance is a common issue in women with hormonal imbalance. Certain genetic markers can reveal how efficiently your body metabolizes estrogen. Foods rich in cruciferous vegetables (like broccoli and kale) can support estrogen detoxification, and nutrigenomics can help fine-tune this aspect of your diet.</p>\\r\\n<p> </p>\"}, {\"image\": \"\", \"title\": \"\", \"description\": \"<p dir=\\\"ltr\\\"><strong>4. Enhancing Stress Resilience</strong></p>\\r\\n<p dir=\\\"ltr\\\">Genes like COMT and BDNF influence your stress response. Nutrigenomic insights can recommend stress-busting foods rich in magnesium, B vitamins, and omega-3s to reduce cortisol levels naturally.</p>\\r\\n<p dir=\\\"ltr\\\"><strong>5. Optimizing Thyroid Function</strong></p>\\r\\n<p dir=\\\"ltr\\\">The thyroid gland is a key player in hormone regulation. Genes related to iodine metabolism or thyroid hormone receptors can help identify if you need more iodine, selenium, or zinc in your diet to support optimal thyroid health.</p>\\r\\n<p dir=\\\"ltr\\\"><strong>6. Improving Gut Health</strong></p>\\r\\n<p dir=\\\"ltr\\\">Performing the gut microbiome analysis, they significantly helps in improving the gut health, resulting in hormone balance. Nutrigenomics can highlight genetic predispositions to gut issues and recommend specific probiotics or fiber-rich foods to maintain a healthy microbiome.</p>\\r\\n<p> </p>\"}, {\"image\": \"\", \"title\": \"How nutrillion can help you ?\", \"description\": \"<p dir=\\\"ltr\\\">At Nutrillion, we specialize in combining the power of nutrigenomics with practical, science-backed nutrition plans. By analyzing your genetic profile, we can identify the unique factors contributing to your hormonal imbalances. Our experts craft personalized diet plan strategies that helps in addressing your specific needs, from improving blood sugar control to optimizing estrogen metabolism and enhancing gut health.</p>\\r\\n<p dir=\\\"ltr\\\">Beyond diet, we guide you in lifestyle changes, including stress management techniques and tailored exercise routines, ensuring holistic hormonal health. Nutrillion’s personalised diet plan empowers you to take control of your health and achieve sustainable, long-term wellness. Let us help you decode your genes and unlock the key to a healthier, more balanced you.</p>\\r\\n<p> </p>\"}]'),
(4, 'genetic-influence-on-weight-loss-a-deep-dive', 1, 'Genetic Influence On Weight  Loss: A Deep Dive', '<div>Genetic influence on weight</div>\r\n<div>loss: a deep dive</div>', 1, '/uploads/blog/1741759853280_image.png', '/uploads/blog/1741759853280_banner_image.png', '2025-03-12 06:10:53', '2025-03-20 06:37:38', 'blog', '', '[{\"image\": \"\", \"title\": \"Can Your Genes Decide Your Waistline? Exploring the Link Between Genomics and Weight Loss?\", \"description\": \"<p dir=\\\"ltr\\\">Have you ever wondered why some people seem to lose weight effortlessly while others struggle despite following the same diet and exercise routine? What if your genes hold the key to unlocking the perfect weight-loss strategy for you?</p>\\r\\n<p dir=\\\"ltr\\\">In the era of personalized health, genomics has emerged as a fascinating and ground breaking field, offering insights into how our DNA influences everything from metabolism to hunger signals. Let&rsquo;s dive deep into how genomics plays a crucial role in weight loss and how it can revolutionize your health journey.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"The Science Behind Genomics and Weight Loss\", \"description\": \"<p dir=\\\"ltr\\\">Your genetic makeup is like a blueprint that guides how your body functions, including how it responds to food, exercise, and other environmental factors.&nbsp; Here&rsquo;s how it ties into weight management:</p>\\r\\n<p dir=\\\"ltr\\\"><strong>1. Genetic Influence on Metabolism</strong></p>\\r\\n<p dir=\\\"ltr\\\">Certain genetic variations determine how efficiently your body burns calories. For instance, individuals with variations in the FTO gene may have a predisposition to slower metabolism and increased fat storage.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"/uploads/blog/1742452658663_otherImages.png\", \"title\": \"1\", \"description\": \"<p dir=\\\"ltr\\\"><strong>2. Appetite and Satiety Regulation</strong></p>\\r\\n<p dir=\\\"ltr\\\">Genes also affect how your body processes hunger and fullness signals. Variants in the MC4R gene, for example, can disrupt these signals, making you feel hungrier even when your body has had enough fuel.</p>\\r\\n<p dir=\\\"ltr\\\"><strong>3. Sensitivity to Different Nutrients</strong></p>\\r\\n<p dir=\\\"ltr\\\">Your DNA can influence how your body reacts to different macronutrients like fats, proteins, and carbohydrates. While some people thrive on a low-carb diet, others may need a higher carb intake to function optimally.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"\", \"description\": \"<p dir=\\\"ltr\\\"><strong>4. Exercise Response</strong></p>\\r\\n<p dir=\\\"ltr\\\">Genomics can shed light on how your body responds to physical activity. Genes like ACE and ACTN3 impact muscle performance and recovery, helping you understand what type of exercise suits you best.</p>\\r\\n<p dir=\\\"ltr\\\"><strong>5. Risk of Weight-Related Conditions</strong></p>\\r\\n<p dir=\\\"ltr\\\">Genetic testing can also reveal your predisposition to conditions like Type 2 diabetes, obesity, or metabolic syndrome, allowing for proactive lifestyle changes.</p>\\r\\n<p dir=\\\"ltr\\\">Once it is understood the importance of sciences involved behind genomics and weight loss. We often aims to provide personalised nutrition plans as per the specific needs and preferences.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"How Genomic Testing Works for Weight Loss\", \"description\": \"<p dir=\\\"ltr\\\">Genomic testing involves analyzing your DNA to identify genetic variations that influence weight management. These tests typically examine:</p>\\r\\n<ul>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Metabolic rate genes</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Fat absorption and storage genes</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Food cravings and eating behavior genes</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Nutrient metabolism genes</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Exercise adaptability genes</p>\\r\\n</li>\\r\\n</ul>\\r\\n<p dir=\\\"ltr\\\">The results are then used to craft a personalized weight-loss plan tailored to your unique genetic profile. According to the body requirements we cater a personalized diet plan for the body to perfoms smoothly.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"Stress and Sleep: The Genetic Connection\", \"description\": \"<p dir=\\\"ltr\\\">Your genetic profile can reveal how your body responds to stress and sleep deprivation, both of which are closely linked to weight gain. Variants in the COMT and CLOCK genes, for example, may affect stress resilience and circadian rhythms, respectively. This knowledge allows for personalized strategies to manage stress and improve sleep quality, enhancing weight-loss outcomes. Along with the gut microbiome analysis it is simpler to understand the genetic connection, especially for stress and sleep.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"The Psychological Dimension\", \"description\": \"<p dir=\\\"ltr\\\">Weight loss isn&rsquo;t just a physical process; your genes also influence your psychological relationship with food. Variants in dopamine-related genes can affect reward pathways, influencing cravings and emotional eating behaviors. Recognizing these tendencies allows for targeted interventions, such as mindfulness-based eating strategies or specific food substitutions.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"Benefits of a Genomic Approach to Weight Loss\", \"description\": \"<p dir=\\\"ltr\\\">Here are some of the advantages of Nutrigenomics approach towards weight loss. These includes:</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"/uploads/blog/1742452658515_otherImages.png\", \"title\": \"\", \"description\": \"<p dir=\\\"ltr\\\">1. Precision Nutrition</p>\\r\\n<p dir=\\\"ltr\\\">No more one-size-fits-all diets. A genomic approach ensures your diet aligns with your genetic predispositions, making it more effective and sustainable.</p>\\r\\n<p dir=\\\"ltr\\\">2. Enhanced Motivation</p>\\r\\n<p dir=\\\"ltr\\\">Understanding the science behind your body\'s unique needs can keep you motivated and committed to your weight-loss journey.</p>\\r\\n<p dir=\\\"ltr\\\">3. Long-Term Success</p>\\r\\n<p dir=\\\"ltr\\\">Personalized plans based on genetics are more likely to yield lasting results compared to generic diets that don&rsquo;t account for individual differences.</p>\\r\\n<p dir=\\\"ltr\\\">4. Holistic Health Improvement</p>\\r\\n<p dir=\\\"ltr\\\">Beyond weight loss, genomics can optimize overall health by addressing issues like food intolerances, nutrient deficiencies, and risk of chronic diseases.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"\", \"description\": \"<p dir=\\\"ltr\\\">With Nutrigenomics testing, it will help in making you understand the connection with the specific nutrient and with one&rsquo;s genes factor.</p>\\r\\n<p>&nbsp;</p>\"}, {\"image\": \"\", \"title\": \"How Nutrillion Can Help You Achieve Your Goals?\", \"description\": \"<p dir=\\\"ltr\\\">At Nutrillion, we believe in a personalized approach to health and wellness, and genomic testing is at the heart of our weight-loss programs. By analyzing your genetic profile, we uncover critical insights about your metabolism, nutrient sensitivities, appetite regulation, and exercise response. Using this information, our experts design a tailored diet and lifestyle plan that aligns perfectly with your body\'s unique needs. Whether you struggle with cravings, have difficulty sticking to diets, or need guidance on the right type of exercise, we provide personalised meal plan that works as a strategy which definitely works for you. Our focus on precision nutrition ensures that every recommendation is not just effective but also sustainable, helping you achieve long-term success in your weight-loss journey. With Nutrillion, you get more than a diet plan &ndash; you gain a roadmap to a healthier, happier you.</p>\\r\\n<p>&nbsp;</p>\"}]'),
(5, 'an-analysis-custom-diet-plans-vs-traditional-diets', 1, 'An Analysis: Custom Diet Plans VS Traditional Diets', '<p>An analysis: custom diet<br>plans vs traditional diets</p>', 1, '/uploads/blog/1741760025724_image.png', '/uploads/blog/1741760025724_banner_image.png', '2025-03-12 06:13:45', '2025-03-20 06:57:47', 'blog', '', '[{\"image\": \"\", \"title\": \"What is Personalized Nutrition?\", \"description\": \"<p dir=\\\"ltr\\\">Personalized nutrition refers to the concept of tailoring dietary advice and eating plans based on individual factors like genetics, lifestyle, health conditions, and preferences. It’s about providing food recommendations that are designed specifically for you, rather than offering a one-size-fits-all approach. The idea is to use detailed information about your unique body to create a diet that promotes optimal health, enhances your well-being, and prevents or manages certain diseases.</p>\\r\\n<p dir=\\\"ltr\\\"> </p>\\r\\n<p dir=\\\"ltr\\\">In today’s world, where health is a major concern, personalised nutrition plans are a game-changer. It takes into account how your body processes food and what works best for your metabolism, taking into consideration things like your age, gender, weight, physical activity level, family history, and even your gut microbiome. Personalized nutrition also considers any food sensitivities or allergies you might have, ensuring that your diet is safe and beneficial.</p>\\r\\n<p> </p>\"}, {\"image\": \"\", \"title\": \"How is Personalized Nutrition Different from Other Diets?\", \"description\": \"<p dir=\\\"ltr\\\">The main difference between personalized nutrition and traditional diets is that personalized nutrition doesn’t follow a generic set of rules or trends. Traditional diets, such as low-carb, keto, or Mediterranean diets, focus on general principles that apply to large groups of people. While these diets might help some individuals, they don’t always account for the nuances of an individual’s biology. For specific body nutrition, we provide a personalised diet plan, and according the body operates.</p>\\r\\n<p dir=\\\"ltr\\\"> </p>\\r\\n<p dir=\\\"ltr\\\">For example, keto might work wonders for someone looking to lose weight, but it could be counterproductive or even harmful to someone with a different set of health needs, such as someone with kidney problems. Personalized nutrition takes these factors into account. It looks at the individual’s specific nutritional needs and designs a plan that works best for their unique body.</p>\\r\\n<p> </p>\"}, {\"image\": \"\", \"title\": \"Why Can\'t One Diet Fit Everyone?\", \"description\": \"<p dir=\\\"ltr\\\">The notion that one diet can work for everyone has been challenged by recent advances in nutrition science. It’s becoming increasingly clear that our bodies respond differently to food. For instance, some people might lose weight on a low-carb diet, while others might gain weight or feel sluggish. This is because factors like your genetics, metabolism, and gut bacteria play a huge role in how your body processes food. One’s diet can differ according to the Nutrigenomics.</p>\\r\\n<p dir=\\\"ltr\\\"> </p>\\r\\n<p dir=\\\"ltr\\\">For example, people with certain genetic variations might have a harder time breaking down certain foods, like carbohydrates. Others might have a higher risk of developing conditions such as diabetes or heart disease, which could be better managed with a specific diet. In contrast, a standard diet plan might not provide the necessary nutrients or avoid food types that could worsen these conditions. However, through gut microbiome analysis, you can understand which bacteria is present and might impact the health. This is the main reason why everyone\'s diet doesn’t fit each other.</p>\\r\\n<p> </p>\"}, {\"image\": \"\", \"title\": \"How Does Personalized Nutrition Work?\", \"description\": \"<p dir=\\\"ltr\\\">Personalized nutrition typically begins with assessing your current health and lifestyle. This could involve a number of factors, such as:</p>\\r\\n<p dir=\\\"ltr\\\">Genetic Testing: Certain genes can influence how your body processes and responds to nutrients. For instance, some people may have genetic variants that affect their ability to metabolize caffeine, while others may process fats differently. Performing nutrigenomics testing will help in making sure of different genetics.</p>\\r\\n<p> </p>\"}, {\"image\": \"/uploads/blog/1742453505341_otherImages.png\", \"title\": \"\", \"description\": \"<ol>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Health Conditions: If you have diabetes, heart disease, or any other health condition, personalized nutrition would take that into account. For example, a heart patient might need a diet low in saturated fats and sodium, while a diabetic person might need to carefully manage their carbohydrate intake.</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Lifestyle Factors: Your daily habits—like how active you are, how much sleep you get, and your stress levels—also influence how you should eat. Personalized nutrition considers all these factors to create a diet that supports your overall health goals.</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Food Preferences and Tolerances: A personalized diet also takes into account your food preferences, allergies, and intolerances. For instance, if you’re lactose intolerant, personalized nutrition will help you choose alternatives that provide the same nutritional benefits without causing discomfort.</p>\\r\\n</li>\\r\\n</ol>\\r\\n<p> </p>\"}, {\"image\": \"\", \"title\": \"How Can Personalized Nutrition Benefit You?\", \"description\": \"<ol>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Improved Health Outcomes: By tailoring your diet to your specific needs, personalized meal plans can help you prevent or manage health conditions such as obesity, diabetes, high cholesterol, and even more complex issues like autoimmune diseases.</p>\\r\\n</li>\\r\\n</ol>\\r\\n<p> </p>\"}, {\"image\": \"/uploads/blog/1742453505515_otherImages.png\", \"title\": \"\", \"description\": \"<ol>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Optimized Nutrient Intake: When your diet is personalized, it ensures that you’re getting the right nutrients in the right quantities. This helps maintain a balanced diet that supports energy levels, immune function, and overall well-being.</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Weight Loss and Management: If weight loss is your goal, personalized nutrition can make it easier to shed pounds. By understanding your body’s response to different foods, a personalized diet plan can help you achieve and maintain a healthy weight more effectively than general diets.</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Better Digestion and Gut Health: Personalized nutrition takes your gut health into account, which is a key factor in overall health. By understanding your unique gut microbiome, the right food choices can help promote better digestion, reduce bloating, and improve nutrient absorption.</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Better Adherence to Diets: One of the biggest reasons people fail at dieting is because the plan isn’t realistic for their lifestyle. Personalized nutrition considers your food preferences, making it easier to stick to the plan in the long run.</p>\\r\\n</li>\\r\\n</ol>\\r\\n<p> </p>\"}, {\"image\": \"\", \"title\": \"What Role Does Technology Play in Personalized Nutrition?\", \"description\": \"<p dir=\\\"ltr\\\">Technology is a major player in making personalized nutrition more accessible. With the advancement of wearable devices, apps, and genetic testing, it’s easier than ever to gather data that can inform your diet plan.</p>\\r\\n<p dir=\\\"ltr\\\">For example, apps that track your food intake and physical activity can give valuable insights into your habits and how they’re affecting your health. Wearables like fitness trackers can monitor your sleep patterns, heart rate, and activity level, providing real-time data to guide dietary choices.</p>\\r\\n<p dir=\\\"ltr\\\">Can Personalized Nutrition Be Used for Weight Loss?</p>\\r\\n<p dir=\\\"ltr\\\">Yes, personalized nutrition is one of the most effective tools for weight loss because it takes into account the specific needs of your body. Rather than following a generic calorie-restricted diet, personalized nutrition focuses on the quality and composition of the foods you eat, ensuring that they work with your metabolism, rather than against it.</p>\\r\\n<p dir=\\\"ltr\\\">For example, if you have a slow metabolism, your personalized plan might recommend foods that boost your metabolism, such as lean proteins or fiber-rich vegetables. For someone who experiences hunger spikes, the diet might focus on high-satiety foods that keep you fuller for longer.</p>\\r\\n<p> </p>\"}, {\"image\": \"\", \"title\": \"Why is Personalized Nutrition Better Than Other Diets?\", \"description\": \"<p dir=\\\"ltr\\\">In today’s world, many of us have tried different diets in an attempt to improve our health, lose weight, or feel better. While diets like keto, paleo, low-carb, and Mediterranean are widely popular, they often follow a one-size-fits-all approach. The idea behind these traditional diets is that they provide general recommendations that might work for a large group of people. However, personalized nutrition takes things to a whole new level by tailoring dietary plans to fit the individual’s unique needs. Here’s why personalized nutrition is often better than other diets:</p>\\r\\n<p> </p>\"}, {\"image\": \"/uploads/blog/1742453867422_otherImages.png\", \"title\": \"1. Addresses Individual Differences\", \"description\": \"<p dir=\\\"ltr\\\">The biggest advantage of personalized nutrition is that it takes into account your individual body, lifestyle, and health conditions. Everyone’s body responds differently to food, which is why a diet that works for one person might not work for another. Personalized nutrition considers various factors like:</p>\\r\\n<ul>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Genetics: Our genetic makeup can influence how our body processes food. Some people metabolize fats more efficiently, while others might struggle with carbs or proteins.</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Health conditions: Whether it’s diabetes, high blood pressure, or allergies, personalized nutrition can help manage or prevent chronic conditions by recommending foods that support specific health needs.</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Metabolism: Your metabolism dictates how quickly you burn calories and process nutrients, which can affect weight loss and energy levels.<br><br></p>\\r\\n</li>\\r\\n</ul>\\r\\n<p dir=\\\"ltr\\\">Unlike traditional diets that have a generalized approach, personalized nutrition ensures that your plan aligns with your unique body composition, helping you achieve better results and avoid unnecessary frustration.</p>\\r\\n<p> </p>\"}, {\"image\": \"\", \"title\": \"2. Promotes Long-Term Success\", \"description\": \"<p dir=\\\"ltr\\\">One of the reasons many people give up on traditional diets is that they are not sustainable in the long run. For example, extreme diets that drastically cut out certain food groups might lead to quick results, but they are hard to maintain. Over time, people find themselves reverting to old eating habits, which can lead to regaining the weight lost or feeling deprived.</p>\\r\\n<p dir=\\\"ltr\\\">Personalized nutrition, on the other hand, considers your lifestyle, preferences, and goals. It provides a more balanced and sustainable approach that you can maintain in the long term. Because it’s tailored to your tastes and your specific health needs, it’s more enjoyable and easier to stick to. This results in a healthier, more balanced relationship with food that lasts.</p>\\r\\n<p> </p>\"}, {\"image\": \"/uploads/blog/1742453505557_otherImages.png\", \"title\": \"3. Supports Health Beyond Weight Loss\", \"description\": \"<p dir=\\\"ltr\\\">While many traditional diets focus primarily on weight loss, personalized nutrition goes beyond just shedding pounds. It looks at your overall health and wellness, helping to:</p>\\r\\n<ul>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Improve digestion by addressing food intolerances and gut health.</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Boost energy levels by choosing foods that support metabolic function.</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Support heart health by recommending foods that lower blood pressure and cholesterol.</p>\\r\\n</li>\\r\\n<li dir=\\\"ltr\\\" aria-level=\\\"1\\\">\\r\\n<p dir=\\\"ltr\\\" role=\\\"presentation\\\">Manage chronic conditions like diabetes, hypertension, and autoimmune diseases by adjusting nutrients and food choices.</p>\\r\\n</li>\\r\\n</ul>\\r\\n<p dir=\\\"ltr\\\">By focusing on personalized health goals, rather than just a number on the scale, personalized nutrition ensures you feel your best and achieve better overall health, which is far more beneficial than simply losing weight.</p>\\r\\n<p> </p>\"}, {\"image\": \"\", \"title\": \"4. Prevents Nutrient Deficiencies\", \"description\": \"<p dir=\\\"ltr\\\">One of the dangers of traditional diets is that they can often lead to nutrient deficiencies. For instance, strict diets like low-carb or restrictive vegetarian diets can result in insufficient intake of essential vitamins, minerals, and other nutrients.</p>\\r\\n<p dir=\\\"ltr\\\">With personalized nutrition, you’re more likely to get a well-balanced diet that meets all your nutritional needs. For example, a personalized diet might identify potential deficiencies—such as low iron levels in a vegetarian person or insufficient omega-3 intake—and suggest nutrient-dense foods or supplements to correct them. This ensures that you’re getting the vitamins and minerals your body needs to function optimally, reducing the risk of deficiencies.</p>\\r\\n<p> </p>\"}, {\"image\": \"\", \"title\": \"How nutrillion can help you ?\", \"description\": \"<p dir=\\\"ltr\\\">Nutrillion offers a comprehensive, personalized approach to nutrition, helping you make the right food choices, improve your health, and prevent diseases. By addressing individual needs and goals, Nutrillion creates tailored nutrition plans that are sustainable, effective, and focused on overall well-being. Whether you’re dealing with a health condition, trying to lose weight, or just want to improve your lifestyle, Nutrillion can be your trusted partner in achieving your health goals.</p>\\r\\n<p> </p>\"}]'),
(7, 'from-fatigue-to-full-potential-jannats-journey', 1, 'From Fatigue to Full Potential – Jannat’s Journey', '<p>Jannat, an IT professional, battled Inflammatory Bowel Disease (IBD), excessive hair<br>fall, and chronic fatigue. Despite maintaining a stable weight, she lacked the energy<br>for even basic tasks, let alone exercise. Conventional approaches failed, leaving her<br>feeling drained &ndash; until she found Nutrillion!.....</p>', 1, '/uploads/blog/1742190426546_image.png', '/uploads/blog/1742190426549_banner_image.png', '2025-03-17 05:47:06', '2025-03-17 05:47:43', 'case-study', 'Case Study 1', NULL),
(8, 'reclaiming-health-against-the-odds-myra-kapoors-breakthrough', 1, 'Reclaiming Health Against the Odds – Myra Kapoor’s Breakthrough', '<p>At just 16, Myra Kapoor faced an overwhelming mix of Type 1 diabetes, Hashimoto&rsquo;s<br>thyroid disease, high cholesterol, and celiac disease. Rapid weight loss left her frail,<br>battling intense cravings, hormonal imbalances, and debilitating fatigue. Managing ....</p>', 1, '/uploads/blog/1742190513115_image.png', '/uploads/blog/1742190513119_banner_image.png', '2025-03-17 05:48:33', '2025-03-17 05:48:33', 'case-study', 'Case Study 2', NULL),
(9, 'fueling-an-athletes-dream-siddhant-vohras-transformation', 1, 'Fueling an Athlete’s Dream – Siddhant Vohra’s Transformation', '<p>Fifteen-year-old Siddhant Vohra, a budding cricketer, struggled with low stamina, high<br>body fat, sluggish growth, and poor focus. His training sessions left him exhausted,<br>and intense cravings for sugary and spicy foods derailed his progress. Mentally and P....</p>', 1, '/uploads/blog/1742190567076_image.png', '/uploads/blog/1742190567080_banner_image.png', '2025-03-17 05:49:27', '2025-03-17 05:49:27', 'case-study', 'Case Study 3', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `productcategories`
--

CREATE TABLE `productcategories` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productfilters`
--

CREATE TABLE `productfilters` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `type` enum('Plant','CBD','THC') NOT NULL,
  `status` int(11) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productimages`
--

CREATE TABLE `productimages` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `product_attribute_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `collection_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `short_description` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `additional_description` text DEFAULT NULL,
  `sku` varchar(255) NOT NULL,
  `price` float NOT NULL DEFAULT 0,
  `sale_price` float DEFAULT NULL,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `weight` float DEFAULT 0,
  `length` float DEFAULT 0,
  `wide` float DEFAULT 0,
  `tags` text DEFAULT NULL,
  `height` float DEFAULT 0,
  `stock_status` enum('in_stock','out_of_stock','on_backorder') DEFAULT 'in_stock',
  `allowCheckoutWhenOutOfStock` tinyint(1) DEFAULT 0,
  `Plant` int(11) NOT NULL,
  `CBD` int(11) NOT NULL,
  `THC` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_attribute` tinyint(1) DEFAULT 0,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productvariants`
--

CREATE TABLE `productvariants` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `varient_id` int(11) NOT NULL,
  `varient_value_id` int(11) NOT NULL,
  `variant_key` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`variant_key`)),
  `price` float NOT NULL,
  `old_price` float DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `referrals`
--

CREATE TABLE `referrals` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `remarks` varchar(150) NOT NULL,
  `status` int(5) NOT NULL,
  `agent_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `referrals`
--

INSERT INTO `referrals` (`id`, `name`, `phone`, `category`, `remarks`, `status`, `agent_id`, `createdAt`, `updatedAt`) VALUES
(1, 'John Doe', '7900000000', 'Life term plan', '', 1, 1, '2026-01-27 17:37:20', '2026-01-27 17:37:20'),
(2, 'John Doe', '7900000000', 'Life term plan', '', 1, 1, '2026-01-27 17:38:25', '2026-01-27 17:38:25');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `permissionId` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `permissionId`, `createdAt`, `updatedAt`) VALUES
(1, 'Superadmin', 1, '2025-01-15 08:28:15', '2025-01-15 08:28:15'),
(2, 'Sub Admin', 3, '2025-01-27 05:04:22', '2025-01-27 11:00:18'),
(3, 'Junior Dietitian', 4, '2025-03-17 05:59:59', '2025-03-17 05:59:59'),
(4, 'Senior Dietition', 5, '2025-03-17 06:00:20', '2025-03-17 06:00:20');

-- --------------------------------------------------------

--
-- Table structure for table `serviceprograms`
--

CREATE TABLE `serviceprograms` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` float DEFAULT NULL,
  `key_features` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`key_features`)),
  `image` varchar(255) NOT NULL,
  `duration_days` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `serviceprograms`
--

INSERT INTO `serviceprograms` (`id`, `title`, `description`, `price`, `key_features`, `image`, `duration_days`, `createdAt`, `updatedAt`) VALUES
(2, ' NutriGenesis – The Ultimate Precision Nutrition Program', '<p>Our most advanced and structured program, NutriGenesis, is designed for individuals seeking a cutting-edge, personalised health transformation. This comprehensive program integrates genetic insights with tailored nutrition plans, ongoing monitoring, and expert support.</p>', NULL, '[\"Dedicated Nutritionist & Program Manager : A committed team ensures your progress is continuously monitored.\", \"Personalised Weekly Nutrition Plans : Adjusted based on your genetic profile, progress, and health goals.\", \"Exclusive Weekly Follow-Ups : One-on-one sessions for tracking improvements and making refinements.\", \" Ongoing Support & Monitoring : Direct access to experts via a dedicated WhatsApp group.\", \"Comprehensive Genetic Testing : Analysis through advanced Nutrigenomics testing (Mandatory).\", \" 5 In-Depth Genetic Counselling Sessions : 40-minute expert consultations to discuss test findings and recommendations.\", \"Pre-Nutrition Counselling : A foundational 4-6 week period to prepare your body for transformation.\"]', '/uploads/serviceprogram/1742206481485serviceprograms.png', '6 Months', '2025-03-17 10:14:41', '2025-03-17 10:14:41'),
(3, 'NutriBioBalance – Advanced Gut Health Optimization', '<p>A specialised program designed for individuals looking to optimise gut health and address digestion-related concerns.</p>', NULL, '[\" Gut Microbiome Testing : A deep dive into your gut health to enhance digestion and nutrient absorption.\", \"3 Additional Gut Health Consultations : 40-minute sessions focused on gut-related improvements and strategies.\"]', '/uploads/serviceprogram/1742206573721serviceprograms.png', '', '2025-03-17 10:16:13', '2025-03-17 10:16:13'),
(4, 'MetaboSync – Tailored Nutrition for Personalised Wellness', '<p>For individuals with unique health requirements or those unsure of which plan suits them best, MetaboSync offers an ultra-personalised approach.</p>', NULL, '[\"Flexible Duration : Choose from daily, weekly, or extended plans tailored to your needs.\", \" Comprehensive Personalisation : More intensive support with enhanced health tracking.\", \"Bespoke Nutrition Strategy : Designed to align with your lifestyle and long-term wellness goals.\"]', '/uploads/serviceprogram/1742206631217serviceprograms.png', '', '2025-03-17 10:17:11', '2025-03-17 10:17:11'),
(5, 'NutriPrelude – Your Nutritional Foundation', '<p>Perfect for those new to personalised nutrition, NutriPrelude introduces you to our data-driven approach.</p>', NULL, '[\" Initial Consultation : A 30-minute telephonic or virtual session to discuss your health goals.\", \" Preliminary Health Assessment : Data collection and analysis for an insightful overview.\", \"One-Time Nutritional Prescription : Expert guidance to help you choose the best program for your needs.\"]', '/uploads/serviceprogram/1742206688264serviceprograms.png', '', '2025-03-17 10:18:08', '2025-03-17 10:18:08');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `key` varchar(255) NOT NULL,
  `value` text DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `key`, `value`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'logo', '/uploads/settings/1737685375052settings.png', 1, '2025-01-10 10:03:50', '2025-01-24 02:22:55'),
(2, 'email', 'test@gmail.com', 1, '2025-01-10 10:03:50', '2025-01-10 11:22:20'),
(3, 'phone', '798000000', 1, '2025-01-10 10:03:50', '2025-01-10 10:03:50'),
(4, 'address', 'To ensure that a blank value for any field doesn\'t overwrite an already existing setting, you can add a check to skip updating the setting if the new value is null, undefined, o', 1, '2025-01-10 10:03:50', '2025-01-10 11:39:06'),
(5, 'facebook_link', 'http://localhost:8000/admin/settings', 1, '2025-01-10 10:03:50', '2025-01-10 11:19:14'),
(6, 'favicon', '/uploads/settings/1737685375053settings.png', 1, '2025-01-10 10:03:50', '2025-01-24 02:22:55'),
(7, 'instagram_link', 'http://localhost:8000/admin/settings', 1, '2025-01-10 11:36:06', '2025-01-10 11:36:06'),
(8, 'youtube_link', 'http://localhost:8000/admin/settings', 1, '2025-01-10 11:37:12', '2025-01-10 11:37:12'),
(9, 'twitter_link', 'http://localhost:8000/admin/settings', 1, '2025-01-10 11:37:12', '2025-01-10 11:37:12'),
(10, 'working_time', '12:00-24:PM', 1, '2025-01-10 11:37:12', '2025-01-10 11:38:12'),
(11, 'privacy_policy', '<p dir=\"ltr\"><strong>Privacy Policy&nbsp;</strong></p>\r\n<p dir=\"ltr\"><strong id=\"docs-internal-guid-8aa2c507-7fff-db74-eb7a-2082f9d9d272\"></strong><br><br></p>\r\n<p dir=\"ltr\">Your privacy is our priority at Nutrivison Wellness and Genetics Private Limited. We adhere to strict data protection standards to ensure the confidentiality and security of your personal information.</p>\r\n<p dir=\"ltr\">&nbsp;</p>\r\n<ul>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">We collect personal data, including health information, solely for the purpose of providing personalized nutrition services.</p>\r\n</li>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">All genetic and health data are securely stored and used only for analysis and program customization.</p>\r\n</li>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">Nutrivison Wellness and Genetics Private Limited does not sell, share, or disclose personal information to third parties without explicit consent.</p>\r\n</li>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">Users may request access, modification, or deletion of their data at any time by contacting our support team.</p>\r\n</li>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">Our website uses cookies to enhance user experience. By continuing to use the site, you consent to the use of cookies.</p>\r\n</li>\r\n</ul>\r\n<p>&nbsp;</p>', 1, '2025-01-13 05:04:12', '2025-03-22 06:37:44'),
(12, 'terms_condition', '<p dir=\"ltr\"><strong>Terms &amp; Conditions&nbsp;</strong><strong id=\"docs-internal-guid-6783e75e-7fff-ba17-20a0-e2a0d7338282\"></strong></p>\r\n<p dir=\"ltr\">&nbsp;</p>\r\n<p dir=\"ltr\">&nbsp;</p>\r\n<p dir=\"ltr\">By accessing and using the Nutrivison Wellness and Genetics Private Limited website and services, you agree to the following terms:<br><br></p>\r\n<ul>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">Nutrivison Wellness and Genetics Private Limited provides personalized nutrition solutions based on scientific analysis but does not offer medical diagnosis or treatment.</p>\r\n</li>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">Users must provide accurate and complete information for assessments and consultations. We do not guarantee specific results for weight loss or the management of chronic illnesses.</p>\r\n</li>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">The results and recommendations provided are based on current research but may evolve with scientific advancements.</p>\r\n</li>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">Unauthorized reproduction, distribution, or misuse of any Nutrivison Wellness and Genetics Private Limited content is strictly prohibited.</p>\r\n</li>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">Nutrivison Wellness and Genetics Private Limited is not responsible for any adverse effects resulting from non-compliance with dietary recommendations.</p>\r\n</li>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">We reserve the right to update these terms at any time.</p>\r\n</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<p dir=\"ltr\">By continuing to use our services, you acknowledge and accept these terms.</p>\r\n<p>&nbsp;</p>', 1, '2025-01-13 06:10:13', '2025-03-22 06:35:05'),
(13, 'refund_policy', '<p dir=\"ltr\"><strong>Cancellation &amp; Refund Policy</strong></p>\r\n<p dir=\"ltr\">&nbsp;</p>\r\n<p dir=\"ltr\"><strong id=\"docs-internal-guid-aa89f291-7fff-50fc-9f54-7a78fbe667c6\"></strong>&nbsp;</p>\r\n<p dir=\"ltr\">At Nutrivison Wellness and Genetics Private Limited, we provide specialized services that require dedicated time, expertise, and resources. Therefore, we have a strict no cancellation and no refund policy once payment has been made.</p>\r\n<p dir=\"ltr\">&nbsp;</p>\r\n<ul>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">Genetic/Nutrigenomics Testing: Once a sample has been collected and processed, refunds are not available.</p>\r\n</li>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">Program Modifications: Customers may request a program adjustment to switch to a different plan that better suits their needs, but cancellations and refunds are not permitted.</p>\r\n</li>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">Product Returns: Once a test kit has been dispatched, it cannot be returned or refunded.</p>\r\n</li>\r\n<li dir=\"ltr\" aria-level=\"1\">\r\n<p dir=\"ltr\" role=\"presentation\">Policy Updates: Nutrivison Wellness and Genetics Private Limited reserves the right to amend this policy at any time.</p>\r\n</li>\r\n</ul>\r\n<p>&nbsp;</p>\r\n<p dir=\"ltr\">For any queries regarding our policies, please contact our customer support team.</p>\r\n<p dir=\"ltr\">Email: <a href=\"mailto:info@nutrillion.one\">info@nutrillion.one </a>Contact: 9557439399</p>\r\n<p>&nbsp;</p>', 1, '2025-01-13 06:10:13', '2025-03-22 06:37:05'),
(14, 'disclaimer', '<p><strong>&nbsp;</strong></p>', 1, '2025-01-13 06:10:13', '2025-03-19 09:00:23'),
(15, 'linkedin_link', 'http://localhost:8000/admin/settings', 1, '2025-02-03 10:12:51', '2025-02-03 10:12:51'),
(16, 'audiocall', '1499', 1, '2025-02-05 12:44:08', '2025-02-05 12:44:08'),
(17, 'videocall', '1499', 1, '2025-02-05 12:44:08', '2025-02-05 12:44:08');

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `sub_title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `order_by` int(11) DEFAULT 0,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `title`, `sub_title`, `description`, `order_by`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Your Journey Begins with Understanding Who You Are', 'Welcome to Nutrillion', '<p>Focused on What Matters&mdash;Your Health</p>', 0, '/uploads/slider/1742205799692sliders.png', '2025-03-17 10:03:19', '2025-03-17 10:03:19');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `status` int(11) DEFAULT 1,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tempusers`
--

CREATE TABLE `tempusers` (
  `id` int(11) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `temp_otp` varchar(255) NOT NULL,
  `verify_status` int(11) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tempusers`
--

INSERT INTO `tempusers` (`id`, `phone`, `temp_otp`, `verify_status`, `createdAt`, `updatedAt`) VALUES
(1, '7900000000', '1234', 1, '2025-02-13 11:50:41', '2026-01-22 18:23:23'),
(2, '7643432434', '1234', 0, '2025-02-14 07:09:20', '2025-02-14 07:09:33'),
(3, '2323232323', '1234', 1, '2025-02-14 07:11:53', '2025-02-18 04:54:40'),
(4, '9686456676', '1234', 0, '2025-02-14 07:12:48', '2025-02-14 07:12:51'),
(5, '9273827328', '1234', 0, '2025-02-14 07:14:31', '2025-02-14 07:14:32'),
(6, '6878654343', '1234', 1, '2025-02-14 10:17:13', '2025-02-17 11:03:02'),
(7, '9787878767', '1234', 1, '2025-02-14 10:33:03', '2025-02-17 09:49:51'),
(8, '9738747473', '1234', 1, '2025-02-17 09:52:38', '2025-02-17 09:52:41'),
(9, '7394958059', '1234', 1, '2025-02-17 10:21:35', '2025-02-17 10:21:39'),
(10, '8059231532', '1234', 1, '2025-02-18 13:31:28', '2025-03-24 05:21:45'),
(11, '1376768671', '1234', 0, '2025-02-18 13:33:16', '2025-02-18 13:54:27'),
(12, '7900000001', '1234', 0, '2025-02-18 13:40:50', '2025-02-18 13:54:12'),
(13, '7900000002', '1234', 0, '2025-02-18 13:54:18', '2025-02-18 14:09:11'),
(14, '7985852725', '1234', 1, '2025-02-18 13:54:48', '2025-03-18 11:33:21'),
(15, '8789934344', '1234', 1, '2025-03-12 08:56:08', '2025-03-24 06:21:30'),
(16, '8789924454', '1234', 1, '2025-03-17 10:21:39', '2025-03-24 06:34:24'),
(17, '8789933445', '1234', 1, '2025-03-17 10:28:04', '2025-03-24 06:30:06'),
(18, '8527430025', '1234', 0, '2025-03-21 06:29:18', '2025-03-21 06:29:18'),
(19, '8789944555', '1234', 1, '2025-03-24 05:32:06', '2025-03-24 05:32:09'),
(20, '8949488473', '1234', 1, '2025-03-24 05:54:12', '2025-03-24 05:54:15'),
(21, '8789933333', '1234', 1, '2025-03-24 06:36:02', '2025-03-24 06:36:09'),
(22, '1227474143', '1234', 1, '2025-03-25 05:15:12', '2025-03-25 05:15:17'),
(23, '9137050590', '1234', 0, '2025-05-14 12:21:58', '2025-05-14 12:23:40'),
(24, '9137050591', '1234', 0, '2025-05-14 12:23:03', '2025-05-14 12:23:03'),
(25, '8962117877', '1234', 0, '2025-07-01 13:25:29', '2025-07-01 13:26:20'),
(26, '9428825452', '1234', 0, '2025-08-19 06:00:12', '2025-08-19 06:00:12');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `name` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `status` int(11) DEFAULT 1,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `title`, `description`, `name`, `designation`, `status`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Shalein Kalia', '<p>I have known Dr. Rishabh for over ten years, he is always famished to learn more. Dr. Rishab has made a mark owing to his dedication towards his vision of raising health awareness. Thrive today, thrive tomorrow.</p>', 'Shalein Kalia', 'Client', 1, '/uploads/testimonial/1739510048381testimonial.png', '2025-02-14 05:14:08', '2025-02-14 05:14:08'),
(2, 'Jannat Bhola', '<p>Highly skilled team of doctors and nutritionists that guide you like a family and provide personal attention to every case. Great work by team Nutrillion.</p>', 'Jannat Bhola', 'Client', 1, '/uploads/testimonial/1739510151338testimonial.png', '2025-02-14 05:15:51', '2025-02-14 05:15:51'),
(3, 'Rekha Verma', '<p>This organisation has a very talented team. They helped me in therapeutic concerts. Now I am feeling better.</p>', 'Rekha Verma', 'Client', 1, '/uploads/testimonial/1739510244774testimonial.png', '2025-02-14 05:17:24', '2025-02-14 05:17:24'),
(4, 'Sushobhit Verma', '<p>They provide very good services in weight management. I was able to gain weight with their nutrition plan.</p>', 'Sushobhit Verma', 'Client', 1, '/uploads/testimonial/1739510306789testimonial.png', '2025-02-14 05:18:26', '2025-02-14 05:18:26'),
(5, 'Khushboo Nasa', '<p>Perfect one. Always listens to your requirements and issues and devises the plan accordingly to help you achieve the goal with nutrition. Must recommend to solve all your health issues. Don\'t give a second thought while opting for this. Happy Living !.</p>', 'Khushboo Nasa', 'Client', 1, '/uploads/testimonial/1739510384877testimonial.png', '2025-02-14 05:19:44', '2025-02-14 05:19:44'),
(6, 'Siddhanth Vohra’s Parents', '<p>Our 13-year-old son Siddhanth\'s cricket journey improved with Nutrillion\'s 6-month sports nutrition plan. Using genetic and allergy tests, they customized his diet, unlocking his potential. We&rsquo;re grateful for their guidance in supporting his dream!.</p>', 'Siddhanth Vohra’s Parents', 'Client', 1, '/uploads/testimonial/1739510473658testimonial.png', '2025-02-14 05:21:13', '2025-02-14 05:21:13'),
(7, 'Ritika', '<p>Thanks to Dr. Rishabh and the Nutrillion Team, I lost 22 kg in 6.5 months with ease. I feel healthier, more energetic, mentally sharper, and happier. My confidence has skyrocketed, and my life has completely transformed!.</p>', 'Ritika', 'Client', 1, '/uploads/testimonial/1739510538273testimonial.svg', '2025-02-14 05:22:18', '2025-02-14 05:22:18'),
(8, 'Tejashree ', '<p>I am grateful for my 3-month internship at Nutrillion under Dr. Rishabh Verma. I gained expertise in personalized nutrition, meal planning, scientific writing, etc.. Working on Nutrillion\'s brands enhanced my skills and understanding of the nutrition industry. Thank you, Nutrillion!.</p>', 'Tejashree ', 'Intern', 1, '/uploads/testimonial/1739510582744testimonial.svg', '2025-02-14 05:23:02', '2025-02-14 05:23:02'),
(9, 'Aditya Singh', '<p>I lost 10-12 kg with Dr. Rishabh\'s nutritious diet plan, which didn&rsquo;t require eating less. I&rsquo;m still losing weight, feeling healthier, and getting closer to my ideal weight. Thank you, Dr. Rishabh and team!.</p>', 'Aditya Singh', 'Client', 1, '/uploads/testimonial/1739510760887testimonial.svg', '2025-02-14 05:26:00', '2025-02-14 05:26:00'),
(10, 'Abhijeet', '<p>I lost over 15 kg in 6 months with a diet that transformed my lifestyle. It helped me stay on track during lockdown, build healthy habits, and achieve my desired physique through small, consistent steps.</p>', 'Abhijeet', 'Client', 1, '/uploads/testimonial/1739510806024testimonial.svg', '2025-02-14 05:26:46', '2025-02-14 05:26:46'),
(11, 'Jayeeta Gupta', '<p>Dr. Rishabh Verma, an experienced nutritionist, combines professionalism with sincerity. His advice on eating right and quality supplements helped me achieve my health goals. I&rsquo;m truly grateful for his guidance!.</p>', 'Jayeeta Gupta', 'Client', 1, '/uploads/testimonial/1739510916549testimonial.svg', '2025-02-14 05:28:36', '2025-02-14 05:28:36'),
(12, 'Shatakshi Gupta', '<p>As a B.Sc. Nutrition and Dietetics student at Quantum University, Roorkee, my internship at Nutrillion Company enriched my knowledge of nutrigenomics, diets, and micronutrients. Guided by Rishabh Sir, I gained hands-on experience in personalized nutrition.</p>', 'Shatakshi Gupta', 'Intern', 1, '/uploads/testimonial/1739511030431testimonial.png', '2025-02-14 05:30:30', '2025-02-14 05:30:30');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `age` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `status` int(11) DEFAULT 1,
  `role` int(11) DEFAULT 3,
  `profile_img` varchar(255) NOT NULL,
  `roleId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `resetPasswordToken` varchar(255) DEFAULT NULL,
  `resetPasswordExpires` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `password`, `age`, `gender`, `status`, `role`, `profile_img`, `roleId`, `createdAt`, `updatedAt`, `resetPasswordToken`, `resetPasswordExpires`) VALUES
(1, 'Admin', 'admin@admin.com', '7900000000', '$2b$10$Hqd3eftDefbHysJZdWzq.eCZ63/EQoSJiJaIKqA8UqY8T5yOmxxOC', '', '', 1, 1, '/uploads/profile/1739785859554profile.png', 1, '2025-01-10 06:31:34', '2025-02-17 09:50:59', NULL, NULL),
(2, 'test1', 'test1@gmail.com', '2323232323', '$2b$10$Hqd3eftDefbHysJZdWzq.eCZ63/EQoSJiJaIKqA8UqY8T5yOmxxOC', '31', 'male', 1, 3, '', NULL, '2025-02-17 05:01:26', '2025-02-17 05:01:26', NULL, NULL),
(3, 'Test10', 'test10@gmail.com', '9787878767', '$2b$10$NYf1ZzYz7FR6lRND1/UsYuW8XLW05A/dTnKf5fkZxywYPwO19zjCS', '30', 'female', 1, 3, '', NULL, '2025-02-17 05:27:35', '2025-02-17 05:27:35', NULL, NULL),
(4, 'test1', 'zsdm@gmail.com', '6878654343', '$2b$10$EzePLBD8j2VRfqn9RTLVuOMsJC6W1GgBQWNk1zB8CnhibXAd0FbPS', '4', 'female', 1, 3, '', NULL, '2025-02-17 05:47:17', '2025-02-17 05:47:17', NULL, NULL),
(5, 'ankur', 'test1@gmail.com', '9738747473', '$2b$10$tJM8rV994sVE9X2LUocz1O2qFrOg0vznmx322Ew1vCm1P8QeRrYBi', '21', 'male', 1, 3, '', NULL, '2025-02-17 09:52:54', '2025-02-17 09:52:54', NULL, NULL),
(6, 'test A1', 'niveditasingh7394@gmail.com', '7394958059', '$2b$10$YNGySuMiiQrqszujB7kvMuIzSkUgdF8AiEyg2KeMBSzUkaqr1Kbve', '45', 'female', 1, 3, '', NULL, '2025-02-17 10:21:42', '2025-02-17 10:21:42', NULL, NULL),
(7, 'Siddharth Dubey', 'siddharthdubey@stimulusservices.com', '8059231532', '$2b$10$6mn1TE1WQtArnGaiysapX.8FAsLAhOkgiOop4ocK767W6DQpt6ZYC', '27', 'male', 1, 3, '', NULL, '2025-02-18 13:31:38', '2025-02-18 13:31:38', NULL, NULL),
(8, 'Jonah Clark', 'qabyq@mailinator.com', '1604273885', '$2b$10$QKO41ZnY23YOX0dFr7OqXOCKS10nL06d.zplPgr9zY6TeeOTHNCra', '75', 'male', 1, 3, '', NULL, '2025-02-18 14:10:50', '2025-02-18 14:10:50', NULL, NULL),
(9, 'Ankur', 'pankur820@gmail.com', '7985852725', '$2b$10$lIWcC6mqO512lm5a2X3jauapT5U1q1rPJu5pmDe2/JkVMI1bHui6G', '25', 'male', 1, 3, '', NULL, '2025-02-20 10:23:25', '2025-02-20 10:23:25', NULL, NULL),
(10, 'test 2', 'fff@gmail.com', '8789933445', '$2b$10$v6eqmFaFuIU5UEs.F6MRrOVBRj8Hzw.j5CbvyKzmAyGxsCbDuEC/K', '60', 'male', 1, 3, '', NULL, '2025-03-17 10:28:14', '2025-03-17 10:28:14', NULL, NULL),
(11, 'test 2', 'fff@gmai.outlook.com', '8789934344', '$2b$10$ZnKMAsLS8pl3/xFlIkCbYOgJgbTr7xO5NM/VBywX9kn8Og6mUctGO', '30', 'male', 1, 3, '', NULL, '2025-03-24 05:29:43', '2025-03-24 05:29:43', NULL, NULL),
(12, 'ankur', 'fff@outlook.com', '8789924454', '$2b$10$Bt3fdPbsAzT0rqQpAdHp7uKba3dtkoc4rxWkuZ8QLhc/8ni2oHQla', '31', 'female', 1, 3, '', NULL, '2025-03-24 05:43:35', '2025-03-24 05:43:35', NULL, NULL),
(13, 'Rishabh', 'info@nutrillion.one', '9557439399', '$2b$10$NAoWu.u7JouPkKY7bEtYDOq5ydu45CCWpmLjrIJyGSl6mkQX7VDZu', '', '', 1, 2, '', 1, '2025-03-24 08:47:12', '2025-03-24 08:47:12', NULL, NULL),
(14, 'Brenna Sawyer', 'tifal@mailinator.com', '1227474143', '$2b$10$7WFB/.Yy4jT78GR0gPxOoudhD14fGdLTIljAYvJG.Myz5gFCnEz4G', '28', 'male', 1, 3, '', NULL, '2025-03-25 05:15:20', '2025-03-25 05:15:20', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activitylogins`
--
ALTER TABLE `activitylogins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `agents`
--
ALTER TABLE `agents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointmentpaymentdetails`
--
ALTER TABLE `appointmentpaymentdetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointmentstatuses`
--
ALTER TABLE `appointmentstatuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attributes`
--
ALTER TABLE `attributes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attributevalues`
--
ALTER TABLE `attributevalues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `certifications`
--
ALTER TABLE `certifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `collections`
--
ALTER TABLE `collections`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD UNIQUE KEY `slug_2` (`slug`),
  ADD UNIQUE KEY `slug_3` (`slug`),
  ADD UNIQUE KEY `slug_4` (`slug`),
  ADD UNIQUE KEY `slug_5` (`slug`),
  ADD UNIQUE KEY `slug_6` (`slug`),
  ADD UNIQUE KEY `slug_7` (`slug`),
  ADD UNIQUE KEY `slug_8` (`slug`),
  ADD UNIQUE KEY `slug_9` (`slug`),
  ADD UNIQUE KEY `slug_10` (`slug`),
  ADD UNIQUE KEY `slug_11` (`slug`),
  ADD UNIQUE KEY `slug_12` (`slug`),
  ADD UNIQUE KEY `slug_13` (`slug`),
  ADD UNIQUE KEY `slug_14` (`slug`),
  ADD UNIQUE KEY `slug_15` (`slug`),
  ADD UNIQUE KEY `slug_16` (`slug`),
  ADD UNIQUE KEY `slug_17` (`slug`),
  ADD UNIQUE KEY `slug_18` (`slug`),
  ADD UNIQUE KEY `slug_19` (`slug`),
  ADD UNIQUE KEY `slug_20` (`slug`),
  ADD UNIQUE KEY `slug_21` (`slug`),
  ADD UNIQUE KEY `slug_22` (`slug`),
  ADD UNIQUE KEY `slug_23` (`slug`),
  ADD UNIQUE KEY `slug_24` (`slug`),
  ADD UNIQUE KEY `slug_25` (`slug`),
  ADD UNIQUE KEY `slug_26` (`slug`);

--
-- Indexes for table `day_meals`
--
ALTER TABLE `day_meals`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `day_meals_package_day_id_timing_id` (`package_day_id`,`timing_id`),
  ADD KEY `timing_id` (`timing_id`);

--
-- Indexes for table `dietpackages`
--
ALTER TABLE `dietpackages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `diet_packages`
--
ALTER TABLE `diet_packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meal_templates`
--
ALTER TABLE `meal_templates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meal_timings`
--
ALTER TABLE `meal_timings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `package_days`
--
ALTER TABLE `package_days`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `package_days_package_id_day_number` (`package_id`,`day_number`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productcategories`
--
ALTER TABLE `productcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productfilters`
--
ALTER TABLE `productfilters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productimages`
--
ALTER TABLE `productimages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD UNIQUE KEY `sku` (`sku`),
  ADD UNIQUE KEY `slug_2` (`slug`),
  ADD UNIQUE KEY `sku_2` (`sku`),
  ADD UNIQUE KEY `slug_3` (`slug`),
  ADD UNIQUE KEY `sku_3` (`sku`),
  ADD UNIQUE KEY `slug_4` (`slug`),
  ADD UNIQUE KEY `sku_4` (`sku`);

--
-- Indexes for table `productvariants`
--
ALTER TABLE `productvariants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `referrals`
--
ALTER TABLE `referrals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `serviceprograms`
--
ALTER TABLE `serviceprograms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tempusers`
--
ALTER TABLE `tempusers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activitylogins`
--
ALTER TABLE `activitylogins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `agents`
--
ALTER TABLE `agents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `appointmentpaymentdetails`
--
ALTER TABLE `appointmentpaymentdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `appointmentstatuses`
--
ALTER TABLE `appointmentstatuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `attributes`
--
ALTER TABLE `attributes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `attributevalues`
--
ALTER TABLE `attributevalues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `certifications`
--
ALTER TABLE `certifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `collections`
--
ALTER TABLE `collections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `day_meals`
--
ALTER TABLE `day_meals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `dietpackages`
--
ALTER TABLE `dietpackages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `diet_packages`
--
ALTER TABLE `diet_packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `meal_templates`
--
ALTER TABLE `meal_templates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `meal_timings`
--
ALTER TABLE `meal_timings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `package_days`
--
ALTER TABLE `package_days`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `productcategories`
--
ALTER TABLE `productcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productfilters`
--
ALTER TABLE `productfilters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productimages`
--
ALTER TABLE `productimages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productvariants`
--
ALTER TABLE `productvariants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `referrals`
--
ALTER TABLE `referrals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `serviceprograms`
--
ALTER TABLE `serviceprograms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tempusers`
--
ALTER TABLE `tempusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activitylogins`
--
ALTER TABLE `activitylogins`
  ADD CONSTRAINT `ActivityLogins_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `day_meals`
--
ALTER TABLE `day_meals`
  ADD CONSTRAINT `day_meals_ibfk_1` FOREIGN KEY (`package_day_id`) REFERENCES `package_days` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `day_meals_ibfk_2` FOREIGN KEY (`timing_id`) REFERENCES `meal_timings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `package_days`
--
ALTER TABLE `package_days`
  ADD CONSTRAINT `package_days_ibfk_1` FOREIGN KEY (`package_id`) REFERENCES `dietpackages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
