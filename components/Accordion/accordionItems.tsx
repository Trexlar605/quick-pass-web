"use client";

import React from "react";

import { Collapse } from "react-collapse";

import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-[10px]">
      <div
        className="flex items-center justify-between bg-beige py-8 px-8 pt-[10px] text-black"
        onClick={toggle}
      >
        <p className=" text-base font-semibold">{title}</p>
        <div className=" text-[30px]">
          {open ? <GoTriangleUp /> : <GoTriangleDown />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-white px-12 py-7 pb-10">{desc} </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
