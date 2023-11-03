import { useState } from "preact/hooks";

export interface Props {
  /**
   * @title Discount value.
   */
  discount: string;
  /**
   * @title Sub text in popup.
   */
  subText: string;
}

export default function CouponPopup({ discount, subText }: Props) {
  const [show, setShow] = useState(true);

  function closeModal() {
    setShow(false);
  }

  return <div>
      {show && <div
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        id="popup-black-friday"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
              <div class="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 bg-green-400 flex justify-center items-center">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h1
                      class="font-semibold text-gray-900 text-5xl break-words w-52 h-fit leading-10 text-center"
                      id="modal-title"
                    >
                      BLACK FRIDAY
                    </h1>
                  </div>
                </div>
              </div>
              <div class="flex flex-col p-4">
                <span class="text-center">
                  <span class="text-sm">descontos de até </span>
                  <span class="font-bold text-2xl">{discount}%</span>
                </span>
                <span class="text-xs text-gray-400 text-center">
                  *{subText}*
                </span>
              </div>
              <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 flex justify-center items-center">
                <button
                  type="button"
                  class="text-xs mt-3 inline-flex w-full justify-center rounded-md bg-green-400 px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-400 sm:mt-0 sm:w-auto"
                  onClick={closeModal}
                >
                  COMPRE AGORA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>}
  </div>
}
