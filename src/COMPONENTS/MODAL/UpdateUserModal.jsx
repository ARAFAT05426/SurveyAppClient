import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import { Dialog, Listbox, Transition, TransitionChild, DialogTitle, DialogPanel, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import PrimaryBtn from '../COMMON/BUTTONS/PrimaryBtn';
import { RiCloseCircleLine } from 'react-icons/ri';

const roles = ['user', 'prouser', 'surveyor', 'admin'];

const UpdateUserModal = ({ setIsOpen, isOpen, modalHandler, user }) => {
  const [selected, setSelected] = useState(user?.role);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-50 overflow-y-auto'
        onClose={() => setIsOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-50' />
        </TransitionChild>

        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <DialogPanel className='fixed inset-0 flex items-center justify-center z-50 overflow-y-auto'>
            <div className='bg-white w-full max-w-md p-6 rounded-lg shadow-xl'>
              <div className='flex justify-end'>
              <RiCloseCircleLine className='cursor-pointer' onClick={() =>setIsOpen(false)} size={35} />
              </div>
              <DialogTitle className='text-lg font-medium text-center leading-6 text-gray-900'>
                Update User Role
              </DialogTitle>
              <div className='mt-4'>
                <Listbox value={selected} onChange={setSelected}>
                  <div className='relative'>
                    <ListboxButton className='relative w-full py-2 pl-3 pr-10 text-left rounded-lg shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                      <span className='block truncate'>{selected}</span>
                      <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                        <AiOutlineDown className='h-5 w-5 text-gray-400' aria-hidden='true' />
                      </span>
                    </ListboxButton>
                    <ListboxOptions className='absolute z-50 mt-1 w-full py-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                      {roles.map((role) => (
                        <ListboxOption
                          key={role}
                          value={role}
                          className={({ selected }) =>
                            `${selected ? 'bg-primary text-black font-semibold' : 'text-gray-900'}
                            cursor-default select-none relative py-2 pl-3 pr-9`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span className={`${selected ? 'font-semibold' : 'font-normal'} block truncate cursor-pointer`}>
                                {role}
                              </span>
                              {selected ? (
                                <span
                                  className={`${selected ? 'font-bold' : 'font-semibold'}
                                  absolute inset-y-0 right-0 flex items-center pr-4`}
                                >
                                  <BsCheckLg className='h-5 w-5' aria-hidden='true' />
                                </span>
                              ) : null}
                            </>
                          )}
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox>
              </div>
              <div className='flex justify-center mt-4 wf'>
                <PrimaryBtn text='Update' onClick={() => modalHandler(selected)} />
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};

UpdateUserModal.propTypes = {
  user: PropTypes.object,
  modalHandler: PropTypes.func,
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default UpdateUserModal;
