import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { BiChevronRightCircle } from "react-icons/bi";

export default function Sign() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
        <Button className="flex items-center justify-between w-full px-4 py-2 text-left text-sm text-red-500" onPress={onOpen}>

            Sign Out

            <BiChevronRightCircle className='text-[#045757] text-[15px]'/>

        </Button>

        <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-black bg-opacity-25 backdrop-blur-sm insert-0 flex justify-center items-center"
        }}
        >
            <ModalContent className="relative z-100 ">
                {(onClose) => (
                <ModalHeader className="fixed inset-0 z-50 w-screen overflow-y-auto">
        
                    <ModalBody className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
                        <div className=" relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        
                            <div className="  bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">

                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>

                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <p className="text-base font-semibold leading-6 text-gray-900">
                                            Sign out from account 
                                        </p>

                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to sign out from your account?
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <ModalFooter className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6">
                                
                                <Button type="button" className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  sm:w-auto" onPress={onClose}>
                                    Cancel
                                </Button>

                                <Button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onPress={onClose}>
                                    <a className="text-white" href="/before_login">
                                        Sign Out
                                    </a>
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



