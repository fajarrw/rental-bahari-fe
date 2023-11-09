import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

import Image from "next/image";

export default function Card2() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Next</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} backdrop="opaque" 
        classNames={{
          backdrop: "bg-black bg-opacity-25 backdrop-blur-sm insert-0 flex justify-center items-center"
        }}>
      <ModalContent className="relative z-100">
                {(onClose) => (
                <ModalHeader className="fixed inset-0 z-50 w-screen overflow-y-scroll">
        
                    <ModalBody className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
                        <div className=" relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
        
                            <div className="bg-white">
                                <div className="sm:flex sm:items-start">

                                    <div className="">
                                    <Image 
                                    className="w-full md:h-64 h-32" 
                                    src={'/assets/user-login-bg2.png'}
                                    width={500}
                                    height={500} 
                                    alt=""  />
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                                        <p className="text-gray-700 text-base"> 
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nullam pulvinar risus non risus hendrerit venenatis.
                                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nullam pulvinar risus non risus hendrerit venenatis.
                                                Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                            </p>
                                    </div>
                                    </div>

                                </div>
                            </div>

                            <ModalFooter className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6">
                                
                            <Button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onPress={onClose}>
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
