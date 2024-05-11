import React, { useState } from "react";
import EntryForm from "./EntryForm";
import EntryList from "./EntryList";

const Dashboard = () => {
  const [form, setForm] = useState(false);
  const [entry, setEntry] = useState(null);
  const [refresh, setRefresh] = useState(false);

  if (form)
    return (
      <EntryForm
        close={() => {
          setForm(false);
        }}
        refreshEntries={() => {
          setRefresh((prev) => prev + 1);
          setForm(false);
        }}
        entry={entry}
      />
    );
  return (
    <EntryList
      refresh={refresh}
      ShowForm={(item) => {
        setEntry(item);
        setForm(true);
      }}
    />
  );
};

export default Dashboard;
