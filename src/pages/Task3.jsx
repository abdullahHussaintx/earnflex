import { useState } from "react";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { useForms } from "../hooks/useForms";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../redux/task3Slice";

export const Task3 = () => {
  const { modalOpen } = useForms();
  const dispatch = useDispatch();

  return (
    <section className=" space-y-5">
      <div
        style={{ height: "calc(100dvh - 270px)" }}
        className=" flex justify-center items-center"
      >
        <Button
          title="Add new Employee"
          onClick={() => dispatch(openModal())}
        />
      </div>
      {modalOpen && <Modal onClose={() => dispatch(closeModal())} />}
    </section>
  );
};
