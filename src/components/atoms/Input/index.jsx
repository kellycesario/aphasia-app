import { Label } from "@radix-ui/react-label";

export default function Input({ id, classLabelName, label, classInputName, type, placeholder }) {
  return (
    <>
      <Label htmlFor={id} className={classLabelName}> {label} </Label>
      <input id={id} className={classInputName} type={type} placeholder={placeholder} />
    </>
  );
}
