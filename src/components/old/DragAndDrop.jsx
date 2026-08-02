import { useState } from "react";

function DragAndDrop() {

  const [columns, setColumns] = useState({
    column1: ["Item 1", "Item 2"],
    column2: ["Item 3", "Item 4", "Item 5"],
    column3: ["Item 6", "Item 7", "Item 8", "Item 9"],
    column4: ["Item 10", "Item 11", "Item 12"],
  });

  function handleDragStart(event, item, fromColumn) {
    event.dataTransfer.setData("item", item);
    event.dataTransfer.setData("fromColumn", fromColumn);
    event.dataTransfer.effectAllowed = "move";

  }

  function handleDrop(event, toColumn) {
    const item = event.dataTransfer.getData("item");
    const fromColumn = event.dataTransfer.getData("fromColumn");

    if (toColumn === fromColumn) {
      return;
    }

    setColumns(prev => {
      const fromData = prev[fromColumn].filter(older => older !== item);
      const toData = [...prev[toColumn], item];

      return {
        ...prev,
        [fromColumn]: fromData,
        [toColumn]: toData
      }
    });
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  return (
    <>
      <main className="min-h-dvh flex justify-center items-center gap-2 text-text-high bg-background-low">
        {
          Object.keys(columns).map(column => {
            return (
              <div
                key={column}
                onDrop={e => handleDrop(e, column)}
                onDragOver={handleDragOver}
                className="h-125 p-4 flex flex-col justify-start gap-4 bg-background-high/50 border border-text-high/40 rounded-xl">
                {
                  columns[column].map(item => {
                    return (
                      <div
                        key={item}
                        draggable
                        onDragStart={e => handleDragStart(e, item, column)}
                        className="max-w-50 px-3 py-4 bg-background-high border border-text-low/70 rounded-lg">
                        <h2 className="text-xl font-semibold">{item}</h2>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </main>
    </>
  );
}

export default DragAndDrop;