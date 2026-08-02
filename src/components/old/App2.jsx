import { useState } from "react";

function App2() {
  // Items are now objects with unique IDs for reliable drag-and-drop targeting
  const [columns, setColumns] = useState({
    column1: [
      { id: "c1-1", text: "Item 1" },
      { id: "c1-2", text: "Item 2" },
    ],
    column2: [
      { id: "c2-1", text: "Item 3" },
      { id: "c2-2", text: "Item 4" },
      { id: "c2-3", text: "Item 5" },
    ],
    column3: [
      { id: "c3-1", text: "Item 6" },
      { id: "c3-2", text: "Item 7" },
      { id: "c3-3", text: "Item 8" },
      { id: "c3-4", text: "Item 9" },
    ],
    column4: [
      { id: "c4-1", text: "Item 10" },
      { id: "c4-2", text: "Item 11" },
      { id: "c4-3", text: "Item 12" },
    ],
  });

  // ----- Drag Start: store the dragged item's ID and source column -----
  function handleDragStart(event, itemId, fromColumn) {
    event.dataTransfer.setData("itemId", itemId);
    event.dataTransfer.setData("fromColumn", fromColumn);
    event.dataTransfer.effectAllowed = "move";
  }

  // ----- Core move logic (handles both same-column & cross-column) -----
  function moveItem(fromColumn, toColumn, itemId, targetItemId) {
    setColumns((prev) => {
      const source = prev[fromColumn];
      const target = prev[toColumn];

      // Find the dragged item
      const draggedIndex = source.findIndex((item) => item.id === itemId);
      if (draggedIndex === -1) return prev;
      const draggedItem = source[draggedIndex];

      // --- Case 1: Reordering within the SAME column ---
      if (fromColumn === toColumn) {
        // Determine target index. If no target item, drop at the end.
        let targetIndex = -1;
        if (targetItemId) {
          targetIndex = source.findIndex((item) => item.id === targetItemId);
        }
        if (targetIndex === -1) targetIndex = source.length;

        // If dropping on itself or right next to itself, do nothing
        if (draggedIndex === targetIndex) return prev;
        if (draggedIndex + 1 === targetIndex) return prev;

        const newArr = [...source];
        newArr.splice(draggedIndex, 1); // remove from old position

        // Adjust insertion index if the target was after the dragged item
        let insertIndex = targetIndex;
        if (targetIndex > draggedIndex) {
          insertIndex = targetIndex - 1;
        }
        newArr.splice(insertIndex, 0, draggedItem);

        return { ...prev, [fromColumn]: newArr };
      }

      // --- Case 2: Moving to a DIFFERENT column ---
      // Remove from source
      const newSource = [...source];
      newSource.splice(draggedIndex, 1);

      // Insert into target
      const newTarget = [...target];
      let targetIndex = -1;
      if (targetItemId) {
        targetIndex = target.findIndex((item) => item.id === targetItemId);
      }
      // If no target item found, append to the end
      if (targetIndex === -1) targetIndex = newTarget.length;

      newTarget.splice(targetIndex, 0, draggedItem);

      return {
        ...prev,
        [fromColumn]: newSource,
        [toColumn]: newTarget,
      };
    });
  }

  // ----- Drop Handlers -----

  // Dropping on the column background → appends to the end
  function handleColumnDrop(event, toColumn) {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("itemId");
    const fromColumn = event.dataTransfer.getData("fromColumn");
    if (!itemId) return;
    moveItem(fromColumn, toColumn, itemId, null);
  }

  // Dropping onto a specific item card → inserts BEFORE that item
  function handleItemDrop(event, toColumn, targetItemId) {
    event.preventDefault();
    event.stopPropagation(); // Prevent the column's drop handler from firing
    const itemId = event.dataTransfer.getData("itemId");
    const fromColumn = event.dataTransfer.getData("fromColumn");
    if (!itemId) return;

    // Dropping onto itself: ignore
    if (fromColumn === toColumn && itemId === targetItemId) return;

    moveItem(fromColumn, toColumn, itemId, targetItemId);
  }

  // Required to allow drops
  function handleDragOver(event) {
    event.preventDefault();
  }

  return (
    <main className="min-h-dvh flex justify-center items-center gap-2 text-text-high bg-background-low">
      {Object.keys(columns).map((column) => (
        <div
          key={column}
          onDrop={(e) => handleColumnDrop(e, column)}
          onDragOver={handleDragOver}
          className="h-125 p-4 flex flex-col justify-start gap-4 bg-background-high/50 border border-text-high/40 rounded-xl min-w-48"
        >
          {columns[column].map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item.id, column)}
              onDrop={(e) => handleItemDrop(e, column, item.id)}
              onDragOver={handleDragOver}
              className="max-w-50 px-3 py-4 bg-background-high border border-text-low/70 rounded-lg cursor-grab active:cursor-grabbing"
            >
              <h2 className="text-xl font-semibold">{item.text}</h2>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}

export default App2;