Project: Draggable File Cards UI
Overview:
This project is a modern UI component that displays file cards with draggable functionality. Each card represents a file with details like description, file size, close/download actions, and tags. The project utilizes React.js with Tailwind CSS for styling and Framer Motion for drag-and-drop functionality.

Features:
✅ Draggable Cards – Users can move file cards around the screen.
✅ File Details – Each card displays a file's description and size.
✅ Dynamic Icons – Close button (IoCloseCircle) or Download button (MdOutlineFileDownload) appears based on file status.
✅ Tag Labels – Tags (e.g., "Download Now", "Upload") are dynamically colored (blue or green).
✅ Reusable Components – The Card component is modular, making it easy to use with different data.

Tech Stack:
React.js – Core framework for building UI components.
Tailwind CSS – Provides a sleek and responsive design.
Framer Motion – Enables smooth drag-and-drop interaction.
React Icons – Adds visually appealing icons.
How It Works:
Foreground Component

Holds the list of file data.
Uses useRef to allow dragging constraints for the cards.
Maps through data and passes it to the Card component.
Card Component

Displays file details like description, size, and action buttons.
Uses Framer Motion to make each card draggable.
Applies dynamic background color for tags.
Use Cases:
✔ File Management UI – Drag-and-drop functionality for organizing files.
✔ Dashboard Widgets – Display quick file details in an interactive way.
✔ Task Cards – Adaptable for Kanban boards, project management tools, etc.








