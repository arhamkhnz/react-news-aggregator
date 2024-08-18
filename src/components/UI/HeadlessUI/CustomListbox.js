import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"
import React from "react"

export default function CustomListbox({
  options = [],
  selectedOption,
  onChange,
  labelKey = "label",
  valueKey = "value",
}) {
  return (
    <Listbox value={selectedOption} onChange={onChange}>
      <ListboxButton
        className={clsx(
          "relative block h-10 w-full rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-8 text-left text-sm/6 md:rounded-none md:border-r-0",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
        )}
      >
        {options.find((option) => option[valueKey] === selectedOption)?.[labelKey]}
        <ChevronDownIcon
          className="group pointer-events-none absolute right-2.5 top-2.5 size-4 fill-black"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "z-30 mt-0.5 w-[var(--button-width)] rounded-xl border border-gray-300 bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
        )}
      >
        {options.map((option) => (
          <ListboxOption
            key={option[valueKey]}
            value={option[valueKey]}
            className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-black/10"
          >
            <CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
            <div className="text-sm/6 ">{option[labelKey]}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
