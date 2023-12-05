'use client'

import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

import Image from "next/image";

export default function Card1() {
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
          backdrop: "bg-black bg-opacity-25 backdrop-blur-sm insert-0 flex justify-center items-center"
      }}>

        <ModalContent className="relative z-50">
        {(onClose) => (
          <ModalHeader className="fixed inset-0 z-50 w-screen overflow-y-scroll">
          
            <ModalBody className="flex h-fit my-auto items-end justify-center p-4 text-center items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
          
                <div className="bg-main-white flex items-center">

                    <div className="">
                      <Image 
                      className="w-full md:h-56 h-32" 
                      src={'/assets/reg-bg.png'}
                      width={500}
                      height={500} 
                      alt=""  
                      />
                                      
                      <div className="py-4">
                        <div className="mx-6 font-bold text-xl mb-4 px-0">
                          Trusted For Years
                        </div>

                        <div className="h-48 px-6 overflow-y-scroll ">
                          <p className="block mb-8 text-base md:text-lg font-normal leading-relaxed text-black">
                          Kepercayaan adalah pijakan utama kami di dunia layanan rental mobil. Kami memahami bahwa mempercayakan 
                          kendaraan Anda kepada kami merupakan tanggung jawab besar, dan itulah mengapa kami mengutamakan integritas 
                          dan keandalan dalam setiap aspek layanan kami. Pelanggan kami tidak hanya menyewa mobil, tetapi mereka juga 
                          mempercayakan pengalaman perjalanan mereka kepada kami, dan itulah yang menjadi fokus utama kami.
                          </p>

                          <p className="block mb-2 text-base md:text-lg font-normal leading-relaxed text-black">
                          Dalam menciptakan rasa percaya, kami mengambil langkah-langkah konkret untuk memastikan keamanan dan 
                          kenyamanan pelanggan. Flotak mobil kami secara berkala menjalani pemeriksaan menyeluruh, memastikan bahwa 
                          setiap kendaraan dalam kondisi optimal sebelum diserahkan kepada pelanggan. Kami juga mengusung prinsip 
                          transparansi penuh dalam hal harga dan ketentuan layanan, sehingga pelanggan tidak hanya mendapatkan 
                          kendaraan yang andal, tetapi juga pemahaman yang jelas tentang apa yang mereka bayar. Dengan reputasi yang 
                          terjaga dan dukungan pelanggan 24/7, kami bertekad membangun hubungan yang kokoh dengan pelanggan kami, 
                          menjadikan kepercayaan sebagai dasar utama dalam setiap perjalanan yang mereka tempuh bersama kami.
                          </p>
                        </div>
                      </div>
                    </div>

                </div>

                <ModalFooter className="bg-main-white px-4 py-2 sm:flex sm:flex-row sm:px-6">
                  <Button type="button" className="inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 w-auto" onPress={onClose}>
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

