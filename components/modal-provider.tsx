"use client";
import React, { useEffect, useState } from "react";
import { CreateServerModal } from "./modals/create-server-modal";
import { EditServerModal } from "./modals/edit-server-modal";
import { InviteModal } from "./modals/invite-modal";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CreateServerModal />;
      <InviteModal />
      <EditServerModal />
    </>
  );
}

export default ModalProvider;