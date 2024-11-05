-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema iceyinventory
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema iceyinventory
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `iceyinventory` DEFAULT CHARACTER SET utf8 ;
USE `iceyinventory` ;

-- -----------------------------------------------------
-- Table `iceyinventory`.`inv_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iceyinventory`.`inv_category` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `iceyinventory`.`flavor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iceyinventory`.`flavor` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `costPerBatch` DECIMAL(10,0) NOT NULL,
  `making` TINYINT(1) NOT NULL DEFAULT '0',
  `inUse` TINYINT(1) NOT NULL DEFAULT '0',
  `category_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_flavor_inv_category_idx` (`category_id` ASC),
  CONSTRAINT `fk_flavor_inv_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `iceyinventory`.`inv_category` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 40
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `iceyinventory`.`flavor_batch`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `iceyinventory`.`flavor_batch` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `dateMade` DATE NOT NULL,
  `type` ENUM('Full', 'Half') NOT NULL,
  `flavor_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_flavor_batch_flavor1_idx` (`flavor_id` ASC),
  CONSTRAINT `fk_flavor_batch_flavor1`
    FOREIGN KEY (`flavor_id`)
    REFERENCES `iceyinventory`.`flavor` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 119
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
