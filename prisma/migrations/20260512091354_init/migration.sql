-- CreateTable
CREATE TABLE "SeafoodSubmission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "companyName" TEXT NOT NULL,
    "businessField" TEXT NOT NULL,
    "mainProducts" TEXT,
    "currentMarkets" TEXT,
    "website" TEXT,
    "contactName" TEXT NOT NULL,
    "position" TEXT,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "goals" TEXT,
    "exportReadiness" TEXT,
    "interestedPackage" TEXT,
    "expectedTiming" TEXT,
    "expectations" TEXT,
    "language" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "RoadshowSubmission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyType" TEXT NOT NULL,
    "employees" TEXT NOT NULL,
    "website" TEXT,
    "taxId" TEXT,
    "interests" TEXT,
    "participationType" TEXT NOT NULL,
    "specialRequests" TEXT,
    "agreeTerms" BOOLEAN NOT NULL,
    "agreeMarketing" BOOLEAN NOT NULL,
    "language" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ContactSubmission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "language" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
