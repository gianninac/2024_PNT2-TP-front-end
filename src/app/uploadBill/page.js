// uploadBill/page.js
"use client"; // Obligatorio para componentes que manejan eventos del cliente

import UploadBillForm from "./UploadBillForm"; // Importar el componente UploadBillForm

export default function UploadBill() {
  return (
    <div>
      <UploadBillForm /> {/* Usar el componente UploadBillForm */}
    </div>
  );
}
