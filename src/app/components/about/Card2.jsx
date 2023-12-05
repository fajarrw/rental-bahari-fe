"use client";

import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import Image from "next/image";

export default function Card2() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <div className="p-6 pt-0">
        <Button
          className="select-none rounded-lg bg-dark-green-2 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-dark-green-2 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
          onPress={onOpen}
        >
          Read More
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        backdrop="opaque"
        classNames={{
          backdrop:
            "bg-black bg-opacity-25 backdrop-blur-sm insert-0 flex justify-center items-center",
        }}
      >
        <ModalContent className="relative z-50">
          {(onClose) => (
            <ModalHeader className="fixed inset-0 z-50 w-screen overflow-y-scroll">
              <ModalBody className="flex h-fit my-auto justify-center p-4 text-center items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-main-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                  <div className="bg-main-white flex items-center">
                    <div className="">
                      <Image
                        className="w-full md:h-56 h-32"
                        src={"/assets/user-login-bg2.png"}
                        width={500}
                        height={500}
                        alt=""
                      />

                      <div className="py-4">
                        <div className="mx-6 font-bold text-xl mb-4 px-0">
                          Easy Booking, Outstanding Vehicles
                        </div>

                        <div className="h-48 px-6 overflow-y-scroll ">
                          <p className="block mb-8 text-base md:text-lg antialiased font-normal leading-relaxed text-black">
                            Menghadirkan pengalaman pemesanan yang mudah dan
                            kendaraan yang luar biasa adalah komitmen utama kami
                            dalam memberikan layanan rental mobil. Proses
                            pemesanan yang sederhana dan efisien adalah pintu
                            gerbang menuju petualangan tanpa kerumitan. Dengan
                            platform online yang ramah pengguna, pelanggan dapat
                            dengan cepat dan mudah memilih kendaraan yang sesuai
                            dengan kebutuhan mereka, mengatur tanggal dan lokasi
                            pengambilan, serta menyelesaikan pembayaran dengan
                            transparan. Kami percaya bahwa kesederhanaan adalah
                            kunci untuk memberikan pengalaman pemesanan yang
                            memuaskan, membebaskan pelanggan dari kerumitan
                            administratif sehingga mereka dapat fokus sepenuhnya
                            pada perjalanan yang menunggu di depan.
                          </p>

                          <p className="block mb-2 text-base md:text-lg antialiased font-normal leading-relaxed text-black">
                            Kendaraan-kendaraan unggulan kami menjadi
                            perpanjangan dari komitmen kami terhadap kenyamanan
                            dan kualitas. Dengan koleksi mobil yang terawat
                            dengan baik dan memiliki performa prima, kami
                            meyakinkan pelanggan bahwa setiap perjalanan mereka
                            akan menjadi pengalaman mengemudi yang istimewa.
                            Dari kendaraan berukuran kecil yang cocok untuk
                            perjalanan solo hingga SUV mewah untuk perjalanan
                            keluarga, kami menawarkan pilihan kendaraan yang
                            memenuhi berbagai kebutuhan. Kombinasi antara
                            kemudahan pemesanan dan keunggulan kendaraan
                            menjadikan kami pilihan utama bagi mereka yang
                            menginginkan perjalanan tanpa kesulitan dengan
                            kendaraan yang luar biasa.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ModalFooter className="bg-main-white px-4 py-2 sm:flex sm:flex-row sm:px-6">
                    <Button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 w-auto"
                      onPress={onClose}
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </div>
              </ModalBody>
            </ModalHeader>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
