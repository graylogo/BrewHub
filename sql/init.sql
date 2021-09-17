-- MySQL dump 10.13  Distrib 8.0.26, for macos11.3 (x86_64)
--
-- Host: 127.0.0.1    Database: brew_hub
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avatar`
--

DROP TABLE IF EXISTS `avatar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avatar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) NOT NULL,
  `mimetype` varchar(30) DEFAULT NULL,
  `destination` varchar(30) DEFAULT NULL,
  `originalname` varchar(60) DEFAULT NULL,
  `size` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `path` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `filename` (`filename`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avatar`
--

LOCK TABLES `avatar` WRITE;
/*!40000 ALTER TABLE `avatar` DISABLE KEYS */;
INSERT INTO `avatar` VALUES (16,'Coco-c2cf86d7-5792-4376-bc2f-06a0670fdea9.png','image/png','./uploads/avatar','Coco.png',11701,4,'2021-09-17 11:32:01','2021-09-17 11:32:01','uploads/avatar/Coco-c2cf86d7-5792-4376-bc2f-06a0670fdea9.png'),(17,'Coco-0264ce3e-ce84-4942-8a28-005e7ce4382e.png','image/png','./uploads/avatar','Coco.png',11701,4,'2021-09-17 11:32:02','2021-09-17 11:32:02','uploads/avatar/Coco-0264ce3e-ce84-4942-8a28-005e7ce4382e.png'),(18,'f981c3dc-9f9b-4295-bd0b-b4a0dc56f75f.png','image/png','./uploads/avatar','logo.png',218253,4,'2021-09-17 11:36:05','2021-09-17 11:36:05','uploads/avatar/f981c3dc-9f9b-4295-bd0b-b4a0dc56f75f.png'),(19,'296a148f-3024-4f45-ab43-1832aaff1a54.jpg','image/jpeg','./uploads/avatar','Mac�).jpg',2443425,4,'2021-09-17 11:36:24','2021-09-17 11:36:24','uploads/avatar/296a148f-3024-4f45-ab43-1832aaff1a54.jpg');
/*!40000 ALTER TABLE `avatar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) NOT NULL,
  `moment_id` int NOT NULL,
  `user_id` int NOT NULL,
  `comment_id` int DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `moment_id` (`moment_id`),
  KEY `user_id` (`user_id`),
  KEY `comment_id` (`comment_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (2,'修改评论的内容',1,28,NULL,'2021-09-16 07:48:52','2021-09-16 08:10:32'),(3,'第一条评论的内容',1,28,NULL,'2021-09-16 07:51:07','2021-09-16 07:51:07'),(4,'对评论进行评论',1,28,2,'2021-09-16 07:57:02','2021-09-16 07:57:02'),(5,'修改评论的内容',1,30,NULL,'2021-09-16 08:12:33','2021-09-16 08:12:51'),(8,'对评论进行评论',1,30,2,'2021-09-16 08:32:20','2021-09-16 08:32:20'),(11,'第一条评论的内容',35,3,NULL,'2021-09-16 09:11:41','2021-09-16 09:11:41'),(12,'第一条评论的内容',4,3,NULL,'2021-09-16 09:17:38','2021-09-16 09:17:38');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(100) NOT NULL,
  `mimetype` varchar(30) DEFAULT NULL,
  `size` int DEFAULT NULL,
  `moment_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `path` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `filename` (`filename`),
  KEY `user_id` (`user_id`),
  KEY `moment_id` (`moment_id`),
  CONSTRAINT `file_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `file_ibfk_2` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES (5,'6ae477ab-3e7b-4b29-b8f0-e83ff2819cd4.png','image/png',218253,1,4,'2021-09-17 13:12:22','2021-09-17 13:12:22','uploads/picture/6ae477ab-3e7b-4b29-b8f0-e83ff2819cd4.png'),(6,'b2bd1588-f6ad-4625-8a6f-4c4e1d99a1be.png','image/png',11701,1,4,'2021-09-17 13:12:22','2021-09-17 13:12:22','uploads/picture/b2bd1588-f6ad-4625-8a6f-4c4e1d99a1be.png');
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `label`
--

DROP TABLE IF EXISTS `label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `label` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `label`
--

LOCK TABLES `label` WRITE;
/*!40000 ALTER TABLE `label` DISABLE KEYS */;
INSERT INTO `label` VALUES (12,'99','2021-09-17 04:14:02','2021-09-17 04:14:02'),(13,'2','2021-09-17 04:14:02','2021-09-17 04:14:02'),(14,'9','2021-09-17 04:14:02','2021-09-17 04:14:02'),(15,'f','2021-09-17 04:14:02','2021-09-17 04:14:02'),(30,'a','2021-09-17 04:28:08','2021-09-17 04:28:08'),(33,'标签1','2021-09-17 04:34:12','2021-09-17 04:34:12'),(34,'标签2','2021-09-17 04:34:12','2021-09-17 04:34:12'),(35,'标签3','2021-09-17 04:34:12','2021-09-17 04:34:12'),(38,'b','2021-09-17 04:39:08','2021-09-17 04:39:08'),(42,'标签10','2021-09-17 04:53:44','2021-09-17 04:53:44'),(43,'单个标签','2021-09-17 04:53:58','2021-09-17 04:53:58'),(44,'标签11','2021-09-17 04:55:50','2021-09-17 04:55:50'),(45,'新标签','2021-09-17 05:03:46','2021-09-17 05:03:46'),(59,'标签标签','2021-09-17 05:42:35','2021-09-17 05:42:35'),(60,'新的标签内容','2021-09-17 05:55:53','2021-09-17 05:55:53'),(61,'新签','2021-09-17 06:12:17','2021-09-17 06:12:17');
/*!40000 ALTER TABLE `label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moment`
--

DROP TABLE IF EXISTS `moment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) NOT NULL,
  `user_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `moment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moment`
--

LOCK TABLES `moment` WRITE;
/*!40000 ALTER TABLE `moment` DISABLE KEYS */;
INSERT INTO `moment` VALUES (1,'更新的内容',4,'2020-11-23 14:05:23','2021-09-14 13:26:54'),(4,'abc',3,'2020-11-23 14:21:19','2021-09-14 13:24:11'),(6,'在世间万物中我都发现了你，渺小时，你是阳光下一粒种子，伟大时，你隐身在高山海洋里。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(8,'限定目的，能使人生变得简洁。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(9,'翅膀长在你的肩上，太在乎别人对于飞行姿势的批评，所以你飞不起来',4,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(11,'不乱于心，不困于情。不畏将来，不念过往。如此，安好。',3,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(12,'如果你给我的，和你给别人的是一样的，那我就不要了。',3,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(13,'故事的开头总是这样，适逢其会，猝不及防。故事的结局总是这样，花开两朵，天各一方。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(14,'你不愿意种花，你说，我不愿看见它一点点凋落。是的，为了避免结束，你避免了一切开始。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(15,'你如果认识从前的我，也许你会原谅现在的我。',4,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(16,'每一个不曾起舞的日子，都是对生命的辜负。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(17,'向来缘浅，奈何情深。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(18,'心之所向 素履以往 生如逆旅 一苇以航',3,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(19,'生如夏花之绚烂，死如秋叶之静美。',3,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(20,'答案很长，我准备用一生的时间来回答，你准备要听了吗？',4,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(21,'因为爱过，所以慈悲；因为懂得，所以宽容。',4,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(22,'我们听过无数的道理，却仍旧过不好这一生。',1,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(23,'我来不及认真地年轻，待明白过来时，只能选择认真地老去。',2,'2020-11-23 14:21:19','2020-11-23 14:21:19'),(35,'发布第一条动态',1,'2021-09-16 06:55:43','2021-09-16 06:55:43'),(36,'发布第一条动态',3,'2021-09-16 09:17:44','2021-09-16 09:17:44');
/*!40000 ALTER TABLE `moment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moment_label`
--

DROP TABLE IF EXISTS `moment_label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moment_label` (
  `moment_id` int NOT NULL,
  `label_id` int NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`moment_id`,`label_id`),
  KEY `label_id` (`label_id`),
  CONSTRAINT `moment_label_ibfk_1` FOREIGN KEY (`moment_id`) REFERENCES `moment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moment_label_ibfk_2` FOREIGN KEY (`label_id`) REFERENCES `label` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moment_label`
--

LOCK TABLES `moment_label` WRITE;
/*!40000 ALTER TABLE `moment_label` DISABLE KEYS */;
INSERT INTO `moment_label` VALUES (9,33,'2021-09-17 06:41:35','2021-09-17 06:41:35'),(9,59,'2021-09-17 06:41:35','2021-09-17 06:41:35'),(9,60,'2021-09-17 06:41:35','2021-09-17 06:41:35'),(22,59,'2021-09-17 06:24:52','2021-09-17 06:24:52'),(22,60,'2021-09-17 06:24:52','2021-09-17 06:24:52'),(35,33,'2021-09-17 05:55:28','2021-09-17 05:55:28');
/*!40000 ALTER TABLE `moment_label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `passwd` varchar(50) NOT NULL,
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `avatarUrl` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'w123','e10adc3949ba59abbe56e057f20f883e','2021-09-14 06:51:17','2021-09-17 11:02:15','abc'),(2,'w1234','e10adc3949ba59abbe56e057f20f883e','2021-09-14 06:51:26','2021-09-14 12:30:18',NULL),(3,'w13','e10adc3949ba59abbe56e057f20f883e','2021-09-14 06:51:52','2021-09-14 12:05:53',NULL),(4,'name','e10adc3949ba59abbe56e057f20f883e','2021-09-14 06:14:35','2021-09-17 11:31:18','http://localhost:8000/users/4/avatar'),(5,'w','e10adc3949ba59abbe56e057f20f883e','2021-09-14 06:15:13','2021-09-14 12:05:24',NULL),(27,'w132','e10adc3949ba59abbe56e057f20f883e','2021-09-14 06:57:44','2021-09-14 06:57:44',NULL),(28,'wang','e10adc3949ba59abbe56e057f20f883e','2021-09-14 07:09:39','2021-09-14 07:09:39',NULL),(29,'wangb','e10adc3949ba59abbe56e057f20f883e','2021-09-15 06:46:40','2021-09-15 06:46:40',NULL),(30,'123456','e10adc3949ba59abbe56e057f20f883e','2021-09-15 06:56:03','2021-09-15 06:56:03',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-17 21:54:06
