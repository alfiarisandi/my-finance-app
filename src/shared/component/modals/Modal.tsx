"use client";
import InsertIncomeForm from "@/feature/mutations/insertIncome/Index";
import InsertOutcomeForm from "@/feature/mutations/insertOutcome";
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

type props = {
  openModals: number;
  handler: () => void;
};

export default function ModalComponent({ openModals, handler }: props) {
  return (
    <>
      <Dialog
        size="md"
        open={openModals === 0 ? false : true}
        handler={handler}
        className="relative"
      >
        <DialogBody>
          <div className="flex flex-col items-center">
            {openModals === 1 ? (
              <InsertIncomeForm modalHandler={handler} />
            ) : openModals === 2 ? (
              <InsertOutcomeForm modalHandler={handler} />
            ) : (
              <></>
            )}
            <Button
              onClick={handler}
              variant="outlined"
              color="red"
              className="w-full py-2"
            >
              <Typography variant="small" className="capitalize font-semibold">
                Cancel
              </Typography>
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
