import { twMerge } from "tailwind-merge";

export const InputField = ({
  label,
  placeholder,
  type,
  onChange,
  className,
  value,
  name,
}) => {
  return (
    <div className=" flex flex-col gap-1">
      <label className=" font-semibold">{label}</label>
      <input
        required
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className={twMerge(
          `p-3 h-12 shadow-md  w-full md:w-40 lg:w-60 rounded-md  focus:outline-none `,
          className
        )}
      />
    </div>
  );
};
