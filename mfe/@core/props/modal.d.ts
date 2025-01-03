/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  body: any;
  sizeModal?: any;
  hasFooter: boolean;
  footer?: any;
  center?: boolean;
  type?: string;
  onSubmitAction?: (value?: any) => void | any;
  onCloseAction: (value?: any) => any | undefined;
}
