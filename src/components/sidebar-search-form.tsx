"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

const SidebarSearchForm = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (val: string) => {
    setSearchInput(val);
  };

  const form = useForm<z.infer>({
    defaultValues: {
      todo: "",
    },
  });

  const onSubmit = (values: z.infer) => {
    if (searchInput) alert("Form submitted");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name={"todo"}
          render={({ field }) => (
            <FormItem className={"border rounded-[var(--radius)]"}>
              <div
                className={"border-none flex items-center justify-between px-2"}
              >
                <FormControl>
                  <Input
                    id={"searchInput"}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    value={searchInput}
                    placeholder={"Search"}
                    className={"outline-none border-none p-0 mr-9"}
                  />
                </FormControl>
                <div className={"flex items-center relative"}>
                  {!!searchInput.length && (
                    <button
                      className={"absolute right-7"}
                      type={"button"}
                      onClick={() => setSearchInput("")}
                    >
                      <X size={20} strokeWidth={1.75} />
                    </button>
                  )}
                  <button type={"submit"}>
                    <Search size={20} strokeWidth={1.75} />
                  </button>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SidebarSearchForm;
