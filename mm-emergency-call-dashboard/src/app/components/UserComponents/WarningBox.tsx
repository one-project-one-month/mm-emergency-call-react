"use client";

import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CancelButton from "../CustomizedButtons/CancelButton";
import ConfirmButton from "../CustomizedButtons/ConfirmButton";

interface Props {
  showWarningBox: boolean;
  setShowWarningBox: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: () => void;
  title: string;
  description: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function WarningBox({
  showWarningBox,
  setShowWarningBox,
  onConfirm,
  title,
  description,
}: Props) {
  const handleClose = () => {
    setShowWarningBox(false);
  };

  const handleConfirm = () => {
    onConfirm();
    setShowWarningBox(false);
  };

  return (
    <Dialog
      open={showWarningBox}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <CancelButton onClick={handleClose} />
        <ConfirmButton onClick={handleConfirm} />
      </DialogActions>
    </Dialog>
  );
}
