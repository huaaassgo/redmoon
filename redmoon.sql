-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2019-04-07 12:53:53
-- 服务器版本： 10.1.37-MariaDB
-- PHP 版本： 5.6.39

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `redmoon`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE `admin` (
  `aid` int(11) NOT NULL,
  `aname` varchar(50) DEFAULT NULL,
  `apwd` varchar(20) DEFAULT NULL,
  `aphone` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`aid`, `aname`, `apwd`, `aphone`) VALUES
(1, 'lzz', '123', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `rm_product`
--

CREATE TABLE `rm_product` (
  `pid` int(10) NOT NULL,
  `pname` varchar(50) DEFAULT NULL,
  `price` int(16) DEFAULT NULL,
  `ptxt` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `rm_user`
--

CREATE TABLE `rm_user` (
  `uid` int(10) NOT NULL,
  `uname` varchar(12) DEFAULT NULL,
  `upwd` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `rm_user`
--

INSERT INTO `rm_user` (`uid`, `uname`, `upwd`, `email`, `phone`, `gender`) VALUES
(1, 'lzz', '123', '243988317@qq.com', '13511399362', 1),
(2, 'zxj', '123', '111@qq.com', '13511333872', NULL);

--
-- 转储表的索引
--

--
-- 表的索引 `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`aid`);

--
-- 表的索引 `rm_product`
--
ALTER TABLE `rm_product`
  ADD PRIMARY KEY (`pid`);

--
-- 表的索引 `rm_user`
--
ALTER TABLE `rm_user`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin`
--
ALTER TABLE `admin`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `rm_product`
--
ALTER TABLE `rm_product`
  MODIFY `pid` int(10) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `rm_user`
--
ALTER TABLE `rm_user`
  MODIFY `uid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
