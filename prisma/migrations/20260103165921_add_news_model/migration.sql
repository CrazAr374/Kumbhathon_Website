-- CreateTable
CREATE TABLE "volunteers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "availableFrom" TEXT NOT NULL,
    "availableTo" TEXT NOT NULL,
    "preferredShift" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "preferredRole" TEXT NOT NULL,
    "languagesKnown" TEXT NOT NULL,
    "isLocalResident" BOOLEAN NOT NULL,
    "area" TEXT,
    "emergencyContactName" TEXT,
    "emergencyContactNumber" TEXT,
    "medicalCondition" TEXT,
    "consentGiven" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "news" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "urgency" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "volunteers_email_key" ON "volunteers"("email");
