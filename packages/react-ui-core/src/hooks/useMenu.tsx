import { MouseEvent, useState } from 'react';

export interface UseMenuProps {
  anchorEl: HTMLElement | null;
  handleMenu: (event: MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  isOpen: boolean;
}

/**
 * Hook to handle MUI menu / popover state
 */
export function useMenu(): UseMenuProps {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    handleMenu,
    handleClose,
    isOpen: Boolean(anchorEl),
  };
}
