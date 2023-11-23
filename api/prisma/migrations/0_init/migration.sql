-- CreateEnum
CREATE TYPE "Salutation" AS ENUM ('Mr', 'Mrs', 'Ms', 'Dr');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('Married', 'UnMarried', 'Divorced', 'Widow', 'Widower');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'Transgender');

-- CreateTable
CREATE TABLE "person" (
    "firstName" VARCHAR(200) NOT NULL,
    "lastName" VARCHAR(200) NOT NULL,
    "middleName" VARCHAR(300) NOT NULL,
    "salutation" "Salutation" NOT NULL,
    "dateOfBirth" DATE NOT NULL,
    "maritalStatus" "MaritalStatus" NOT NULL,
    "gender" "Gender" NOT NULL,
    "person_id" VARCHAR(100) NOT NULL,

    CONSTRAINT "person_pkey" PRIMARY KEY ("person_id")
);

