-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "kodeAnggota" TEXT NOT NULL,
    "namaAnggota" TEXT NOT NULL,
    "tglRegistrasi" TIMESTAMP(3) NOT NULL,
    "alamat" TEXT NOT NULL,
    "telepon" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);
