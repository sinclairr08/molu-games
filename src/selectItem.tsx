import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface ISelectItem {
  index: number;
  register: UseFormRegister<any>;
  answerItem: string;
  isCurrentClicked: boolean;
}

export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

export default function SelectItem(data: ISelectItem) {
  const { index, register, answerItem, isCurrentClicked } = data;

  return (
    <div
      className={cls(
        "",
        isCurrentClicked ? "text-red-500" : "text-neutral-800"
      )}
    >
      <label>
        {index + 1}
        <input
          type="radio"
          className="sr-only"
          value={index + 1}
          {...register("answerIndex")}
        />
        {answerItem}
      </label>
    </div>
  );
}
